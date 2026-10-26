"""Local recovery copies must be restorable without touching source projects."""
from datetime import datetime, timedelta, timezone
import io
import json
from types import SimpleNamespace
import zipfile

import pytest

from backend import auto_backups, backups, models, store


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()
    clock = {'now': datetime(2026, 10, 26, 12, tzinfo=timezone.utc)}
    monkeypatch.setattr(auto_backups, '_now', lambda: clock['now'])
    def forbidden(*args, **kwargs):
        pytest.fail('Recovery copies must never contact a model')
    monkeypatch.setattr(models, '_api_client', forbidden)
    return clock


def project():
    return store.rows('SELECT * FROM projects')[0]['id']


def seed():
    pid, mid, fid = project(), store.uid(), store.uid()
    folder = store.ROOT / 'uploads'
    folder.mkdir()
    path = folder / (fid + '.csv')
    path.write_bytes('grupo,valor\nEspaña,12\n'.encode())
    with store.db() as connection:
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                           (mid, pid, 'anto', 'assistant', 'Una respuesta que conservar.', 'mock', store.now()))
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)',
                           (fid, pid, 'datos.csv', str(path), '{}', store.now()))
        connection.execute('INSERT INTO message_provenance VALUES(?,?)', (mid, 'gemini'))
        connection.execute('INSERT INTO message_attachments VALUES(?,?)', (mid, fid))
    store.save_setting('project_memory:' + pid, 'Objetivo y decisiones conservados.')
    store.save_setting('api_key', 'MOCK_PRIVATE_KEY_MUST_STAY_LOCAL')
    store.save_setting('agents', [{'instructions': 'MOCK_GLOBAL_SETTINGS_NOT_PORTABLE'}])
    return pid, path


def test_copy_roundtrip_preserves_history_originals_and_memory_but_excludes_global_secrets():
    pid, original = seed()
    messages = store.rows('SELECT * FROM messages WHERE project=?', (pid,))
    result = auto_backups.create(pid)
    assert result['enabled'] is False
    assert result['last_success'] and result['last_error'] is None
    assert len(result['copies']) == 1
    saved = result['copies'][0]
    content = auto_backups.read(pid, saved['id'])
    with zipfile.ZipFile(io.BytesIO(content)) as archive:
        manifest = archive.read('manifest.json').decode()
    for sentinel in ('MOCK_PRIVATE_KEY', 'MOCK_GLOBAL_SETTINGS', 'auto_backup:'):
        assert sentinel not in manifest
    imported = auto_backups.restore(pid, saved['id'])
    assert imported['id'] != pid
    assert store.rows('SELECT * FROM messages WHERE project=?', (pid,)) == messages
    assert original.read_bytes() == 'grupo,valor\nEspaña,12\n'.encode()
    restored = store.rows('SELECT * FROM files WHERE project=?', (imported['id'],))
    assert len(restored) == 1
    from pathlib import Path
    assert Path(restored[0]['path']).read_bytes() == original.read_bytes()
    assert store.rows('SELECT content FROM messages WHERE project=?', (imported['id'],)) == [
        {'content': 'Una respuesta que conservar.'}]
    assert store.setting('project_memory:' + imported['id'], None) == 'Objetivo y decisiones conservados.'
    assert store.setting('api_key', None) == 'MOCK_PRIVATE_KEY_MUST_STAY_LOCAL'
    assert auto_backups.status(imported['id'])['enabled'] is False


def test_schedule_requires_opt_in_and_respects_interval_and_disable(isolated):
    pid = project()
    initial = auto_backups.status(pid)
    assert initial['enabled'] is False and initial['retention'] == 3 and initial['interval_minutes'] == 60
    auto_backups.tick()
    assert auto_backups.status(pid)['copies'] == []
    auto_backups.configure(pid, True)
    auto_backups.tick()
    first = auto_backups.status(pid)
    assert len(first['copies']) == 1
    isolated['now'] += timedelta(minutes=59)
    auto_backups.tick()
    assert auto_backups.status(pid)['copies'] == first['copies']
    isolated['now'] += timedelta(minutes=1)
    auto_backups.tick()
    assert len(auto_backups.status(pid)['copies']) == 2
    auto_backups.configure(pid, False)
    isolated['now'] += timedelta(hours=2)
    auto_backups.tick()
    assert len(auto_backups.status(pid)['copies']) == 2


