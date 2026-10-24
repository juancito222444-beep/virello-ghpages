"""Real project rows and local bytes exercise portable, nonexecuting restores."""
import copy
import hashlib
import io
import json
from pathlib import Path
import sqlite3
import stat
import struct
import zipfile

import pytest

from backend import backups, store


@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    store.init()


def project():
    return store.rows('SELECT * FROM projects')[0]


def seed():
    pid = project()['id']
    mid, fid, image, rid, done, pending, review, artifact, feedback = [store.uid() for _ in range(9)]
    uploads = store.ROOT / 'uploads'
    uploads.mkdir()
    spreadsheet = uploads / (fid + '.csv')
    spreadsheet.write_bytes('grupo,valor\nEspaña,12\n'.encode())
    picture = uploads / (image + '.png')
    picture.write_bytes(b'\x89PNG\r\n\x1a\nimage bytes preserved')
    folder = store.ROOT / 'artifacts' / rid
    folder.mkdir(parents=True)
    report = folder / 'informe.pdf'
    report.write_bytes(b'%PDF-1.7\nproject output\n%%EOF')
    timestamp = store.now()
    plan = {'objective': 'Conservar todo', 'tasks': [{'id': 'logical-a', 'depends_on': []}, {'id': 'logical-b', 'depends_on': ['logical-a']}]}
    with store.db() as connection:
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)', (mid, pid, 'anto', 'assistant', 'Chat completo: mañana', 'test-model', timestamp))
        connection.execute('INSERT INTO message_provenance VALUES(?,?)', (mid, 'gemini'))
        connection.execute('INSERT INTO feedback VALUES(?,?,?,?,?)', (feedback, mid, 'correction', 'Prefiero ejemplos concretos.', timestamp))
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)', (fid, pid, 'datos.csv', str(spreadsheet), '{}', timestamp))
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)', (image, pid, 'imagen.png', str(picture), json.dumps({'kind': 'image', 'mime': 'image/png', 'size': picture.stat().st_size}), timestamp))
        connection.execute('INSERT INTO message_attachments VALUES(?,?)', (mid, image))
        connection.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)', (rid, pid, fid, 'Solicitud original', 'En ejecución', json.dumps(plan), '{"total":12}', timestamp))
        connection.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)', (done, rid, 0, 'vera', 'Completado', json.dumps({'id': 'logical-a', 'depends_on': []}), '{"saved":"resultado","status":"Pendiente"}'))
        connection.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)', (pending, rid, 1, 'bruno', 'Pendiente', json.dumps({'id': 'logical-b', 'depends_on': [done]}), None))
        connection.execute('INSERT INTO dependencies VALUES(?,?)', (pending, done))
        connection.execute('INSERT INTO reviews VALUES(?,?,?,?)', (review, rid, '{"passed":true}', timestamp))
        connection.execute('INSERT INTO artifacts VALUES(?,?,?,?,?,?,?)', (artifact, rid, 'informe.pdf', str(report), 'application/pdf', 1, timestamp))
    store.event(pid, 'task', {'status': 'Completado', 'run_id': rid, 'task_id': done, 'logical_id': 'logical-a', 'result_ref': f'task:{done}:v1'}, rid, 'vera')
    seq = store.rows('SELECT * FROM events')[0]['seq']
    store.event(pid, 'agent', {'status': 'En ejecución', 'run_id': rid, 'source_event_seq': seq}, rid, 'bruno')
    store.save_setting('project_memory:' + pid, 'Resumen explícito compartido')
    store.save_setting('run_options:' + rid, {'separator': ',', 'encoding': 'utf-8'})
    # A dummy sentinel, never an actual key or a key-storage read.
    store.save_setting('api_key', 'DUMMY_CREDENTIAL_MUST_NOT_EXPORT')
    store.save_setting('agents', [{'private': 'GLOBAL_SETTINGS_MUST_NOT_EXPORT'}])
    other = store.uid()
    with store.db() as connection:
        connection.execute('INSERT INTO projects VALUES(?,?,?)', (other, 'Privado de otro proyecto', timestamp))
        connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)', (store.uid(), other, 'anto', 'user', 'OTHER_PROJECT_PRIVATE_CONTENT', None, timestamp))
        connection.execute('CREATE TABLE IF NOT EXISTS api_usage(id TEXT, detail TEXT)')
        connection.execute('INSERT INTO api_usage VALUES(?,?)', (store.uid(), 'PRIVATE_USAGE_MUST_NOT_EXPORT'))
    return {'pid': pid, 'mid': mid, 'fid': fid, 'image': image, 'rid': rid, 'done': done, 'pending': pending,
            'artifact': artifact, 'spreadsheet': spreadsheet, 'picture': picture, 'report': report, 'plan': plan}


