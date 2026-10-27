#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ ! -x .venv/bin/python || ! -f frontend/dist/index.html ]]; then
  echo 'Primero ejecuta: bash scripts/install.sh'; exit 1
fi
export MPLCONFIGDIR="$PWD/local-data/matplotlib"
export XDG_CACHE_HOME="$PWD/local-data/cache"
mkdir -p "$MPLCONFIGDIR" "$XDG_CACHE_HOME"
export STUDIO_CLOUD_ONLY=1
echo 'Abre el navegador en http://127.0.0.1:8765. Ctrl+C para detener.'
exec .venv/bin/python -m uvicorn backend.app:app --host 127.0.0.1 --port 8765 --timeout-graceful-shutdown 15
