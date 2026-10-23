#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
python3 -m venv .venv
.venv/bin/python -m pip install -r backend/requirements.lock
(cd frontend && npm ci --cache ../.npm-cache --no-audit --no-fund && npm run build)
if [[ "${STUDIO_BOOTSTRAP_MODEL:-0}" == "1" ]]; then
  echo 'STUDIO_BOOTSTRAP_MODEL=1: instalación explícita del modelo compacto (hasta 2.2 GB de pesos).'
  .venv/bin/python scripts/setup-model.py --download
fi
echo 'Instalación completa. Ejecuta bash scripts/start.sh'
