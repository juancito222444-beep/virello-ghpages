#!/usr/bin/env bash
set -euo pipefail

main() {
  local check_only=0
  if [[ "$#" == 1 && "$1" == --check ]]; then
    check_only=1
  elif [[ "$#" != 0 ]]; then
    echo 'Uso: bash studio-de-anto/scripts/apply-improvements.sh [--check]' >&2
    return 2
  fi

  local project_dir repo_root current_branch previous target install_status
  local branch='codex/studio-de-anto-mejoras'
  # A temporary copy can update an older checkout that does not have this file.
  # This selects the existing repository; it never moves or creates a checkout.
  if [[ -n "${STUDIO_REPO_ROOT:-}" ]]; then
    repo_root="$(git -C "$STUDIO_REPO_ROOT" rev-parse --show-toplevel)"
    project_dir="$repo_root/studio-de-anto"
  else
    project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd -P)"
    repo_root="$(git -C "$project_dir" rev-parse --show-toplevel)"
    if [[ "$project_dir" != "$repo_root/studio-de-anto" ]]; then
      echo 'No se actualizó: ejecuta el instalador del proyecto o indica STUDIO_REPO_ROOT con la ruta del repositorio existente.' >&2
      return 1
    fi
  fi
  if [[ ! -f "$project_dir/scripts/install.sh" || ! -f "$project_dir/scripts/start-cloud.sh" ]]; then
    echo 'No se actualizó: no se encontró STUDIO DE ANTO en este repositorio.' >&2
    return 1
  fi
  cd -- "$repo_root"
  # Share one lock with the Codex worker, including nested boot installation.
  mkdir -p "$project_dir/local-data"
  command -v flock >/dev/null || { echo 'No se pudo comprobar el bloqueo del actualizador.' >&2; return 1; }
  local anto_lock_fd="${ANTO_UPDATE_LOCK_FD:-}"
  if [[ ! "$anto_lock_fd" =~ ^[0-9]+$ ]] || [[ ! "$project_dir/local-data/.anto-update.lock" -ef "/proc/$$/fd/$anto_lock_fd" ]]; then
    exec 8>"$project_dir/local-data/.anto-update.lock"
    anto_lock_fd=8
  fi
  flock -n "$anto_lock_fd" || { echo 'Codex u otro actualizador está trabajando; no se modificó el código.' >&2; return 75; }
  export ANTO_UPDATE_LOCK_FD="$anto_lock_fd"
  current_branch="$(git symbolic-ref --quiet --short HEAD || true)"
  if [[ "$current_branch" != 'codex/studio-de-anto-modelo-real' && "$current_branch" != "$branch" ]]; then
    echo 'No se actualizó: usa la rama codex/studio-de-anto-modelo-real o codex/studio-de-anto-mejoras; no se cambió tu rama.' >&2
    return 1
  fi
  if ! git diff --quiet --ignore-submodules=none || ! git diff --cached --quiet --ignore-submodules=none; then
    echo 'No se actualizó: hay cambios locales rastreados. Revísalos y guárdalos antes de continuar.' >&2
    return 1
  fi

  previous="$(git rev-parse HEAD)"
  # Consult the existing origin; never replace authentication or remote settings.
  git fetch --no-tags origin "$branch"
  target="$(git rev-parse 'FETCH_HEAD^{commit}')"
  printf 'Versión actual: %s\nVersión de mejoras: %s\n' "$previous" "$target"
  if ! git merge-base --is-ancestor "$previous" "$target"; then
    echo 'No se actualizó: el remoto no contiene tus commits locales. No se forzó ningún cambio.' >&2
    return 1
  fi
  if [[ "$check_only" == 1 ]]; then
    if [[ "$previous" == "$target" ]]; then
      echo 'Ya tienes la revisión de mejoras disponible. No se instaló ni reinició nada.'
    else
      echo 'Hay una actualización disponible. Ejecuta este instalador sin --check para aplicarla.'
    fi
    return 0
  fi

  printf 'Referencia de recuperación del código anterior: %s\n' "$previous"
  echo 'No se ejecuta ninguna reversión ni se revierten datos o migraciones.'
  if [[ "$previous" != "$target" ]]; then
    # Protect both untracked work and ignored private files from incoming paths.
    git merge --ff-only --no-edit --no-overwrite-ignore "$target"
  fi
  printf 'Código seleccionado: %s\n' "$(git rev-parse HEAD)"
  # Also install at the same HEAD, so a failed installation can be retried.
  if bash "$project_dir/scripts/install.sh"; then
    echo 'Dependencias y compilación instaladas.'
  else
    install_status=$?
    echo 'La instalación no terminó. El servidor no se reinició. Corrige el error y vuelve a ejecutar este instalador.' >&2
    return "$install_status"
  fi
  if [[ "${CODESPACES:-}" == true ]]; then
    ANTO_SKIP_BOOT_UPDATE=1 bash "$project_dir/scripts/start-cloud.sh" --background
  else
    printf 'Para iniciar la aplicación en este equipo: bash %q\n' "$project_dir/scripts/start.sh"
  fi
}

main "$@"
