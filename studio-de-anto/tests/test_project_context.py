"""Continuity is scoped, bounded and read-only; no provider or original is read."""
import json

import pytest
from fastapi.testclient import TestClient

from backend import cloud, credential_store, models, store
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'], *service.get('aliases', ())):
            monkeypatch.delenv(name, raising=False)
    def forbidden(*args, **kwargs):
        pytest.fail('Preparing context must never create a model client')
    monkeypatch.setattr(models, '_api_client', forbidden)
    monkeypatch.setattr(models, '_client', forbidden)


def seed(pid, text='Solicitud propia', role='user'):
    mid, rid, fid = [store.uid() for _ in range(3)]
    with store.db() as connection:
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                           (mid, pid, 'anto', role, text, 'mock', '2026-10-25T12:00:00Z'))
        connection.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',
                           (rid, pid, None, 'Revisar cifras', 'Interrumpido', '{}',
                            '{"sensitive":"RESULT_MUST_NOT_BE_READ"}', '2026-10-25T13:00:00Z'))
        # A nonexistent path proves preparation does not need the original bytes.
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)',
                           (fid, pid, 'informe.pdf', '/never-read/private-path.pdf', '{}', '2026-10-25T14:00:00Z'))
    return mid, rid, fid


def test_context_is_project_scoped_traceable_and_does_not_claim_file_reading():
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        other = client.post('/api/projects', json={'name': 'Proyecto ajeno'}).json()['id']
        own = seed(pid)
        seed(other, 'OTHER_PROJECT_MUST_NOT_APPEAR')
        seed(pid, 'ASSISTANT_MUST_NOT_APPEAR', role='assistant')
        response = client.get('/api/projects/' + pid + '/context-draft')
        assert response.status_code == 200
        value = response.json()
        assert value['method'] == 'extractive' and value['max_characters'] == 6000
        assert set(own) <= {source['id'] for source in value['sources']}
        assert {source['kind'] for source in value['sources']} == {'message', 'run', 'file'}
        assert 'Solicitud a ANTO' in value['draft'] and 'Interrumpido' in value['draft']
        assert 'su contenido no se ha leído' in value['draft']
        for source in value['sources']:
            assert source['reference'] in value['draft']
            assert json.dumps(source['excerpt'], ensure_ascii=False) in value['draft']
        for marker in ('OTHER_PROJECT', 'ASSISTANT_MUST', 'RESULT_MUST', '/never-read'):
            assert marker not in json.dumps(value)
        assert client.get('/api/projects/missing/context-draft').status_code == 404


def test_long_history_is_bounded_deterministic_and_explicitly_partial():
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        ids = [seed(pid, str(index) + '😀\n' * 5000)[0] for index in range(8)]
        first = client.get('/api/projects/' + pid + '/context-draft').json()
        assert first == client.get('/api/projects/' + pid + '/context-draft').json()
        assert first['omitted'] and len(first['draft']) <= 4500
        assert len(first['sources']) <= 12 and 'Selección parcial' in first['draft']
        assert [item['id'] for item in first['sources'] if item['kind'] == 'message'] == ids[-4:][::-1]


def test_preparing_repeatedly_preserves_note_usage_records_and_credentials():
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        seed(pid)
        client.put('/api/projects/' + pid + '/memory', json={'summary': 'NOTA ANTERIOR'})
        credential_store.save('gemini', 'synthetic-context-key')
        client.get('/api/usage')  # Initialize only as a test fixture, before snapshot.
        with store.db() as connection:
            before = '\n'.join(connection.iterdump())
        key = (store.ROOT / 'private/credentials.json').read_bytes()
        for _ in range(2):
            result = client.get('/api/projects/' + pid + '/context-draft')
            assert result.status_code == 200 and 'synthetic-context-key' not in result.text
        with store.db() as connection:
            assert '\n'.join(connection.iterdump()) == before
        assert (store.ROOT / 'private/credentials.json').read_bytes() == key
        assert client.get('/api/projects/' + pid + '/memory').json()['summary'] == 'NOTA ANTERIOR'


def test_empty_project_produces_an_honest_draft_without_erasing_existing_note():
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        client.put('/api/projects/' + pid + '/memory', json={'summary': 'Objetivo manual'})
        result = client.get('/api/projects/' + pid + '/context-draft').json()
        assert result['sources'] == [] and not result['omitted']
        assert 'No hay solicitudes' in result['draft']
        assert client.get('/api/projects/' + pid + '/memory').json()['summary'] == 'Objetivo manual'


def test_only_explicitly_saved_draft_reaches_future_agent_conversations(monkeypatch):
    seen = []
    async def fake_stream(agent, messages, **kwargs):
        seen.append((agent, messages))
        yield 'MOCK: contexto recibido'
    monkeypatch.setattr(models, 'stream', fake_stream)
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        seed(pid, 'Objetivo único que debe retomar otro agente')
        draft = client.get('/api/projects/' + pid + '/context-draft').json()['draft']
        assert client.get('/api/projects/' + pid + '/memory').json()['summary'] == ''
        assert client.put('/api/projects/' + pid + '/memory', json={'summary': draft}).status_code == 200
        result = client.post('/api/chat', json={'project': pid, 'agent': 'vera', 'content': 'Retoma el proyecto.'})
        assert '"done": true' in result.text
        assert seen[0][0] == 'vera'
        assert any(draft.strip() in message['content'] for message in seen[0][1])
