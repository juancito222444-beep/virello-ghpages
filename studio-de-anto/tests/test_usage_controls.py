"""Usage controls exercise local storage only, without provider requests or keys."""

import asyncio
import json
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from threading import Barrier

import pytest

from backend import store, usage


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    monkeypatch.setattr(usage, '_now', lambda: datetime(2026, 10, 24, 12, tzinfo=timezone.utc))


def saved_rows():
    return store.rows('SELECT * FROM api_usage ORDER BY created,id')


def test_lazy_setup_and_policy_preserve_existing_data():
    store.init()
    before = store.rows('SELECT * FROM projects')
    store.save_setting('custom_setting', {'keep': 'existing preference'})
    assert usage.policy() == {'daily_requests': 100, 'max_output_tokens': 1024, 'concise': True}
    saved = usage.save_policy({'daily_requests': 7, 'max_output_tokens': 512, 'concise': False})
    assert usage.policy() == saved
    assert store.setting('usage_policy', None) == saved
    assert store.setting('custom_setting', None) == {'keep': 'existing preference'}
    assert store.rows('SELECT * FROM projects') == before


def test_lazy_setup_follows_changed_store_root(tmp_path, monkeypatch):
    usage.save_policy({'daily_requests': 2, 'max_output_tokens': 4096, 'concise': False})
    other = tmp_path / 'another-installation'
    other.mkdir()
    monkeypatch.setattr(store, 'ROOT', other)
    assert usage.policy()['daily_requests'] == 100
    with usage.tracking('gemini', 'model-a'):
        pass
    assert usage.summary()['attempted'] == 1


@pytest.mark.parametrize('value', [
    {},
    [],
    {'daily_requests': 100, 'max_output_tokens': 1024, 'concise': True, 'extra': 1},
    {'daily_requests': 0, 'max_output_tokens': 1024, 'concise': True},
    {'daily_requests': 10001, 'max_output_tokens': 1024, 'concise': True},
    {'daily_requests': True, 'max_output_tokens': 1024, 'concise': True},
    {'daily_requests': '100', 'max_output_tokens': 1024, 'concise': True},
    {'daily_requests': 100, 'max_output_tokens': 511, 'concise': True},
    {'daily_requests': 100, 'max_output_tokens': 4097, 'concise': True},
    {'daily_requests': 100, 'max_output_tokens': 1024.0, 'concise': True},
    {'daily_requests': 100, 'max_output_tokens': 1024, 'concise': 1},
])
def test_policy_validation_is_strict_and_does_not_change_saved_policy(value):
    saved = usage.policy()
    with pytest.raises(ValueError):
        usage.save_policy(value)
    assert usage.policy() == saved


def test_corrupted_stored_policy_blocks_until_explicitly_repaired():
    usage.policy()
    store.save_setting('usage_policy', {'daily_requests': -1})
    with pytest.raises(usage.UsagePolicyError, match='bloqueadas'):
        usage.policy()
    with store.db() as c:
        c.execute('UPDATE settings SET value=? WHERE key=?', ('not json', 'usage_policy'))
    with pytest.raises(usage.UsagePolicyError, match='contadores se conservan'):
        usage.policy()
    restored = usage.save_policy({'daily_requests': 3, 'max_output_tokens': 512, 'concise': True})
    assert usage.policy() == restored


def test_failures_count_and_cutoff_happens_before_request_body():
    usage.save_policy({'daily_requests': 1, 'max_output_tokens': 1024, 'concise': True})
    entered = []
    with pytest.raises(ValueError, match='provider failure'):
        with usage.tracking('gemini', 'model-a'):
            entered.append('first')
            assert usage.summary()['remaining'] == 0
            raise ValueError('provider failure')
    with pytest.raises(ValueError, match='00:00 UTC'):
        with usage.tracking('gemini', 'model-a'):
            entered.append('must not run')
    assert entered == ['first']
    assert usage.summary()['failed'] == 1
    assert len(saved_rows()) == 1
    assert saved_rows()[0]['status'] == 'failed'


def test_atomic_daily_reservation_allows_only_available_attempts():
    usage.save_policy({'daily_requests': 5, 'max_output_tokens': 1024, 'concise': True})
    ready = Barrier(16)

    def infer(_):
        ready.wait(timeout=15)
        try:
            with usage.tracking('groq', 'model-b'):
                pass
        except ValueError:
            return False
        return True

    with ThreadPoolExecutor(max_workers=16) as pool:
        successes = list(pool.map(infer, range(16)))
    assert sum(successes) == 5
    result = usage.summary()
    assert result['attempted'] == result['completed'] == 5
    assert result['remaining'] == 0


@pytest.mark.parametrize(('provider', 'metadata'), [
    ('gemini', {'usageMetadata': {'promptTokenCount': 11, 'candidatesTokenCount': 4, 'totalTokenCount': 15}}),
    ('groq', {'usage': {'prompt_tokens': 11, 'completion_tokens': 4, 'total_tokens': 15}}),
    ('groq', {'x_groq': {'usage': {'prompt_tokens': 11, 'completion_tokens': 4, 'total_tokens': 15}}}),
])
def test_provider_token_metadata_is_consumed_without_response_or_secret_fields(provider, metadata):
    response = {**metadata, 'response': 'PRIVATE RESPONSE', 'api_key': 'SECRET VALUE'}
    with usage.tracking(provider, 'model-a'):
        usage.observe(response, provider)
        usage.observe(response, provider)  # Cumulative counts must not be doubled.
    row = saved_rows()[0]
    assert (row['input_tokens'], row['output_tokens'], row['total_tokens']) == (11, 4, 15)
    assert set(row) == {'id', 'day', 'provider', 'model', 'status', 'input_tokens',
                        'output_tokens', 'total_tokens', 'created'}
    serialized = json.dumps(row)
    assert 'PRIVATE RESPONSE' not in serialized and 'SECRET VALUE' not in serialized
    result = usage.summary()
    assert result['input_tokens'] == 11 and result['output_tokens'] == 4
    assert result['total_tokens'] == 15 and result['unknown_attempts'] == 0
    assert result['by_provider'][provider]['total_tokens'] == 15


