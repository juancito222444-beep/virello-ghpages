"""Local verification of Codespaces host rules; no Codespace is created."""
import json
from pathlib import Path
import pytest
from fastapi.testclient import TestClient
from backend.access import access_error, codespace_host
from backend.app import app

@pytest.fixture(autouse=True)
def isolated_cloud_env(monkeypatch):
    for name in ('CODESPACES','CODESPACE_NAME','GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN'):
        monkeypatch.delenv(name,raising=False)

def cloud(monkeypatch):
    monkeypatch.setenv('CODESPACES','true')
    monkeypatch.setenv('CODESPACE_NAME','anto-example-123')
    monkeypatch.setenv('GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN','app.github.dev')
    return 'anto-example-123-8765.app.github.dev'

def test_default_remains_local():
    assert codespace_host() is None
    assert access_error('127.0.0.1:8765','http://localhost:5173') is None
    assert access_error('testserver') is None
    assert access_error('other-8765.app.github.dev') == 'Host no permitido'
    assert access_error('127.0.0.1:8765','https://evil.example') == 'Origen no permitido'

def test_exact_forwarded_host_only(monkeypatch):
    host=cloud(monkeypatch)
    assert codespace_host()==host
    assert access_error(host,'https://'+host) is None
    assert access_error(host.upper(),'https://'+host.upper()) is None
    assert access_error(host+':443','https://'+host+':443') is None
    for bad in ('other-8765.app.github.dev','anto-example-123-11434.app.github.dev',host+'.evil.example','evil.'+host,host+':1234'):
        assert access_error(bad)=='Host no permitido'
    assert access_error(host,'http://'+host)=='Origen no permitido'
    assert access_error(host,'https://'+host+':1234')=='Origen no permitido'
    assert access_error(host,'https://'+host+'.evil.example')=='Origen no permitido'

def test_env_requires_codespaces_and_valid_dns(monkeypatch):
    monkeypatch.setenv('CODESPACE_NAME','anto-example-123')
    monkeypatch.setenv('GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN','app.github.dev')
    assert codespace_host() is None
    monkeypatch.setenv('CODESPACES','true')
    for invalid in ('*.app.github.dev','https://app.github.dev','app.github.dev/path','-bad.example','bad..example'):
        monkeypatch.setenv('GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN',invalid)
        assert codespace_host() is None
    monkeypatch.setenv('GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN','app.github.dev')
    monkeypatch.setenv('CODESPACE_NAME','../other')
    assert codespace_host() is None

@pytest.mark.parametrize('bad',['localhost@evil.example','http://localhost','localhost/path','localhost?x=1','localhost#bad',' localhost','localhost:bad','localhost:99999'])
def test_malformed_host_is_rejected(bad):
    assert access_error(bad)=='Host no permitido'

@pytest.mark.parametrize('bad',['null','https://localhost@evil.example','https://evil.example#localhost','file://localhost','https://localhost/path','http://localhost:99999'])
def test_malformed_origin_is_rejected(bad):
    assert access_error('localhost:8765',bad)=='Origen no permitido'

def test_middleware_uses_exact_host_and_ignores_forwarded_header(monkeypatch):
    host=cloud(monkeypatch)
    # This endpoint does not require starting the database or an inference service.
    client=TestClient(app)
    response=client.get('/openapi.json',headers={'Host':host,'Origin':'https://'+host})
    assert response.status_code==200
    assert response.json()['info']['title']=='STUDIO DE ANTO'
    assert client.get('/openapi.json',headers={'Host':'evil.example','X-Forwarded-Host':host}).status_code==403
    assert client.get('/openapi.json',headers={'Host':host,'Origin':'https://evil.example'}).status_code==403

def test_devcontainer_has_build_start_and_single_port():
    config=json.loads((Path(__file__).resolve().parents[1]/'.devcontainer/devcontainer.json').read_text())
    assert config['forwardPorts']==[8765]
    assert config['postCreateCommand']=='bash scripts/install.sh'
    assert config['postStartCommand']=='bash scripts/start-cloud.sh --background'
    assert config['containerEnv']=={'STUDIO_CLOUD_ONLY':'1'}
    assert 'STUDIO_GEMINI_API_KEY' in config['secrets']
    assert config['otherPortsAttributes']['onAutoForward']=='ignore'
    assert 'visibility' not in config['portsAttributes']['8765']  # not a devcontainer schema field
