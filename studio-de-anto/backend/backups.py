"""Portable, project-scoped backups. Import creates records; it never queues work.

Version 1 is an explicit allowlist, not a database dump. Physical paths and global
settings are deliberately absent. ZIP members are read as bytes, never extracted.
"""
import hashlib
import io
import json
import math
import os
from pathlib import Path, PurePosixPath
import re
import stat
import zipfile
import zlib

from . import store
from .attachments import ALLOWED_EXTENSIONS

MAX_ARCHIVE_BYTES = 25 * 1024 * 1024
MAX_EXPANDED_BYTES = 100 * 1024 * 1024
MAX_MANIFEST_BYTES = 16 * 1024 * 1024
MAX_ENTRIES = 1000
MAX_ROWS = 50000
MAX_COMPRESSION_RATIO = 250
FORMAT = 'studio-de-anto-project'
VERSION = 1

# Paths are reconstructed locally, never accepted from the archive.
COLUMNS = {
    'projects': ('id', 'name', 'created'),
    'messages': ('id', 'project', 'agent', 'role', 'content', 'model', 'created'),
    'message_provenance': ('message_id', 'provider'),
    'feedback': ('id', 'message_id', 'rating', 'correction', 'created'),
    'files': ('id', 'project', 'name', 'options', 'created'),
    'message_attachments': ('message_id', 'file_id'),
    'runs': ('id', 'project', 'file', 'request', 'status', 'plan', 'result', 'created'),
    'tasks': ('id', 'run', 'position', 'agent', 'status', 'payload', 'result'),
    'dependencies': ('task', 'requires'),
    'events': ('seq', 'project', 'run', 'agent', 'kind', 'payload', 'created'),
    'reviews': ('id', 'run', 'payload', 'created'),
    'artifacts': ('id', 'run', 'name', 'mime', 'version', 'created'),
}
ID_TABLES = ('projects', 'messages', 'files', 'runs', 'tasks', 'feedback', 'reviews', 'artifacts')
NULLABLE = {
    'messages': {'model'}, 'feedback': {'correction'}, 'runs': {'file', 'result'},
    'tasks': {'result'}, 'events': {'run', 'agent'},
}
INTEGER_COLUMNS = {'tasks': {'position'}, 'events': {'seq'}, 'artifacts': {'version'}}
ACTIVE = {'En ejecución', 'Pendiente', 'En corrección'}
TERMINAL = {'Completado', 'Fallido', 'Cancelado', 'Interrumpido'}
IDENTIFIER = re.compile(r'^[a-zA-Z0-9_-]{1,128}$')
ASSET_MEMBER = re.compile(r'^assets/(files|artifacts)/[0-9]{6}\.bin$')
SUFFIX = re.compile(r'^\.[a-zA-Z0-9]{1,12}$')
OPTION_FIELDS = {'sheet', 'separator', 'encoding', 'kind', 'mime', 'size', 'width', 'height'}


class BackupError(ValueError):
    """An invalid, unsupported, unsafe or oversized project backup."""


def _require(condition, message='Copia de proyecto inválida'):
    if not condition:
        raise BackupError(message)


def _json(value):
    return json.dumps(value, ensure_ascii=False, allow_nan=False, separators=(',', ':'))


def _no_duplicates(pairs):
    result = {}
    for key, value in pairs:
        _require(key not in result, 'Claves JSON duplicadas')
        result[key] = value
    return result


def _load_json(raw):
    try:
        value = json.loads(raw, object_pairs_hook=_no_duplicates,
                           parse_constant=lambda _: (_ for _ in ()).throw(BackupError('Número JSON inválido')))
        # Bound nesting independently of byte limits; deeply nested input must not
        # reach recursive transformations or trigger an interpreter recursion error.
        pending = [(value, 0)]
        while pending:
            item, depth = pending.pop()
            _require(depth <= 40, 'JSON demasiado anidado')
            if isinstance(item, dict):
                pending.extend((child, depth + 1) for child in item.values())
            elif isinstance(item, list):
                pending.extend((child, depth + 1) for child in item)
            elif isinstance(item, float):
                _require(math.isfinite(item), 'Número JSON inválido')
        return value
    except (UnicodeError, ValueError, TypeError, RecursionError) as exc:
        if isinstance(exc, BackupError):
            raise
        raise BackupError('JSON de copia inválido') from exc


