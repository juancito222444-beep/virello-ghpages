"""Private key lifecycle; provider replies are explicit HTTP protocol mocks."""
import json
import stat
import httpx
import pytest
from fastapi.testclient import TestClient
from backend import cloud,credential_store,models,runtime,store
from backend.app import app

KEY='protocol-private-key-marker'

@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for p in cloud.PROVIDERS.values():
        for name in (p['secret'],*p.get('aliases',())):monkeypatch.delenv(name,raising=False)


def mock_provider(monkeypatch,status=200):
    seen=[]
    def handler(request):
        seen.append(request)
        if request.method=='GET':return httpx.Response(200,json={'models':[{'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']}]})
        if status!=200:return httpx.Response(status,json={'error':{'message':KEY}})
        return httpx.Response(200,content=b'data: {"candidates":[{"content":{"parts":[{"text":"MOCK conectado"}]},"finishReason":"STOP"}]}\n\n')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    return seen


def test_save_connect_persists_privately_without_exposing_key(monkeypatch):
    seen=mock_provider(monkeypatch)
    with TestClient(app) as client:
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
        assert response.status_code==200 and response.json()['proof']['verified']
        assert KEY not in response.text
        assert response.json()['credential']['source']=='app'
        assert response.json()['credential']['saved_in_app']
        for path in ['/api/credentials/gemini','/api/settings','/api/models']:
            assert KEY not in client.get(path).text
        assert KEY not in json.dumps(store.rows('SELECT * FROM settings'))
        assert KEY not in json.dumps(store.rows('SELECT * FROM messages'))
        assert KEY not in json.dumps(store.rows('SELECT * FROM events'))
    assert all(request.headers['x-goog-api-key']==KEY for request in seen)
    assert all(KEY not in str(request.url) and KEY not in request.content.decode() for request in seen)
    assert stat.S_IMODE(credential_store.path().stat().st_mode)==0o600
    assert stat.S_IMODE(credential_store.path().parent.stat().st_mode)==0o700
    assert KEY in credential_store.path().read_text()
    with TestClient(app) as client:
        assert client.get('/api/credentials/gemini').json()['configured']
        assert cloud.headers('gemini')['Authorization']=='Bearer '+KEY
    assert KEY not in runtime.safe_error('Failure '+KEY)


def test_failed_verification_keeps_previous_key_and_preferences(monkeypatch):
    mock_provider(monkeypatch,status=429)
    credential_store.save('gemini','previous-working-key')
    with TestClient(app) as client:
        before=client.get('/api/settings').json()
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
        assert response.status_code==422 and 'cuota' in response.json()['detail']
        assert KEY not in response.text and KEY not in credential_store.path().read_text()
        assert client.get('/api/settings').json()==before
        assert credential_store.read_all()['gemini']=='previous-working-key'
        assert cloud.configured_secret('gemini')[0]=='previous-working-key'


@pytest.mark.parametrize('body',[{'provider':'unsupported','api_key':KEY},{'provider':'gemini','wrong_field':KEY},{'provider':'gemini','api_key':KEY,'unexpected':KEY}])
def test_validation_never_echoes_submitted_key(body):
    with TestClient(app) as client:
        response=client.post('/api/credentials',json=body)
        assert response.status_code==422 and KEY not in response.text
    assert not credential_store.path().exists()


def test_delete_uses_existing_environment_secret_as_fallback(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','environment-key')
    credential_store.save('gemini',KEY);credential_store.save('groq','other-provider-key')
    with TestClient(app) as client:
        response=client.delete('/api/credentials/gemini')
    data=response.json()
    assert data['configured'] and not data['saved_in_app'] and data['source']=='STUDIO_GEMINI_API_KEY'
    assert cloud.headers('gemini')['Authorization']=='Bearer environment-key'
    assert credential_store.read_all()=={'groq':'other-provider-key'}
    assert KEY not in response.text


def test_cross_origin_cannot_store_key(monkeypatch):
    seen=mock_provider(monkeypatch)
    with TestClient(app) as client:
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY},headers={'Origin':'https://evil.example'})
    assert response.status_code==403 and not seen
    assert not credential_store.path().exists()


def test_secret_store_cannot_be_placed_in_public_files(monkeypatch):
    from pathlib import Path
    public=Path(__file__).resolve().parents[1]/'frontend'/'dist'
    monkeypatch.setattr(store,'ROOT',public)
    with pytest.raises(ValueError,match='públicos'):credential_store.save('gemini',KEY)
