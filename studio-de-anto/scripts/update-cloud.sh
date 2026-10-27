#!/usr/bin/env bash
set -euo pipefail

main() {
  local check_only=0
  if [[ "$#" == 1 && "$1" == --check ]]; then
    check_only=1
  elif [[ "$#" != 0 ]]; then
    echo 'Uso: bash scripts/update-cloud.sh [--check]' >&2
    return 2
  fi

  local project_dir repo_root branch current_branch previous target
  project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
  repo_root="$(git -C "$project_dir" rev-parse --show-toplevel)"
  cd -- "$repo_root"
  branch='codex/studio-de-anto-modelo-real'
  current_branch="$(git symbolic-ref --quiet --short HEAD || true)"
  if [[ "$current_branch" != "$branch" ]]; then
    echo "No se actualizó: abre la rama ${branch} antes de continuar." >&2
    return 1
  fi
  if ! git diff --quiet --ignore-submodules=none || ! git diff --cached --quiet --ignore-submodules=none; then
    echo 'No se actualizó: hay cambios locales rastreados. Revísalos y guárdalos antes de continuar.' >&2
    return 1
  fi

  previous="$(git rev-parse HEAD)"
  # Fetch once, then advance only to that exact commit. No force, reset or install.
  git fetch --no-tags origin "$branch"
  target="$(git rev-parse 'FETCH_HEAD^{commit}')"
  printf 'Versión actual: %s\nVersión remota: %s\n' "$previous" "$target"
  if [[ "$previous" == "$target" ]]; then
    echo 'Ya tienes la versión disponible.'
  else
    if ! git merge-base --is-ancestor "$previous" "$target"; then
      echo 'No se actualizó: la rama local tiene commits que no contiene el remoto. Revisa el historial; no se forzó ningún cambio.' >&2
      return 1
    fi
    if [[ "$check_only" == 1 ]]; then
      echo 'Hay una actualización disponible. Ejecuta este script sin --check para aplicarla.'
      return 0
    fi
    git merge --ff-only --no-edit --no-overwrite-ignore "$target"
    printf 'Versión anterior: %s\nVersión nueva: %s\n' "$previous" "$(git rev-parse HEAD)"
    echo 'Para volver al código anterior, cuando no haya respuestas en curso:'
    printf 'git -C %q switch --detach %q && bash %q --background\n' "$repo_root" "$previous" "$project_dir/scripts/start-cloud.sh"
    echo 'Ese comando no se ha ejecutado. Solo revierte código; no revierte datos ni migraciones.'
  fi
  if [[ "$check_only" == 1 ]]; then
    return 0
  fi
  bash "$project_dir/scripts/start-cloud.sh" --background
}

main "$@"
