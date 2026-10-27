"""Opt-in, bounded local recovery copies. No providers, global keys or overwrites."""
import asyncio
import contextlib
from datetime import datetime, timedelta, timezone
import os
from pathlib import Path
import re
import shutil
import stat
import tempfile
import threading
import uuid

from . import backups, store

INTERVAL_MINUTES = 60
RETENTION = 3
MIN_FREE_BYTES = 50 * 1024 * 1024
LOCK = threading.RLock()
SNAPSHOT_ID = re.compile(r'^[0-9]{8}T[0-9]{12}Z_[0-9a-f]{32}$')
ERROR = 'No se pudo crear la copia de recuperación. Revisa el espacio disponible y los archivos del proyecto; las copias anteriores se conservan.'


def _now():
    return datetime.now(timezone.utc)


def _project(pid):
    if not isinstance(pid, str) or not backups.IDENTIFIER.fullmatch(pid):
        raise ValueError('Identificador de proyecto inválido')
    if not store.one('SELECT id FROM projects WHERE id=?', (pid,)):
        raise ValueError('Proyecto inexistente')


def _load(key, default):
    try:
        return store.setting(key, default)
    except (ValueError, TypeError):
        return default


def _state(pid):
    value = _load('auto_backup_state:' + pid, {})
    if not isinstance(value, dict):
        return {}
    result = {key: value[key] for key in ('last_attempt', 'last_success', 'last_error')
              if isinstance(value.get(key), str)}
    result['copies'] = []
    for item in value.get('copies', []) if isinstance(value.get('copies', []), list) else []:
        if (isinstance(item, dict) and isinstance(item.get('id'), str)
                and SNAPSHOT_ID.fullmatch(item['id']) and isinstance(item.get('created'), str)
                and type(item.get('size')) is int and 0 < item['size'] <= backups.MAX_ARCHIVE_BYTES):
            result['copies'].append({key: item[key] for key in ('id', 'created', 'size')})
    return result


def _directory(pid, create=False):
    base = store.ROOT.resolve()
    current = base
    for index, part in enumerate(('recovery', pid)):
        current = current / part
        if current.is_symlink() or (current.exists() and not current.is_dir()):
            raise backups.BackupError('Carpeta de recuperación no disponible')
        if create:
            current.mkdir(mode=0o700, exist_ok=True)
        expected = base / 'recovery' if index == 0 else base / 'recovery' / pid
        if current.is_symlink() or current.resolve() != expected:
            raise backups.BackupError('Carpeta de recuperación no disponible')
    return current


def _date(value):
    try:
        result = datetime.fromisoformat(value)
        return result if result.tzinfo is not None else None
    except (ValueError, TypeError):
        return None


def _available(pid, state):
    folder = _directory(pid)
    result = []
    # Only our committed index proves ownership. Unknown ZIPs and orphan files
    # are neither listed nor deleted, even if their names resemble snapshots.
    for item in state.get('copies', []):
        path = folder / (item['id'] + '.zip')
        try:
            info = path.lstat()
        except FileNotFoundError:
            continue
        if stat.S_ISREG(info.st_mode) and info.st_size == item['size']:
            result.append(item)
    return sorted(result, key=lambda item: item['id'], reverse=True)


def status(pid):
    with LOCK:
        _project(pid)
        state = _state(pid)
        enabled = _load('auto_backup:' + pid, False) is True
        error = state.get('last_error')
        try:
            copies = _available(pid, state)
        except (OSError, ValueError):
            copies = []
            error = 'No se puede acceder a las copias de recuperación de este proyecto.'
        attempt = _date(state.get('last_attempt'))
        due = (attempt + timedelta(minutes=INTERVAL_MINUTES)) if attempt else _now()
        return {'enabled': enabled, 'interval_minutes': INTERVAL_MINUTES, 'retention': RETENTION,
                'last_attempt': state.get('last_attempt'), 'last_success': state.get('last_success'),
                'last_error': error, 'next_due': due.isoformat() if enabled else None, 'copies': copies}


def configure(pid, enabled):
    with LOCK:
        _project(pid)
        if type(enabled) is not bool:
            raise ValueError('La activación de copias debe ser verdadera o falsa')
        store.save_setting('auto_backup:' + pid, enabled)
        return status(pid)


def _write_archive(path, data):
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(dir=path.parent, prefix='.recovery-', suffix='.tmp', delete=False) as target:
            temporary = Path(target.name)
            target.write(data)
            target.flush()
            os.fsync(target.fileno())
        os.link(temporary, path)
    finally:
        if temporary is not None:
            temporary.unlink(missing_ok=True)