def unpack(content):
    with zipfile.ZipFile(io.BytesIO(content)) as archive:
        return {name: archive.read(name) for name in archive.namelist()}


def repack(members, *, compression=zipfile.ZIP_STORED):
    output = io.BytesIO()
    with zipfile.ZipFile(output, 'w', compression) as archive:
        for name, value in members.items():
            archive.writestr(name, value)
    return output.getvalue()


def modify(content, change):
    members = unpack(content)
    manifest = json.loads(members['manifest.json'])
    change(manifest)
    members['manifest.json'] = json.dumps(manifest).encode()
    return repack(members)


def snapshot():
    return {table: store.rows('SELECT * FROM ' + table) for table in (*backups.COLUMNS, 'settings')}


def files_on_disk():
    return {str(path.relative_to(store.ROOT)): path.read_bytes() for folder in ('uploads', 'artifacts')
            for path in (store.ROOT / folder).rglob('*') if path.is_file()}


def test_roundtrip_preserves_all_project_records_bytes_and_completed_evidence():
    original = seed()
    before = snapshot()
    content = backups.export_project(original['pid'])
    members = unpack(content)
    manifest = json.loads(members['manifest.json'])
    assert set(manifest['tables']) == set(backups.COLUMNS)
    text = members['manifest.json'].decode()
    for secret in ('DUMMY_CREDENTIAL', 'GLOBAL_SETTINGS', 'OTHER_PROJECT_PRIVATE', 'PRIVATE_USAGE'):
        assert secret not in text
    assert 'path' not in manifest['tables']['files'][0]
    assert 'path' not in manifest['tables']['artifacts'][0]
    restored = backups.import_project(content)
    assert restored['id'] != original['pid'] and restored['name'] == project()['name']
    imported_messages = store.rows('SELECT * FROM messages WHERE project=?', (restored['id'],))
    assert len(imported_messages) == 1 and imported_messages[0]['content'] == 'Chat completo: mañana'
    new_message = imported_messages[0]['id']
    assert new_message != original['mid']
    assert store.one('SELECT provider FROM message_provenance WHERE message_id=?', (new_message,))['provider'] == 'gemini'
    assert store.one('SELECT correction FROM feedback WHERE message_id=?', (new_message,))['correction'] == 'Prefiero ejemplos concretos.'
    new_files = store.rows('SELECT * FROM files WHERE project=?', (restored['id'],))
    assert {row['name']: Path(row['path']).read_bytes() for row in new_files} == {
        'datos.csv': original['spreadsheet'].read_bytes(), 'imagen.png': original['picture'].read_bytes()}
    attachment = store.one('SELECT * FROM message_attachments WHERE message_id=?', (new_message,))
    assert attachment['file_id'] == next(row['id'] for row in new_files if row['name'] == 'imagen.png')
    run = store.one('SELECT * FROM runs WHERE project=?', (restored['id'],))
    assert run['id'] != original['rid'] and run['status'] == 'Interrumpido'
    assert json.loads(run['plan']) == original['plan']
    assert run['result'] == '{"total":12}'
    assert run['file'] in {row['id'] for row in new_files}
    tasks = store.rows('SELECT * FROM tasks WHERE run=? ORDER BY position', (run['id'],))
    assert [row['status'] for row in tasks] == ['Completado', 'Interrumpido']
    assert tasks[0]['result'] == '{"saved":"resultado","status":"Pendiente"}'
    assert json.loads(tasks[1]['payload']) == {'id': 'logical-b', 'depends_on': [tasks[0]['id']]}
    assert store.one('SELECT * FROM dependencies WHERE task=?', (tasks[1]['id'],))['requires'] == tasks[0]['id']
    events = store.rows('SELECT * FROM events WHERE project=? ORDER BY seq', (restored['id'],))
    first, second = [json.loads(event['payload']) for event in events]
    assert first['task_id'] == tasks[0]['id'] and first['run_id'] == run['id']
    assert first['logical_id'] == 'logical-a' and first['result_ref'] == f"task:{tasks[0]['id']}:v1"
    assert second['status'] == 'Interrumpido' and second['source_event_seq'] == events[0]['seq']
    artifact = store.one('SELECT * FROM artifacts WHERE run=?', (run['id'],))
    assert Path(artifact['path']).read_bytes() == original['report'].read_bytes()
    assert Path(artifact['path']).name == artifact['id'] + '.pdf'
    assert store.one('SELECT payload FROM reviews WHERE run=?', (run['id'],))['payload'] == '{"passed":true}'
    assert store.setting('project_memory:' + restored['id'], None) == 'Resumen explícito compartido'
    assert store.setting('run_options:' + run['id'], None) == {'separator': ',', 'encoding': 'utf-8'}
    for table in backups.COLUMNS:
        current = store.rows('SELECT * FROM ' + table)
        assert all(row in current for row in before[table]), table
    # A second export of the imported copy is portable as well.
    assert backups.import_project(backups.export_project(restored['id']))['id'] != restored['id']


