"""Authorization milestones use synthetic SQLite data and never call an AI."""
from concurrent.futures import ThreadPoolExecutor
from contextlib import contextmanager
import sqlite3

from fastapi.testclient import TestClient
import pytest

from backend import models, office_growth, store
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()
    with store.db() as connection:
        connection.executemany('INSERT INTO projects VALUES(?,?,?)',
                               [('selected', 'Selected', store.now()),
                                ('other', 'Other', store.now())])

    def forbidden(*args, **kwargs):
        pytest.fail('Office milestones must not call a model')

    for name in ('_api_client', 'complete', 'stream'):
        monkeypatch.setattr(models, name, forbidden)


def add_run(project, suffix, status):
    run_id = project + '-' + suffix
    with store.db() as connection:
        connection.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',
                           (run_id, project, None, 'Synthetic work', status, '{}', None, store.now()))
    return run_id


def add_file(project):
    with store.db() as connection:
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)',
                           (project + '-file', project, 'Synthetic.txt', '/not-read', '{}', store.now()))


def add_feedback(project, index, role='assistant', rating='useful'):
    message_id = f'{project}-{role}-{index}'
    with store.db() as connection:
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                           (message_id, project, 'anto', role, 'Synthetic answer', None, store.now()))
        connection.execute('INSERT INTO feedback VALUES(?,?,?,?,?)',
                           ('feedback-' + message_id, message_id, rating,
                            'Synthetic correction' if rating == 'correction' else None, store.now()))


def room(report, room_id):
    return next(item for item in report['rooms'] if item['id'] == room_id)


def test_initial_contract_is_locked_and_reading_has_no_database_writes(monkeypatch):
    statements = []
    original = store.db

    @contextmanager
    def traced():
        with original() as connection:
            connection.set_trace_callback(statements.append)
            yield connection

    monkeypatch.setattr(store, 'db', traced)
    response = TestClient(app).get('/api/projects/selected/office')
    assert response.status_code == 200
    assert response.headers['cache-control'] == 'no-store'
    report = response.json()
    assert report['project'] == 'selected'
    assert report['metrics'] == dict(files=0, completed_runs=0, useful_answers=0, artifacts=0)
    assert [item['id'] for item in report['rooms']] == ['library', 'laboratory', 'gallery', 'strategy']
    for item in report['rooms']:
        assert not item['unlocked'] and not item['authorized']
        assert item['authorized_at'] is None
        assert item['requirement']['current'] == 0
        assert item['destination'] in {'data', 'tasks', 'deliverables', 'settings'}
    assert not any(statement.lstrip().upper().startswith(
        ('INSERT', 'UPDATE', 'DELETE', 'CREATE', 'REPLACE')) for statement in statements)


def test_metrics_only_count_saved_progress_in_the_selected_project():
    add_file('other')
    other_run = add_run('other', 'complete', 'Completado')
    for index in range(3):
        add_feedback('other', index)
    with store.db() as connection:
        connection.execute('INSERT INTO artifacts VALUES(?,?,?,?,?,?,?)',
                           ('other-artifact', other_run, 'Other', '/not-read', 'text/plain', 1, store.now()))
    assert all(not item['unlocked'] for item in office_growth.status('selected')['rooms'])

    add_file('selected')
    completed = add_run('selected', 'completed', 'Completado')
    add_run('selected', 'failed', 'Fallido')
    add_run('selected', 'awaiting', 'Espera aprobación')
    add_feedback('selected', 0)
    add_feedback('selected', 1)
    add_feedback('selected', 2, rating='correction')
    add_feedback('selected', 3, role='user')
    with store.db() as connection:
        connection.executemany('INSERT INTO artifacts VALUES(?,?,?,?,?,?,?)', [
            ('selected-artifact', completed, 'Saved result', '/not-read', 'text/plain', 1, store.now()),
            ('orphan-artifact', 'missing-run', 'Ignored', '/not-read', 'text/plain', 1, store.now()),
        ])
    report = office_growth.status('selected')
    assert report['metrics'] == dict(files=1, completed_runs=1, useful_answers=2, artifacts=1)
    assert all(room(report, item)['unlocked'] for item in ('library', 'laboratory', 'gallery'))
    assert not room(report, 'strategy')['unlocked']
    add_feedback('selected', 4)
    assert room(office_growth.status('selected'), 'strategy')['unlocked']
    assert not store.rows('SELECT * FROM office_rooms'), 'Milestones never authorize a room automatically'


