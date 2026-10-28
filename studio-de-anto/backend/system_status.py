"""Small, read-only diagnostics suitable for a user to download and share.

No provider requests, Git operations, permission repairs, schema changes or
document scans belong here. Messages never contain exception text or local data.
"""
import json
import re
import shutil
import sqlite3
from contextlib import closing
from datetime import datetime, timezone
from pathlib import Path

from . import cloud, runtime, store, usage


_MIN_FREE_BYTES = 50 * 1024 * 1024
_FEATURES = frozenset({'director-v1', 'context-draft-v1', 'recovery-backups-v1',
                       'system-status-v1', 'director-budget-v1'})
_HASH = re.compile(r'^[0-9a-f]{64}$')
_RELEASE = re.compile(r'^[0-9]+\.[0-9]+\.[0-9]+(?:[-+][A-Za-z0-9.-]{1,40})?$')


def _check(identifier, label, status, message):
    return {'id': identifier, 'label': label, 'status': status, 'message': message}


def _connect_readonly():
    # mode=ro must never turn an absent database into an empty new installation.
    # SQLite may maintain WAL coordination sidecars. Do not use immutable=1:
    # it can ignore live WAL updates and report stale quota/configuration.
    connection = sqlite3.connect((Path(store.ROOT) / 'studio.sqlite').resolve().as_uri() + '?mode=ro',
                                 uri=True, timeout=1)
    connection.row_factory = sqlite3.Row
    connection.execute('PRAGMA query_only=ON')
    return connection


def _stored_provider(connection):
    row = connection.execute('SELECT value FROM settings WHERE key=?', ('provider',)).fetchone()
    saved = json.loads(row['value']) if row is not None else None
    if saved is None:
        return cloud.default_provider(readonly=True) if cloud.only() else 'ollama'
    if cloud.only() and saved not in cloud.PROVIDERS:
        return cloud.default_provider(readonly=True)
    if saved not in {'gemini', 'groq', 'ollama', 'openai_local'}:
        raise ValueError('Invalid provider configuration')
    return saved


def _usage_check(connection):
    policy = usage._read_policy(connection)
    day = datetime.now(timezone.utc).date().isoformat()
    tables = {row['name'] for row in connection.execute(
        "SELECT name FROM sqlite_master WHERE type='table' AND name IN ('api_usage','api_usage_holds')")}
    if 'api_usage' not in tables:
        return _check('usage', 'Límites del estudio', 'warning',
                      'La política es válida, pero los contadores todavía no están disponibles. No se inicializaron ni reiniciaron datos.')
    attempted = connection.execute('SELECT COUNT(*) FROM api_usage WHERE day=?', (day,)).fetchone()[0]
    reserved = 0
    if 'api_usage_holds' in tables:
        reserved = connection.execute('SELECT COALESCE(SUM(remaining),0) FROM api_usage_holds WHERE day=?',
                                      (day,)).fetchone()[0]
        if type(reserved) is not int or reserved < 0:
            raise ValueError('Invalid usage reservations')
    available = max(0, policy['daily_requests'] - attempted - reserved)
    if available == 0:
        return _check('usage', 'Límites del estudio', 'warning',
                      'No quedan intentos disponibles hoy en el estudio: están consumidos o reservados. Revisa Uso y continuidad; la cuota del proveedor es independiente.')
    return _check('usage', 'Límites del estudio', 'ok',
                  'La política es válida y quedan intentos locales sin consumir ni reservar. Esto no comprueba la cuota del proveedor.')


