"""Downloadable diagnostics reveal states, never private data or API activity."""
import json
import os
import sqlite3
import stat
from datetime import datetime, timezone

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from backend import cloud, credential_store, models, runtime, store, system_status, usage


LOADED = 'a' * 64
MARKER = 'private-diagnostic-marker'


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    monkeypatch.setattr(runtime, 'code_version', lambda: LOADED)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY', '1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER', 'gemini')
    for provider in cloud.PROVIDERS.values():
        for name in (provider['secret'], *provider.get('aliases', ())):
            monkeypatch.delenv(name, raising=False)
    store.init()
    usage.recover_interrupted()
    store.save_setting('provider', 'gemini')

    def forbidden(*args, **kwargs):
        pytest.fail('Diagnostics must not contact or verify a model')

    monkeypatch.setattr(models, '_api_client', forbidden)
    monkeypatch.setattr(models, 'available', forbidden)


def report(**kwargs):
    return system_status.report(release='1.7.0', loaded_code_version=LOADED, **kwargs)


def checks(value):
    return {item['id']: item for item in value['checks']}


def test_public_report_is_safe_for_download_without_provider_or_content_queries(tmp_path):
    credential_store.save('gemini', MARKER)
    store.save_setting('openai_url', 'https://' + MARKER + '.invalid/v1')
    with store.db() as connection:
        connection.execute('UPDATE projects SET name=?', (MARKER,))
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                           (store.uid(), store.rows('SELECT id FROM projects')[0]['id'], 'anto',
                            'user', MARKER, 'private-model-name', store.now()))
    app = FastAPI()

    @app.get('/api/system/status')
    def status():
        return report(features=['director-v1', 'system-status-v1', MARKER])

    with TestClient(app) as client:
        response = client.get('/api/system/status')
    assert response.status_code == 200
    data = response.json()
    assert data['app'] == 'STUDIO DE ANTO' and data['release'] == '1.7.0'
    assert data['api_version'] == '1' and data['code_update_available'] is False
    assert datetime.fromisoformat(data['generated_at']).utcoffset().total_seconds() == 0
    assert data['features'] == ['director-v1', 'system-status-v1']
    states = checks(data)
    assert set(states) == {'service', 'code_version', 'storage', 'database', 'provider', 'credentials', 'usage', 'backups'}
    assert states['service']['status'] == states['database']['status'] == 'ok'
    assert states['credentials']['status'] == 'ok'
    assert 'No se comprobó su autorización' in states['credentials']['message']
    serialized = json.dumps(data)
    for sensitive in (MARKER, str(tmp_path), 'private-model-name', 'credentials.json', 'studio.sqlite'):
        assert sensitive not in serialized
    assert 'pid' not in data
    assert all(set(item) == {'id', 'label', 'status', 'message'} for item in data['checks'])


def test_reads_do_not_repair_permissions_modify_data_or_initialize_schema(tmp_path, monkeypatch):
    credential_store.save('gemini', MARKER)
    target = credential_store.path()
    target.chmod(0o640)
    target.parent.chmod(0o750)
    before_data = (tmp_path / 'studio.sqlite').read_bytes()
    before_files = {str(path.relative_to(tmp_path)) for path in tmp_path.rglob('*')}

    def no_mutation(*args, **kwargs):
        pytest.fail('A read-only report must not write, repair permissions or create schema')

    monkeypatch.setattr(credential_store, 'repair_owned_permissions', no_mutation)
    monkeypatch.setattr(store, 'db', no_mutation)
    monkeypatch.setattr(usage, '_ensure_schema', no_mutation)
    assert checks(report())['credentials']['status'] == 'ok'
    assert stat.S_IMODE(target.stat().st_mode) == 0o640
    assert stat.S_IMODE(target.parent.stat().st_mode) == 0o750
    assert (tmp_path / 'studio.sqlite').read_bytes() == before_data
    after_files = {str(path.relative_to(tmp_path)) for path in tmp_path.rglob('*')}
    # SQLite can maintain its WAL coordination sidecars even for a mode=ro
    # connection. No application, schema, credential or document file is created.
    assert after_files - before_files <= {'studio.sqlite-wal', 'studio.sqlite-shm'}


def test_readonly_report_observes_committed_wal_changes_without_ignoring_live_data():
    with store.db() as writer:
        writer.execute('INSERT OR REPLACE INTO settings(key,value) VALUES(?,?)',
                       ('usage_policy', '{"daily_requests":0}'))
        writer.commit()
        # Keep the writer open so this change remains in WAL, not just the
        # database's main file. An immutable connection would miss this change.
        assert checks(report())['usage']['status'] == 'error'