def _object_json(raw):
    value = _load_json(raw)
    _require(isinstance(value, dict), 'Se esperaba un objeto JSON')
    return value


def _basename(name):
    return name.replace('\\', '/').rsplit('/', 1)[-1]


def _options(value):
    _require(isinstance(value, dict) and set(value) <= OPTION_FIELDS, 'Opciones de archivo no admitidas')
    for key, item in value.items():
        if key in {'size', 'width', 'height'}:
            _require(type(item) is int and 0 <= item <= MAX_EXPANDED_BYTES, 'Dimensión de archivo inválida')
        else:
            _require(isinstance(item, str) or (key == 'sheet' and item is None), 'Opción de archivo inválida')
            _require(item is None or len(item) <= 1024, 'Opción de archivo demasiado larga')
    return value


def _row_sets(tables):
    return {table: {row['id']: row for row in tables[table]} for table in ID_TABLES}


def _validate_manifest(manifest):
    _require(isinstance(manifest, dict))
    required = {'format', 'version', 'tables', 'assets'}
    _require(required <= set(manifest) <= required | {'project_memory', 'run_options'}, 'Campos de manifiesto no admitidos')
    _require(manifest['format'] == FORMAT and type(manifest['version']) is int and manifest['version'] == VERSION,
             'Formato o versión de copia no admitido')
    tables = manifest['tables']
    _require(isinstance(tables, dict) and set(tables) == set(COLUMNS), 'Tablas de copia no admitidas')
    count = 0
    for table, columns in COLUMNS.items():
        rows = tables[table]
        _require(isinstance(rows, list), 'Tabla de copia inválida')
        count += len(rows)
        _require(count <= MAX_ROWS, 'Demasiados registros en la copia')
        for row in rows:
            _require(isinstance(row, dict) and set(row) == set(columns), 'Columnas de copia no admitidas')
            for column, value in row.items():
                if value is None and column in NULLABLE.get(table, set()):
                    continue
                if column in INTEGER_COLUMNS.get(table, set()):
                    _require(type(value) is int and value >= (0 if column == 'position' else 1), 'Entero de copia inválido')
                else:
                    _require(isinstance(value, str) and '\x00' not in value, 'Texto de copia inválido')
                if column in {'id', 'project', 'run', 'file', 'message_id', 'file_id', 'task', 'requires'} and value is not None:
                    _require(isinstance(value, str) and IDENTIFIER.fullmatch(value), 'Identificador de copia inválido')
            if table in {'files', 'artifacts'}:
                name = row['name']
                _require(name and len(name) <= 512 and _basename(name) == name and name not in {'.', '..'}
                         and not any(ord(char) < 32 for char in name), 'Nombre de archivo inválido')
            if table == 'files':
                _require(Path(row['name']).suffix.lower() in ALLOWED_EXTENSIONS,'Formato de archivo no admitido en la copia')
                _options(_object_json(row['options']))
            if table == 'runs':
                _object_json(row['plan'])
            if table in {'tasks', 'events', 'reviews'}:
                _object_json(row['payload'])
    ids = _row_sets(tables)
    for table in ID_TABLES:
        _require(len(ids[table]) == len(tables[table]), 'Identificadores duplicados')
    _require(len(ids['projects']) == 1, 'La copia debe contener exactamente un proyecto')
    project = next(iter(ids['projects']))
    for table in ('messages', 'files', 'runs', 'events'):
        _require(all(row['project'] == project for row in tables[table]), 'Referencia a otro proyecto')
    for row in tables['runs']:
        _require(row['file'] is None or row['file'] in ids['files'], 'Archivo de ejecución desconocido')
    for table in ('tasks', 'reviews', 'artifacts'):
        _require(all(row['run'] in ids['runs'] for row in tables[table]), 'Ejecución desconocida')
    for table in ('feedback', 'message_provenance'):
        seen = set()
        for row in tables[table]:
            _require(row['message_id'] in ids['messages'] and row['message_id'] not in seen, 'Mensaje desconocido o duplicado')
            seen.add(row['message_id'])
            if table == 'feedback':
                correction = row['correction']
                _require((row['rating'] == 'useful' and correction is None) or
                         (row['rating'] == 'correction' and isinstance(correction, str) and 3 <= len(correction) <= 2000),
                         'Valoración inválida')
    attachments = set()
    for row in tables['message_attachments']:
        pair = (row['message_id'], row['file_id'])
        _require(pair[0] in ids['messages'] and pair[1] in ids['files'] and pair not in attachments,
                 'Adjunto desconocido o duplicado')
        attachments.add(pair)
    dependencies = set()
    for row in tables['dependencies']:
        pair = (row['task'], row['requires'])
        _require(pair not in dependencies and pair[0] in ids['tasks'] and pair[1] in ids['tasks'] and pair[0] != pair[1],
                 'Dependencia inválida')
        _require(ids['tasks'][pair[0]]['run'] == ids['tasks'][pair[1]]['run'], 'Dependencia de otra ejecución')
        dependencies.add(pair)
    by_task = {}
    for task, requires in dependencies:
        by_task.setdefault(task, set()).add(requires)
    positions = set()
    graph = {}
    for row in tables['tasks']:
        position = (row['run'], row['position'])
        _require(position not in positions, 'Posición de tarea duplicada')
        positions.add(position)
        payload = _object_json(row['payload'])
        refs = payload.get('depends_on', [])
        _require(isinstance(refs, list) and all(isinstance(ref, str) for ref in refs) and len(set(refs)) == len(refs),
                 'Dependencias de tarea inválidas')
        actual = by_task.get(row['id'], set())
        _require(set(refs) == actual, 'Dependencias de tarea inconsistentes')
        graph[row['id']] = actual
    # Kahn's algorithm bounds validation time even for an adversarial graph.
    waiting = {tid: len(refs) for tid, refs in graph.items()}
    children = {tid: [] for tid in graph}
    for task, requires in dependencies:
        children[requires].append(task)
    ready = [tid for tid, pending in waiting.items() if pending == 0]
    visited = 0
    while ready:
        tid = ready.pop(); visited += 1
        for child in children[tid]:
            waiting[child] -= 1
            if not waiting[child]:
                ready.append(child)
    _require(visited == len(graph), 'Dependencias cíclicas')
    seqs = set()
    for row in tables['events']:
        _require(row['seq'] not in seqs and (row['run'] is None or row['run'] in ids['runs']), 'Evento inconsistente')
        seqs.add(row['seq'])
        payload = _object_json(row['payload'])
        if payload.get('run_id') is not None:
            _require(isinstance(payload['run_id'], str) and payload['run_id'] in ids['runs']
                     and payload['run_id'] == row['run'], 'Ejecución de evento inconsistente')
        if payload.get('task_id') is not None:
            task = ids['tasks'].get(payload['task_id']) if isinstance(payload['task_id'], str) else None
            _require(task is not None and task['run'] == row['run'], 'Tarea de evento inconsistente')
    for row in tables['events']:
        source = _object_json(row['payload']).get('source_event_seq')
        _require(source is None or (type(source) is int and source in seqs), 'Evento de origen desconocido')
    assets = manifest['assets']
    _require(isinstance(assets, list) and len(assets) + 1 <= MAX_ENTRIES, 'Demasiados archivos en la copia')
    seen_assets, members = set(), set()
    for asset in assets:
        _require(isinstance(asset, dict) and set(asset) == {'table', 'id', 'member', 'size', 'sha256'}, 'Descriptor de archivo inválido')
        table = asset['table']
        _require(isinstance(table, str) and table in {'files', 'artifacts'}, 'Tipo de archivo no admitido')
        _require(isinstance(asset['id'], str) and asset['id'] in ids[table], 'Archivo desconocido')
        pair = (table, asset['id'])
        member = asset['member']
        _require(isinstance(member, str) and ASSET_MEMBER.fullmatch(member) and member.startswith('assets/' + table + '/'),
                 'Ruta de archivo inválida')
        _require(pair not in seen_assets and member not in members, 'Archivo duplicado')
        seen_assets.add(pair); members.add(member)
        _require(type(asset['size']) is int and 0 <= asset['size'] <= MAX_EXPANDED_BYTES, 'Tamaño de archivo inválido')
        _require(isinstance(asset['sha256'], str) and re.fullmatch(r'[0-9a-f]{64}', asset['sha256']), 'Huella de archivo inválida')
    expected = {(table, identity) for table in ('files', 'artifacts') for identity in ids[table]}
    _require(seen_assets == expected, 'Falta el contenido de un archivo')
    _require(sum(asset['size'] for asset in assets) <= MAX_EXPANDED_BYTES, 'Copia expandida demasiado grande')
    if 'project_memory' in manifest:
        memory = manifest['project_memory']
        _require(isinstance(memory, (str, dict, list)) or memory is None, 'Memoria de proyecto inválida')
        _require(len(_json(memory)) <= 12000 and (not isinstance(memory, str) or len(memory) <= 6000), 'Memoria de proyecto demasiado larga')
    options = manifest.get('run_options', [])
    _require(isinstance(options, list), 'Opciones de ejecución inválidas')
    seen = set()
    for item in options:
        _require(isinstance(item, dict) and set(item) == {'run', 'options'} and isinstance(item['run'], str)
                 and item['run'] in ids['runs'] and item['run'] not in seen, 'Opciones de ejecución desconocidas o duplicadas')
        seen.add(item['run']); _options(item['options'])
    return ids