def report(*, release, loaded_code_version, api_version='1', features=()):
    """Return bounded public diagnostics; presence never means verified inference."""
    safe_release = release if isinstance(release, str) and _RELEASE.fullmatch(release) else 'unknown'
    safe_api = api_version if isinstance(api_version, str) and re.fullmatch(r'[0-9]{1,4}', api_version) else 'unknown'
    checks = [_check('service', 'Servidor del estudio', 'ok',
                     'El servidor responde a esta consulta. No se realizó ninguna llamada a un modelo.')]
    changed = None
    try:
        current = runtime.code_version()
        if not isinstance(loaded_code_version, str) or not _HASH.fullmatch(loaded_code_version) or not _HASH.fullmatch(current):
            raise ValueError('Unavailable code identity')
        changed = current != loaded_code_version
        checks.append(_check('code_version', 'Código del servidor', 'warning' if changed else 'ok',
                             'Los archivos del servidor cambiaron desde su arranque. Reinicia el estudio para cargar esa revisión.' if changed else
                             'El código del servidor coincide con el que se cargó al arrancar. Esto no comprueba la versión abierta en otras pestañas.'))
    except Exception:
        checks.append(_check('code_version', 'Código del servidor', 'warning',
                             'No se pudo comparar el código cargado con los archivos actuales. No se confirmó si hace falta reiniciar.'))

    root = Path(store.ROOT)
    try:
        if not root.is_dir():
            raise OSError('Unavailable data directory')
        free = shutil.disk_usage(root).free
        checks.append(_check('storage', 'Almacenamiento local', 'warning' if free < _MIN_FREE_BYTES else 'ok',
                             'Queda poco espacio disponible. Libera espacio antes de crear archivos o copias.' if free < _MIN_FREE_BYTES else
                             'El directorio de datos está disponible y tiene espacio libre. No se probaron escrituras ni se revisó el contenido de documentos.'))
    except Exception:
        checks.append(_check('storage', 'Almacenamiento local', 'error',
                             'No se pudo consultar el almacenamiento de datos. No se cambió la configuración ni los datos.'))

    provider = None
    try:
        with closing(_connect_readonly()) as connection:
            connection.execute('BEGIN')
            connection.execute('SELECT 1 FROM settings LIMIT 0')
            connection.execute('SELECT 1 FROM projects LIMIT 0')
            checks.append(_check('database', 'Base de datos', 'ok',
                                 'La base de datos permite consultas de lectura. No se comprobó permiso de escritura ni se modificaron registros.'))
            try:
                provider = _stored_provider(connection)
            except Exception:
                pass
            try:
                checks.append(_usage_check(connection))
            except usage.UsagePolicyError:
                checks.append(_check('usage', 'Límites del estudio', 'error',
                                     'Los límites guardados están dañados. Repara la política desde Uso y continuidad; los contadores se conservan y las llamadas a modelos permanecen bloqueadas.'))
            except Exception:
                checks.append(_check('usage', 'Límites del estudio', 'warning',
                                     'No se pudieron consultar los límites y contadores del estudio. No se mostraron valores de cuota ni se modificaron datos.'))
    except Exception:
        checks.append(_check('database', 'Base de datos', 'error',
                             'No se pudo consultar la base de datos del estudio. Esta comprobación no creó ni reparó una base de datos.'))
        checks.append(_check('usage', 'Límites del estudio', 'warning',
                             'No se pudo consultar el uso local porque la base de datos no está disponible. No se confirmó cuota disponible.'))

    if provider in cloud.PROVIDERS:
        checks.append(_check('provider', 'Proveedor seleccionado', 'ok',
                             'Está seleccionado Google Gemini. No se probó su conexión.' if provider == 'gemini' else
                             'Está seleccionado Groq. No se probó su conexión.'))
        try:
            credential = cloud.credential_status(provider, readonly=True)
            if not credential['configured']:
                state, message = 'warning', 'No hay una clave configurada para el proveedor seleccionado. Añádela desde Configuración para poder conversar.'
            elif not credential['valid_format']:
                state, message = 'error', 'La clave configurada tiene un formato no válido. Revísala desde Configuración; su valor no forma parte del diagnóstico.'
            else:
                state, message = 'ok', 'Hay una clave con formato compatible. No se comprobó su autorización, cuota ni capacidad de generar respuestas.'
            checks.append(_check('credentials', 'Configuración de la clave', state, message))
        except Exception:
            checks.append(_check('credentials', 'Configuración de la clave', 'error',
                                 'No se pudo consultar la configuración privada de la clave. Su valor no se incluye y no se cambiaron sus permisos.'))
    else:
        checks.append(_check('provider', 'Proveedor seleccionado', 'warning',
                             'Hay un proveedor local seleccionado; este diagnóstico no comprueba su conexión.' if provider in {'ollama', 'openai_local'} else
                             'No se pudo determinar el proveedor seleccionado. Revisa la configuración de conexión.'))
        checks.append(_check('credentials', 'Configuración de la clave', 'warning',
                             'No se comprobó la clave de un proveedor en la nube. No se confirmó disponibilidad de IA.'))

    try:
        recovery = root / 'recovery'
        if recovery.is_symlink() or (recovery.exists() and not recovery.is_dir()):
            raise OSError('Unavailable recovery directory')
        prepared = recovery.is_dir()
        checks.append(_check('backups', 'Copias de recuperación', 'ok' if prepared else 'warning',
                             'La carpeta de recuperación está disponible en este mismo servidor. No se revisó su contenido: descarga una copia para guardarla fuera del Codespace.' if prepared else
                             'La carpeta de recuperación todavía no está preparada. Puedes crear una copia desde Configuración y descargarla fuera del Codespace.'))
    except Exception:
        checks.append(_check('backups', 'Copias de recuperación', 'warning',
                             'No se pudo consultar la carpeta de recuperación. No se confirmó la disponibilidad de copias.'))
    selected_features = features if isinstance(features, (tuple, list, set, frozenset)) else ()
    return {'app': 'STUDIO DE ANTO', 'release': safe_release, 'api_version': safe_api,
            'generated_at': datetime.now(timezone.utc).isoformat(),
            'code_update_available': changed,
            'features': sorted({feature for feature in selected_features if isinstance(feature, str) and feature in _FEATURES}),
            'checks': checks}
