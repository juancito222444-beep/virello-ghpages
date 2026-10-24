"""Recover old settings and report client setup failures without real API calls."""
import asyncio

import httpx
import pytest
from fastapi.testclient import TestClient

from backend import cloud, credential_store, models, store
from backend.app import app


KEY='recovery-protocol-key-marker'


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'],*service.get('aliases',())):
            monkeypatch.delenv(name,raising=False)


@pytest.mark.parametrize('saved',[
    None, {'anto':{'model':'gemini-2.5-flash-lite'}}, [None,7,{'id':['anto']}],
    [
        {'id':'atlas','instructions':'Conserva estas instrucciones.','model':'gemini-2.5-flash-lite'},
        {'id':'anto','instructions':None,'model':[]},
        {'id':'unknown','model':'ignored'},
        {'id':'vera','instructions':'x'*6001,'model':'x'*201},
    ],
])
def test_malformed_settings_recover_six_roles_without_rewriting_data(saved):
    store.init()
    store.save_setting('provider','gemini')
    store.save_setting('agents',saved)
    actual=models.agents()
    assert [a['id'] for a in actual]==[a['id'] for a in models.AGENTS]
    assert all(isinstance(a['instructions'],str) and isinstance(a['model'],str) for a in actual)
    assert actual[0]['instructions']==models.AGENTS[0]['instructions']
    assert actual[0]['model']==''
    if isinstance(saved,list) and any(isinstance(a,dict) and a.get('id')=='atlas' for a in saved):
        assert actual[1]['instructions']=='Conserva estas instrucciones.'
        assert actual[1]['model']=='gemini-2.5-flash-lite'
    assert store.setting('agents','missing')==saved


def test_invalid_json_agents_recovers_without_rewriting_original():
    store.init()
    with store.db() as connection:
        connection.execute('INSERT INTO settings VALUES(?,?)',('agents','{broken'))
    assert len(models.agents())==6
    assert store.one('SELECT value FROM settings WHERE key=?',('agents',))['value']=='{broken'


def test_valid_settings_and_default_provider_model_fallback_are_preserved():
    store.init()
    saved=[{**a,'model':'custom-model','instructions':'Personalizadas '+a['id']} for a in models.AGENTS]
    store.save_setting('agents',saved)
    store.save_setting('provider','gemini')
    assert models.agents()==saved
    with store.db() as connection:
        connection.execute('DELETE FROM settings WHERE key=?',('provider',))
    actual=models.agents()
    assert all(a['model']==cloud.PROVIDERS['gemini']['model'] for a in actual)
    assert [a['instructions'] for a in actual]==[a['instructions'] for a in saved]
    assert store.setting('agents',[])==saved


def test_save_key_connects_with_malformed_saved_agents(monkeypatch):
    seen=[]
    def handler(request):
        seen.append(request)
        if request.method=='GET':
            return httpx.Response(200,json={'models':[{'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']}]})
        return httpx.Response(200,content=b'data: {"candidates":[{"content":{"parts":[{"text":"MOCK conectado"}]},"finishReason":"STOP"}]}\n\n')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    with TestClient(app) as client:
        store.save_setting('provider','gemini')
        store.save_setting('agents',[None,{'id':'atlas','instructions':'Conservadas','model':'gemini-2.5-flash-lite'},{'id':'anto','model':42}])
        store.save_setting('unrelated',{'keep':'original'})
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
        assert response.status_code==200
        data=response.json()
        assert data['proof']['verified'] and data['proof']['response']=='MOCK conectado'
        assert len(data['settings']['agents'])==6
        assert data['settings']['agents'][1]['instructions']=='Conservadas'
        assert store.setting('unrelated',None)=={'keep':'original'}
        assert KEY not in response.text
    assert [r.method for r in seen]==['GET','POST']
    assert all(r.headers['x-goog-api-key']==KEY for r in seen)