@pytest.mark.parametrize('status', ['Completado', 'Fallido', 'Cancelado', 'Interrumpido', 'Espera aprobación', 'Requiere información'])
def test_import_preserves_terminal_runs_and_unapproved_plans(status):
    original = seed()
    with store.db() as connection:
        connection.execute('UPDATE runs SET status=? WHERE id=?', (status, original['rid']))
    restored = backups.import_project(backups.export_project(original['pid']))
    assert store.one('SELECT status FROM runs WHERE project=?', (restored['id'],))['status'] == status


def test_tampered_asset_is_rejected_without_touching_existing_project():
    original = seed()
    members = unpack(backups.export_project(original['pid']))
    name = next(name for name in members if name.startswith('assets/'))
    members[name] = b'altered'
    before, disk = snapshot(), files_on_disk()
    with pytest.raises(backups.BackupError, match='alterado'):
        backups.import_project(repack(members))
    assert snapshot() == before and files_on_disk() == disk


@pytest.mark.parametrize('mutator', [
    lambda m: m.update(version=2),
    lambda m: m.update(settings={'api_key': 'NO'}),
    lambda m: m['tables'].update(settings=[]),
    lambda m: m['tables']['files'][0].update(path='/tmp/evil'),
    lambda m: m['tables']['files'][0].update(options='{"path":"/tmp/evil"}'),
    lambda m: m['tables']['messages'][0].update(project='other-project'),
    lambda m: m['tables']['runs'][0].update(file='unknown-file'),
    lambda m: m['tables']['tasks'][0].update(run='unknown-run'),
    lambda m: m['tables']['tasks'][1].update(payload='{"depends_on":["unknown-task"]}'),
    lambda m: m['tables']['message_attachments'][0].update(file_id='foreign-file'),
    lambda m: m['tables']['feedback'][0].update(message_id='unknown-message'),
    lambda m: m['tables']['events'][0].update(payload='{"run_id":[]}'),
    lambda m: m['assets'][0].update(member='../escape'),
    lambda m: m['assets'].pop(),
])
def test_strict_schema_and_foreign_keys_precede_writes(mutator):
    original = seed()
    content = modify(backups.export_project(original['pid']), mutator)
    before, disk = snapshot(), files_on_disk()
    with pytest.raises(backups.BackupError):
        backups.import_project(content)
    assert snapshot() == before and files_on_disk() == disk


@pytest.mark.parametrize('name', ['../escape', '/tmp/escape', 'C:/escape', 'assets\\escape', 'unknown.txt', 'assets/files/../escape'])
def test_unsafe_or_unknown_zip_members_rejected(name):
    original = seed()
    members = unpack(backups.export_project(original['pid']))
    members[name] = b'bad'
    with pytest.raises(backups.BackupError):
        backups.import_project(repack(members))


def test_symlink_duplicate_and_encrypted_zip_entries_rejected():
    original = seed()
    content = backups.export_project(original['pid'])
    members = unpack(content)
    output = io.BytesIO()
    with zipfile.ZipFile(output, 'w') as archive:
        for name, value in members.items():
            info = zipfile.ZipInfo(name)
            info.external_attr = (stat.S_IFLNK | 0o777) << 16
            archive.writestr(info, value)
    with pytest.raises(backups.BackupError):
        backups.import_project(output.getvalue())
    output = io.BytesIO(content)
    with pytest.warns(UserWarning, match='Duplicate'):
        with zipfile.ZipFile(output, 'a') as archive:
            archive.writestr('manifest.json', members['manifest.json'])
    with pytest.raises(backups.BackupError):
        backups.import_project(output.getvalue())
    encrypted = bytearray(content)
    # Set encryption in the central directory; validation rejects before reads.
    position = encrypted.index(b'PK\x01\x02')
    flags = struct.unpack_from('<H', encrypted, position + 8)[0]
    struct.pack_into('<H', encrypted, position + 8, flags | 1)
    with pytest.raises(backups.BackupError):
        backups.import_project(bytes(encrypted))


