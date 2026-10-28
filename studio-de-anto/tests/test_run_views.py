"""Project run snapshots preserve detail metadata with a fixed query budget."""
from contextlib import contextmanager
import json

import pytest

from backend import director, models, run_views, store


@pytest.fixture(autouse=True)
def isolated_database(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()
    with store.db() as connection:
        connection.executemany('INSERT INTO projects VALUES(?,?,?)',
                               [('main', 'Selected project', store.now()),
                                ('other', 'Other project', store.now())])

    def forbidden(*args, **kwargs):
        pytest.fail('Reading run details must not call a model')

    monkeypatch.setattr(models, '_api_client', forbidden)


def seed_run(rid, *, project='main', mode='tools', status='Completado',
             created='2026-10-27T12:00:00+00:00', result=None):
    plan = json.dumps({'mode': mode, 'objective': 'Keep the saved plan', 'tasks': []})
    with store.db() as connection:
        connection.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',
                           (rid, project, 'file-' + rid, 'Request ' + rid,
                            status, plan, result, created))
    return store.one('SELECT * FROM runs WHERE id=?', (rid,))


def seed_task(tid, rid, position, *, status='Completado', agent='atlas'):
    with store.db() as connection:
        connection.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)',
                           (tid, rid, position, agent, status,
                            json.dumps({'id': 'logical-' + tid, 'depends_on': []}),
                            json.dumps({'saved': tid})))


def seed_message(mid, *, project='main', agent='anto', role='assistant'):
    with store.db() as connection:
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                           (mid, project, agent, role, 'Private conversation content',
                            'synthetic-model', store.now()))


def expected_detail(run):
    return {**director.decorate(run),
            'tasks': store.rows('SELECT * FROM tasks WHERE run=? ORDER BY position', (run['id'],)),
            'reviews': store.rows('SELECT * FROM reviews WHERE run=?', (run['id'],)),
            'details_included': True}


def test_default_list_preserves_summary_shape_and_chronological_order():
    old = seed_run('old', created='2026-10-26T12:00:00+00:00')
    new = seed_run('new', mode='director', result=json.dumps(
        {'kind': 'director', 'message_id': 'restored-answer', 'summary': 'Saved synthesis'}))
    seed_message('new_director_user', role='user')
    seed_message('restored-answer')
    seed_task('task-new', 'new', 0)
    seed_run('foreign', project='other', created='2026-10-28T12:00:00+00:00')

    result = run_views.list_runs('main')

    assert result == [director.decorate(new), director.decorate(old)]
    assert result[0]['director']['assistant_message_id'] == 'restored-answer'
    assert all('tasks' not in row and 'reviews' not in row and
               'details_included' not in row for row in result)


def test_details_match_individual_views_including_saved_results_and_reviews():
    regular = seed_run('regular', result=json.dumps({'statistics': {'total': 42}}))
    delegated = seed_run('director', mode='director', created='2026-10-28T12:00:00+00:00',
                         result=json.dumps({'kind': 'director', 'message_id': 'mapped-answer',
                                            'summary': 'Saved, restored synthesis'}))
    seed_message('director_director_user', role='user')
    seed_message('mapped-answer')
    seed_task('last', 'director', 2, agent='anto')
    seed_task('first', 'director', 0)
    seed_task('middle', 'director', 1, agent='vera')
    with store.db() as connection:
        connection.executemany('INSERT INTO reviews VALUES(?,?,?,?)',
                               [('review-a', 'director', '{"passed":true}', store.now()),
                                ('review-b', 'regular', '{"passed":false}', store.now())])

    result = run_views.list_runs('main', include_tasks=True)

    assert result == [expected_detail(delegated), expected_detail(regular)]
    assert [task['id'] for task in result[0]['tasks']] == ['first', 'middle', 'last']
    assert result[1]['tasks'] == []
    assert json.loads(result[0]['result'])['message_id'] == 'mapped-answer'


