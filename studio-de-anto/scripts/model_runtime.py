"""Small, standard-library-only helpers for an explicitly installed local model.

Normal app startup never invokes installation or a registry download. Runtime
state is private to local-data; model weights are never part of the source tree.
"""
from __future__ import annotations

import ast
import contextlib
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import platform
import re
import shutil
import socket
import sqlite3
import subprocess
import tarfile
import tempfile
import time
from datetime import datetime, timezone
from urllib.parse import urlsplit
from urllib.request import Request, ProxyHandler, HTTPRedirectHandler, build_opener

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_MODEL = 'qwen2.5:3b'
DEFAULT_URL = 'http://127.0.0.1:11434'
MAX_MODEL_BYTES = 2_200_000_000
OLLAMA_VERSION = '0.40.9'
OLLAMA_ARCHIVE_BYTES = 1_509_118_576
OLLAMA_ARCHIVE_SHA256 = '01f0d0ae50cad3295a79a165033a65cf324f8ae5f7be64679464d29ecf28d67c'
OLLAMA_ARCHIVE_URL = f'https://github.com/ollama/ollama/releases/download/v{OLLAMA_VERSION}/ollama-linux-amd64.tar.zst'
class _NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


_LOCAL_HTTP = build_opener(ProxyHandler({}), _NoRedirect())
_REMOTE_HTTP = build_opener()


def data_dir(root=ROOT):
    path = Path(os.environ.get('ANTO_DATA_DIR', Path(root) / 'local-data')).resolve()
    path.mkdir(parents=True, exist_ok=True, mode=0o700)
    return path


def local_url(base):
    parsed = urlsplit(base)
    if (parsed.scheme != 'http' or parsed.hostname not in ('localhost', '127.0.0.1', '::1')
            or parsed.path not in ('', '/') or parsed.username or parsed.password
            or parsed.query or parsed.fragment or parsed.port == 0):
        raise ValueError('La API debe ser HTTP local, por ejemplo http://127.0.0.1:11434.')
    return base.rstrip('/')


def request_json(url, body=None, timeout=5):
    base = urlsplit(url)
    local_url(f'{base.scheme}://{base.netloc}')
    request = Request(url, data=None if body is None else json.dumps(body).encode(),
                      headers={'Content-Type': 'application/json'})
    with _LOCAL_HTTP.open(request, timeout=timeout) as response:
        # No HTTP redirects from a loopback API to another destination.
        if response.url != url:
            raise ValueError('La API local intentó redirigir la petición.')
        return json.load(response)


def model_parts(name):
    if not isinstance(name, str) or len(name) > 160:
        raise ValueError('Nombre de modelo no válido.')
    match = re.fullmatch(r'([a-z0-9][a-z0-9._-]*(?:/[a-z0-9][a-z0-9._-]*)?)(?::([A-Za-z0-9][A-Za-z0-9._-]*))?', name)
    if not match:
        raise ValueError('Usa un nombre de Ollama, por ejemplo qwen2.5:3b; no una URL.')
    repo, tag = match.group(1), match.group(2) or 'latest'
    if '/' not in repo:
        repo = 'library/' + repo
    return repo, tag


def canonical_model(name):
    repo, tag = model_parts(name)
    return (repo.removeprefix('library/') + ':' + tag)


def model_is_present(tags, model):
    if isinstance(tags, dict):
        tags = tags.get('models', [])
    names = [item.get('name') if isinstance(item, dict) else item for item in tags]
    desired = canonical_model(model)
    for name in names:
        try:
            if canonical_model(name) == desired:
                return True
        except (ValueError, TypeError):
            continue
    return False


def validate_manifest(data, max_bytes=MAX_MODEL_BYTES):
    if not isinstance(data, dict) or data.get('schemaVersion') != 2:
        raise ValueError('El registro no devolvió un manifiesto de modelo válido.')
    layers = data.get('layers')
    if not isinstance(layers, list) or not layers:
        raise ValueError('El manifiesto del modelo no contiene capas.')
    total = 0
    for item in [data.get('config'), *layers]:
        if (not isinstance(item, dict) or type(item.get('size')) is not int or item['size'] < 0
                or not re.fullmatch(r'sha256:[0-9a-f]{64}', str(item.get('digest', '')))):
            raise ValueError('El manifiesto contiene tamaños o digests no válidos.')
        total += item['size']
    if not 0 < total <= max_bytes:
        raise ValueError(f'Modelo de {total:,} bytes: se supera el límite permitido de {max_bytes:,} bytes. No se descargó.')
    return total


