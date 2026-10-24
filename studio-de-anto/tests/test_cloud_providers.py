"""Cloud protocol/security checks using HTTP mocks, never real API credentials."""
import asyncio
import json
import httpx
import pytest
from fastapi.testclient import TestClient
from backend import cloud, models, store
from backend.app import app

@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init()
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for p in cloud.PROVIDERS.values():
        for name in (p['secret'],*p.get('aliases',())):monkeypatch.delenv(name,raising=False)
    monkeypatch.setattr(models,'LOCK',asyncio.Lock())

@pytest.mark.parametrize('kind',['gemini','groq'])
def test_cloud_stream_uses_fixed_https_and_server_secret(monkeypatch,kind):
    store.save_setting('provider',kind)
    store.save_setting('agents',[{**a,'model':cloud.PROVIDERS[kind]['model']} for a in models.AGENTS])
    monkeypatch.setenv(cloud.PROVIDERS[kind]['secret'],'protocol-test-key')
    seen=[]
    def handler(request):
        seen.append(request)
        if request.url.path.endswith('/models'):
            return httpx.Response(200,json={'models':[{'name':'models/'+cloud.PROVIDERS[kind]['model'],'supportedGenerationMethods':['generateContent']}]} if kind=='gemini' else {'data':[{'id':cloud.PROVIDERS[kind]['model']}]})
        if kind=='gemini':return httpx.Response(200,content=b'data: {"candidates":[{"content":{"parts":[{"text":"MOCK"}]},"finishReason":"STOP"}]}\n\n')
        return httpx.Response(200,content=b'data: {"choices":[{"delta":{"content":"MOCK"},"finish_reason":"stop"}]}\n\ndata: [DONE]\n\n')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler),follow_redirects=False))
    status=asyncio.run(models.available())
    assert status['connected'] and not status['inference_verified']
    answer=asyncio.run(models.complete('anto',[{'role':'user','content':'Prueba JSON'}],{'type':'object'}))
    assert answer=='MOCK'
    assert all(str(r.url).startswith('https://generativelanguage.googleapis.com/v1beta/' if kind=='gemini' else cloud.PROVIDERS[kind]['url']) for r in seen)
    assert all(r.headers.get('x-goog-api-key')=='protocol-test-key' if kind=='gemini' else r.headers.get('Authorization')=='Bearer protocol-test-key' for r in seen)
    body=json.loads(seen[-1].content)
    assert body['generationConfig']['responseMimeType']=='application/json' if kind=='gemini' else body['response_format']=={'type':'json_object'}
    assert 'keep_alive' not in body and 'options' not in body
    assert 'protocol-test-key' not in json.dumps(body)
    with TestClient(app) as client:
        settings=client.get('/api/settings').json()
        assert 'protocol-test-key' not in json.dumps(settings)
    assert 'protocol-test-key' not in json.dumps(store.rows('SELECT * FROM settings'))

def test_missing_secret_never_calls_network(monkeypatch):
    def forbidden(*args):raise AssertionError('No network without credential')
    monkeypatch.setattr(models,'_api_client',forbidden)
    status=asyncio.run(models.available())
    assert not status['connected'] and 'STUDIO_GEMINI_API_KEY' in status['error']
    with pytest.raises(ValueError,match='STUDIO_GEMINI_API_KEY'):
        asyncio.run(models.complete('anto',[{'role':'user','content':'Hola'}]))

def test_cloud_transition_keeps_custom_instructions_and_rejects_local_settings():
    saved=[{**a,'model':'qwen3.5:2b-q4_K_M','instructions':'Mi preferencia guardada'} for a in models.AGENTS]
    store.save_setting('agents',saved);store.save_setting('provider','ollama')
    assert models.provider()=='gemini'
    assert all(a['model']=='gemini-2.5-flash-lite' and a['instructions']=='Mi preferencia guardada' for a in models.agents())
    assert store.setting('agents',[])==saved
    with TestClient(app) as client:
        body=client.get('/api/settings').json();body['provider']='ollama'
        assert client.put('/api/settings',json=body).status_code==422

