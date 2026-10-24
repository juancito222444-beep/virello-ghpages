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
    for p in cloud.PROVIDERS.values():monkeypatch.delenv(p['secret'],raising=False)
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
            return httpx.Response(200,json={'data':[{'id':cloud.PROVIDERS[kind]['model']}]})
        return httpx.Response(200,content=b'data: {"choices":[{"delta":{"content":"MOCK"},"finish_reason":"stop"}]}\n\ndata: [DONE]\n\n')
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler),follow_redirects=False))
    status=asyncio.run(models.available())
    assert status['connected'] and not status['inference_verified']
    answer=asyncio.run(models.complete('anto',[{'role':'user','content':'Prueba JSON'}],{'type':'object'}))
    assert answer=='MOCK'
    assert all(str(r.url).startswith(cloud.PROVIDERS[kind]['url']) for r in seen)
    assert all(r.headers['Authorization']=='Bearer protocol-test-key' for r in seen)
    body=json.loads(seen[-1].content)
    assert body['response_format']=={'type':'json_object'}
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
