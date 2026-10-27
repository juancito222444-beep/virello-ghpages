"""Verify advertised-model recovery through real HTTP parsing and atomic key save."""
import asyncio
import json

import httpx
import pytest
from fastapi.testclient import TestClient

from backend import cloud, credential_store, models, store
from backend.app import app


KEY = 'model-recovery-candidate-key-marker'
OLD_KEY = 'model-recovery-previous-key-marker'
PREFERRED = cloud.PROVIDERS['gemini']['model']
ALTERNATIVES = [
    'gemini-2.5-flash-lite-recovery-a',
    'gemini-2.5-flash-lite-recovery-b',
    'gemini-2.5-flash-lite-recovery-c',
]
RETAINED = 'gemini-2.5-flash-lite-retained'


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY', '1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER', 'gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'], *service.get('aliases', ())):
            monkeypatch.delenv(name, raising=False)
    monkeypatch.setattr(models, 'LOCK', asyncio.Lock())


def preferences():
    saved = [
        {**agent, 'model': PREFERRED, 'instructions': 'Preferencia de ' + agent['id']}
        for agent in models.AGENTS
    ]
    # Existing configurations may contain the native resource prefix.
    saved[0]['model'] = 'models/' + PREFERRED
    store.save_setting('provider', 'gemini')
    store.save_setting('agents', saved)
    store.save_setting('unrelated', {'keep': 'original'})
    credential_store.save('gemini', OLD_KEY)
    return saved


def mock_generation(monkeypatch, catalog, outcomes, saved, catalog_status=200):
    seen = []
    attempted = []

    def handler(request):
        seen.append(request)
        # Candidate credentials apply to both discovery and every generation,
        # while the working key and settings remain untouched until success.
        assert request.headers['x-goog-api-key'] == KEY
        assert 'authorization' not in request.headers
        assert request.url.scheme == 'https'
        assert request.url.host == 'generativelanguage.googleapis.com'
        assert KEY not in str(request.url)
        assert KEY not in request.content.decode()
        assert credential_store.read_all() == {'gemini': OLD_KEY}
        assert store.setting('provider', None) == 'gemini'
        assert store.setting('agents', []) == saved
        if request.method == 'GET':
            assert request.url.path == '/v1beta/models'
            if catalog_status != 200:
                body = json.dumps({'error': {'message': KEY}}).encode()
                return httpx.Response(catalog_status, stream=httpx.ByteStream(body))
            return httpx.Response(200, json={'models': [
                {'name': 'models/' + name, 'supportedGenerationMethods': ['generateContent']}
                for name in catalog
            ]})
        assert request.method == 'POST'
        assert request.url.params.get('alt') == 'sse'
        name = request.url.path.removeprefix('/v1beta/models/').removesuffix(':streamGenerateContent')
        assert request.url.path == '/v1beta/models/' + name + ':streamGenerateContent'
        assert name in catalog
        attempted.append(name)
        status = outcomes[name]
        if status == 'network':
            raise httpx.ConnectError('Private upstream failure ' + KEY, request=request)
        if status != 200:
            body = json.dumps({'error': {'message': KEY}}).encode()
            return httpx.Response(status, stream=httpx.ByteStream(body))
        reply = {'candidates': [{
            'content': {'parts': [{'text': 'MOCK conectado'}]}, 'finishReason': 'STOP',
        }]}
        body = ('data: ' + json.dumps(reply) + '\n\n').encode()
        return httpx.Response(200, stream=httpx.ByteStream(body))

    def api_client(kind, timeout):
        assert kind == 'gemini', 'Model recovery must stay with the selected provider'
        return httpx.AsyncClient(transport=httpx.MockTransport(handler), follow_redirects=False)

    monkeypatch.setattr(models, '_api_client', api_client)
    return seen, attempted


def save_candidate(client):
    response = client.post('/api/credentials', json={'provider': 'gemini', 'api_key': KEY})
    assert KEY not in response.text
    assert OLD_KEY not in response.text
    return response


def assert_success(response, saved, working, expected_models):
    assert response.status_code == 200, response.text
    data = response.json()
    assert data['settings']['provider'] == data['status']['provider'] == 'gemini'
    assert data['proof']['verified'] and data['status']['inference_verified']
    assert data['proof']['response'] == 'MOCK conectado'
    assert data['proof']['model'] == data['status']['verified_model'] == working
    assert data['status']['models'] == expected_models
    assert [a['instructions'] for a in data['settings']['agents']] == [a['instructions'] for a in saved]
    assert store.setting('unrelated', None) == {'keep': 'original'}
    assert credential_store.read_all() == {'gemini': KEY}
    assert KEY not in json.dumps(store.rows('SELECT * FROM settings'))
    return data


def test_preferred_404_uses_next_advertised_model_and_preserves_other_choices(monkeypatch):
    with TestClient(app) as client:
        saved = preferences()
        saved[2]['model'] = RETAINED
        store.save_setting('agents', saved)
        catalog = [PREFERRED, ALTERNATIVES[0], RETAINED]
        seen, attempted = mock_generation(monkeypatch, catalog, {
            PREFERRED: 404, ALTERNATIVES[0]: 200, RETAINED: 200,
        }, saved)
        response = save_candidate(client)
        data = assert_success(response, saved, ALTERNATIVES[0], [ALTERNATIVES[0], RETAINED])
        expected = [RETAINED if a['id'] == 'vera' else ALTERNATIVES[0] for a in saved]
        assert [a['model'] for a in data['settings']['agents']] == expected
        assert store.setting('agents', []) == data['settings']['agents']
    assert attempted == [PREFERRED, ALTERNATIVES[0]]
    assert [r.method for r in seen] == ['GET', 'POST', 'POST']