@pytest.mark.parametrize('status',[401,403,404,429])
def test_cloud_errors_are_actionable_and_do_not_echo_credentials(monkeypatch,status):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','protocol-test-key')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(lambda request:httpx.Response(status,json={'error':'protocol-test-key'}))))
    result=asyncio.run(models.available())
    assert not result['connected'] and 'protocol-test-key' not in json.dumps(result)
    assert ('cuota' in result['error']) if status==429 else result['error']

def test_snapshot_cannot_redirect_credentials(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','protocol-test-key')
    snap=models.snapshot('anto');snap['endpoint']='https://untrusted.example/v1'
    with models.use_snapshot(snap),pytest.raises(ValueError,match='Destino'):
        asyncio.run(models.complete('anto',[{'role':'user','content':'Hola'}]))

@pytest.mark.parametrize('script',['setup-model.py','ensure-model-server.py'])
def test_legacy_launch_helpers_cannot_start_models_in_cloud_mode(tmp_path,script):
    import os, subprocess, sys
    from pathlib import Path
    root=tmp_path/'must-not-exist'
    env={**os.environ,'STUDIO_CLOUD_ONLY':'1'}
    args=[sys.executable,str(Path(__file__).resolve().parents[1]/'scripts'/script),'--root',str(root)]
    if script=='setup-model.py':args.append('--download')
    result=subprocess.run(args,env=env,capture_output=True,text=True,timeout=10)
    assert result.returncode==0 and not root.exists()

@pytest.mark.parametrize('name',['STUDIO_GEMINI_API_KEY','GEMINI_API_KEY','GOOGLE_API_KEY'])
def test_standard_gemini_secret_names_are_detected_without_exposing_values(monkeypatch,name):
    monkeypatch.setenv(name,'protocol-key-not-a-real-credential')
    assert cloud.headers('gemini')=={'Authorization':'Bearer protocol-key-not-a-real-credential'}
    status=cloud.credential_status('gemini')
    assert status['source']==name and status['configured'] and status['valid_format']
    assert 'protocol-key-not-a-real-credential' not in json.dumps(status)


def test_gemini_invalid_key_error_is_distinct_from_missing_key(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','protocol-test-key')
    def handler(request):
        return httpx.Response(400,json={'error':{'message':'protocol-test-key','details':[{'reason':'API_KEY_INVALID'}]}})
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    result=asyncio.run(models.available())
    assert result['credential']['source']=='STUDIO_GEMINI_API_KEY'
    assert 'no es válida o expiró' in result['error']
    assert 'protocol-test-key' not in json.dumps(result)


def test_native_gemini_filters_models_and_avoids_thinking_only_probe(monkeypatch):
    from backend import gemini
    assert gemini.catalog({'models':[
        {'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']},
        {'name':'models/gemini-embedding-001','supportedGenerationMethods':['embedContent']},
        {'name':'models/gemini-2.5-flash-image','supportedGenerationMethods':['generateContent']} ]})==['gemini-2.5-flash-lite']
    body=gemini.payload('gemini-2.5-flash-lite',[{'role':'system','content':'Responde breve.'},{'role':'user','content':'Hola'}],32)
    assert body['generationConfig']['maxOutputTokens']==512
    assert body['generationConfig']['thinkingConfig']=={'thinkingBudget':0}
    assert gemini.model_id('models/gemini-2.5-flash-lite')=='gemini-2.5-flash-lite'


def test_gemini_never_exposes_thoughts_or_certifies_truncated_reply(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','protocol-test-key')
    data={'candidates':[{'content':{'parts':[{'thought':True,'text':'PRIVATE-THOUGHT'},{'text':'respuesta'}]},'finishReason':'MAX_TOKENS'}]}
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(lambda request:httpx.Response(200,content=('data: '+json.dumps(data)+'\n\n').encode()))))
    async def exercise():
        visible=[]
        with pytest.raises(ValueError,match='límite de salida'):
            async for chunk in models.stream('anto',[{'role':'user','content':'Hola'}]):visible.append(chunk)
        assert visible==['respuesta'] and not models.LOCK.locked()
    asyncio.run(exercise())


