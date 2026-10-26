"""Recovery uses real project data and ZIPs, with provider calls forbidden."""
import io
import json
import zipfile

import pytest
from fastapi.testclient import TestClient

from backend import backups, models, store
from backend.app import app


@pytest.fixture
def client(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    def forbidden(*args,**kwargs):pytest.fail('Recovery must not call a model')
    monkeypatch.setattr(models,'_api_client',forbidden)
    with TestClient(app) as value:yield value


def test_recovery_api_download_and_restore_preserve_originals_without_global_secrets(client):
    original=client.post('/api/projects',json={'name':'Proyecto original'}).json()
    pid=original['id'];url=f'/api/projects/{pid}/snapshots'
    client.put(f'/api/projects/{pid}/memory',json={'summary':'Decisión que hay que conservar'})
    store.save_setting('private-api-marker','never-export-recovery-secret')
    with store.db() as connection:
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',('message-before',pid,'anto','user','Idea anterior','mock',store.now()))
    initial=client.get(url).json()
    assert initial['enabled'] is False and initial['copies']==[]
    assert client.put(url,json={'enabled':True}).json()['enabled'] is True
    created=client.post(url,json={});assert created.status_code==200
    saved=created.json();assert len(saved['copies'])==1 and saved['last_success']
    assert str(store.ROOT) not in json.dumps(saved)
    sid=saved['copies'][0]['id']
    downloaded=client.get(f'{url}/{sid}/download')
    assert downloaded.status_code==200 and downloaded.headers['content-type']=='application/zip'
    assert downloaded.headers['cache-control']=='no-store'
    with zipfile.ZipFile(io.BytesIO(downloaded.content)) as archive:
        manifest=archive.read('manifest.json').decode()
        assert 'never-export-recovery-secret' not in manifest
        assert 'Decisión que hay que conservar' in manifest
    restored=client.post(f'{url}/{sid}/restore',json={})
    assert restored.status_code==200
    new=restored.json();assert new['id']!=pid
    assert store.one('SELECT name FROM projects WHERE id=?',(pid,))['name']=='Proyecto original'
    assert client.get(f'/api/messages?project={new["id"]}&agent=anto').json()[0]['content']=='Idea anterior'
    assert client.get(f'/api/projects/{new["id"]}/snapshots').json()['enabled'] is False
    assert store.setting('private-api-marker',None)=='never-export-recovery-secret'


@pytest.mark.parametrize('body',[{'enabled':'false'},{'enabled':1},{'enabled':True,'path':'/outside'}])
def test_recovery_policy_rejects_coercion_and_arbitrary_paths(client,body):
    pid=client.post('/api/projects',json={'name':'Validación'}).json()['id']
    url=f'/api/projects/{pid}/snapshots'
    assert client.put(url,json=body).status_code==422
    assert client.get(url).json()['enabled'] is False


def test_recovery_unknown_projects_and_missing_copies_are_readable(client):
    assert client.get('/api/projects/missing/snapshots').status_code==404
    assert client.post('/api/projects/missing/snapshots',json={}).status_code==404
    pid=client.post('/api/projects',json={'name':'Sin copias'}).json()['id']
    before=store.rows('SELECT id FROM projects ORDER BY id')
    url=f'/api/projects/{pid}/snapshots/missing'
    assert client.get(url+'/download').status_code==404
    assert client.post(url+'/restore',json={}).status_code==404
    assert store.rows('SELECT id FROM projects ORDER BY id')==before


def test_failed_recovery_creation_is_safe_and_preserves_the_previous_copy(client,monkeypatch):
    pid=client.post('/api/projects',json={'name':'Fallos de almacenamiento'}).json()['id']
    url=f'/api/projects/{pid}/snapshots'
    before=client.post(url,json={}).json()['copies']
    def fail(*args,**kwargs):raise OSError('never-echo-private-path-or-key')
    monkeypatch.setattr(backups,'export_project',fail)
    failed=client.post(url,json={})
    assert failed.status_code==422 and 'never-echo-private-path-or-key' not in failed.text
    after=client.get(url).json()
    assert after['copies']==before and after['last_error']