def model_manifest(model):
    repo, tag = model_parts(model)
    url = f'https://registry.ollama.ai/v2/{repo}/manifests/{tag}'
    request = Request(url, headers={'Accept': 'application/vnd.docker.distribution.manifest.v2+json',
                                    'User-Agent': 'STUDIO-DE-ANTO-model-setup/1'})
    with _REMOTE_HTTP.open(request, timeout=30) as response:
        raw = response.read(2_000_001)
    if len(raw) > 2_000_000:
        raise ValueError('Manifiesto demasiado grande; no se descargó el modelo.')
    manifest = json.loads(raw)
    return manifest, validate_manifest(manifest)


def atomic_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    fd, name = tempfile.mkstemp(prefix=path.name + '.', dir=path.parent)
    try:
        with os.fdopen(fd, 'w', encoding='utf-8') as stream:
            json.dump(value, stream, ensure_ascii=False, indent=2)
            stream.write('\n')
        os.replace(name, path)
    finally:
        if os.path.exists(name):
            os.unlink(name)


def write_readiness(value, root=ROOT):
    report = {'checked_at': datetime.now(timezone.utc).isoformat(), **value}
    # Discovery does not prove inference, but neither erases a prior real probe
    # when its exact app configuration is still selected and installed.
    if report.get('check') == 'discovery_only' and report.get('connected'):
        try:
            previous = json.loads((data_dir(root) / 'readiness.json').read_text(encoding='utf-8'))
            agent = previous.get('agent', 'anto')
            context = _configuration_context(root, agent)
            proof = previous.get('inference', {})
            if (previous.get('inference_verified') is True and proof.get('verified') is True
                    and context is not None and context['provider'] == previous.get('provider') == proof.get('provider') == 'ollama'
                    and context['endpoint'] == report['endpoint'] == previous['endpoint']
                    and context['model'] == previous['model'] == proof['model']
                    and report.get('model', context['model']) == context['model']
                    and model_is_present(report.get('models', []), context['model'])):
                report.update(inference_verified=True, inference=proof, model=context['model'],
                              provider='ollama', agent=agent,
                              inference_checked_at=previous.get('inference_checked_at', previous.get('checked_at')))
        except (OSError, ValueError, KeyError, TypeError, sqlite3.Error):
            pass
    if value.get('check') == 'inference' and value.get('inference_verified'):
        report['inference_checked_at'] = report['checked_at']
    atomic_json(data_dir(root) / 'readiness.json', report)
    return report


def discover(base=DEFAULT_URL):
    base = local_url(base)
    result = {'endpoint': base, 'connected': False, 'models': [], 'inference_verified': False,
              'check': 'discovery_only'}
    try:
        version = request_json(base + '/api/version', timeout=2)
        tags = request_json(base + '/api/tags', timeout=3)
        if not isinstance(version, dict) or not isinstance(version.get('version'), str):
            raise ValueError('La API no anuncia una versión de Ollama válida.')
        records = tags.get('models') if isinstance(tags, dict) else None
        if not isinstance(records, list):
            raise ValueError('El catálogo de Ollama no es válido.')
        names = list(dict.fromkeys(item['name'] for item in records
                                  if isinstance(item, dict) and isinstance(item.get('name'), str)))
        result.update(connected=True, models=names, version=version['version'])
        if not names:
            result['error'] = 'Ollama responde, pero todavía no tiene modelos instalados.'
    except (OSError, ValueError, TypeError) as exc:
        result['error'] = f'Ollama no confirmó disponibilidad: {exc}'
    return result


def find_ollama(root=ROOT):
    configured = os.environ.get('STUDIO_OLLAMA_BIN')
    if configured:
        candidate = Path(configured).expanduser()
        if not candidate.is_file():
            raise ValueError('STUDIO_OLLAMA_BIN no apunta a un ejecutable existente.')
        return str(candidate.resolve())
    executable = shutil.which('ollama')
    if executable:
        return executable
    candidates = [data_dir(root) / 'ollama' / 'bin' / 'ollama',
                  Path(root).parent / 'tools' / f'ollama-v{OLLAMA_VERSION}' / 'bin' / 'ollama']
    if os.name == 'nt':
        candidates.insert(0, Path(os.environ.get('LOCALAPPDATA', '')) / 'Programs' / 'Ollama' / 'ollama.exe')
    return next((str(path) for path in candidates if path.is_file() and os.access(path, os.X_OK)), None)


def _private_file(path):
    return os.open(path, os.O_CREAT | os.O_APPEND | os.O_WRONLY | getattr(os, 'O_NOFOLLOW', 0), 0o600)