def test_scheduler_skips_active_runs_and_director_planning_before_spending_disk():
    pid, rid = project(), store.uid()
    auto_backups.configure(pid, True)
    with store.db() as connection:
        connection.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',
                           (rid, pid, None, 'Trabajo en curso', 'Pendiente', '{}', None, store.now()))
    for state in ('Pendiente', 'En ejecución', 'En corrección'):
        with store.db() as connection:
            connection.execute('UPDATE runs SET status=? WHERE id=?', (state, rid))
        auto_backups.tick()
        assert auto_backups.status(pid)['copies'] == []
    with store.db() as connection:
        connection.execute('UPDATE runs SET status=? WHERE id=?', ('Completado', rid))
        connection.execute('CREATE TABLE director_requests(project TEXT,request_id TEXT,status TEXT)')
        connection.execute('INSERT INTO director_requests VALUES(?,?,?)', (pid, 'pending-id', 'planning'))
    auto_backups.tick()
    assert auto_backups.status(pid)['copies'] == []
    with store.db() as connection:
        connection.execute('UPDATE director_requests SET status=?', ('ready',))
    auto_backups.tick()
    assert len(auto_backups.status(pid)['copies']) == 1


def test_failed_export_keeps_previous_copies_and_throttles_automatic_retries(isolated, monkeypatch):
    pid = project()
    auto_backups.configure(pid, True)
    auto_backups.tick()
    previous = auto_backups.status(pid)['copies']
    attempts = []
    def broken(*args):
        attempts.append(True)
        raise OSError('/private/path MOCK_SECRET_DETAIL')
    monkeypatch.setattr(backups, 'export_project', broken)
    isolated['now'] += timedelta(hours=1)
    auto_backups.tick()
    result = auto_backups.status(pid)
    assert result['copies'] == previous and result['last_error']
    assert 'MOCK_SECRET' not in json.dumps(result) and '/private/path' not in json.dumps(result)
    auto_backups.tick()
    isolated['now'] += timedelta(minutes=59)
    auto_backups.tick()
    assert len(attempts) == 1
    isolated['now'] += timedelta(minutes=1)
    auto_backups.tick()
    assert len(attempts) == 2


def test_retention_only_removes_owned_copies_after_a_new_valid_archive(isolated, monkeypatch):
    pid = project()
    for index in range(3):
        store.save_setting('project_memory:' + pid, 'Versión ' + str(index))
        auto_backups.create(pid)
        isolated['now'] += timedelta(hours=1)
    previous = auto_backups.status(pid)['copies']
    folder = auto_backups.resolve(pid, previous[0]['id']).parent
    unrelated = folder / ('20000101T000000000000Z_' + 'a' * 32 + '.zip')
    unrelated.write_bytes(b'not an owned recovery copy')
    with monkeypatch.context() as patch:
        patch.setattr(backups, 'export_project', lambda _: b'invalid ZIP MOCK_SECRET_DETAIL')
        with pytest.raises(ValueError) as error:
            auto_backups.create(pid)
        assert 'MOCK_SECRET' not in str(error.value)
    assert auto_backups.status(pid)['copies'] == previous
    assert all(auto_backups.resolve(pid, item['id']).exists() for item in previous)
    result = auto_backups.create(pid)
    assert len(result['copies']) == 3
    old_ids, new_ids = {item['id'] for item in previous}, {item['id'] for item in result['copies']}
    assert len(old_ids - new_ids) == 1
    assert unrelated.read_bytes() == b'not an owned recovery copy'
    assert unrelated.stem not in new_ids


def test_partial_write_and_low_disk_never_publish_or_replace_a_copy(monkeypatch):
    pid = project()
    first = auto_backups.create(pid)
    folder = auto_backups.resolve(pid, first['copies'][0]['id']).parent
    before = {path.name: path.read_bytes() for path in folder.iterdir()}
    with monkeypatch.context() as patch:
        def failed_fsync(*args):
            raise OSError('MOCK_SECRET storage failure')
        patch.setattr(auto_backups.os, 'fsync', failed_fsync)
        with pytest.raises(ValueError):
            auto_backups.create(pid)
    assert {path.name: path.read_bytes() for path in folder.iterdir()} == before
    with monkeypatch.context() as patch:
        patch.setattr(auto_backups.shutil, 'disk_usage', lambda _: SimpleNamespace(free=0))
        with pytest.raises(ValueError):
            auto_backups.create(pid)
    state = auto_backups.status(pid)
    assert state['copies'] == first['copies'] and state['last_error']
    assert 'MOCK_SECRET' not in json.dumps(state)