def test_project_scoping_cannot_attach_foreign_messages_tasks_or_reviews():
    seed_run('local', mode='director', result=json.dumps(
        {'kind': 'director', 'message_id': 'foreign-answer'}))
    seed_run('foreign', project='other', mode='director')
    seed_message('local_director_user', project='other', role='user')
    seed_message('foreign-answer', project='other')
    seed_message('local_director_answer', agent='vera')
    seed_task('foreign-task', 'foreign', 0)
    with store.db() as connection:
        connection.execute('INSERT INTO reviews VALUES(?,?,?,?)',
                           ('foreign-review', 'foreign', '{"passed":true}', store.now()))

    result = run_views.list_runs('main', include_tasks=True)

    assert len(result) == 1 and result[0]['id'] == 'local'
    assert result[0]['director'] == {'user_message_id': None,
                                     'assistant_message_id': None, 'max_api_calls': 7}
    assert result[0]['tasks'] == [] and result[0]['reviews'] == []
    assert 'Private conversation content' not in json.dumps(result)


@pytest.mark.parametrize('status', ['Completado', 'Fallido', 'Cancelado', 'Interrumpido',
                                   'En ejecución', 'Espera aprobación'])
def test_empty_task_lists_do_not_infer_or_change_completion_status(status):
    saved = seed_run('empty', status=status)

    assert run_views.list_runs('main', include_tasks=True) == [expected_detail(saved)]
    assert run_views.list_runs('main', include_tasks=True)[0]['status'] == status


@pytest.mark.parametrize('include_tasks,expected_reads', [(False, 2), (True, 4)])
@pytest.mark.parametrize('run_count', [0, 1, 30])
def test_query_count_is_constant_and_all_reads_share_one_transaction(
        monkeypatch, include_tasks, expected_reads, run_count):
    for index in range(run_count):
        rid = f'director-{index}'
        seed_run(rid, mode='director')
        seed_message(rid + '_director_user', role='user')
        seed_task('task-' + rid, rid, 0)
    statements = []
    original_db = store.db
    opened = []

    @contextmanager
    def traced_db():
        with original_db() as connection:
            opened.append(connection)
            connection.set_trace_callback(statements.append)
            yield connection

    monkeypatch.setattr(store, 'db', traced_db)
    result = run_views.list_runs('main', include_tasks=include_tasks)

    assert len(result) == run_count
    assert len(opened) == 1
    selects = [sql for sql in statements if sql.lstrip().upper().startswith('SELECT')]
    assert len(selects) == expected_reads
    assert statements[0] == 'BEGIN' and statements[-1] == 'COMMIT'
    assert all(sql == 'BEGIN' or sql == 'COMMIT' or sql.lstrip().upper().startswith('SELECT')
               for sql in statements)
    message_query = next(sql for sql in selects if 'FROM messages' in sql)
    assert 'content' not in message_query and 'id,role' in message_query


def test_api_default_is_compatible_and_include_details_matches_run_detail():
    from fastapi.testclient import TestClient
    from backend.app import app

    with TestClient(app) as client:
        saved = seed_run('api', mode='director', result=json.dumps(
            {'kind': 'director', 'message_id': 'restored-api-answer'}))
        seed_message('api_director_user', role='user')
        seed_message('restored-api-answer')
        seed_task('api-task', 'api', 0)
        with store.db() as connection:
            connection.execute('INSERT INTO reviews VALUES(?,?,?,?)',
                               ('api-review', 'api', '{"passed":true}', store.now()))

        summary = client.get('/api/runs', params={'project': 'main'})
        detailed = client.get('/api/runs', params={'project': 'main', 'include_details': 'true'})
        individual = client.get('/api/runs/api')

        assert summary.status_code == detailed.status_code == individual.status_code == 200
        assert summary.json() == [director.decorate(saved)]
        assert detailed.json() == [{**individual.json(), 'details_included': True}]
        assert len(detailed.json()[0]['tasks']) == 1
        assert len(detailed.json()[0]['reviews']) == 1
        assert detailed.json()[0]['director']['assistant_message_id'] == 'restored-api-answer'
