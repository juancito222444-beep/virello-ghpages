"""Failures must be JSON and must never expose submitted API credentials."""
import errno
import json
import sqlite3
from pathlib import Path
import httpx
import pytest
from fastapi.testclient import TestClient
from backend import credential_store,models,store
from backend.app import app

KEY='protocol-sensitive-key-marker'

@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')


def provider(monkeypatch):
    def handler(request):
        if request.method=='GET':return httpx.Response(200,json={'models':[{'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']}]})
        return httpx.Response(200,content=b'data: {"candidates":[{"content":{"parts":[{"text":"MOCK"}]},"finishReason":"STOP"}]}\n\n')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))


@pytest.mark.parametrize('stage',['mkdir','chmod','temporary','replace'])
def test_storage_permission_errors_are_json_and_preserve_key(monkeypatch,stage):
    provider(monkeypatch)
    credential_store.save('gemini','previous-key')
    def denied(*args,**kwargs):raise PermissionError(errno.EACCES,KEY)
    if stage=='mkdir':monkeypatch.setattr(Path,'mkdir',denied)
    elif stage=='chmod':monkeypatch.setattr(Path,'chmod',denied)
    elif stage=='temporary':monkeypatch.setattr(credential_store.tempfile,'mkstemp',denied)
    else:monkeypatch.setattr(credential_store.os,'replace',denied)
    # Patch after lifespan initialized its own data directories.
    # Start the client without lifespan; init was performed explicitly here.
    # (the private key file exists independently of database initialization).
    with monkeypatch.context() as setup:
        if stage=='mkdir':setup.setattr(Path,'mkdir',lambda *args,**kwargs:None)
        store.init()
    client=TestClient(app,raise_server_exceptions=False)
    response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
    assert response.status_code==422 and 'application/json' in response.headers['content-type']
    assert 'permisos' in response.json()['detail'] and KEY not in response.text
    assert credential_store.read_all()=={'gemini':'previous-key'}
    assert not list(credential_store.path().parent.glob('.credentials-*'))


def test_disk_full_is_json_and_keeps_previous_key(monkeypatch):
    provider(monkeypatch)
    with TestClient(app,raise_server_exceptions=False) as client:
        credential_store.save('gemini','previous-key')
        def full(*args,**kwargs):raise OSError(errno.ENOSPC,KEY)
        monkeypatch.setattr(credential_store.tempfile,'mkstemp',full)
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
    assert response.status_code==422 and 'espacio' in response.json()['detail']
    assert KEY not in response.text and credential_store.read_all()=={'gemini':'previous-key'}


def test_unexpected_error_is_json_with_reference_without_key_in_logs(monkeypatch,caplog):
    async def failure(kind=None):raise RuntimeError(KEY)
    monkeypatch.setattr(models,'available',failure)
    with TestClient(app,raise_server_exceptions=False) as client:
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
    assert response.status_code==500
    data=response.json()
    assert data['error_code']=='INTERNAL_ERROR' and data['reference']==response.headers['X-Request-ID']
    assert KEY not in response.text and KEY not in caplog.text
    assert 'RuntimeError' in caplog.text and data['reference'] in caplog.text
    assert response.headers['Cache-Control']=='no-store'
    assert 'RuntimeError' in data['diagnostic'] and data['diagnostic'] in data['detail']


def test_owned_readonly_data_folder_is_repaired_for_key_save(tmp_path):
    import stat
    store.ROOT.chmod(0o500)
    try:
        credential_store.save('gemini',KEY)
        assert credential_store.read_all()=={'gemini':KEY}
        assert stat.S_IMODE(store.ROOT.stat().st_mode)&0o700==0o700
        assert stat.S_IMODE(credential_store.path().stat().st_mode)==0o600
    finally:store.ROOT.chmod(0o700)


def test_owned_key_permissions_are_repaired_before_reading():
    import stat
    credential_store.save('gemini',KEY)
    target=credential_store.path();target.chmod(0o000);target.parent.chmod(0o500)
    try:
        assert credential_store.read_all()=={'gemini':KEY}
        assert stat.S_IMODE(target.stat().st_mode)==0o600
        assert stat.S_IMODE(target.parent.stat().st_mode)==0o700
    finally:target.parent.chmod(0o700);target.chmod(0o600)


def test_storage_preflight_failure_never_calls_provider(monkeypatch):
    seen=[]
    def no_network(*args):
        seen.append(True)
        raise AssertionError('Storage failure must be detected before spending API quota')
    monkeypatch.setattr(models,'_api_client',no_network)
    def denied(*args,**kwargs):raise PermissionError(errno.EACCES,KEY)
    with TestClient(app,raise_server_exceptions=False) as client:
        monkeypatch.setattr(credential_store.tempfile,'mkstemp',denied)
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
    assert response.status_code==422 and 'permisos' in response.json()['detail']
    assert not seen and KEY not in response.text


def test_readonly_database_fails_before_api_and_keeps_previous_key(monkeypatch):
    seen=[]
    def no_network(*args):
        seen.append(True)
        raise AssertionError('Read-only database must fail before using API quota')
    original_connect=sqlite3.connect
    with TestClient(app,raise_server_exceptions=False) as client:
        credential_store.save('gemini','previous-key')
        before=client.get('/api/settings').json()
        def readonly(*args,**kwargs):
            return original_connect('file:'+str(store.ROOT/'studio.sqlite')+'?mode=ro',uri=True)
        monkeypatch.setattr(store.sqlite3,'connect',readonly)
        monkeypatch.setattr(models,'_api_client',no_network)
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
        assert response.status_code==503
        assert 'solo lectura' in response.json()['detail']
        assert response.json()['error_code']=='DATABASE_UNAVAILABLE'
        assert client.get('/api/settings').json()==before
        assert credential_store.read_all()=={'gemini':'previous-key'}
    assert not seen and KEY not in response.text


def test_failed_database_commit_restores_key_and_reports_storage_error(monkeypatch,caplog):
    import backend.app as api
    provider(monkeypatch)
    with TestClient(app,raise_server_exceptions=False) as client:
        credential_store.save('gemini','previous-key')
        before=client.get('/api/settings').json()
        def failure(*args):raise sqlite3.OperationalError(KEY)
        monkeypatch.setattr(api,'commit_connection',failure)
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
        assert response.status_code==503 and 'almacenamiento' in response.json()['detail']
        assert credential_store.read_all()=={'gemini':'previous-key'}
        assert client.get('/api/settings').json()==before
    assert KEY not in response.text and KEY not in caplog.text


def test_database_connections_close_and_rollback_on_failure():
    store.init()
    with store.db() as connection:
        assert connection.execute('SELECT count(*) FROM settings').fetchone()[0]==0
    with pytest.raises(sqlite3.ProgrammingError):connection.execute('SELECT 1')
    with pytest.raises(RuntimeError):
        with store.db() as failed:
            failed.execute('INSERT INTO settings VALUES(?,?)',('test','true'))
            raise RuntimeError('test rollback')
    assert store.setting('test',None) is None
    with pytest.raises(sqlite3.ProgrammingError):failed.execute('SELECT 1')