def test_archive_entry_expansion_and_ratio_limits(monkeypatch):
    original = seed()
    content = backups.export_project(original['pid'])
    with pytest.raises(backups.BackupError):
        backups.import_project(b'x' * (backups.MAX_ARCHIVE_BYTES + 1))
    members = unpack(content)
    members['assets/files/999999.bin'] = b'x' * (2 * 1024 * 1024)
    with pytest.raises(backups.BackupError, match='Compresión'):
        backups.import_project(repack(members, compression=zipfile.ZIP_DEFLATED))
    monkeypatch.setattr(backups, 'MAX_EXPANDED_BYTES', 20)
    with pytest.raises(backups.BackupError, match='expandida'):
        backups.import_project(content)
    monkeypatch.setattr(backups, 'MAX_EXPANDED_BYTES', 100 * 1024 * 1024)
    monkeypatch.setattr(backups, 'MAX_ENTRIES', 2)
    with pytest.raises(backups.BackupError, match='Demasiados'):
        backups.import_project(content)


@pytest.mark.parametrize('attack', ['outside', 'other-file', 'other-run', 'symlink'])
def test_export_rejects_assets_outside_their_own_record(tmp_path, attack):
    original = seed()
    outside = tmp_path / 'outside.txt'
    outside.write_bytes(b'PRIVATE_OUTSIDE_BYTES')
    table, identity = 'files', original['fid']
    if attack == 'outside':
        replacement = outside
    elif attack == 'other-file':
        replacement = original['picture']
    elif attack == 'other-run':
        table, identity = 'artifacts', original['artifact']
        folder = store.ROOT / 'artifacts' / store.uid()
        folder.mkdir()
        replacement = folder / 'report.pdf'
        replacement.write_bytes(b'OTHER_PROJECT_ARTIFACT')
    else:
        replacement = original['spreadsheet']
        replacement.unlink()
        replacement.symlink_to(outside)
    with store.db() as connection:
        connection.execute(f'UPDATE {table} SET path=? WHERE id=?', (str(replacement), identity))
    with pytest.raises(backups.BackupError):
        backups.export_project(original['pid'])


def test_failed_database_import_rolls_back_rows_and_removes_only_created_assets(monkeypatch):
    original = seed()
    content = backups.export_project(original['pid'])
    before, disk = snapshot(), files_on_disk()
    # Force the final artifacts insert to fail after assets and earlier rows exist.
    with store.db() as connection:
        connection.execute("CREATE TRIGGER reject_import BEFORE INSERT ON artifacts BEGIN SELECT RAISE(ABORT,'forced failure'); END")
    with pytest.raises(sqlite3.IntegrityError, match='forced failure'):
        backups.import_project(content)
    assert snapshot() == before and files_on_disk() == disk
    assert original['spreadsheet'].read_bytes().startswith(b'grupo,valor')


def test_import_rejects_symlink_destination_without_writing_outside(tmp_path):
    original = seed()
    content = backups.export_project(original['pid'])
    destination = tmp_path / 'another-directory'
    destination.mkdir()
    uploads = store.ROOT / 'uploads'
    uploads.rename(store.ROOT / 'saved-uploads')
    uploads.symlink_to(destination, target_is_directory=True)
    before = snapshot()
    with pytest.raises(backups.BackupError, match='enlace'):
        backups.import_project(content)
    assert list(destination.iterdir()) == [] and snapshot() == before


def test_export_basename_metadata_and_missing_project():
    original = seed()
    with store.db() as connection:
        connection.execute('UPDATE files SET name=? WHERE id=?', ('C:\\private\\datos.csv', original['fid']))
    manifest = json.loads(unpack(backups.export_project(original['pid']))['manifest.json'])
    assert manifest['tables']['files'][0]['name'] == 'datos.csv'
    with pytest.raises(KeyError):
        backups.export_project('missing')


def test_duplicate_json_keys_and_nonfinite_json_rejected():
    original = seed()
    members = unpack(backups.export_project(original['pid']))
    members['manifest.json'] = members['manifest.json'].replace(b'"version":1', b'"version":1,"version":1', 1)
    with pytest.raises(backups.BackupError, match='duplicadas'):
        backups.import_project(repack(members))
    content = modify(backups.export_project(original['pid']), lambda m: m.update(project_memory={'number': float('inf')}))
    with pytest.raises(backups.BackupError, match='Número'):
        backups.import_project(content)