@contextlib.contextmanager
def _start_lock(root, timeout):
    path = data_dir(root) / 'ollama-start.lock'
    fd = os.open(path, os.O_RDWR | os.O_CREAT | getattr(os, 'O_NOFOLLOW', 0), 0o600)
    deadline = time.monotonic() + timeout
    try:
        while True:
            try:
                if os.name == 'nt':
                    import msvcrt
                    if os.fstat(fd).st_size == 0:
                        os.write(fd, b'0')
                    os.lseek(fd, 0, os.SEEK_SET)
                    msvcrt.locking(fd, msvcrt.LK_NBLCK, 1)
                else:
                    import fcntl
                    fcntl.flock(fd, fcntl.LOCK_EX | fcntl.LOCK_NB)
                break
            except OSError:
                if time.monotonic() >= deadline:
                    raise TimeoutError('Otro arranque de Ollama sigue en curso.')
                time.sleep(0.2)
        yield
    finally:
        os.close(fd)


def ensure_server(base=DEFAULT_URL, root=ROOT, timeout=30):
    """Reuse or start an existing executable; never installs, pulls or kills."""
    base = local_url(base)
    current = discover(base)
    if current['connected']:
        return current
    with _start_lock(root, timeout):
        current = discover(base)
        if current['connected']:
            return current
        parsed = urlsplit(base)
        port = parsed.port or 80
        try:
            with socket.create_connection((parsed.hostname, port), timeout=1):
                current['error'] = f'El puerto {port} ya está ocupado y no confirmó ser Ollama. No se inició otro proceso.'
                return current
        except OSError:
            pass
        executable = find_ollama(root)
        if not executable:
            current['error'] = 'Ollama no está instalado. Ejecuta python scripts/setup-model.py --download o instala Ollama oficial.'
            return current
        env = os.environ.copy()
        env.update(OLLAMA_HOST=parsed.netloc, OLLAMA_NUM_PARALLEL='1', OLLAMA_NO_CLOUD='1', OLLAMA_MAX_LOADED_MODELS='1')
        shared_models = Path(root).parent / 'models' / 'ollama'
        models = Path(env.get('OLLAMA_MODELS') or os.environ.get('STUDIO_OLLAMA_MODELS') or
                      (shared_models if shared_models.is_dir() else data_dir(root) / 'models' / 'ollama'))
        models.mkdir(parents=True, exist_ok=True, mode=0o700)
        env['OLLAMA_MODELS'] = str(models.resolve())
        log = data_dir(root) / 'ollama-server.log'
        with os.fdopen(_private_file(log), 'ab') as stream:
            kwargs = {'stdin': subprocess.DEVNULL, 'stdout': stream, 'stderr': subprocess.STDOUT,
                      'env': env, 'cwd': str(root), 'close_fds': True}
            if os.name == 'nt':
                kwargs['creationflags'] = subprocess.CREATE_NEW_PROCESS_GROUP | subprocess.DETACHED_PROCESS
            else:
                kwargs['start_new_session'] = True
            child = subprocess.Popen([executable, 'serve'], **kwargs)
        atomic_json(data_dir(root) / 'ollama-server.pid.json',
                    {'pid': child.pid, 'executable': executable, 'endpoint': base,
                     'created_at': datetime.now(timezone.utc).isoformat()})
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            current = discover(base)
            if current['connected']:
                current['startup_started'] = True
                return current
            if child.poll() is not None:
                break
            time.sleep(0.5)
        current['error'] = f'Ollama no confirmó disponibilidad. Revisa {log}.'
        return current


