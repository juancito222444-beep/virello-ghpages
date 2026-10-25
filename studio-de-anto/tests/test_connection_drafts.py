"""Settings drafts must survive discovery and failed provider checks unchanged."""
import asyncio
import copy
import json

import httpx
import pytest
from fastapi.testclient import TestClient

from backend import cloud, credential_store, models, store
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY', '1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER', 'gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'], *service.get('aliases', ())):
            monkeypatch.delenv(name, raising=False)
    monkeypatch.setattr(models, 'LOCK', asyncio.Lock())


def seed_preferences():
    original = [{**agent, 'model': cloud.PROVIDERS['groq']['model'],
                 'instructions': 'Preferencia guardada ' + agent['id']}
                for agent in models.AGENTS]
    store.save_setting('provider', 'groq')
    store.save_setting('agents', original)
    store.save_setting('unrelated', {'preserve': True})
    credential_store.save('gemini', 'draft-test-gemini-key')
    credential_store.save('groq', 'draft-test-groq-key')
    return [{**agent, 'model': cloud.PROVIDERS['gemini']['model'],
             'instructions': 'Borrador nuevo ' + agent['id'],
             'name': 'Nombre que no debe sustituir el rol original'}
            for agent in models.AGENTS]


def mock_provider(monkeypatch, before, status=200):
    requests = []

    def handler(request):
        requests.append(request)
        # Even a successful check keeps preferences untouched until completion.
        assert store.rows('SELECT * FROM settings ORDER BY key') == before
        assert request.headers['x-goog-api-key'] == 'draft-test-gemini-key'
        if request.method == 'GET':
            return httpx.Response(200, json={'models': [{
                'name': 'models/' + cloud.PROVIDERS['gemini']['model'],
                'supportedGenerationMethods': ['generateContent'],
            }]})
        if status != 200:
            return httpx.Response(status, stream=httpx.ByteStream(b'{"error":{}}'))
        data = {'candidates': [{
            'content': {'parts': [{'text': 'MOCK conectado'}]}, 'finishReason': 'STOP',
        }]}
        return httpx.Response(200, stream=httpx.ByteStream(
            ('data: ' + json.dumps(data) + '\n\n').encode()))

    monkeypatch.setattr(models, '_api_client', lambda kind, timeout:
                        httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    return requests


def test_catalog_for_draft_provider_is_read_only_and_never_generates(monkeypatch):
    with TestClient(app) as client:
        seed_preferences()
        before = store.rows('SELECT * FROM settings ORDER BY key')
        credentials = credential_store.read_all()
        requests = mock_provider(monkeypatch, before)
        response = client.get('/api/models?provider=gemini')
        assert response.status_code == 200
        assert response.json()['provider'] == 'gemini'
        assert response.json()['connected'] and not response.json()['inference_verified']
        assert [request.method for request in requests] == ['GET']
        assert store.rows('SELECT * FROM settings ORDER BY key') == before
        assert credential_store.read_all() == credentials
        assert client.get('/api/settings').json()['provider'] == 'groq'


@pytest.mark.parametrize('status', [401, 403, 429, 500])
def test_failed_connection_keeps_saved_provider_agents_and_credentials(monkeypatch, status):
    with TestClient(app) as client:
        draft = seed_preferences()
        before = store.rows('SELECT * FROM settings ORDER BY key')
        credentials = credential_store.read_all()
        requests = mock_provider(monkeypatch, before, status)
        response = client.post('/api/connect', json={'provider': 'gemini', 'agents': draft})
        assert response.status_code == 422
        assert [request.method for request in requests] == ['GET', 'POST']
        assert store.rows('SELECT * FROM settings ORDER BY key') == before
        assert credential_store.read_all() == credentials


def test_successful_connection_commits_only_validated_draft_after_response(monkeypatch):
    with TestClient(app) as client:
        draft = seed_preferences()
        before = store.rows('SELECT * FROM settings ORDER BY key')
        credentials = credential_store.read_all()
        requests = mock_provider(monkeypatch, before)
        response = client.post('/api/connect', json={'provider': 'gemini', 'agents': draft})
        assert response.status_code == 200, response.text
        data = response.json()
        assert data['status']['inference_verified']
        assert data['settings']['provider'] == 'gemini'
        assert [agent['instructions'] for agent in data['settings']['agents']] == [
            agent['instructions'] for agent in draft]
        assert [agent['name'] for agent in data['settings']['agents']] == [
            agent['name'] for agent in models.AGENTS]
        assert 'Borrador nuevo anto' in json.loads(requests[1].content)[
            'systemInstruction']['parts'][0]['text']
        assert store.setting('agents', []) == data['settings']['agents']
        assert store.setting('unrelated', {}) == {'preserve': True}
        assert credential_store.read_all() == credentials


@pytest.mark.parametrize('field,value', [
    ('id', []), ('id', 'unknown'), ('instructions', 7), ('model', 'x' * 201),
])
def test_invalid_connection_draft_is_rejected_before_any_network(monkeypatch, field, value):
    def forbidden(*args, **kwargs):
        pytest.fail('An invalid draft must never create a provider client')

    monkeypatch.setattr(models, '_api_client', forbidden)
    with TestClient(app, raise_server_exceptions=False) as client:
        draft = seed_preferences()
        before = store.rows('SELECT * FROM settings ORDER BY key')
        draft = copy.deepcopy(draft)
        draft[0][field] = value
        response = client.post('/api/connect', json={'provider': 'gemini', 'agents': draft})
        assert response.status_code == 422, response.text
        assert store.rows('SELECT * FROM settings ORDER BY key') == before
