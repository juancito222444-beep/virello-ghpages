#!/usr/bin/env python3
"""Opt-in, pinned official CLI download. Never replaces an existing installation."""
import hashlib
import io
import os
from pathlib import Path
import tarfile
import tempfile
from urllib.request import urlopen

URL = 'https://storage.googleapis.com/antigravity-public/antigravity-cli/1.4.12-4768735748292608/linux-x64/cli_linux_x64.tar.gz'
SHA512 = 'ea01c73b772187bca928852cf96235f0d846d6da5ebdac188b9ae719597465737f325540d483ee5f3f62d151029001713344972a187ddfb98cc7b97f7204b7f4'


def main():
    import platform
    if platform.system() != 'Linux' or platform.machine() not in ('x86_64', 'AMD64'):
        raise SystemExit('Esta instalación requiere Linux x64. Consulta las descargas oficiales de Antigravity.')
    root = Path(os.environ.get('ANTO_DATA_DIR', Path(__file__).resolve().parents[1] / 'local-data'))
    target = root / 'tools/antigravity/bin/agy'
    if target.exists() or target.is_symlink():
        print('La instalación existente se conserva. No se descargó ni reemplazó nada.')
        return
    with urlopen(URL, timeout=60) as response:
        data = response.read(200 * 1024 * 1024 + 1)
    if len(data) > 200 * 1024 * 1024 or hashlib.sha512(data).hexdigest() != SHA512:
        raise SystemExit('La descarga no coincide con el SHA512 oficial esperado. No se instaló.')
    with tarfile.open(fileobj=io.BytesIO(data), mode='r:gz') as archive:
        members = [member for member in archive.getmembers() if member.isfile() and Path(member.name).name == 'antigravity']
        if len(members) != 1 or members[0].size > 512 * 1024 * 1024:
            raise SystemExit('Archivo de instalación inesperado. No se instaló.')
        payload = archive.extractfile(members[0]).read()
    target.parent.mkdir(parents=True, exist_ok=True)
    # Link atomically without ever overwriting a concurrent install or symlink.
    with tempfile.NamedTemporaryFile(dir=target.parent, prefix='.agy-') as output:
        output.write(payload)
        output.flush()
        os.fchmod(output.fileno(), 0o700)
        try:
            os.link(output.name, target)
        except FileExistsError:
            print('Se conservó la instalación que apareció durante la descarga.')
            return
    print('Antigravity 1.4.12 instalado. Inicia sesión desde la terminal; no se consultó ningún modelo.')


if __name__ == '__main__':
    main()
