"""Bootstrap checks use a local HTTP fixture, never actual model downloads."""
import importlib.util
import io
import json
from pathlib import Path
import sqlite3
import subprocess
import sys
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import pytest


ROOT = Path(__file__).resolve().parents[1]


@pytest.fixture(autouse=True)
def isolated_bootstrap_data_directory(monkeypatch):
    # Other suites and actual launches may set this app-wide override. These
    # cases explicitly pass their own root; preserve that isolated test setup.
    monkeypatch.delenv('ANTO_DATA_DIR', raising=False)


@pytest.fixture
def runtime():
    spec = importlib.util.spec_from_file_location('studio_model_runtime', ROOT / 'scripts/model_runtime.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


@pytest.fixture
def ollama_api():
    requests = []

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            requests.append(('GET', self.path))
            if self.path == '/redirect':
                self.send_response(302)
                self.send_header('Location', '/must-not-be-contacted')
                self.end_headers()
                return
            payload = {'version': 'fixture-1.0'} if self.path == '/api/version' else {
                'models': [{'name': 'qwen2.5:3b', 'size': 1_900_000_000}]
            }
            if self.path not in ('/api/version', '/api/tags'):
                self.send_error(404)
                return
            body = json.dumps(payload).encode()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_POST(self):
            requests.append(('POST', self.path))
            self.send_error(500, 'Bootstrap discovery must not download or infer')

        def log_message(self, *args):
            pass

    server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f'http://127.0.0.1:{server.server_port}', requests
    finally:
        server.shutdown()
        thread.join(timeout=3)
        server.server_close()


def manifest(size=1_900_000_000):
    return {'schemaVersion': 2,
            'config': {'size': 200, 'digest': 'sha256:' + 'a' * 64},
            'layers': [{'size': size, 'digest': 'sha256:' + 'b' * 64}]}


def test_manifest_size_includes_config_and_layers(runtime):
    assert runtime.validate_manifest(manifest()) == 1_900_000_200
    assert runtime.validate_manifest(manifest(2_199_999_800)) == 2_200_000_000


def test_large_manifest_is_rejected_before_pull(runtime):
    with pytest.raises(ValueError):
        runtime.validate_manifest(manifest(2_200_000_000))


def test_pull_preflight_rejects_large_model_without_contacting_pull_api(runtime, monkeypatch):
    data = json.dumps(manifest(2_200_000_000)).encode()
    monkeypatch.setattr(runtime._REMOTE_HTTP, 'open', lambda *args, **kwargs: io.BytesIO(data))

    def no_pull(*args, **kwargs):
        pytest.fail('The local pull API must not be contacted for an oversized model')

    monkeypatch.setattr(runtime._LOCAL_HTTP, 'open', no_pull)
    with pytest.raises(ValueError):
        runtime.pull_model('qwen2.5:3b')


@pytest.mark.parametrize('size', [-1, True, '1900000000', 1.5])
def test_manifest_rejects_invalid_sizes(runtime, size):
    with pytest.raises(ValueError):
        runtime.validate_manifest(manifest(size))


@pytest.mark.parametrize('digest', ['sha256:abc', 'sha512:' + 'a' * 64, '../weights', None])
def test_manifest_requires_verifiable_content_digests(runtime, digest):
    data = manifest()
    data['layers'][0]['digest'] = digest
    with pytest.raises(ValueError):
        runtime.validate_manifest(data)


def test_model_parts_are_registry_names_not_arbitrary_urls(runtime):
    assert runtime.model_parts('qwen2.5:3b') == ('library/qwen2.5', '3b')
    assert runtime.model_parts('qwen2.5') == ('library/qwen2.5', 'latest')
    for name in ('https://example.com/model', '../qwen:3b', 'qwen:3b?other=1', 'qwen 3b', ''):
        with pytest.raises(ValueError):
            runtime.model_parts(name)


def test_existing_ollama_is_reused_without_spawn_download_or_inference(runtime, ollama_api, monkeypatch, tmp_path):
    base, requests = ollama_api

    def no_spawn(*args, **kwargs):
        pytest.fail('An existing Ollama service must not be restarted')

    monkeypatch.setattr(subprocess, 'Popen', no_spawn)
    result = runtime.ensure_server(base=base, root=tmp_path, timeout=2)
    assert result['connected'] is True
    assert result['models'] == ['qwen2.5:3b']
    assert result['inference_verified'] is False
    assert result['endpoint'] == base
    assert ('GET', '/api/version') in requests
    assert ('GET', '/api/tags') in requests
    assert not any(method == 'POST' for method, _ in requests)


def test_missing_runtime_is_reported_without_automatic_install_or_download(runtime, monkeypatch, tmp_path):
    def no_download(*args, **kwargs):
        pytest.fail('Regular server startup must not install a runtime or download weights')

    def unavailable_socket(*args, **kwargs):
        raise OSError('No listener in this isolated test')

    monkeypatch.setattr(runtime, 'discover', lambda base: {
        'connected': False, 'models': [], 'inference_verified': False, 'endpoint': base})
    monkeypatch.setattr(runtime, 'find_ollama', lambda root: None)
    monkeypatch.setattr(runtime.socket, 'create_connection', unavailable_socket)
    monkeypatch.setattr(runtime._REMOTE_HTTP, 'open', no_download)
    monkeypatch.setattr(runtime, 'install_ollama', no_download)
    monkeypatch.setattr(runtime, 'pull_model', no_download)
    monkeypatch.setattr(subprocess, 'Popen', no_download)
    result = runtime.ensure_server(root=tmp_path, timeout=0.2)
    assert result['connected'] is False
    assert result['inference_verified'] is False
    assert 'Ollama' in result['error']


def test_local_api_redirect_is_rejected_before_contacting_destination(runtime, ollama_api):
    base, requests = ollama_api
    with pytest.raises((ValueError, OSError)):
        runtime.request_json(base + '/redirect')
    assert requests == [('GET', '/redirect')]


def test_ensure_cli_only_discovers_existing_api_and_writes_honest_readiness(ollama_api, tmp_path, monkeypatch):
    base, requests = ollama_api
    monkeypatch.delenv('ANTO_DATA_DIR', raising=False)
    result = subprocess.run([sys.executable, str(ROOT / 'scripts/ensure-model-server.py'),
                             '--url', base, '--root', str(tmp_path), '--timeout', '2'],
                            capture_output=True, text=True, timeout=10)
    assert result.returncode == 0, result.stderr
    report = json.loads((tmp_path / 'local-data/readiness.json').read_text())
    assert report['connected'] is True
    assert report['models'] == ['qwen2.5:3b']
    assert report['inference_verified'] is False
    assert report['check'] == 'discovery_only'
    assert all(method == 'GET' for method, _ in requests)


def config_root(tmp_path, settings):
    root = tmp_path / 'studio'
    (root / 'backend').mkdir(parents=True)
    agents = [{'id': name, 'name': name.upper(), 'instructions': 'Preserva instrucciones',
               'role': name, 'color': '#ffffff', 'tools': []}
              for name in ('anto', 'atlas', 'vera', 'bruno', 'iris', 'leo')]
    (root / 'backend/models.py').write_text('AGENTS = ' + repr(agents), encoding='utf-8')
    (root / 'local-data').mkdir()
    database = root / 'local-data/studio.sqlite'
    with sqlite3.connect(database) as connection:
        connection.execute('CREATE TABLE settings(key TEXT PRIMARY KEY,value TEXT NOT NULL)')
        connection.execute('CREATE TABLE runs(id TEXT PRIMARY KEY,status TEXT NOT NULL)')
        connection.execute('INSERT INTO runs VALUES (?,?)', ('running', 'En ejecución'))
        for key, value in settings.items():
            connection.execute('INSERT INTO settings VALUES (?,?)', (key, json.dumps(value)))
    return root, database, agents


def read_settings(database):
    with sqlite3.connect(database) as connection:
        return {key: json.loads(value) for key, value in connection.execute('SELECT key,value FROM settings')}


def test_configuration_is_idempotent_and_does_not_recover_active_runs(runtime, tmp_path):
    root, database, agents = config_root(tmp_path, {})
    agents = [{**agent, 'model': 'personal:latest' if agent['id'] == 'anto' else ''} for agent in agents]
    with sqlite3.connect(database) as connection:
        connection.execute('INSERT INTO settings VALUES (?,?)', ('agents', json.dumps(agents)))
    runtime.configure_agents('qwen2.5:3b', 'http://127.0.0.1:11434', root=root)
    first = read_settings(database)
    runtime.configure_agents('qwen2.5:3b', 'http://127.0.0.1:11434', root=root)
    assert read_settings(database) == first
    assert [agent['model'] for agent in first['agents']] == ['personal:latest'] + ['qwen2.5:3b'] * 5
    assert first['agents'][0]['instructions'] == 'Preserva instrucciones'
    with sqlite3.connect(database) as connection:
        assert connection.execute('SELECT status FROM runs WHERE id=?', ('running',)).fetchone()[0] == 'En ejecución'


def test_explicit_data_directory_override_is_respected(runtime, tmp_path, monkeypatch):
    root, original_database, _ = config_root(tmp_path, {})
    override = tmp_path / 'private-data'
    monkeypatch.setenv('ANTO_DATA_DIR', str(override))
    runtime.configure_agents('qwen2.5:3b', root=root)
    assert runtime.data_dir(root) == override
    assert read_settings(original_database) == {}
    configured = read_settings(override / 'studio.sqlite')
    assert {agent['model'] for agent in configured['agents']} == {'qwen2.5:3b'}


def test_default_configuration_preserves_custom_provider_and_endpoint(runtime, tmp_path):
    original = {'provider': 'openai_local', 'ollama_url': 'http://127.0.0.1:21134',
                'openai_url': 'http://127.0.0.1:1234/v1'}
    root, database, _ = config_root(tmp_path, original)
    runtime.configure_agents('qwen2.5:3b', 'http://127.0.0.1:11434', root=root)
    result = read_settings(database)
    for key, value in original.items():
        assert result[key] == value


def test_explicit_configuration_can_select_ollama(runtime, tmp_path):
    root, database, agents = config_root(tmp_path, {'provider': 'openai_local',
                                                  'ollama_url': 'http://127.0.0.1:21134'})
    agents = [{**agent, 'model': 'old-model'} for agent in agents]
    with sqlite3.connect(database) as connection:
        connection.execute('INSERT INTO settings VALUES (?,?)', ('agents', json.dumps(agents)))
    runtime.configure_agents('qwen2.5:3b', 'http://127.0.0.1:11434', overwrite=True, root=root)
    result = read_settings(database)
    assert result['provider'] == 'ollama'
    assert result['ollama_url'] == 'http://127.0.0.1:11434'
    assert {agent['model'] for agent in result['agents']} == {'qwen2.5:3b'}


def verified_readiness(runtime, tmp_path):
    """Seed a synthetic past probe; this fixture is not evidence of inference."""
    base = 'http://127.0.0.1:11434'
    root, database, _ = config_root(tmp_path, {})
    runtime.configure_agents('qwen2.5:3b', base, root=root)
    proof = {'verified': True, 'provider': 'ollama', 'model': 'qwen2.5:3b',
             'response': 'Respuesta sintética del fixture', 'latency_ms': 15}
    report = runtime.write_readiness({'check': 'inference', 'connected': True,
                                     'inference_verified': True, 'inference': proof,
                                     'provider': 'ollama', 'model': 'qwen2.5:3b',
                                     'endpoint': base, 'agent': 'anto'}, root=root)
    discovery = {'check': 'discovery_only', 'connected': True, 'endpoint': base,
                 'models': ['qwen2.5:3b'], 'inference_verified': False}
    return root, database, report, discovery


def test_discovery_preserves_a_previous_probe_only_for_the_same_configuration(runtime, tmp_path):
    root, _, previous, discovery = verified_readiness(runtime, tmp_path)
    report = runtime.write_readiness(discovery, root=root)
    assert report['inference_verified'] is True
    assert report['inference'] == previous['inference']
    assert report['inference_checked_at'] == previous['inference_checked_at']


@pytest.mark.parametrize('change', ['model', 'endpoint', 'provider', 'catalog', 'disconnected', 'previous_provider'])
def test_readiness_invalidates_previous_probe_when_its_context_changes(runtime, tmp_path, change):
    root, database, previous, discovery = verified_readiness(runtime, tmp_path)
    if change in ('model', 'endpoint', 'provider'):
        settings = read_settings(database)
        if change == 'model':
            settings['agents'][0]['model'] = 'other:small'
        elif change == 'endpoint':
            settings['ollama_url'] = 'http://127.0.0.1:21134'
        else:
            settings['provider'] = 'openai_local'
        with sqlite3.connect(database) as connection:
            for key, value in settings.items():
                connection.execute('INSERT OR REPLACE INTO settings VALUES (?,?)', (key, json.dumps(value)))
    elif change == 'catalog':
        discovery['models'] = ['other:small']
    elif change == 'disconnected':
        discovery['connected'] = False
    else:
        previous['provider'] = 'openai_local'
        (root / 'local-data/readiness.json').write_text(json.dumps(previous))
    report = runtime.write_readiness(discovery, root=root)
    assert report['inference_verified'] is False
    assert 'inference' not in report


def probe_responses(runtime, monkeypatch, change=None):
    base = 'http://127.0.0.1:11434'
    settings = {'provider': 'ollama', 'ollama_url': base,
                'agents': [{'id': 'anto', 'model': 'qwen2.5:3b'}]}
    proof = {'verified': True, 'provider': 'ollama', 'model': 'qwen2.5:3b',
             'endpoint': base, 'response': 'Respuesta sintética', 'latency_ms': 12}
    calls = []
    reads = 0

    def fake_request(url, body=None, timeout=5):
        nonlocal reads
        calls.append((url, body))
        if url.endswith('/api/settings'):
            reads += 1
            value = json.loads(json.dumps(settings))
            if change == 'configuration' and reads > 1:
                value['agents'][0]['model'] = 'changed:small'
            return value
        assert url.endswith('/api/models/test')
        assert body == {'agent': 'anto'}
        return {**proof, 'endpoint': 'http://127.0.0.1:21134'} if change == 'endpoint' else proof

    monkeypatch.setattr(runtime, 'request_json', fake_request)
    return calls, proof


def test_probe_requires_an_inference_response_and_stable_application_configuration(runtime, monkeypatch):
    calls, proof = probe_responses(runtime, monkeypatch)
    result = runtime.probe_app()
    assert result['verified'] is True
    assert result['endpoint'] == proof['endpoint']
    assert result['agent'] == 'anto'
    assert [url.rsplit('/', 1)[-1] for url, _ in calls] == ['settings', 'test', 'settings']


@pytest.mark.parametrize('change', ['configuration', 'endpoint'])
def test_probe_rejects_configuration_changes_or_discordant_endpoint(runtime, monkeypatch, change):
    probe_responses(runtime, monkeypatch, change)
    with pytest.raises(ValueError):
        runtime.probe_app()


def test_successful_download_clears_the_previous_empty_catalog_error(monkeypatch, tmp_path):
    monkeypatch.syspath_prepend(str(ROOT / 'scripts'))
    spec = importlib.util.spec_from_file_location('studio_setup_model_cli', ROOT / 'scripts/setup-model.py')
    setup = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(setup)
    initial = {'endpoint': 'http://127.0.0.1:11434', 'connected': True, 'models': [],
               'inference_verified': False, 'check': 'discovery_only',
               'error': 'Ollama responde, pero todavía no tiene modelos instalados.'}
    refreshed = {**initial, 'models': ['qwen2.5:3b']}
    refreshed.pop('error')
    reports = []
    monkeypatch.setattr(setup, 'install_ollama', lambda *args, **kwargs: '/fake/ollama')
    monkeypatch.setattr(setup, 'ensure_server', lambda *args, **kwargs: initial)
    monkeypatch.setattr(setup, 'pull_model', lambda *args, **kwargs: {
        'manifest_bytes': 1_900_000_200, 'model': 'qwen2.5:3b'})
    monkeypatch.setattr(setup, 'discover', lambda *args, **kwargs: refreshed)
    monkeypatch.setattr(setup, 'configure_agents', lambda *args, **kwargs: {
        'configured_count': 6, 'skipped_custom': False})

    def capture_report(value, **kwargs):
        reports.append(dict(value))
        return value

    monkeypatch.setattr(setup, 'write_readiness', capture_report)
    monkeypatch.setattr(sys, 'argv', ['setup-model.py', '--download', '--model', 'qwen2.5:3b', '--root', str(tmp_path)])
    assert setup.main() == 0
    assert reports[-1]['connected'] is True
    assert reports[-1]['models'] == ['qwen2.5:3b']
    assert reports[-1]['model_installed'] is True
    assert reports[-1]['inference_verified'] is False
    assert 'error' not in reports[-1]


def test_regular_launchers_only_use_download_free_server_check():
    for name in ('scripts/start.sh', 'scripts/start-cloud.sh', 'Iniciar-Windows.cmd'):
        content = (ROOT / name).read_text(encoding='utf-8')
        assert 'ensure-model-server.py' in content
        assert '--download' not in content
        assert 'setup-model.py' not in content