def test_readonly_credential_helpers_preserve_existing_default_permission_repair():
    credential_store.save('gemini', MARKER)
    target = credential_store.path()
    target.chmod(0o640)
    cloud.credential_status('gemini', readonly=True)
    assert stat.S_IMODE(target.stat().st_mode) == 0o640
    cloud.credential_status('gemini')
    if hasattr(os, 'geteuid'):
        assert stat.S_IMODE(target.stat().st_mode) == 0o600


@pytest.mark.parametrize('disk, expected', [('b' * 64, True), (LOADED, False)])
def test_changed_code_is_distinct_from_loaded_service_version(monkeypatch, disk, expected):
    monkeypatch.setattr(runtime, 'code_version', lambda: disk)
    data = report()
    assert data['release'] == '1.7.0' and data['code_update_available'] is expected
    assert checks(data)['code_version']['status'] == ('warning' if expected else 'ok')


def test_unavailable_code_comparison_does_not_claim_up_to_date(monkeypatch):
    def unavailable():
        raise PermissionError(MARKER)
    monkeypatch.setattr(runtime, 'code_version', unavailable)
    data = report()
    assert data['code_update_available'] is None
    assert checks(data)['code_version']['status'] == 'warning'
    assert MARKER not in json.dumps(data)


def test_missing_database_is_not_created_and_other_checks_remain_available(tmp_path, monkeypatch):
    empty = tmp_path / 'fresh'; empty.mkdir()
    monkeypatch.setattr(store, 'ROOT', empty)
    data = report()
    states = checks(data)
    assert states['database']['status'] == 'error' and states['usage']['status'] == 'warning'
    assert states['service']['status'] == 'ok' and list(empty.iterdir()) == []


def test_first_run_database_without_usage_tables_is_not_migrated(tmp_path):
    with store.db() as connection:
        connection.execute('DROP TABLE api_usage')
    before = (tmp_path / 'studio.sqlite').read_bytes()
    assert checks(report())['usage']['status'] == 'warning'
    assert (tmp_path / 'studio.sqlite').read_bytes() == before


def test_corrupt_policy_and_private_store_are_safe_independent_failures():
    store.save_setting('usage_policy', {'daily_requests': MARKER})
    target = credential_store.prepare_path()
    target.write_text(MARKER)
    data = report()
    assert checks(data)['usage']['status'] == 'error'
    assert checks(data)['credentials']['status'] == 'error'
    assert MARKER not in json.dumps(data)


@pytest.mark.parametrize(('value', 'state'), [('', 'warning'), ('bad key with spaces', 'error'), (MARKER, 'ok')])
def test_environment_credential_presence_never_means_provider_verified(monkeypatch, value, state):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY', value)
    data = report()
    assert checks(data)['credentials']['status'] == state
    if value:
        assert value not in json.dumps(data)


def test_budget_reserved_for_director_is_not_reported_as_available():
    usage.save_policy({'daily_requests': 2, 'max_output_tokens': 512, 'concise': True})
    day = datetime.now(timezone.utc).date().isoformat()
    with store.db() as connection:
        connection.execute('CREATE TABLE IF NOT EXISTS api_usage_holds(id TEXT PRIMARY KEY, day TEXT NOT NULL, remaining INTEGER NOT NULL CHECK(remaining>=0))')
        connection.execute('INSERT INTO api_usage_holds VALUES(?,?,?)', ('private-hold-id', day, 2))
    data = report()
    assert checks(data)['usage']['status'] == 'warning'
    assert 'consumidos o reservados' in checks(data)['usage']['message']
    assert 'private-hold-id' not in json.dumps(data)


def test_low_disk_and_unavailable_disk_are_distinct_and_do_not_disclose_paths(monkeypatch):
    monkeypatch.setattr(system_status.shutil, 'disk_usage', lambda path: type('Space', (), {'free': 1})())
    assert checks(report())['storage']['status'] == 'warning'
    def inaccessible(path):
        raise OSError(MARKER)
    monkeypatch.setattr(system_status.shutil, 'disk_usage', inaccessible)
    data = report()
    assert checks(data)['storage']['status'] == 'error' and MARKER not in json.dumps(data)


def test_backup_check_does_not_scan_or_claim_integrity_of_recovery_files(tmp_path):
    folder = tmp_path / 'recovery'; folder.mkdir()
    (folder / (MARKER + '.zip')).write_text(MARKER)
    data = report()
    assert checks(data)['backups']['status'] == 'ok'
    assert 'No se revisó su contenido' in checks(data)['backups']['message']
    assert MARKER not in json.dumps(data)


def test_sqlite_failures_are_safe_and_do_not_obscure_the_running_service(monkeypatch):
    def denied(*args, **kwargs):
        raise sqlite3.OperationalError(MARKER)
    monkeypatch.setattr(system_status, '_connect_readonly', denied)
    data = report()
    assert checks(data)['service']['status'] == 'ok'
    assert checks(data)['database']['status'] == 'error' and MARKER not in json.dumps(data)