def _read_asset(path, directory, *, file_id=None, remaining=MAX_EXPANDED_BYTES):
    """Read only regular, nonsymlink files directly in their owning directory."""
    candidate = Path(path)
    base = store.ROOT.resolve()
    expected = base / directory
    _require(candidate.is_absolute() and '..' not in candidate.parts, 'Ruta local de archivo inválida')
    try:
        _require(candidate.parent == expected and candidate.resolve(strict=True).parent == expected,
                 'El archivo está fuera de su proyecto')
        current = base
        for part in candidate.relative_to(base).parts:
            current = current / part
            _require(not current.is_symlink(), 'No se admiten enlaces simbólicos')
        if file_id is not None:
            _require(candidate.stem == file_id, 'El archivo pertenece a otro registro')
        descriptor = os.open(candidate, os.O_RDONLY | getattr(os, 'O_NOFOLLOW', 0))
        with os.fdopen(descriptor, 'rb') as source:
            info = os.fstat(source.fileno())
            _require(stat.S_ISREG(info.st_mode) and info.st_size <= remaining, 'Archivo demasiado grande o no disponible')
            content = source.read(remaining + 1)
        _require(len(content) <= remaining, 'Copia expandida demasiado grande')
        return content
    except (OSError, ValueError) as exc:
        if isinstance(exc, BackupError):
            raise
        raise BackupError('Archivo del proyecto no disponible') from exc


