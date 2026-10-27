"""Startup identity checks never signal an unverified process or disclose keys."""
import json
import os
from pathlib import Path
import pytest
from fastapi.testclient import TestClient
from backend import runtime,store
from backend.app import app,LOADED_CODE_VERSION


def test_health_reports_loaded_version_not_later_disk_contents(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','private-key-marker')
    monkeypatch.setattr(runtime,'code_version',lambda:'later-disk-version')
    with TestClient(app) as client:
        data=client.get('/api/health').json()
    assert data['code_version']==LOADED_CODE_VERSION and data['pid']==os.getpid()
    assert 'private-key-marker' not in json.dumps(data)


def fake_proc(tmp_path,root):
    proc=tmp_path/'proc';directory=proc/'42';directory.mkdir(parents=True)
    (directory/'cwd').symlink_to(root,target_is_directory=True)
    (directory/'cmdline').write_bytes(b'python\0-m\0uvicorn\0backend.app:app\0--port\08765\0')
    return proc,directory


def test_matching_own_server_detects_key_change_without_exposing_it(tmp_path,monkeypatch):
    root=tmp_path/'app';root.mkdir();proc,directory=fake_proc(tmp_path,root)
    for name in runtime.ENV_NAMES:monkeypatch.delenv(name,raising=False)
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','new-private-key')
    (directory/'environ').write_bytes(b'STUDIO_GEMINI_API_KEY=old-private-key\0')
    assert runtime.owned_server(42,root,proc)
    assert not runtime.environment_matches(42,root,proc)
    (directory/'environ').write_bytes(b'STUDIO_GEMINI_API_KEY=new-private-key\0')
    assert runtime.environment_matches(42,root,proc)
    (directory/'cmdline').write_bytes(b'python\0other-app\0--port\08765\0')
    assert not runtime.owned_server(42,root,proc)


def test_stale_pid_never_authorizes_stopping_unrelated_process(tmp_path,monkeypatch):
    pidfile=tmp_path/'pid';pidfile.write_text(str(os.getpid()))
    monkeypatch.setattr(runtime,'owned_server',lambda *args:False)
    def no_signal(*args):raise AssertionError('An unverified process must not be signalled')
    monkeypatch.setattr(os,'kill',no_signal)
    import signal
    if hasattr(signal,'pidfd_send_signal'):monkeypatch.setattr(signal,'pidfd_send_signal',no_signal)
    assert runtime.stop_owned_server(pidfile,tmp_path) is False


def test_chat_failure_is_visible_in_stream_and_activity_without_key(tmp_path,monkeypatch):
    from backend import models
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','private-key-marker')
    async def rejected(*args,**kwargs):
        raise ValueError('Proveedor rechazó private-key-marker por cuota HTTP429')
        yield
    monkeypatch.setattr(models,'stream',rejected)
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        response=client.post('/api/chat',json={'project':pid,'agent':'anto','content':'hola'})
    assert 'cuota HTTP429' in response.text and 'private-key-marker' not in response.text
    last=store.one("SELECT payload FROM events WHERE kind='chat' ORDER BY seq DESC LIMIT 1",())
    payload=json.loads(last['payload'])
    assert payload['status']=='Fallido' and 'cuota HTTP429' in payload['message']
    assert 'private-key-marker' not in last['payload']