def test_invalid_ssl_certificate_path_is_safe_actionable_and_keeps_previous_key(tmp_path,monkeypatch):
    # Use the real factory: invalid TLS configuration fails before a socket opens.
    bad_path=tmp_path/'certificate-path-private-marker.pem'
    monkeypatch.setenv('SSL_CERT_FILE',str(bad_path))
    with TestClient(app,raise_server_exceptions=False) as client:
        credential_store.save('gemini','previous-key')
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
    assert response.status_code==422
    assert 'certificados TLS' in response.json()['detail']
    assert str(bad_path) not in response.text and KEY not in response.text
    assert credential_store.read_all()=={'gemini':'previous-key'}


def test_invalid_ssl_certificate_path_during_generation_is_value_error(tmp_path,monkeypatch):
    monkeypatch.setenv('SSL_CERT_FILE',str(tmp_path/'missing-certificate.pem'))
    store.init()
    store.save_setting('provider','gemini')
    store.save_setting('agents',[{**a,'model':'gemini-2.5-flash-lite'} for a in models.AGENTS])
    with cloud.use_secret('gemini',KEY):
        with pytest.raises(ValueError,match='certificados TLS'):
            asyncio.run(models.complete('anto',[{'role':'user','content':'Prueba'}]))


def test_proxy_dependency_error_never_exposes_exception_details(monkeypatch):
    marker='socks5://private-user:private-password@proxy.invalid:1080'
    def missing_dependency(*args,**kwargs):
        assert kwargs['trust_env'] is True and kwargs['follow_redirects'] is False
        raise ImportError(marker)
    monkeypatch.setattr(models.httpx,'AsyncClient',missing_dependency)
    with pytest.raises(ValueError,match='proxy') as caught:
        models._api_client('gemini',10)
    assert marker not in str(caught.value)


@pytest.mark.parametrize('status,reason,expected',[
    (400,'API_KEY_INVALID','no es válida o expiró'),
    (403,'API_KEY_SERVICE_BLOCKED','restricciones'),
    (429,None,'cuota'),
    (404,None,'modelo no disponible'),
])
def test_streaming_provider_rejection_keeps_key_and_shows_real_cause(monkeypatch,status,reason,expected):
    import json
    def handler(request):
        if request.method=='GET':
            return httpx.Response(200,json={'models':[{'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']}]})
        payload={'error':{'message':KEY,'details':[{'reason':reason}] if reason else []}}
        # Unlike content=/json=, a stream starts unread, as a real network error
        # does inside client.stream(). response.json() must not run before read.
        return httpx.Response(status,stream=httpx.ByteStream(json.dumps(payload).encode()))
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    with TestClient(app,raise_server_exceptions=False) as client:
        credential_store.save('gemini','previous-key')
        before=client.get('/api/settings').json()
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
        assert response.status_code==422
        assert expected in response.json()['detail']
        assert KEY not in response.text and 'ServerError' not in response.text
        assert credential_store.read_all()=={'gemini':'previous-key'}
        assert client.get('/api/settings').json()==before


def test_error_formatter_handles_an_unread_error_response():
    request=httpx.Request('POST',cloud.PROVIDERS['gemini']['url']+'/models/example:streamGenerateContent')
    response=httpx.Response(429,request=request,stream=httpx.ByteStream(b'provider-error'))
    with pytest.raises(httpx.HTTPStatusError) as caught:response.raise_for_status()
    assert 'cuota' in models._http_error(caught.value,'gemini')


@pytest.mark.parametrize('body',[b'Internal Server Error',b'{broken',b'null',b'{"error":{"details":null}}'])
def test_streamed_malformed_provider_error_preserves_quota_message(monkeypatch,body):
    def handler(request):
        if request.method=='GET':
            return httpx.Response(200,json={'models':[{'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']}]})
        return httpx.Response(429,stream=httpx.ByteStream(body))
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    with TestClient(app,raise_server_exceptions=False) as client:
        response=client.post('/api/credentials',json={'provider':'gemini','api_key':KEY})
        assert response.status_code==422 and 'cuota' in response.json()['detail']
        assert not credential_store.path().exists() and KEY not in response.text