def test_native_gemini_chat_and_probe_through_application(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','protocol-test-key')
    seen=[]
    def handler(request):
        seen.append(request)
        if request.method=='GET':return httpx.Response(200,json={'models':[{'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']}]})
        return httpx.Response(200,content=b'data: {"candidates":[{"content":{"parts":[{"text":"MOCK respuesta"}]},"finishReason":"STOP"}]}\n\n')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        status=client.get('/api/models').json()
        assert status['connected'] and status['credential']['configured'] and not status['inference_verified']
        probe=client.post('/api/models/test',json={'agent':'anto'})
        assert probe.status_code==200 and probe.json()['verified']
        assert json.loads(seen[-1].content)['generationConfig']['maxOutputTokens']==512
        for text in ['Mi proyecto se llama Luna.','Continúa con la idea anterior.']:
            response=client.post('/api/chat',json={'project':pid,'agent':'anto','content':text})
            assert '"done": true' in response.text and 'MOCK respuesta' in response.text
        contents=json.loads(seen[-1].content)['contents']
        assert any(m['role']=='model' and any(p['text']=='MOCK respuesta' for p in m['parts']) for m in contents)
        assert any('Luna' in p['text'] for m in contents for p in m['parts'])
        assert 'protocol-test-key' not in client.get('/api/messages',params={'project':pid,'agent':'anto'}).text


@pytest.mark.parametrize('invalid',['bad\nkey','"bad-key"','Bearer bad-key'])
def test_invalid_secret_format_is_diagnosed_without_network(monkeypatch,invalid):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY',invalid)
    def forbidden(*args):raise AssertionError('No request with a malformed secret')
    monkeypatch.setattr(models,'_api_client',forbidden)
    status=asyncio.run(models.available())
    assert status['credential']['configured'] and not status['credential']['valid_format']
    assert 'caracteres no válidos' in status['error']


def test_one_click_connect_selects_available_model_and_preserves_instructions(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','protocol-test-key')
    saved=[{**a,'model':'retired-model','instructions':'Mantén mis instrucciones.'} for a in models.AGENTS]
    store.save_setting('provider','gemini');store.save_setting('agents',saved)
    seen=[]
    def handler(request):
        seen.append(request)
        if request.method=='GET':return httpx.Response(200,json={'models':[{'name':'models/gemini-available-flash-lite','supportedGenerationMethods':['generateContent']}]})
        return httpx.Response(200,content=b'data: {"candidates":[{"content":{"parts":[{"text":"MOCK conectado"}]},"finishReason":"STOP"}]}\n\n')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    with TestClient(app) as client:
        result=client.post('/api/connect',json={'provider':'gemini','agent':'anto'})
    assert result.status_code==200
    data=result.json()
    assert data['status']['inference_verified'] and data['proof']['verified']
    assert all(a['model']=='gemini-available-flash-lite' and a['instructions']=='Mantén mis instrucciones.' for a in data['settings']['agents'])
    assert 'protocol-test-key' not in result.text and len(seen)==2


def test_failed_one_click_connect_does_not_replace_preferences(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','protocol-test-key')
    saved=[{**a,'model':'saved-model'} for a in models.AGENTS]
    store.save_setting('agents',saved);store.save_setting('provider','gemini')
    def handler(request):
        if request.method=='GET':return httpx.Response(200,json={'models':[{'name':'models/gemini-available-flash','supportedGenerationMethods':['generateContent']}]})
        return httpx.Response(429,json={'error':'quota'})
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    with TestClient(app) as client:
        result=client.post('/api/connect',json={'provider':'gemini'})
    assert result.status_code==422 and 'cuota' in result.json()['detail']
    assert store.setting('agents',[])==saved
