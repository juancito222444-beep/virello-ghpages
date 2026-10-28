"""Conversation pages use synthetic local data and never consume model quota."""
from contextlib import contextmanager
import json

from fastapi.testclient import TestClient
import pytest

from backend import attachments, message_history, models, store
from backend.app import app


@pytest.fixture(autouse=True)
def isolated_database(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()
    with store.db() as connection:
        connection.executemany('INSERT INTO projects VALUES(?,?,?)',
                               [('main', 'Selected project', store.now()),
                                ('other', 'Other project', store.now())])

    def forbidden(*args, **kwargs):
        pytest.fail('Reading conversation history must not call a model')

    for name in ('_api_client', 'complete', 'stream'):
        monkeypatch.setattr(models, name, forbidden)


def seed_messages(count, *, project='main', agent='anto', prefix='message'):
    # IDs deliberately sort opposite to insertion order. Three messages share
    # each timestamp, so ordering by ID would lose/repeat rows between pages.
    records = [
        {'id': f'{prefix}-{10000-index}', 'project': project, 'agent': agent,
         'role': 'user' if index % 2 == 0 else 'assistant',
         'content': f'Synthetic saved text {prefix} {index}',
         'model': 'saved-model' if index % 2 else None,
         'created': f'2026-10-28T12:{index // 180:02}:{index // 3 % 60:02}+00:00',
         'provider': None, 'attachments': []}
        for index in range(count)
    ]
    with store.db() as connection:
        connection.executemany('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                               [tuple(record[key] for key in
                                      ('id', 'project', 'agent', 'role', 'content', 'model', 'created'))
                                for record in records])
    return records


def link_file(message_id, file_id, name, *, project='main'):
    with store.db() as connection:
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)',
                           (file_id, project, name, 'not-read-on-history', '{}', store.now()))
        connection.execute('INSERT INTO message_attachments VALUES(?,?)', (message_id, file_id))


def test_pages_exhaust_only_the_selected_conversation_with_stable_timestamp_ties():
    records = seed_messages(14)
    seed_messages(8, project='other', prefix='foreign-project')
    seed_messages(8, agent='vera', prefix='foreign-agent')
    pages = []
    cursor = None
    while True:
        result = message_history.page('main', 'anto', 4, cursor)
        pages.insert(0, result['messages'])
        if not result['has_more']:
            assert result['before_cursor'] is None
            break
        assert result['before_cursor'] == result['messages'][0]['id']
        cursor = result['before_cursor']

    assert [message for page in pages for message in page] == records
    assert [len(page) for page in pages] == [2, 4, 4, 4]


@pytest.mark.parametrize('count', [0, 1, 4, 5])
def test_page_boundary_only_reports_more_when_an_extra_row_exists(count):
    records = seed_messages(count)

    result = message_history.page('main', 'anto', 4)

    assert result == {'messages': records[-4:], 'has_more': count > 4,
                      'before_cursor': records[-4]['id'] if count > 4 else None}


def test_new_messages_after_the_cursor_do_not_shift_or_duplicate_older_pages():
    records = seed_messages(9)
    first = message_history.page('main', 'anto', 4)
    # One insertion ties the first page's oldest timestamp; another is newer.
    with store.db() as connection:
        connection.executemany('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                               [('inserted-tie', 'main', 'anto', 'assistant', 'New tie',
                                 'new-model', records[5]['created']),
                                ('inserted-newest', 'main', 'anto', 'assistant', 'Newest',
                                 'new-model', '2026-10-29T12:00:00+00:00')])
    second = message_history.page('main', 'anto', 4, first['before_cursor'])
    last = message_history.page('main', 'anto', 4, second['before_cursor'])

    assert first['messages'] == records[5:]
    assert second['messages'] == records[1:5]
    assert last == {'messages': records[:1], 'has_more': False, 'before_cursor': None}
    assert last['messages'] + second['messages'] + first['messages'] == records


