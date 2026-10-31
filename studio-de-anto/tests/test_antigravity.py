"""Offline bridge tests: synthetic CLI only, no Google session or inference."""
import asyncio
import json
import os
from pathlib import Path

import pytest
from fastapi import HTTPException
from fastapi.testclient import TestClient
from backend import antigravity as bridge
from backend import store


class Request:
    async def is_disconnected(self):
        return False


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path / 'data')
    monkeypatch.setattr(Path, 'home', classmethod(lambda cls: tmp_path / 'home'))
    monkeypatch.setattr(bridge, 'ACTIVE', None)
    monkeypatch.setattr(bridge, 'RUNNING', False)
    yield
    bridge.stop()


def cli(body):
    path = bridge.binary()
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text('#!/usr/bin/env python3\nimport sys,json,time,os\n'
                    'if "--version" in sys.argv:\n print("1.4.12");sys.exit(0)\n' + body)
    path.chmod(0o700)


def result(text='Respuesta simulada'):
    return 'print('+repr(json.dumps({'event':'result','result':{'status':'SUCCESS','response':text}}))+',flush=True)\ntime.sleep(5)\n'


def test_status_offline_missing_and_installed():
    assert bridge.status()['installed'] is False
    cli('raise RuntimeError("Must never infer from status")\n')
    info = bridge.status()
    assert info['version'] == '1.4.12'
    assert info['authentication'] == 'not_verified'
    assert info['supported'] is True
    assert info['busy'] is False


def test_unknown_version_and_extensions_fail_closed():
    cli('')
    path = bridge.binary()
    path.write_text(path.read_text().replace('1.4.12', '9.9.9'))
    assert not bridge.status()['supported']
    hook = Path.home() / '.gemini/config/hooks.json'
    hook.parent.mkdir(parents=True)
    hook.write_text('{"private":"do not expose"}')
    assert bridge.status()['extensions_blocked']
    assert 'private' not in json.dumps(bridge.status())


def test_prompt_stdin_restrictive_settings_and_no_api_key(monkeypatch):
    monkeypatch.setenv('GEMINI_API_KEY', 'private-test-key')
    monkeypatch.setenv('STUDIO_GROQ_API_KEY', 'private-test-key')
    cli('''assert "private prompt" not in " ".join(sys.argv)
assert "GEMINI_API_KEY" not in os.environ
assert "STUDIO_GROQ_API_KEY" not in os.environ
assert not os.listdir('.')
settings=json.loads(sys.argv[sys.argv.index('--settings')+1])
assert settings['toolPermission']=='strict'
assert 'command(*)' in settings['permissions']['deny']
assert 'read_file(*)' in settings['permissions']['deny']
assert '--dangerously-skip-permissions' not in sys.argv
assert json.loads(sys.stdin.readline())['message']['content'].endswith('private prompt')
''' + result())
    value = asyncio.run(bridge.ask('private prompt', Request()))
    assert value['response'] == 'Respuesta simulada'
    assert value['authentication'] == 'verified_for_this_request'
    assert bridge.ACTIVE is None and not bridge.RUNNING


@pytest.mark.parametrize('body', ['sys.exit(1)\n', 'print("not json",flush=True)\n',
    'print(json.dumps({"event":"result","result":{"status":"ERROR","error":"private"}}),flush=True)\n'])
def test_provider_failure_is_sanitized_and_released(body):
    cli(body)
    with pytest.raises(HTTPException) as error:
        asyncio.run(bridge.ask('hello', Request()))
    assert error.value.status_code == 422
    assert 'private' not in error.value.detail
    assert bridge.ACTIVE is None and not bridge.RUNNING


def test_timeout_and_concurrent_request(monkeypatch):
    cli('time.sleep(5)\n')
    monkeypatch.setattr(bridge, 'TIMEOUT', 0.03)
    with pytest.raises(HTTPException) as error:
        asyncio.run(bridge.ask('hello', Request()))
    assert error.value.status_code == 504
    assert bridge.ACTIVE is None and not bridge.RUNNING
    monkeypatch.setattr(bridge, 'RUNNING', True)
    with pytest.raises(HTTPException) as error:
        asyncio.run(bridge.ask('hello', Request()))
    assert error.value.status_code == 409


def test_disconnect_and_stop_release_process():
    cli('time.sleep(5)\n')
    class Disconnected:
        async def is_disconnected(self):
            return True
    with pytest.raises(HTTPException) as error:
        asyncio.run(bridge.ask('hello', Disconnected()))
    assert error.value.status_code == 499
    assert bridge.ACTIVE is None
    async def scenario():
        task = asyncio.create_task(bridge.ask('hello', Request()))
        for _ in range(100):
            if bridge.ACTIVE is not None:
                break
            await asyncio.sleep(.01)
        assert bridge.stop()['stopping']
        with pytest.raises(HTTPException):
            await task
        assert not bridge.RUNNING
    asyncio.run(scenario())


def test_api_requires_explicit_authorization(monkeypatch):
    from backend.app import app
    client = TestClient(app)
    called = []
    async def ask(prompt, request):
        called.append(prompt)
        return {'response':'MOCK'}
    monkeypatch.setattr(bridge, 'ask', ask)
    for body in ({'prompt':'hello'}, {'prompt':'hello','authorize':False},
                 {'prompt':' ','authorize':True}, {'prompt':'x'*4001,'authorize':True}):
        assert client.post('/api/antigravity/ask', json=body).status_code == 422
    assert not called
    assert client.post('/api/antigravity/ask', json={'prompt':'hello','authorize':True}).json()['response'] == 'MOCK'
    assert called == ['hello']
    assert client.get('/api/antigravity').json()['authentication'] == 'not_verified'
