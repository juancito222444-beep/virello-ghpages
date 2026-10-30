#!/usr/bin/env bash
set -euo pipefail
umask 077

anto_mode="${1:-}"
[[ "$anto_mode" == "" || "$anto_mode" == "--check" ]] || exit 2

anto_root="$(git -C "$(dirname "${BASH_SOURCE[0]}")/.." rev-parse --show-toplevel)"
anto_project="$anto_root/studio-de-anto"
anto_data="$anto_project/local-data"
anto_pending="$anto_data/.anto-update-pending"
cd "$anto_root"

# Actualiza antes de arrancar; conserva una aplicación que ya esté escuchando.
if [[ "$anto_mode" != "--check" ]] && python3 -c \
'import socket; s=socket.socket(); s.settimeout(1); r=s.connect_ex(("127.0.0.1",8765)); s.close(); raise SystemExit(0 if r==0 else 1)'
then
    echo "Servidor activo: la actualización queda para el siguiente arranque."
    exit 0
fi

mkdir -p "$anto_data"
command -v flock >/dev/null || {
    echo "No se pudo comprobar el bloqueo del actualizador."
    exit 1
}
exec 9>"$anto_data/.anto-update.lock"
flock -n 9 || {
    echo "Ya hay una comprobación de actualización en curso."
    exit 75
}

export ANTO_UPDATE_LOCK_FD=9

if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "Cambios locales detectados: se conservan y no se actualiza."
    [[ ! -e "$anto_pending" ]] || exit 1
    exit 0
fi

case "$(git branch --show-current)" in
    codex/studio-de-anto-modelo-real|codex/studio-de-anto-mejoras) ;;
    *) echo "Esta rama conserva su código sin actualización automática."; exit 0 ;;
esac

if ! timeout 45s git fetch --no-tags origin codex/studio-de-anto-mejoras; then
    echo "No se pudo consultar GitHub."
    [[ "$anto_mode" != "--check" && ! -e "$anto_pending" ]] || exit 1
    exit 0
fi

anto_current="$(git rev-parse HEAD)"
anto_target="$(git rev-parse 'FETCH_HEAD^{commit}')"

if ! git merge-base --is-ancestor "$anto_current" "$anto_target"; then
    echo "Hay commits locales sin publicar: se conservan y no se fuerza ningún cambio."
    [[ ! -e "$anto_pending" ]] || exit 1
    exit 0
fi

printf 'Código actual: %s\nCódigo publicado: %s\n' "$anto_current" "$anto_target"
[[ "$anto_mode" != "--check" ]] || exit 0

if [[ "$anto_current" == "$anto_target" && ! -e "$anto_pending" ]]; then
    echo "Ya tienes el código publicado."
    exit 0
fi

printf '%s\n' "$anto_target" > "$anto_pending"

# El instalador prepara el código; el arranque continúa después.
CODESPACES=false STUDIO_REPO_ROOT="$anto_root" \
    bash "$anto_project/scripts/apply-improvements.sh"

rm -- "$anto_pending"
echo "Actualización instalada. Continuando con el arranque."
