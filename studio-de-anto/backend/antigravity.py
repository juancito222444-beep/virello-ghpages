"""Explicit, one-turn Antigravity text bridge; diagnostics never run inference."""
import asyncio
import json
import os
from pathlib import Path
import re
import signal
import subprocess
import sys
import tempfile

from fastapi import HTTPException
from . import store

ACTIVE = None
RUNNING = False
TIMEOUT = 90
MAX_OUTPUT = 262144
SUPPORTED_VERSION = '1.4.12'
SETTINGS = {
    'toolPermission': 'strict', 'allowNonWorkspaceAccess': False,
    'disableSlashCommands': True, 'modelProvider': '',
    'statusLine': {'enabled': False}, 'title': {'enabled': False},
    'permissions': {'allow': [], 'ask': [], 'deny': [
        f'{action}(*)' for action in ('read_file', 'write_file', 'command',
                                    'read_url', 'execute_url', 'mcp')]},
}


def binary():
    # Use only the installation owned by Studio, never an executable from a request.
    return store.ROOT / 'tools' / 'antigravity' / 'bin' / 'agy'


def version():
    if not binary().is_file():
        return None
    try:
        # --version is offline; stderr is deliberately discarded.
        result = subprocess.run([str(binary()), '--version'], capture_output=True,
                                timeout=3, check=False)
        value = result.stdout[:128].decode('ascii', errors='ignore').strip()
        return value if result.returncode == 0 and re.fullmatch(r'\d+\.\d+\.\d+', value) else None
    except (OSError, subprocess.TimeoutExpired):
        return None


def extensions_present():
    # Lifecycle hooks and installed plugins are outside per-tool permissions.
    # Refuse this bridge if present, rather than modify the owner's CLI profile.
    root = Path.home() / '.gemini'
    return any(path.exists() for path in (
        root / 'config' / 'hooks.json', root / 'config' / 'mcp_config.json',
        root / 'antigravity-cli' / 'plugins', root / 'plugins',
        root / 'config' / 'plugins'))


def status():
    current = version()
    blocked = extensions_present()
    supported = current == SUPPORTED_VERSION and sys.platform == 'linux' and not blocked
    return {'installed': binary().is_file(), 'version': current,
            'supported': supported, 'extensions_blocked': blocked,
            'authentication': 'not_verified', 'busy': RUNNING,
            'mode': 'text_only', 'timeout_seconds': TIMEOUT,
            'login_command': 'studio-de-anto/local-data/tools/antigravity/bin/agy',
            'docs_url': 'https://antigravity.google/docs/getting-started?tab=cli'}


def stop():
    process = ACTIVE
    if process is not None:
        try:
            os.killpg(process.pid, signal.SIGKILL)
        except ProcessLookupError:
            pass
    return {'stopping': ACTIVE is not None}


async def ask(prompt, request):
    global ACTIVE, RUNNING
    if RUNNING:
        raise HTTPException(409, 'Antigravity ya está trabajando. Espera o pulsa Detener.')
    info = status()
    if not info['supported']:
        raise HTTPException(409, 'Instala la versión compatible 1.4.12 sin extensiones globales para usar este puente de texto. Consulta la guía de Antigravity.')
    # Remove inference keys: use only the CLI's own interactive Google login.
    env = {key: value for key, value in os.environ.items()
           if not any(part in key.upper() for part in ('API_KEY', 'APIKEY'))}
    command = [sys.executable, str(Path(__file__).with_name('codex_child.py')),
               str(os.getpid()), str(binary()), '--input-format', 'stream-json',
               '--output-format', 'stream-json', '--disable-slash-commands',
               '--mode', 'plan', '--sandbox', '--print-timeout', f'{TIMEOUT}s',
               '--settings', json.dumps(SETTINGS)]
    RUNNING = True
    try:
        with tempfile.TemporaryDirectory(prefix='anto-antigravity-') as workspace:
            # No project, attachments, credentials or repository are added as context.
            ACTIVE = await asyncio.create_subprocess_exec(
                *command, cwd=workspace, env=env, stdin=asyncio.subprocess.PIPE,
                stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.DEVNULL,
                start_new_session=True, limit=MAX_OUTPUT)
            process = ACTIVE
            process.stdin.write((json.dumps({'event': 'user', 'message': {
                'content': 'Responde solo con texto, sin herramientas ni acceso a archivos.\n'+prompt}})+'\n').encode())
            await process.stdin.drain()
            deadline = asyncio.get_running_loop().time() + TIMEOUT
            total = 0
            while asyncio.get_running_loop().time() < deadline:
                if await request.is_disconnected():
                    raise HTTPException(499, 'Solicitud cancelada; una llamada enviada puede consumir cuota.')
                try:
                    line = await asyncio.wait_for(process.stdout.readline(), timeout=1)
                except asyncio.TimeoutError:
                    continue
                if not line:
                    raise HTTPException(422, 'Antigravity no devolvió una respuesta. Inicia sesión con agy en la terminal de este entorno y vuelve a intentarlo manualmente.')
                total += len(line)
                if total > MAX_OUTPUT:
                    raise HTTPException(422, 'La respuesta superó el límite del puente. No se reintentó.')
                try:
                    event = json.loads(line)
                except (ValueError, UnicodeError):
                    continue
                if not isinstance(event, dict) or event.get('event') != 'result':
                    continue
                result = event.get('result')
                if not isinstance(result, dict) or result.get('status') != 'SUCCESS' or not isinstance(result.get('response'), str) or not result['response'].strip():
                    raise HTTPException(422, 'Antigravity no completó la solicitud. Revisa la sesión y cuota en su CLI. No se reintentó.')
                if len(result['response']) > 32000:
                    raise HTTPException(422, 'La respuesta excede 32000 caracteres. No se reintentó.')
                return {'response': result['response'], 'authentication': 'verified_for_this_request',
                        'mode': 'text_only'}
            raise HTTPException(504, 'Antigravity agotó los 90 segundos. No se reintentó; la solicitud enviada puede consumir cuota.')
    except (OSError, ValueError, ConnectionError) as exc:
        raise HTTPException(422, 'No se pudo completar el puente de Antigravity. Revisa su instalación y sesión en la terminal.') from exc
    finally:
        if ACTIVE is not None:
            stop()
            await ACTIVE.wait()
            ACTIVE = None
        RUNNING = False
