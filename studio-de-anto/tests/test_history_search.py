"""Whole-project literal history search, isolated storage and no provider calls."""
import pytest
from fastapi.testclient import TestClient
from backend import store, models, message_history
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()
    with store.db() as c:
        c.executemany('INSERT INTO projects VALUES(?,?,?)', [('a','A',store.now()),('b','B',store.now())])
        rows = [('old','a','vera','assistant','Plan de acción: 20% _ [x].'),
                ('new','a','anto','user','ACCIÓN: 20% _ [x].'),
                ('foreign','b','anto','user','Acción privada'),
                ('long','a','leo','assistant','z'*3000+' acción final '+'y'*3000)]
        c.executemany('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                      [(*row,None,'2026-10-31T00:00:00Z') for row in rows])
    def forbidden(*args, **kwargs):
        pytest.fail('History search must never call a model')
    for name in ('stream','complete','_api_client'):
        monkeypatch.setattr(models,name,forbidden)


def test_all_agents_unicode_and_bounded_excerpts():
    with store.db() as c:
        c.executemany('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                      [(f'filler-{i}','a','vera','user','Unrelated text',None,'2026-10-31T01:00:00Z') for i in range(45)])
    assert 'old' not in [row['id'] for row in message_history.page('a','vera',40)['messages']]
    with TestClient(app) as client:
        response = client.get('/api/projects/a/messages/search', params={'q':'aCCion'})
        assert response.status_code == 200
        rows = response.json()['messages']
        assert [row['id'] for row in rows] == ['long','new','old']
        assert all('content' not in row and len(row['excerpt']) <= 602 for row in rows)
        assert 'acción final' in rows[0]['excerpt']
        assert client.get('/api/projects/a/messages/search',params={'q':'accio\u0301n'}).json()['messages'] == rows
        assert client.get('/api/projects/a/messages/search',params={'q':'accion','role':'user'}).json()['messages'][0]['id'] == 'new'
        assert len(client.get('/api/projects/a/messages/search',params={'q':'accion','role':'user'}).json()['messages']) == 1


def test_literal_symbols_and_sql_are_not_patterns():
    with TestClient(app) as client:
        for query in ('20% _ [x]', '[x]', '% _'):
            rows=client.get('/api/projects/a/messages/search',params={'q':query}).json()['messages']
            assert [row['id'] for row in rows] == ['new','old']
        assert client.get('/api/projects/a/messages/search',params={'q':"' OR 1=1 --"}).json()['messages'] == []


def test_stable_pages_under_inserts_and_same_timestamp():
    first=message_history.search('a','accion',page_size=1)
    assert first['before_cursor']=='long' and first['has_more']
    with store.db() as c:
        c.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',('later','a','anto','user','acción nueva',None,'2026-10-31T00:00:00Z'))
    second=message_history.search('a','accion',page_size=1,before=first['before_cursor'])
    third=message_history.search('a','accion',page_size=1,before=second['before_cursor'])
    assert [second['messages'][0]['id'],third['messages'][0]['id']] == ['new','old']
    assert third['has_more'] is False and third['before_cursor'] is None


def test_scope_validation_and_no_state_changes():
    with TestClient(app) as client:
        original=store.rows('SELECT * FROM messages ORDER BY id')
        for params in ({'q':''},{'q':' '*5},{'q':'x'*201},{'q':'x','page_size':51},
                       {'q':'x','role':'invalid'},{'q':'x','before':'foreign'},{'q':'x','before':'missing'}):
            assert client.get('/api/projects/a/messages/search',params=params).status_code==422
        assert client.get('/api/projects/missing/messages/search',params={'q':'accion'}).status_code==404
        assert store.rows('SELECT * FROM messages ORDER BY id')==original