def test_page_keeps_historical_metadata_and_reads_only_its_own_attachment_references(monkeypatch):
    records = seed_messages(4)
    with store.db() as connection:
        connection.execute('INSERT INTO message_provenance VALUES(?,?)', (records[-1]['id'], 'groq'))
    link_file(records[-1]['id'], 'local-file', 'saved-report.PDF')
    # An invalid cross-project reference must never expose that file's name.
    link_file(records[-1]['id'], 'foreign-file', 'private-name.png', project='other')
    # Neither this older attachment nor the extra sentinel row belongs to the page.
    link_file(records[0]['id'], 'old-file', 'old.unsupported')
    link_file(records[1]['id'], 'sentinel-file', 'sentinel.unsupported')
    seen = []
    classify = attachments.classify

    def record_classification(name):
        seen.append(name)
        return classify(name)

    monkeypatch.setattr(attachments, 'classify', record_classification)
    result = message_history.page('main', 'anto', 2)

    expected = records[-2:]
    expected[-1] = {**expected[-1], 'provider': 'groq',
                    'attachments': [{'id': 'local-file', 'name': 'saved-report.PDF', 'kind': 'document'}]}
    assert result['messages'] == expected
    assert seen == ['saved-report.PDF']
    assert 'private-name' not in json.dumps(result)
    assert 'rowid' not in json.dumps(result)


@pytest.mark.parametrize('count', [0, 1, 300])
@pytest.mark.parametrize('with_cursor', [False, True])
def test_page_reads_have_a_fixed_query_budget_and_limit_attachment_ids(monkeypatch, count, with_cursor):
    records = seed_messages(count)
    boundary = seed_messages(1, prefix='boundary')[0]
    with store.db() as connection:
        connection.execute('UPDATE messages SET created=? WHERE id=?',
                           ('2026-10-29T00:00:00+00:00', boundary['id']))
    original_db = store.db
    opened = []
    statements = []

    @contextmanager
    def traced_db():
        with original_db() as connection:
            opened.append(connection)
            connection.set_trace_callback(statements.append)
            yield connection

    monkeypatch.setattr(store, 'db', traced_db)
    result = message_history.page('main', 'anto', 7, boundary['id'] if with_cursor else None)

    selected_count = min(count if with_cursor else count + 1, 7)
    selects = [sql for sql in statements if sql.lstrip().upper().startswith('SELECT')]
    assert len(opened) == 1
    assert len(selects) == 1 + int(with_cursor) + int(selected_count > 0)
    assert len(result['messages']) == selected_count
    assert statements[0] == 'BEGIN' and statements[-1] == 'COMMIT'
    assert all(sql in ('BEGIN', 'COMMIT') or sql.lstrip().upper().startswith('SELECT')
               for sql in statements)
    assert all('OFFSET' not in sql.upper() for sql in selects)
    page_query = next(sql for sql in selects if 'SELECT m.*,p.provider' in sql)
    assert page_query.endswith('LIMIT 8')
    if with_cursor:
        cursor_query = selects[0]
        assert cursor_query.startswith('SELECT created,rowid')
        assert 'content' not in cursor_query
    if selected_count:
        attachment_query = selects[-1]
        assert 'a.message_id IN (' in attachment_query
        assert all(message['id'] in attachment_query for message in result['messages'])
        unseen = set(record['id'] for record in records) - set(message['id'] for message in result['messages'])
        assert all(message_id not in attachment_query for message_id in unseen)


