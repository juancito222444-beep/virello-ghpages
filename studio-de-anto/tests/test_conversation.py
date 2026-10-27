"""Conversation context/progress contracts; HTTP responses are protocol mocks."""
import asyncio
import json

import httpx
import pytest
from fastapi.testclient import TestClient

from backend import conversation, models, store
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()
    monkeypatch.setattr(models, 'LOCK', asyncio.Lock())


def packets(response):
    return [json.loads(p[6:]) for p in response.text.split('\n\n') if p.startswith('data: ')]


def test_general_chat_retains_custom_instructions_and_continues_saved_history(monkeypatch):
    configured = [{**a, 'model': 'protocol-mock', 'instructions': 'Usa ejemplos cortos.'} for a in models.AGENTS]
    store.save_setting('agents', configured)
    requests = []

    def provider(request):
        requests.append(json.loads(request.content))
        answer = 'MOCK: primer borrador' if len(requests) == 1 else 'MOCK: continuación'
        return httpx.Response(200, content=(json.dumps({'message': {'content': answer}}) + '\n{"done":true}\n').encode())

    monkeypatch.setattr(models, '_client', lambda timeout: httpx.AsyncClient(transport=httpx.MockTransport(provider)))
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        first = client.post('/api/chat', json={'project': pid, 'agent': 'anto', 'content': 'Hola, ayúdame a escribir una historia de robots.'})
        assert packets(first)[-1]['done']
        # A new HTTP request reconstructs the conversation from SQLite.
        second = client.post('/api/chat', json={'project': pid, 'agent': 'anto', 'content': 'Continúa con el segundo párrafo.'})
        assert packets(second)[-1]['done']
        sent = requests[1]['messages']
        assert sent[-1] == {'role': 'user', 'content': 'Continúa con el segundo párrafo.'}
        assert {'role': 'assistant', 'content': 'MOCK: primer borrador'} in sent
        assert any(m['role'] == 'user' and 'historia de robots' in m['content'] for m in sent)
        system = sent[0]['content']
        assert 'No exijas un CSV' in system and 'historial' in system and 'Usa ejemplos cortos.' in system
        assert store.setting('agents', []) == configured
        assert [p.get('status') for p in packets(second) if 'status' in p] == ['waiting', 'generating']
        assert [m['role'] for m in client.get('/api/messages', params={'project': pid, 'agent': 'anto'}).json()] == ['user', 'assistant', 'user', 'assistant']


def test_context_is_scoped_and_same_timestamp_history_keeps_insertion_order(monkeypatch):
    sent = []

    async def protocol_stream(agent, messages):
        sent.extend(messages)
        yield 'MOCK: continuidad'

    monkeypatch.setattr(models, 'stream', protocol_stream)
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        other = client.post('/api/projects', json={'name': 'PROYECTO_AJENO'}).json()['id']
        with store.db() as c:
            for i in range(20):
                c.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)', (store.uid(), pid, 'anto', 'user' if i % 2 == 0 else 'assistant', f'Turno {i}', 'mock', '2000-01-01'))
            c.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)', (store.uid(), other, 'anto', 'user', 'MENSAJE_AJENO', 'mock', '2000-01-02'))
            c.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)', (store.uid(), pid, 'vera', 'user', 'OTRO_AGENTE', 'mock', '2000-01-02'))
            c.execute('INSERT INTO files VALUES(?,?,?,?,?,?)', (store.uid(), pid, 'ventas-propias.csv', '/never-read.csv', '{}', '2000-01-01'))
            c.execute('INSERT INTO files VALUES(?,?,?,?,?,?)', (store.uid(), other, 'archivo-ajeno.csv', '/never-read.csv', '{}', '2000-01-01'))
        response = client.post('/api/chat', json={'project': pid, 'agent': 'anto', 'content': 'Continúa'})
        assert packets(response)[-1]['done']
        old = [m['content'] for m in sent if m['content'].startswith('Turno ')]
        assert old == [f'Turno {i}' for i in range(6, 20)]
        context = '\n'.join(m['content'] for m in sent)
        assert 'ventas-propias.csv' in context and 'contenido no se ha leído' in context
        assert all(s not in context for s in ['MENSAJE_AJENO', 'OTRO_AGENTE', 'archivo-ajeno.csv'])


def test_blank_message_is_rejected_without_persisting_or_calling_model(monkeypatch):
    async def forbidden(*args, **kwargs):
        pytest.fail('Blank messages must not request inference')
        yield ''

    monkeypatch.setattr(models, 'stream', forbidden)
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        assert client.post('/api/chat', json={'project': pid, 'agent': 'anto', 'content': ' \n '}).status_code == 422
        assert not store.rows('SELECT * FROM messages')


def test_idle_progress_does_not_duplicate_reads_and_cancellation_releases_model_slot():
    async def check():
        lock = asyncio.Lock()
        closed = asyncio.Event()
        calls = 0

        async def delayed_model():
            nonlocal calls
            async with lock:
                calls += 1
                try:
                    await asyncio.Event().wait()
                    yield 'never'
                finally:
                    closed.set()

        async def connected():
            return False

        stream = conversation.progress_tokens(delayed_model(), connected, interval=.001)
        assert (await anext(stream))['status'] == 'waiting'
        assert (await asyncio.wait_for(anext(stream), 1))['status'] == 'waiting'
        assert (await asyncio.wait_for(anext(stream), 1))['status'] == 'waiting'
        assert lock.locked() and calls == 1
        await stream.aclose()
        assert closed.is_set() and not lock.locked()

    asyncio.run(check())


def test_progress_closes_source_when_client_disconnects_before_first_token():
    async def check():
        closed = asyncio.Event()

        async def delayed():
            try:
                await asyncio.Event().wait()
                yield 'never'
            finally:
                closed.set()

        async def disconnected():
            return True

        stream = conversation.progress_tokens(delayed(), disconnected, interval=.001)
        await anext(stream)
        with pytest.raises(StopAsyncIteration):
            await asyncio.wait_for(anext(stream), 1)
        assert closed.is_set()

    asyncio.run(check())
