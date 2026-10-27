#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
python3 -m venv .venv
.venv/bin/python -m pip install -r backend/requirements.lock
(cd frontend && npm ci --cache ../.npm-cache --no-audit --no-fund && npm run build)
echo 'Instalación completa. Ejecuta bash scripts/start.sh'