def test_locked_room_rejects_authorization_without_side_effects():
    response = TestClient(app).put('/api/projects/selected/office/library', json={'enabled': True})
    assert response.status_code == 409
    assert not store.rows('SELECT * FROM office_rooms')


def test_explicit_authorization_is_persistent_idempotent_and_independent():
    add_file('selected')
    client = TestClient(app)
    endpoint = '/api/projects/selected/office/library'
    first = client.put(endpoint, json={'enabled': True})
    assert first.status_code == 200
    first_room = room(first.json(), 'library')
    assert first_room['unlocked'] and first_room['authorized'] and first_room['authorized_at']
    assert client.put(endpoint, json={'enabled': True}).json() == first.json()
    store.init()
    assert client.get('/api/projects/selected/office').json() == first.json()
    assert not room(office_growth.status('other'), 'library')['authorized']

    # Saved authorizations survive later deletion/reclassification of evidence.
    with store.db() as connection:
        connection.execute('DELETE FROM files WHERE project=?', ('selected',))
    after = room(client.put(endpoint, json={'enabled': True}).json(), 'library')
    assert after['authorized'] and not after['unlocked']
    assert after['authorized_at'] == first_room['authorized_at']
    disabled = client.put(endpoint, json={'enabled': False})
    assert disabled.status_code == 200
    assert not room(disabled.json(), 'library')['authorized']
    assert client.put(endpoint, json={'enabled': False}).json() == disabled.json()
    assert client.put(endpoint, json={'enabled': True}).status_code == 409


def test_concurrent_duplicate_authorizations_keep_one_permission_and_timestamp():
    add_file('selected')
    with ThreadPoolExecutor(max_workers=6) as executor:
        reports = list(executor.map(lambda _: office_growth.configure('selected', 'library', True), range(10)))
    timestamps = {room(report, 'library')['authorized_at'] for report in reports}
    assert len(timestamps) == 1
    assert len(store.rows('SELECT * FROM office_rooms')) == 1


def test_failed_response_rolls_back_the_whole_authorization(monkeypatch):
    add_file('selected')
    original = office_growth._report
    calls = 0

    def fail_after_write(connection, project):
        nonlocal calls
        calls += 1
        if calls == 2:
            raise RuntimeError('Synthetic response failure')
        return original(connection, project)

    monkeypatch.setattr(office_growth, '_report', fail_after_write)
    with pytest.raises(RuntimeError):
        office_growth.configure('selected', 'library', True)
    assert not store.rows('SELECT * FROM office_rooms')


@pytest.mark.parametrize('body', [{}, {'enabled': 1}, {'enabled': 'true'}, {'enabled': None},
                                  {'enabled': True, 'room': 'injected'}])
def test_authorization_body_requires_an_explicit_boolean_without_extra_fields(body):
    response = TestClient(app).put('/api/projects/selected/office/library', json=body)
    assert response.status_code == 422
    assert not store.rows('SELECT * FROM office_rooms')


@pytest.mark.parametrize('method,path,body', [
    ('get', '/api/projects/missing/office', None),
    ('put', '/api/projects/missing/office/library', {'enabled': False}),
    ('put', '/api/projects/selected/office/unknown', {'enabled': True}),
])
def test_unknown_project_or_room_returns_404(method, path, body):
    response = getattr(TestClient(app), method)(path, **({'json': body} if body is not None else {}))
    assert response.status_code == 404


def test_database_rejects_unregistered_rooms_and_cascades_project_deletion():
    with pytest.raises(sqlite3.IntegrityError):
        with store.db() as connection:
            connection.execute('INSERT INTO office_rooms VALUES(?,?,?)', ('selected', 'invented', store.now()))
    with pytest.raises(sqlite3.IntegrityError):
        with store.db() as connection:
            connection.execute('INSERT INTO office_rooms VALUES(?,?,?)', ('missing', 'library', store.now()))
    add_file('selected')
    office_growth.configure('selected', 'library', True)
    with store.db() as connection:
        connection.execute('DELETE FROM projects WHERE id=?', ('selected',))
    assert not store.rows('SELECT * FROM office_rooms')


def test_migration_is_additive_and_get_never_creates_its_own_schema():
    with store.db() as connection:
        connection.execute('DROP TABLE office_rooms')
        connection.execute('DELETE FROM migrations WHERE version=4')
    with pytest.raises(sqlite3.OperationalError):
        office_growth.status('selected')
    store.init()
    assert store.one('SELECT name FROM projects WHERE id=?', ('selected',))['name'] == 'Selected'
    assert store.one('SELECT version FROM migrations WHERE version=4')
    assert len(office_growth.status('selected')['rooms']) == 4