@pytest.mark.parametrize('bad', [None, {}, [], 'not metadata', {'usageMetadata': []},
    {'usageMetadata': {'promptTokenCount': True, 'candidatesTokenCount': -1, 'totalTokenCount': 10**30}},
    {'usageMetadata': {'promptTokenCount': '3', 'candidatesTokenCount': 2.5, 'totalTokenCount': False}},
])
def test_missing_or_malformed_usage_stays_unknown_and_cannot_fail_inference(bad):
    with usage.tracking('gemini', 'model-a'):
        usage.observe(bad, 'gemini')
    row = saved_rows()[0]
    assert row['status'] == 'completed'
    assert row['input_tokens'] is row['output_tokens'] is row['total_tokens'] is None
    assert usage.summary()['unknown_attempts'] == 1


def test_partial_metadata_preserves_unknowns_and_real_zero_is_known():
    with usage.tracking('gemini', 'model-a'):
        usage.observe({'usageMetadata': {'promptTokenCount': 0}}, 'gemini')
        usage.observe({'usageMetadata': {'candidatesTokenCount': 2}}, 'gemini')
        usage.observe({'usageMetadata': {'promptTokenCount': 'invalid'}}, 'gemini')
    row = saved_rows()[0]
    assert row['input_tokens'] == 0 and row['output_tokens'] == 2
    assert row['total_tokens'] is None
    assert usage.summary()['unknown_attempts'] == 1
    with usage.tracking('groq', 'model-b'):
        usage.observe({'usage': {'prompt_tokens': 0, 'completion_tokens': 0, 'total_tokens': 0}}, 'groq')
    result = usage.summary()
    assert result['unknown_attempts'] == 1
    assert result['by_provider']['groq']['unknown_attempts'] == 0


def test_context_is_cleaned_after_exception_and_mismatched_provider_is_ignored():
    data = {'usageMetadata': {'promptTokenCount': 3, 'candidatesTokenCount': 2, 'totalTokenCount': 5}}
    with pytest.raises(RuntimeError, match='failed'):
        with usage.tracking('gemini', 'model-a'):
            usage.observe(data, 'groq')
            raise RuntimeError('failed')
    usage.observe(data, 'gemini')
    assert usage._current_attempt.get() is None
    row = saved_rows()[0]
    assert row['status'] == 'failed' and row['total_tokens'] is None


def test_cancellation_and_generator_close_release_context_and_mark_terminal_attempts():
    async def exercise():
        started = asyncio.Event()

        async def request():
            with usage.tracking('gemini', 'model-a'):
                started.set()
                await asyncio.Future()

        task = asyncio.create_task(request())
        await started.wait()
        task.cancel()
        with pytest.raises(asyncio.CancelledError):
            await task
        assert usage._current_attempt.get() is None

    asyncio.run(exercise())

    def stream():
        with usage.tracking('groq', 'model-b'):
            yield 'partial response'

    response = stream()
    assert next(response) == 'partial response'
    response.close()
    assert usage._current_attempt.get() is None
    assert [row['status'] for row in saved_rows()] == ['cancelled', 'cancelled']
    result = usage.summary()
    assert result['attempted'] == result['cancelled'] == result['unknown_attempts'] == 2


def test_nested_tracking_restores_outer_context():
    with usage.tracking('gemini', 'outer'):
        with usage.tracking('groq', 'inner'):
            usage.observe({'usage': {'total_tokens': 2}}, 'groq')
        usage.observe({'usageMetadata': {'totalTokenCount': 7}}, 'gemini')
    rows = {row['model']: row for row in saved_rows()}
    assert rows['outer']['total_tokens'] == 7 and rows['inner']['total_tokens'] == 2
    assert usage._current_attempt.get() is None


def test_limit_resets_by_utc_day_and_history_is_preserved(monkeypatch):
    usage.save_policy({'daily_requests': 1, 'max_output_tokens': 1024, 'concise': True})
    # Local date is October 25, but this instant is still October 24 in UTC.
    monkeypatch.setattr(usage, '_now', lambda: datetime(2026, 10, 25, 1, 59,
                                                       tzinfo=timezone(timedelta(hours=2))))
    with usage.tracking('gemini', 'model-a'):
        pass
    assert usage.summary()['day'] == '2026-10-24'
    with pytest.raises(ValueError, match='00:00 UTC'):
        with usage.tracking('gemini', 'model-a'):
            pytest.fail('The same UTC day must stay limited')
    monkeypatch.setattr(usage, '_now', lambda: datetime(2026, 10, 25, tzinfo=timezone.utc))
    assert usage.summary()['remaining'] == 1
    with usage.tracking('groq', 'model-b'):
        pass
    result = usage.summary()
    assert result['day'] == '2026-10-25' and result['timezone'] == 'UTC'
    assert result['attempted'] == 1 and result['remaining'] == 0
    assert set(result['by_provider']) == {'groq'}
    assert len(saved_rows()) == 2