def export_project(project_id):
    """Return a complete bounded ZIP for one project, excluding all global data."""
    with store.db() as connection:
        # A single read snapshot keeps references consistent during live chats.
        connection.execute('BEGIN')
        project = connection.execute('SELECT * FROM projects WHERE id=?', (project_id,)).fetchone()
        if project is None:
            raise KeyError(project_id)
        tables = {table: [] for table in COLUMNS}
        tables['projects'] = [dict(project)]
        for table in ('messages', 'files', 'runs', 'events'):
            tables[table] = [dict(row) for row in connection.execute(f'SELECT * FROM {table} WHERE project=?', (project_id,))]
        for table in ('tasks', 'reviews', 'artifacts'):
            tables[table] = [dict(row) for row in connection.execute(
                f'SELECT item.* FROM {table} item JOIN runs r ON item.run=r.id WHERE r.project=?', (project_id,))]
        for table in ('message_provenance', 'feedback', 'message_attachments'):
            # Older additive-schema databases can still export without attachments.
            exists = connection.execute('SELECT 1 FROM sqlite_master WHERE type=? AND name=?', ('table', table)).fetchone()
            if exists:
                tables[table] = [dict(row) for row in connection.execute(
                    f'SELECT item.* FROM {table} item JOIN messages m ON item.message_id=m.id WHERE m.project=?', (project_id,))]
        tables['dependencies'] = [dict(row) for row in connection.execute(
            'SELECT d.* FROM dependencies d JOIN tasks t ON d.task=t.id JOIN runs r ON t.run=r.id WHERE r.project=?', (project_id,))]
        memory = connection.execute('SELECT value FROM settings WHERE key=?', ('project_memory:' + project_id,)).fetchone()
        run_options = []
        for run in tables['runs']:
            row = connection.execute('SELECT value FROM settings WHERE key=?', ('run_options:' + run['id'],)).fetchone()
            if row:
                run_options.append({'run': run['id'], 'options': _object_json(row['value'])})
    manifest = {'format': FORMAT, 'version': VERSION, 'tables': tables, 'assets': [], 'run_options': run_options}
    if memory:
        manifest['project_memory'] = _load_json(memory['value'])
    contents = {}
    total = 0
    for table in ('files', 'artifacts'):
        for index, row in enumerate(tables[table]):
            _require(len(contents) + 2 <= MAX_ENTRIES, 'Demasiados archivos en la copia')
            directory = Path('uploads') if table == 'files' else Path('artifacts') / row['run']
            content = _read_asset(row.pop('path'), directory,
                                  file_id=row['id'] if table == 'files' else None,
                                  remaining=MAX_EXPANDED_BYTES - total)
            total += len(content)
            member = f'assets/{table}/{index:06d}.bin'
            contents[member] = content
            row['name'] = _basename(row['name'])
            manifest['assets'].append({'table': table, 'id': row['id'], 'member': member,
                                       'size': len(content), 'sha256': hashlib.sha256(content).hexdigest()})
    _validate_manifest(manifest)
    encoded = _json(manifest).encode('utf-8')
    _require(len(encoded) <= MAX_MANIFEST_BYTES and total + len(encoded) <= MAX_EXPANDED_BYTES, 'Manifiesto o copia demasiado grande')
    output = io.BytesIO()
    # Level 1 keeps legitimate very repetitive data below our bomb ratio limit.
    with zipfile.ZipFile(output, 'w', zipfile.ZIP_DEFLATED, compresslevel=1) as archive:
        archive.writestr('manifest.json', encoded)
        for member, content in contents.items():
            archive.writestr(member, content)
    result = output.getvalue()
    _require(len(result) <= MAX_ARCHIVE_BYTES, 'La copia supera el límite de 25 MB')
    return result