def test_two_unavailable_models_recover_on_third_unique_advertised_model(monkeypatch):
    with TestClient(app) as client:
        saved = preferences()
        saved[1]['model'] = ALTERNATIVES[0]
        saved[2]['model'] = ALTERNATIVES[2]
        store.save_setting('agents', saved)
        catalog = [PREFERRED, *ALTERNATIVES]
        seen, attempted = mock_generation(monkeypatch, catalog, {
            PREFERRED: 404, ALTERNATIVES[0]: 404,
            ALTERNATIVES[1]: 200, ALTERNATIVES[2]: 200,
        }, saved)
        response = save_candidate(client)
        data = assert_success(response, saved, ALTERNATIVES[1], ALTERNATIVES[1:])
        expected = [ALTERNATIVES[2] if a['id'] == 'vera' else ALTERNATIVES[1] for a in saved]
        assert [a['model'] for a in data['settings']['agents']] == expected
    assert attempted == [PREFERRED, ALTERNATIVES[0], ALTERNATIVES[1]]
    assert [r.method for r in seen] == ['GET', 'POST', 'POST', 'POST']


def test_four_unavailable_advertised_models_stop_after_three_and_keep_previous_state(monkeypatch):
    with TestClient(app, raise_server_exceptions=False) as client:
        saved = preferences()
        before = client.get('/api/settings').json()
        catalog = [PREFERRED, *ALTERNATIVES]
        seen, attempted = mock_generation(monkeypatch, catalog, dict.fromkeys(catalog, 404), saved)
        response = save_candidate(client)
        assert response.status_code == 422
        assert 'modelo' in response.json()['detail'].lower()
        assert credential_store.read_all() == {'gemini': OLD_KEY}
        assert client.get('/api/settings').json() == before
        assert store.setting('agents', []) == saved
        assert store.setting('unrelated', None) == {'keep': 'original'}
    assert attempted == [PREFERRED, ALTERNATIVES[0], ALTERNATIVES[1]]
    assert [r.method for r in seen] == ['GET', 'POST', 'POST', 'POST']


@pytest.mark.parametrize('failure', [401, 403, 429, 'network'])
def test_auth_quota_and_transport_failures_never_try_another_model(monkeypatch, failure):
    with TestClient(app, raise_server_exceptions=False) as client:
        saved = preferences()
        before = client.get('/api/settings').json()
        catalog = [PREFERRED, ALTERNATIVES[0]]
        seen, attempted = mock_generation(monkeypatch, catalog, {
            PREFERRED: failure, ALTERNATIVES[0]: 200,
        }, saved)
        response = save_candidate(client)
        assert response.status_code == 422
        assert credential_store.read_all() == {'gemini': OLD_KEY}
        assert client.get('/api/settings').json() == before
    assert attempted == [PREFERRED]
    assert [r.method for r in seen] == ['GET', 'POST']


def test_successful_configured_model_is_tried_first_and_keeps_preferences(monkeypatch):
    with TestClient(app) as client:
        saved = preferences()
        saved[0]['model'] = ALTERNATIVES[0]
        store.save_setting('agents', saved)
        catalog = [PREFERRED, ALTERNATIVES[0]]
        seen, attempted = mock_generation(monkeypatch, catalog, {
            PREFERRED: 200, ALTERNATIVES[0]: 200,
        }, saved)
        response = save_candidate(client)
        data = assert_success(response, saved, ALTERNATIVES[0], catalog)
        assert data['settings']['agents'] == saved
    assert attempted == [ALTERNATIVES[0]]
    assert [r.method for r in seen] == ['GET', 'POST']


def test_catalog_404_reports_discovery_failure_without_generation_or_changes(monkeypatch):
    with TestClient(app, raise_server_exceptions=False) as client:
        saved = preferences()
        before = client.get('/api/settings').json()
        seen, attempted = mock_generation(monkeypatch, [PREFERRED], {}, saved, catalog_status=404)
        response = save_candidate(client)
        assert response.status_code == 422
        assert 'catálogo' in response.json()['detail'].lower()
        assert credential_store.read_all() == {'gemini': OLD_KEY}
        assert client.get('/api/settings').json() == before
    assert attempted == []
    assert [r.method for r in seen] == ['GET']


def test_unavailable_flash_does_not_escalate_to_advertised_pro_model(monkeypatch):
    with TestClient(app, raise_server_exceptions=False) as client:
        saved = preferences()
        before = client.get('/api/settings').json()
        pro = 'gemini-2.5-pro'
        seen, attempted = mock_generation(monkeypatch, [PREFERRED, pro], {
            PREFERRED: 404, pro: 200,
        }, saved)
        response = save_candidate(client)
        assert response.status_code == 422
        assert credential_store.read_all() == {'gemini': OLD_KEY}
        assert client.get('/api/settings').json() == before
    assert attempted == [PREFERRED]
    assert [r.method for r in seen] == ['GET', 'POST']