def test_default_api_array_is_unchanged_and_paged_results_preserve_message_shape():
    records = seed_messages(5)
    link_file(records[-1]['id'], 'attachment', 'photo.png')
    records[-1]['attachments'] = [{'id': 'attachment', 'name': 'photo.png', 'kind': 'image'}]
    with store.db() as connection:
        connection.execute('INSERT INTO message_provenance VALUES(?,?)', (records[-1]['id'], 'gemini'))
    records[-1]['provider'] = 'gemini'

    with TestClient(app) as client:
        usage_before = store.rows('SELECT * FROM api_usage')
        legacy = client.get('/api/messages', params={'project': 'main', 'agent': 'anto'})
        paged = client.get('/api/messages', params={'project': 'main', 'agent': 'anto', 'page_size': 3})
        assert legacy.status_code == paged.status_code == 200
        assert legacy.json() == records
        assert paged.json() == {'messages': records[-3:], 'has_more': True,
                                'before_cursor': records[-3]['id']}
        older = client.get('/api/messages', params={'project': 'main', 'agent': 'anto',
                                                   'page_size': 3, 'before': records[-3]['id']})
        assert older.status_code == 200
        assert older.json() == {'messages': records[:2], 'has_more': False, 'before_cursor': None}
        assert store.rows('SELECT * FROM api_usage') == usage_before


@pytest.mark.parametrize('page_size', ['0', '-1', '101', '1.5', 'no-number', ''])
def test_api_rejects_page_sizes_outside_the_integer_range(page_size):
    with TestClient(app) as client:
        response = client.get('/api/messages', params={'project': 'main', 'agent': 'anto',
                                                       'page_size': page_size})
    assert response.status_code == 422


def test_api_rejects_missing_empty_and_foreign_cursors_without_exposing_content():
    records = seed_messages(2)
    foreign_project = seed_messages(1, project='other', prefix='private-project')[0]
    foreign_agent = seed_messages(1, agent='vera', prefix='private-agent')[0]
    with TestClient(app) as client:
        failures = [client.get('/api/messages', params={'project': 'main', 'agent': 'anto',
                                                       'page_size': 1, 'before': cursor})
                    for cursor in ('', 'missing', foreign_project['id'], foreign_agent['id'])]
        requires_size = client.get('/api/messages', params={'project': 'main', 'agent': 'anto',
                                                           'before': records[0]['id']})
        oldest = client.get('/api/messages', params={'project': 'main', 'agent': 'anto',
                                                    'page_size': 1, 'before': records[0]['id']})
    assert all(response.status_code == 422 for response in failures)
    assert all(response.json() == failures[0].json() for response in failures)
    assert requires_size.status_code == 422
    assert oldest.status_code == 200
    assert oldest.json() == {'messages': [], 'has_more': False, 'before_cursor': None}
    assert 'Synthetic saved text' not in ''.join(response.text for response in failures)


def test_api_preserves_project_and_unknown_agent_validation_and_accepts_range_ends():
    records = seed_messages(102)
    with TestClient(app) as client:
        for extra in ({}, {'page_size': 1}):
            assert client.get('/api/messages', params={'project': 'absent', 'agent': 'anto', **extra}).status_code == 404
        assert client.get('/api/messages', params={'project': 'main', 'agent': 'unknown'}).json() == []
        assert client.get('/api/messages', params={'project': 'main', 'agent': 'unknown', 'page_size': 1}).json() == {
            'messages': [], 'has_more': False, 'before_cursor': None}
        for page_size in (1, 100):
            response = client.get('/api/messages', params={'project': 'main', 'agent': 'anto',
                                                           'page_size': page_size})
            assert response.status_code == 200
            assert response.json()['messages'] == records[-page_size:]


def test_additive_index_survives_reinitialization_and_supports_a_keyset_range():
    records = seed_messages(8)
    store.init()
    store.init()
    assert message_history.page('main', 'anto', 10)['messages'] == records
    with store.db() as connection:
        plan = connection.execute(
            'EXPLAIN QUERY PLAN SELECT * FROM messages WHERE project=? AND agent=? '
            'AND (created,rowid)<(?,?) ORDER BY created DESC,rowid DESC LIMIT ?',
            ('main', 'anto', records[-1]['created'], 9999, 4)).fetchall()
    details = ' '.join(row['detail'] for row in plan).upper()
    assert 'USING INDEX MESSAGES_PROJECT_AGENT_CREATED' in details
    assert 'TEMP B-TREE' not in details
