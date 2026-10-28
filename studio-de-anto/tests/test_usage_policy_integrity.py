"""Damaged local policies must block inference and remain explicitly repairable."""

import json
from datetime import datetime, timezone

import pytest

from backend import store, usage


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    monkeypatch.setattr(usage, '_now', lambda: datetime(2026, 10, 27, 12, tzinfo=timezone.utc))


def replace_raw_policy(raw):
    # Bypass the public writer to reproduce an already damaged database value.
    with store.db() as c:
        c.execute('INSERT OR REPLACE INTO settings(key,value) VALUES(?,?)',
                  ('usage_policy', raw))


@pytest.mark.parametrize('raw', [
    'not json',
    '',
    'null',
    '[]',
    '"not a policy"',
    '{}',
    '{"daily_requests":1,"max_output_tokens":512}',
    '{"daily_requests":true,"max_output_tokens":512,"concise":true}',
    '{"daily_requests":1,"max_output_tokens":4097,"concise":true}',
    '{"daily_requests":1,"max_output_tokens":512,"concise":0}',
    '{"daily_requests":1,"daily_requests":100,"max_output_tokens":512,"concise":true}',
    b'\xff',
    '[' * 1200 + '0' + ']' * 1200,
])
def test_existing_invalid_policy_blocks_without_reserving_or_overwriting(raw):
    usage.save_policy({'daily_requests': 1, 'max_output_tokens': 512, 'concise': True})
    with usage.tracking('gemini', 'model-a'):
        usage.observe({'usageMetadata': {'totalTokenCount': 9}}, 'gemini')
    before = store.rows('SELECT * FROM api_usage ORDER BY id')
    replace_raw_policy(raw)

    for read in (usage.policy, usage.summary):
        with pytest.raises(usage.UsagePolicyError, match='Guarda de nuevo los límites'):
            read()
    with pytest.raises(usage.UsageReservationError, match='bloqueadas'):
        with usage.tracking('gemini', 'model-a'):
            pytest.fail('A corrupt policy must block before executing the request body')

    assert store.rows('SELECT * FROM api_usage ORDER BY id') == before
    assert usage._current_attempt.get() is None
    assert store.one('SELECT value FROM settings WHERE key=?', ('usage_policy',))['value'] == raw


def test_missing_policy_is_a_legitimate_first_run_with_default_limits():
    assert usage.policy() == {'daily_requests': 100, 'max_output_tokens': 1024, 'concise': True}
    assert store.one('SELECT value FROM settings WHERE key=?', ('usage_policy',)) is None
    with usage.tracking('groq', 'model-a'):
        pass
    result = usage.summary()
    assert result['attempted'] == result['completed'] == 1
    assert result['remaining'] == 99


def test_explicit_repair_preserves_prior_attempts_tokens_and_other_preferences():
    original = {'daily_requests': 1, 'max_output_tokens': 512, 'concise': True}
    usage.save_policy(original)
    store.save_setting('custom_preference', {'keep': 'my setting'})
    with usage.tracking('gemini', 'model-a'):
        usage.observe({'usageMetadata': {'promptTokenCount': 3, 'candidatesTokenCount': 4,
                                         'totalTokenCount': 7}}, 'gemini')
    before = store.rows('SELECT * FROM api_usage ORDER BY id')
    replace_raw_policy('damaged-policy-marker')

    with pytest.raises(ValueError):
        usage.save_policy({**original, 'daily_requests': 0})
    with pytest.raises(usage.UsagePolicyError):
        usage.policy()
    assert usage.save_policy(original) == original
    result = usage.summary()
    assert result['policy'] == original
    assert result['attempted'] == result['completed'] == 1
    assert result['remaining'] == 0 and result['total_tokens'] == 7
    assert store.rows('SELECT * FROM api_usage ORDER BY id') == before
    assert store.setting('custom_preference', None) == {'keep': 'my setting'}

    # Repairing a policy never erases the already exhausted daily quota.
    with pytest.raises(usage.UsageLimitExceeded):
        with usage.tracking('gemini', 'model-a'):
            pytest.fail('Previously consumed attempts must survive policy repair')

    usage.save_policy({**original, 'daily_requests': 2})
    with usage.tracking('groq', 'model-b'):
        pass
    assert usage.summary()['attempted'] == 2


def test_api_explains_policy_damage_and_allows_repair_without_model_calls(monkeypatch):
    from fastapi.testclient import TestClient
    from backend import models
    from backend.app import app

    monkeypatch.setenv('STUDIO_CLOUD_ONLY', '1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER', 'gemini')

    def forbidden(*args, **kwargs):
        pytest.fail('A damaged policy must never reach a model API')

    monkeypatch.setattr(models, '_api_client', forbidden)
    with TestClient(app, raise_server_exceptions=False) as client:
        project = client.get('/api/projects').json()[0]['id']
        original = {'daily_requests': 1, 'max_output_tokens': 512, 'concise': True}
        usage.save_policy(original)
        with usage.tracking('gemini', 'model-a'):
            pass
        before = store.rows('SELECT * FROM api_usage ORDER BY id')
        marker = 'sensitive-corrupt-policy-marker'
        replace_raw_policy(json.dumps({**original, 'daily_requests': marker}))

        summary = client.get('/api/usage')
        blocked = client.post('/api/chat', json={'project': project, 'agent': 'anto',
                                                'content': 'Do not send this request'})
        for response in (summary, blocked):
            assert response.status_code == 422
            detail = response.json()['detail']
            assert 'bloqueadas' in detail and 'Configuración' in detail
            assert response.json()['error_code'] == 'USAGE_POLICY_INVALID'
            assert marker not in response.text
        assert client.get('/api/projects').status_code == 200
        assert client.get('/api/health').status_code == 200
        invalid = client.put('/api/usage/policy', json={**original, 'daily_requests': 0})
        assert invalid.status_code == 422
        assert client.get('/api/usage').status_code == 422

        repaired = client.put('/api/usage/policy', json=original)
        assert repaired.status_code == 200 and repaired.json() == original
        refreshed = client.get('/api/usage')
        assert refreshed.status_code == 200
        assert refreshed.json()['attempted'] == 1 and refreshed.json()['remaining'] == 0
        assert store.rows('SELECT * FROM api_usage ORDER BY id') == before