def test_snapshot_ids_are_project_scoped_and_never_follow_symlinks(tmp_path):
    pid = project()
    first = auto_backups.create(pid)
    sid = first['copies'][0]['id']
    other = store.uid()
    with store.db() as connection:
        connection.execute('INSERT INTO projects VALUES(?,?,?)', (other, 'Otro', store.now()))
    for candidate in ('../escape', '/absolute', sid + '.zip', 'unrelated'):
        with pytest.raises((ValueError, FileNotFoundError)):
            auto_backups.resolve(pid, candidate)
    with pytest.raises((ValueError, FileNotFoundError)):
        auto_backups.resolve(other, sid)
    path = auto_backups.resolve(pid, sid)
    outside = tmp_path / 'unrelated-private.txt'
    outside.write_bytes(b'PRIVATE ORIGINAL')
    path.unlink()
    path.symlink_to(outside)
    with pytest.raises((ValueError, FileNotFoundError)):
        auto_backups.read(pid, sid)
    assert outside.read_bytes() == b'PRIVATE ORIGINAL'


def test_recovery_directory_symlink_cannot_write_outside_project(tmp_path):
    pid = project()
    outside = tmp_path / 'outside'
    outside.mkdir()
    base = store.ROOT / 'recovery'
    base.mkdir()
    (base / pid).symlink_to(outside, target_is_directory=True)
    with pytest.raises(ValueError):
        auto_backups.create(pid)
    assert list(outside.iterdir()) == []
    assert auto_backups.status(pid)['last_error']


def test_project_named_recovery_has_its_own_safe_directory():
    with store.db() as connection:
        connection.execute('INSERT INTO projects VALUES(?,?,?)', ('recovery', 'Proyecto recuperación', store.now()))
    result = auto_backups.create('recovery')
    assert len(result['copies']) == 1
    assert auto_backups.resolve('recovery', result['copies'][0]['id']).parent == store.ROOT / 'recovery' / 'recovery'


def test_valid_archive_from_another_project_cannot_replace_an_owned_snapshot():
    pid = project()
    first = auto_backups.create(pid)
    other = store.uid()
    with store.db() as connection:
        connection.execute('INSERT INTO projects VALUES(?,?,?)', (other, 'Privado de otro', store.now()))
    path = auto_backups.resolve(pid, first['copies'][0]['id'])
    path.write_bytes(backups.export_project(other))
    before = store.rows('SELECT * FROM projects')
    with pytest.raises(ValueError):
        auto_backups.restore(pid, first['copies'][0]['id'])
    assert store.rows('SELECT * FROM projects') == before


def test_worker_shutdown_waits_for_the_inflight_filesystem_thread(monkeypatch):
    import asyncio
    import threading
    entered, released, finished = threading.Event(), threading.Event(), threading.Event()
    def blocking_tick(stop=None):
        entered.set()
        assert released.wait(3), 'The test must release its synthetic backup thread'
        assert stop is not None and stop.is_set(), 'Cancellation must stop the next project'
        finished.set()
    monkeypatch.setattr(auto_backups, 'tick', blocking_tick)
    async def scenario():
        task = asyncio.create_task(auto_backups.worker())
        try:
            await asyncio.wait_for(asyncio.to_thread(entered.wait), 2)
            task.cancel()
            await asyncio.sleep(0)
            assert not task.done(), 'Closing lifespan must wait for the working thread'
        finally:
            released.set()
        with pytest.raises(asyncio.CancelledError):
            await task
        assert finished.is_set()
    asyncio.run(scenario())


def test_scheduler_stop_after_one_project_does_not_begin_the_next(monkeypatch):
    import threading
    pid, other = project(), store.uid()
    with store.db() as connection:
        connection.execute('INSERT INTO projects VALUES(?,?,?)', (other, 'Otro proyecto', store.now()))
    for candidate in (pid, other):
        auto_backups.configure(candidate, True)
    stop, processed = threading.Event(), []
    original = auto_backups.create
    def finish_first(candidate):
        result = original(candidate)
        processed.append(candidate)
        stop.set()
        return result
    monkeypatch.setattr(auto_backups, 'create', finish_first)
    auto_backups.tick(stop)
    assert len(processed) == 1
    assert sum(len(auto_backups.status(candidate)['copies']) for candidate in (pid, other)) == 1
    assert auto_backups.status(({pid, other} - set(processed)).pop())['last_attempt'] is None