def _read_archive(content):
    _require(isinstance(content, bytes) and len(content) <= MAX_ARCHIVE_BYTES, 'Máximo 25 MB por copia')
    try:
        with zipfile.ZipFile(io.BytesIO(content)) as archive:
            entries = archive.infolist()
            _require(0 < len(entries) <= MAX_ENTRIES, 'Demasiados archivos en la copia')
            seen, expanded = set(), 0
            for entry in entries:
                name = entry.filename
                parts = PurePosixPath(name).parts
                _require(name == entry.orig_filename and name not in seen and name and '\\' not in name and '\x00' not in name and not name.startswith('/')
                         and not re.match(r'^[a-zA-Z]:', name) and '..' not in parts and not entry.is_dir(), 'Ruta ZIP inválida o duplicada')
                _require(name == 'manifest.json' or ASSET_MEMBER.fullmatch(name), 'Archivo ZIP no admitido')
                seen.add(name)
                mode = entry.external_attr >> 16
                _require(not stat.S_ISLNK(mode) and (stat.S_IFMT(mode) in (0, stat.S_IFREG)), 'Enlace o tipo ZIP no admitido')
                _require(not entry.flag_bits & 1 and entry.compress_type in {zipfile.ZIP_STORED, zipfile.ZIP_DEFLATED},
                         'Cifrado o compresión ZIP no admitidos')
                expanded += entry.file_size
                _require(expanded <= MAX_EXPANDED_BYTES, 'Copia expandida demasiado grande')
                _require(entry.file_size < 1024 * 1024 or entry.file_size <= max(1, entry.compress_size) * MAX_COMPRESSION_RATIO,
                         'Compresión ZIP excesiva')
            _require('manifest.json' in seen, 'Falta el manifiesto de la copia')
            _require(archive.getinfo('manifest.json').file_size <= MAX_MANIFEST_BYTES, 'Manifiesto demasiado grande')
            manifest = _load_json(archive.read('manifest.json'))
            _validate_manifest(manifest)
            expected = {'manifest.json'} | {asset['member'] for asset in manifest['assets']}
            _require(seen == expected, 'Archivos ZIP no declarados o ausentes')
            assets = {}
            for asset in manifest['assets']:
                info = archive.getinfo(asset['member'])
                _require(info.file_size == asset['size'], 'Tamaño de archivo alterado')
                value = archive.read(info)
                _require(len(value) == asset['size'] and hashlib.sha256(value).hexdigest() == asset['sha256'],
                         'Contenido de archivo alterado')
                assets[(asset['table'], asset['id'])] = value
            return manifest, assets
    except (zipfile.BadZipFile, zipfile.LargeZipFile, OSError, RuntimeError, NotImplementedError, EOFError, zlib.error) as exc:
        raise BackupError('ZIP de proyecto inválido') from exc


