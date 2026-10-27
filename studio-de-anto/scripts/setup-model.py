#!/usr/bin/env python3
"""Install one compact local model only when --download is explicitly supplied."""
import argparse
import json
from pathlib import Path
import os
import sys
from model_runtime import (
    DEFAULT_MODEL, DEFAULT_URL, MAX_MODEL_BYTES, ROOT, configure_agents, discover,
    ensure_server, install_ollama, model_is_present, model_parts, probe_app,
    pull_model, write_readiness,
)


def main():
    if os.environ.get('STUDIO_CLOUD_ONLY','1')!='0':
        print('Esta entrega usa APIs en la nube. No se inicia Ollama ni se descargan modelos. Configura Gemini o Groq en la aplicación.')
        return 0
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--download', action='store_true', help='Autoriza instalar Ollama y descargar el modelo (máximo 2.2 GB de pesos).')
    parser.add_argument('--model', default=os.environ.get('STUDIO_MODEL', DEFAULT_MODEL))
    parser.add_argument('--url', default=DEFAULT_URL, help='API HTTP local de Ollama.')
    parser.add_argument('--configure', action='store_true', help='Reemplaza explícitamente proveedor, URL y modelos personalizados de los seis agentes.')
    parser.add_argument('--test', action='store_true', help='Prueba inferencia real mediante POST /api/models/test con la aplicación ya abierta.')
    parser.add_argument('--app-url', default='http://127.0.0.1:8765')
    parser.add_argument('--agent', choices=('anto', 'atlas', 'vera', 'bruno', 'iris', 'leo'), default='anto')
    parser.add_argument('--root', type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = parser.parse_args()
    report = {'endpoint': args.url, 'provider': 'ollama', 'model': args.model,
              'connected': False, 'models': [], 'inference_verified': False, 'check': 'discovery_only'}
    try:
        model_parts(args.model)
        if args.download:
            # This is the only call path that installs a runtime or model.
            install_ollama(args.root)
        status = ensure_server(args.url, root=args.root) if (args.download or args.configure) else discover(args.url)
        report.update(status)
        if args.download and not status['connected']:
            raise ValueError(status.get('error', 'Ollama no está disponible.'))
        present = model_is_present(status['models'], args.model)
        if args.download and not present:
            report.update(pull_model(args.model, args.url))
            refreshed = discover(args.url)
            if not refreshed.get('error'):
                report.pop('error', None)
            report.update(refreshed)
            present = model_is_present(report['models'], args.model)
        report['model_installed'] = present
        if args.download or args.configure:
            if not present:
                raise ValueError(f'El modelo {args.model} no está instalado. No se cambió la configuración; usa --download para instalarlo.')
            configured = configure_agents(args.model, args.url, overwrite=args.configure, root=args.root)
            report['configuration'] = configured
            if configured['skipped_custom']:
                print('Se conservó tu proveedor o URL personalizada. Usa --configure solo si quieres reemplazarlos.')
            else:
                print(f'Modelo {args.model} instalado; {configured["configured_count"]} agentes configurados ahora.')
        if args.test:
            # Only this successful app endpoint can certify inference.
            try:
                proof = probe_app(args.app_url, args.agent)
            except (OSError, ValueError) as exc:
                report.update(inference_verified=False, check='inference_failed', inference_error=str(exc))
                raise ValueError('Falló la prueba real de inferencia: ' + str(exc)) from exc
            report.update(inference_verified=True, check='inference', inference=proof,
                          provider=proof.get('provider'), model=proof.get('model'),
                          endpoint=proof.get('endpoint'), agent=args.agent, connected=True)
            print(f'Inferencia real verificada: {proof.get("provider")} / {proof.get("model")} ({proof.get("latency_ms")} ms).')
            print(proof['response'])
        else:
            print('Inferencia aún no probada en este comando. Con la app abierta: python scripts/setup-model.py --test')
        report = write_readiness(report, root=args.root)
        if not args.download and not args.configure and not args.test:
            print(json.dumps(report, ensure_ascii=False, indent=2))
            print(f'Para instalar el modelo compacto explícitamente (límite {MAX_MODEL_BYTES:,} bytes): python scripts/setup-model.py --download')
        return 0
    except (OSError, ValueError, TimeoutError) as exc:
        report['error'] = str(exc)
        write_readiness(report, root=args.root)
        print(f'Preparación del modelo incompleta: {exc}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
