#!/usr/bin/env python3
"""Start a previously installed local Ollama, without any network download."""
import argparse
from pathlib import Path
import sys
from model_runtime import DEFAULT_URL, ROOT, ensure_server, write_readiness


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--url', default=DEFAULT_URL, help='API HTTP local de Ollama.')
    parser.add_argument('--root', type=Path, default=ROOT, help=argparse.SUPPRESS)
    parser.add_argument('--timeout', type=float, default=30)
    args = parser.parse_args()
    try:
        result = ensure_server(args.url, root=args.root, timeout=args.timeout)
        result = write_readiness(result, root=args.root)
        if not result['connected']:
            print(result.get('error', 'Ollama no está disponible.'), file=sys.stderr)
            return 1
        models = ', '.join(result['models']) or 'ninguno instalado'
        print(f'Ollama disponible en {result["endpoint"]}. Modelos: {models}.')
        if not result.get('inference_verified'):
            print('El catálogo no prueba inferencia. Prueba desde Configuración o setup-model.py --test.')
        return 0
    except (OSError, ValueError, TimeoutError) as exc:
        print(f'No se pudo preparar el servidor local: {exc}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