def install_ollama(root=ROOT):
    existing = find_ollama(root)
    if existing:
        return existing
    if platform.system() != 'Linux' or platform.machine().lower() not in ('x86_64', 'amd64'):
        raise ValueError('Instala Ollama oficial desde https://ollama.com/download y repite este comando. No se instaló software automáticamente en esta plataforma.')
    zstd = shutil.which('zstd')
    if not zstd:
        raise ValueError('La instalación portable necesita zstd. Instálalo con el gestor del sistema y repite, o instala Ollama oficial desde https://ollama.com/download.')
    cache = data_dir(root) / 'cache'
    cache.mkdir(parents=True, exist_ok=True, mode=0o700)
    archive = cache / f'ollama-v{OLLAMA_VERSION}-linux-amd64.tar.zst'
    if not archive.is_file() or archive.stat().st_size != OLLAMA_ARCHIVE_BYTES:
        partial = archive.with_suffix(archive.suffix + '.part')
        # Never follow an attacker-controlled local cache link.
        fd = os.open(partial, os.O_WRONLY | os.O_CREAT | os.O_TRUNC | getattr(os, 'O_NOFOLLOW', 0), 0o600)
        try:
            print(f'Descargando Ollama oficial v{OLLAMA_VERSION} ({OLLAMA_ARCHIVE_BYTES:,} bytes)...', flush=True)
            with _REMOTE_HTTP.open(OLLAMA_ARCHIVE_URL, timeout=60) as response, os.fdopen(fd, 'wb') as stream:
                fd = None
                received = 0
                while chunk := response.read(1024 * 1024):
                    received += len(chunk)
                    if received > OLLAMA_ARCHIVE_BYTES:
                        raise ValueError('La descarga de Ollama supera el tamaño oficial. No se ejecutó.')
                    stream.write(chunk)
            os.replace(partial, archive)
        finally:
            if fd is not None:
                os.close(fd)
            partial.unlink(missing_ok=True)
    digest = hashlib.sha256()
    with archive.open('rb') as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b''):
            digest.update(chunk)
    if archive.stat().st_size != OLLAMA_ARCHIVE_BYTES or digest.hexdigest() != OLLAMA_ARCHIVE_SHA256:
        raise ValueError('La descarga de Ollama no coincide con el tamaño y SHA-256 oficiales. No se ejecutó; elimina el archivo de caché y repite.')
    destination = data_dir(root) / 'ollama'
    staging = Path(tempfile.mkdtemp(prefix='ollama-install-', dir=data_dir(root)))
    try:
        with subprocess.Popen([zstd, '-dc', str(archive)], stdout=subprocess.PIPE, stderr=subprocess.PIPE) as process:
            with tarfile.open(fileobj=process.stdout, mode='r|') as tar:
                for member in tar:
                    path = PurePosixPath(member.name)
                    # Only root native CPU files; no GPU packs, links or traversal.
                    keep = path == PurePosixPath('bin/ollama') or (len(path.parts) == 3 and path.parts[:2] == ('lib', 'ollama'))
                    if not keep or not member.isfile() or path.is_absolute() or '..' in path.parts:
                        continue
                    target = staging.joinpath(*path.parts)
                    target.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
                    with tar.extractfile(member) as source, target.open('wb') as output:
                        shutil.copyfileobj(source, output, 1024 * 1024)
                    target.chmod(0o755 if member.mode & 0o111 else 0o644)
            stderr = process.stderr.read(8192)
            if process.wait() != 0:
                raise ValueError('No se pudo descomprimir el archivo verificado: ' + stderr.decode(errors='replace'))
        if not (staging / 'bin' / 'ollama').is_file():
            raise ValueError('El archivo oficial no contiene el ejecutable esperado.')
        # The destination is created only after every archive byte has verified.
        if destination.exists():
            raise ValueError('Ya existe local-data/ollama incompleto. Revísalo antes de repetir la instalación.')
        staging.rename(destination)
        return str(destination / 'bin' / 'ollama')
    finally:
        if staging.exists():
            shutil.rmtree(staging)