def _rewrite(value, mapping, seqs, references, interrupt=False):
    """Replace persisted references without changing task/plan logical IDs."""
    if isinstance(value, list):
        return [_rewrite(item, mapping, seqs, references, interrupt) for item in value]
    if isinstance(value, dict):
        result = {}
        for key, item in value.items():
            target = references['task_id'].get(key, mapping.get(key, key))
            if key == 'logical_id':
                result[target] = item
            elif key in references and isinstance(item, str) and item in references[key]:
                result[target] = references[key][item]
            elif key == 'source_event_seq':
                result[target] = seqs.get(item, item) if type(item) is int else item
            elif interrupt and key in {'status', 'agent_status'} and isinstance(item, str) and item in ACTIVE:
                result[target] = 'Interrumpido'
            else:
                result[target] = _rewrite(item, mapping, seqs, references, interrupt)
        return result
    if isinstance(value, str):
        if value in mapping:
            return mapping[value]
        if value.startswith('task:'):
            parts = value.split(':')
            tasks = references['task_id']
            if len(parts) == 3 and parts[1] in tasks:
                return f'task:{tasks[parts[1]]}:{parts[2]}'
    return value


def _rewrite_text(raw, mapping, seqs, references, *, required=False, interrupt=False):
    if raw is None:
        return None
    try:
        value = _load_json(raw)
    except BackupError:
        if required:
            raise
        return raw
    rewritten = _rewrite(value, mapping, seqs, references, interrupt)
    return raw if rewritten == value else _json(rewritten)


def _mkdir(folder, created):
    root = store.ROOT.resolve()
    _require(folder.is_relative_to(root), 'Carpeta de importación inválida')
    current = root
    for part in folder.relative_to(root).parts:
        current = current / part
        _require(not current.is_symlink(), 'La carpeta de importación contiene un enlace simbólico')
        try:
            current.mkdir()
            created.append(current)
        except FileExistsError:
            _require(current.is_dir(), 'La carpeta de importación no está disponible')


