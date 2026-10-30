#!/usr/bin/env bash
# File stop works without authentication, network, or a responding application UI.
set -euo pipefail
anto_project="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
mkdir -p "$anto_project/local-data"
umask 077
: > "$anto_project/local-data/.codex-autonomy-stop"
echo 'Parada de Codex solicitada. El supervisor detendrá su grupo de procesos.'
echo 'Para reactivar: revisa los cambios, retira local-data/.codex-autonomy-stop e inicia la cola desde la interfaz.'