def pull_model(model, base=DEFAULT_URL):
    # Inspect the exact registry manifest BEFORE requesting any model weights.
    _, total = model_manifest(model)
    print(f'Modelo {model}: {total:,} bytes verificados en el manifiesto (límite {MAX_MODEL_BYTES:,}).', flush=True)
    url = local_url(base) + '/api/pull'
    request = Request(url, data=json.dumps({'model': model, 'stream': True}).encode(),
                      headers={'Content-Type': 'application/json'})
    last_status, last_percent, success = None, -1, False
    with _LOCAL_HTTP.open(request, timeout=180) as response:
        if response.url != url:
            raise ValueError('Ollama intentó redirigir la descarga.')
        for line in response:
            if not line.strip():
                continue
            event = json.loads(line)
            if event.get('error'):
                raise ValueError('Ollama no pudo descargar/verificar el modelo: ' + str(event['error']))
            status = str(event.get('status', ''))
            percent = int(event.get('completed', 0) * 100 / event['total']) if event.get('total') else -1
            if status != last_status or (percent >= 0 and percent // 10 != last_percent // 10):
                print(status + (f' {percent}%' if percent >= 0 else ''), flush=True)
                last_status, last_percent = status, percent
            if status == 'success':
                success = True
    if not success:
        raise ValueError('Ollama cerró la descarga sin confirmar integridad y finalización.')
    status = discover(base)
    if not status['connected'] or not model_is_present(status['models'], model):
        raise ValueError('La descarga terminó, pero el modelo todavía no figura en el catálogo local.')
    return {'manifest_bytes': total, 'model': model}


def _default_agents(root):
    # Read the literal defaults without importing app/store or invoking recovery.
    tree = ast.parse((Path(root) / 'backend' / 'models.py').read_text(encoding='utf-8'))
    for node in tree.body:
        if isinstance(node, ast.Assign) and any(isinstance(target, ast.Name) and target.id == 'AGENTS' for target in node.targets):
            return [{**item, 'model': ''} for item in ast.literal_eval(node.value)]
    raise ValueError('No se encontraron los agentes originales del proyecto.')


def configure_agents(model, base=DEFAULT_URL, overwrite=False, root=ROOT):
    """Update settings only, never call store.init/recover active app work."""
    base = local_url(base)
    model_parts(model)
    database = data_dir(root) / 'studio.sqlite'
    with sqlite3.connect(database, timeout=30) as connection:
        connection.execute('CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY,value TEXT NOT NULL)')
        connection.execute('BEGIN IMMEDIATE')
        saved = {key: json.loads(value) for key, value in connection.execute('SELECT key,value FROM settings')}
        if not overwrite and (saved.get('provider', 'ollama') != 'ollama' or saved.get('ollama_url', base).rstrip('/') != base):
            return {'configured_count': 0, 'skipped_custom': True}
        agents = saved.get('agents')
        if agents is None:
            agents = _default_agents(root)
        if not isinstance(agents, list) or not all(isinstance(item, dict) for item in agents):
            raise ValueError('La configuración de agentes no es válida; no se modificó.')
        count = 0
        for agent in agents:
            if overwrite or not agent.get('model'):
                if agent.get('model') != model:
                    count += 1
                agent['model'] = model
        updates = {'agents': agents}
        # Preserve a custom provider/endpoint unless --configure is explicit.
        if overwrite or 'provider' not in saved:
            updates['provider'] = 'ollama'
        if overwrite or 'ollama_url' not in saved:
            updates['ollama_url'] = base
        for key, value in updates.items():
            connection.execute('INSERT OR REPLACE INTO settings VALUES(?,?)', (key, json.dumps(value, ensure_ascii=False)))
    return {'configured_count': count, 'skipped_custom': False}


def _configuration_context(root, agent):
    database = data_dir(root) / 'studio.sqlite'
    if not database.is_file():
        return None
    with sqlite3.connect(f'{database.as_uri()}?mode=ro', uri=True, timeout=5) as connection:
        saved = {key: json.loads(value) for key, value in connection.execute('SELECT key,value FROM settings')}
    return _selected_context(saved, agent)


def _selected_context(saved, agent):
    if not isinstance(saved, dict) or not isinstance(saved.get('agents'), list):
        raise ValueError('La aplicación devolvió una configuración de modelos inválida.')
    selected = next((item for item in saved.get('agents', []) if item.get('id') == agent), None)
    if not selected:
        return None
    provider = saved.get('provider', 'ollama')
    if provider not in ('ollama', 'openai_local'):
        raise ValueError('Proveedor local desconocido.')
    endpoint = saved.get('ollama_url', DEFAULT_URL) if provider == 'ollama' else saved.get('openai_url', 'http://127.0.0.1:1234/v1')
    parsed = urlsplit(endpoint)
    local_url(f'{parsed.scheme}://{parsed.netloc}')
    allowed_paths = ('', '/') if provider == 'ollama' else ('/v1', '/v1/')
    if parsed.path not in allowed_paths or parsed.query or parsed.fragment:
        raise ValueError('La aplicación devolvió una dirección de API local inválida.')
    return {'provider': provider, 'endpoint': endpoint.rstrip('/'), 'model': selected.get('model')}


def probe_app(app_url='http://127.0.0.1:8765', agent='anto'):
    app_url = local_url(app_url)
    before = _selected_context(request_json(app_url + '/api/settings'), agent)
    if not before:
        raise ValueError('El agente no tiene configuración de modelo.')
    result = request_json(app_url + '/api/models/test', {'agent': agent}, timeout=240)
    if not isinstance(result, dict) or result.get('verified') is not True or not str(result.get('response', '')).strip():
        raise ValueError('La aplicación no confirmó una respuesta real de inferencia.')
    after = _selected_context(request_json(app_url + '/api/settings'), agent)
    actual = {key: result.get(key) for key in ('provider', 'endpoint', 'model')}
    if before != after or before != actual:
        raise ValueError('La configuración cambió durante la prueba; repítela para verificar el modelo seleccionado.')
    return {**result, 'agent': agent}