def create(pid):
    with LOCK:
        _project(pid)
        state = _state(pid)
        state['last_attempt'] = _now().isoformat()
        state['last_error'] = None
        try:
            store.save_setting('auto_backup_state:' + pid, state)
            folder = _directory(pid, create=True)
            if shutil.disk_usage(folder).free < MIN_FREE_BYTES:
                raise backups.BackupError(ERROR)
            content = backups.export_project(pid)
            manifest, _ = backups._read_archive(content)
            if manifest['tables']['projects'][0]['id'] != pid:
                raise backups.BackupError('La copia no pertenece a este proyecto')
            sid = _now().strftime('%Y%m%dT%H%M%S%fZ') + '_' + uuid.uuid4().hex
            path = folder / (sid + '.zip')
            _write_archive(path, content)
            previous = _available(pid, state)
            state['copies'] = [{'id': sid, 'created': state['last_attempt'], 'size': len(content)}, *previous]
            state['last_success'] = _now().isoformat()
            # Persist ownership before pruning. A failed write never deletes a
            # previous copy; an orphan after a DB failure remains unowned.
            store.save_setting('auto_backup_state:' + pid, state)
            for item in state['copies'][RETENTION:]:
                old = folder / (item['id'] + '.zip')
                if not old.is_symlink() and old.is_file():
                    old.unlink()
            state['copies'] = state['copies'][:RETENTION]
            store.save_setting('auto_backup_state:' + pid, state)
        except Exception:
            state['last_error'] = ERROR
            with contextlib.suppress(Exception):
                store.save_setting('auto_backup_state:' + pid, state)
            raise backups.BackupError(ERROR) from None
        return status(pid)


def resolve(pid, snapshot_id):
    with LOCK:
        _project(pid)
        if not isinstance(snapshot_id, str) or not SNAPSHOT_ID.fullmatch(snapshot_id):
            raise FileNotFoundError('Copia de recuperación inexistente')
        state = _state(pid)
        if not any(item['id'] == snapshot_id for item in state.get('copies', [])):
            raise FileNotFoundError('Copia de recuperación inexistente')
        path = _directory(pid) / (snapshot_id + '.zip')
        if path.is_symlink() or not path.is_file():
            raise FileNotFoundError('Copia de recuperación inexistente')
        return path


def read(pid, snapshot_id):
    with LOCK:
        path = resolve(pid, snapshot_id)
        try:
            descriptor = os.open(path, os.O_RDONLY | getattr(os, 'O_NOFOLLOW', 0))
            with os.fdopen(descriptor, 'rb') as source:
                info = os.fstat(source.fileno())
                if not stat.S_ISREG(info.st_mode) or info.st_size > backups.MAX_ARCHIVE_BYTES:
                    raise backups.BackupError('Copia de recuperación no disponible')
                content = source.read(backups.MAX_ARCHIVE_BYTES + 1)
            manifest, _ = backups._read_archive(content)
            if manifest['tables']['projects'][0]['id'] != pid:
                raise backups.BackupError('La copia no pertenece a este proyecto')
            return content
        except (OSError, ValueError):
            raise backups.BackupError('La copia no se pudo validar. No se modificó el proyecto.') from None


def restore(pid, snapshot_id):
    with LOCK:
        return backups.import_project(read(pid, snapshot_id))


def _active(pid):
    if store.one("SELECT 1 FROM runs WHERE project=? AND status IN ('En ejecución','Pendiente','En corrección') LIMIT 1", (pid,)):
        return True
    if store.one("SELECT 1 FROM sqlite_master WHERE type='table' AND name='director_requests'"):
        return bool(store.one("SELECT 1 FROM director_requests WHERE project=? AND status='planning' LIMIT 1", (pid,)))
    return False


def tick(stop: threading.Event | None = None):
    projects = store.rows("SELECT p.id FROM projects p JOIN settings s ON s.key='auto_backup:'||p.id")
    for project in projects:
        if stop is not None and stop.is_set():
            break
        pid = project['id']
        with LOCK:
            if stop is not None and stop.is_set():
                break
            if _load('auto_backup:' + pid, False) is not True or _active(pid):
                continue
            attempted = _date(_state(pid).get('last_attempt'))
            if attempted and _now() - attempted < timedelta(minutes=INTERVAL_MINUTES):
                continue
            if stop is not None and stop.is_set():
                break
            try:
                create(pid)
            except Exception:
                # create records a safe, project-specific failure and cooldown.
                continue


async def worker():
    while True:
        stop = threading.Event()
        operation = asyncio.create_task(asyncio.to_thread(tick, stop))
        try:
            await asyncio.shield(operation)
        except asyncio.CancelledError:
            stop.set()
            # Lifespan shutdown must not leave a thread accessing a later test's
            # data directory or performing work after the app has closed.
            with contextlib.suppress(Exception):
                await operation
            raise
        except Exception:
            pass
        await asyncio.sleep(60)
