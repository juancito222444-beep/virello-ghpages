#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ "${CODESPACES:-}" != "true" || -z "${CODESPACE_NAME:-}" || -z "${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-}" ]]; then
  echo 'Este arranque es para GitHub Codespaces. En tu PC usa: bash scripts/start.sh' >&2
  exit 1
fi
if [[ ! -x .venv/bin/python || ! -f frontend/dist/index.html ]]; then
  echo 'Falta instalar el proyecto. Ejecuta: bash scripts/install.sh' >&2
  exit 1
fi
export MPLCONFIGDIR="$PWD/local-data/matplotlib"
export XDG_CACHE_HOME="$PWD/local-data/cache"
mkdir -p "$MPLCONFIGDIR" "$XDG_CACHE_HOME"
export STUDIO_CLOUD_ONLY=1
cloud_hostname="$(.venv/bin/python -c 'from backend.access import codespace_host; value=codespace_host(); print(value or ""); raise SystemExit(0 if value else 1)')" || {
  echo 'El nombre o dominio de Codespaces no es válido; no se abrirá el servidor.' >&2
  exit 1
}
cloud_url="https://${cloud_hostname}"
cloud_log="$PWD/local-data/codespaces-server.log"
cloud_pidfile="$PWD/local-data/codespaces-server.pid"

# A 200 alone is not enough: ensure the listener is this app, not another service.
ready() {
  .venv/bin/python - <<'PY' >/dev/null 2>&1
import json, urllib.request
from backend.access import codespace_host
from backend.runtime import code_version, environment_matches
host = codespace_host()
assert host
headers = {'Host': host, 'Origin': 'https://' + host}
request = urllib.request.Request('http://127.0.0.1:8765/openapi.json', headers=headers)
with urllib.request.urlopen(request, timeout=2) as response:
    data = json.load(response)
assert data.get('info', {}).get('title') == 'STUDIO DE ANTO'
request = urllib.request.Request('http://127.0.0.1:8765/api/health', headers=headers)
with urllib.request.urlopen(request, timeout=2) as response:
    health = json.load(response)
assert health.get('code_version') == code_version()
assert environment_matches(health.get('pid'))
request = urllib.request.Request('http://127.0.0.1:8765/api/projects', headers=headers)
with urllib.request.urlopen(request, timeout=2) as response:
    assert isinstance(json.load(response), list)
PY
}
if ready; then
  echo "STUDIO DE ANTO está listo: ${cloud_url}"
  echo 'La aplicación se abre automáticamente en el navegador. También está en Puertos → 8765.'
  exit 0
fi
if [[ "${1:-}" != "--background" ]]; then
  echo "Abre el puerto 8765 desde la pestaña Puertos (visibilidad Privada): ${cloud_url}"
  exec .venv/bin/python -m uvicorn backend.app:app --host 0.0.0.0 --port 8765
fi

# Serialize postStart/manual attempts without killing a pre-existing process.
exec 9>"$PWD/local-data/codespaces-start.lock"
if ! flock -w 30 9; then
  echo 'Otro arranque sigue en curso. Revisa local-data/codespaces-server.log.' >&2
  exit 1
fi
if ready; then
  echo "STUDIO DE ANTO ya está ejecutándose: ${cloud_url}"
  exit 0
fi
# A code/key update must not leave an old process serving the new interface.
# Only the PID recorded by this script, with verified owner/cwd/command, may stop.
.venv/bin/python - <<'PYCODE'
import socket
from backend.runtime import ROOT, stop_owned_server
try:
    if stop_owned_server(ROOT/'local-data/codespaces-server.pid'):
        print('Aplicando actualización del servidor y su configuración de conexión…')
    # Refuse to initialize the database while an unidentified server is listening.
    try:
        with socket.socket() as listener:
            listener.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)
            listener.bind(('127.0.0.1',8765))
    except OSError:
        raise ValueError('El puerto 8765 sigue ocupado por un servidor no identificado. No se modificó ningún otro proceso; reinicia el Codespace.')
except ValueError as exc:
    print(str(exc))
    raise SystemExit(1)
PYCODE
nohup .venv/bin/python -m uvicorn backend.app:app --host 0.0.0.0 --port 8765 >"$cloud_log" 2>&1 < /dev/null 9>&- &
cloud_pid=$!
printf '%s\n' "$cloud_pid" > "$cloud_pidfile"
for _ in {1..30}; do
  if ready; then
    echo "STUDIO DE ANTO listo: ${cloud_url}"
    echo 'La aplicación se abre automáticamente. Si no aparece, usa Puertos → 8765 → Abrir en navegador.'
    echo "Registro: ${cloud_log}"
    exit 0
  fi
  if ! kill -0 "$cloud_pid" 2>/dev/null; then
    echo "El servidor no pudo arrancar. Registro: ${cloud_log}" >&2
    tail -n 15 "$cloud_log" >&2
    exit 1
  fi
  sleep 1
done
echo "El servidor no confirmó disponibilidad en 30 segundos. Revisa ${cloud_log}." >&2
exit 1