def import_project(content):
    """Validate fully, then restore as a new project in one database transaction."""
    manifest, assets = _read_archive(content)
    tables = manifest['tables']
    maps = {table: {row['id']: store.uid() for row in tables[table]} for table in ID_TABLES}
    # Database IDs are globally random in normal data, but use table-specific
    # maps for columns even when an older database reused an ID across tables.
    grouped = {}
    for table, identities in maps.items():
        for old, new in identities.items():
            grouped.setdefault(old, set()).add(new)
    mapping = {old: next(iter(values)) for old, values in grouped.items() if len(values) == 1}
    references = {key: maps[table] for table, keys in {
        'projects': ('project', 'project_id'), 'runs': ('run', 'run_id'),
        'tasks': ('task_id',), 'files': ('file', 'file_id'),
        'messages': ('message_id',), 'artifacts': ('artifact_id',), 'reviews': ('review_id',),
    }.items() for key in keys}
    new_project = maps['projects'][tables['projects'][0]['id']]
    paths, created_files, created_dirs = {}, [], []
    try:
        with store.db() as connection:
            connection.execute('BEGIN IMMEDIATE')
            last = connection.execute('SELECT COALESCE(MAX(seq),0) FROM events').fetchone()[0]
            sequence = connection.execute("SELECT seq FROM sqlite_sequence WHERE name='events'").fetchone()
            last = max(last, sequence[0] if sequence else 0)
            seqs = {row['seq']: last + index + 1 for index, row in enumerate(tables['events'])}
            for table in ('files', 'artifacts'):
                for row in tables[table]:
                    directory = store.ROOT.resolve() / ('uploads' if table == 'files' else 'artifacts')
                    if table == 'artifacts':
                        directory /= maps['runs'][row['run']]
                    _mkdir(directory, created_dirs)
                    suffix = Path(row['name']).suffix.lower()
                    suffix = suffix if SUFFIX.fullmatch(suffix) else '.bin'
                    destination = directory / (maps[table][row['id']] + suffix)
                    # Exclusive creation ensures even an ID collision cannot overwrite.
                    with destination.open('xb') as output:
                        created_files.append(destination)
                        output.write(assets[(table, row['id'])])
                    paths[(table, row['id'])] = str(destination)
            for table, columns in COLUMNS.items():
                for original in tables[table]:
                    row = dict(original)
                    if table in maps:
                        row['id'] = maps[table][row['id']]
                    if 'project' in row:
                        row['project'] = new_project
                    if table in {'tasks', 'reviews', 'artifacts'}:
                        row['run'] = maps['runs'][row['run']]
                    if table in {'feedback', 'message_provenance', 'message_attachments'}:
                        row['message_id'] = maps['messages'][row['message_id']]
                    if table == 'message_attachments':
                        row['file_id'] = maps['files'][row['file_id']]
                    if table == 'runs':
                        row['file'] = maps['files'].get(row['file'])
                        if row['status'] in ACTIVE:
                            row['status'] = 'Interrumpido'
                    if table == 'tasks' and row['status'] not in TERMINAL:
                        row['status'] = 'Interrumpido'
                    if table == 'dependencies':
                        row['task'] = maps['tasks'][row['task']]
                        row['requires'] = maps['tasks'][row['requires']]
                    if table == 'events':
                        row['seq'] = seqs[row['seq']]
                        row['run'] = maps['runs'].get(row['run'])
                    if 'payload' in row:
                        row['payload'] = _rewrite_text(row['payload'], mapping, seqs, references,
                                                       required=True, interrupt=table == 'events')
                        if table == 'tasks':
                            payload = _object_json(row['payload'])
                            old_payload = _object_json(original['payload'])
                            if 'id' in old_payload:
                                payload['id'] = old_payload['id']
                            if 'depends_on' in old_payload:
                                payload['depends_on'] = [maps['tasks'][ref] for ref in old_payload['depends_on']]
                            row['payload'] = _json(payload)
                    if 'result' in row:
                        row['result'] = _rewrite_text(row['result'], mapping, seqs, references)
                    insert_columns = list(columns)
                    if table in {'files', 'artifacts'}:
                        row['path'] = paths[(table, original['id'])]
                        insert_columns.append('path')
                    names = ','.join(insert_columns)
                    placeholders = ','.join('?' for _ in insert_columns)
                    connection.execute(f'INSERT INTO {table}({names}) VALUES({placeholders})',
                                       [row[column] for column in insert_columns])
            if 'project_memory' in manifest:
                connection.execute('INSERT INTO settings(key,value) VALUES(?,?)',
                                   ('project_memory:' + new_project, _json(manifest['project_memory'])))
            for item in manifest.get('run_options', []):
                connection.execute('INSERT INTO settings(key,value) VALUES(?,?)',
                                   ('run_options:' + maps['runs'][item['run']], _json(item['options'])))
    except Exception:
        for path in reversed(created_files):
            try:
                path.unlink(missing_ok=True)
            except OSError:
                pass
        for path in reversed(created_dirs):
            try:
                path.rmdir()
            except OSError:
                pass
        raise
    return {'id': new_project, 'name': tables['projects'][0]['name']}
