"""Project organization keeps the existing evidence and private settings intact."""
import io
import json
import zipfile

import pytest
from fastapi.testclient import TestClient

from backend import cloud, credential_store, models, store
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'], *service.get('aliases', ())):
            monkeypatch.delenv(name, raising=False)

    def forbidden(*args, **kwargs):
        pytest.fail('Organizing projects must not create a provider client')

    monkeypatch.setattr(models, '_api_client', forbidden)


def test_rename_preserves_project_identity_history_originals_memory_and_keys():
    with TestClient(app) as client:
        first = client.post('/api/projects', json={'name': 'Antes'}).json()
        other = client.post('/api/projects', json={'name': 'Otro'}).json()
        pid = first['id']
        original = b'grupo,valor\nA,12\n'
        uploaded = client.post('/api/files', data={'project': pid},
                               files={'file': ('original.csv', original, 'text/csv')})
        assert uploaded.status_code == 200
        fid = uploaded.json()['id']
        client.put('/api/projects/' + pid + '/memory', json={'summary': 'Decisión conservada'})
        credential_store.save('gemini', 'project-test-synthetic-key')
        with store.db() as connection:
            connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                               (store.uid(), pid, 'anto', 'user', 'Conversación conservada', 'mock', store.now()))
        before = {table: store.rows('SELECT * FROM ' + table) for table in
                  ('messages', 'files', 'runs', 'tasks', 'settings', 'message_attachments')}
        private = (store.ROOT / 'private' / 'credentials.json').read_bytes()
        created = store.one('SELECT created FROM projects WHERE id=?', (pid,))['created']

        renamed = client.put('/api/projects/' + pid, json={'name': '  Estudio renovado  '})
        assert renamed.status_code == 200 and renamed.json() == {'id': pid, 'name': 'Estudio renovado'}
        for table, rows in before.items():
            assert store.rows('SELECT * FROM ' + table) == rows
        assert (store.ROOT / 'private' / 'credentials.json').read_bytes() == private
        assert store.one('SELECT created FROM projects WHERE id=?', (pid,))['created'] == created
        assert store.one('SELECT name FROM projects WHERE id=?', (other['id'],))['name'] == 'Otro'
        assert client.get('/api/files/' + fid + '/content?download=true').content == original
        assert client.get('/api/projects/' + pid + '/memory').json()['summary'] == 'Decisión conservada'
        backup = client.get('/api/projects/' + pid + '/backup')
        assert backup.status_code == 200
        with zipfile.ZipFile(io.BytesIO(backup.content)) as archive:
            manifest = json.loads(archive.read('manifest.json'))
            assert manifest['tables']['projects'][0]['name'] == 'Estudio renovado'
        store.init()
        assert any(project['id'] == pid and project['name'] == 'Estudio renovado'
                   for project in client.get('/api/projects').json())


@pytest.mark.parametrize('name', ['', '   ', '\t', 'Una\notra', 'x' * 121, None])
def test_invalid_project_names_do_not_create_or_rename_records(name):
    with TestClient(app) as client:
        pid = client.get('/api/projects').json()[0]['id']
        before = client.get('/api/projects').json()
        assert client.post('/api/projects', json={'name': name}).status_code == 422
        assert client.put('/api/projects/' + pid, json={'name': name}).status_code == 422
        assert client.get('/api/projects').json() == before


def test_missing_project_is_not_created_by_rename():
    with TestClient(app) as client:
        before = client.get('/api/projects').json()
        assert client.put('/api/projects/missing', json={'name': 'Nuevo nombre'}).status_code == 404
        assert client.get('/api/projects').json() == before
