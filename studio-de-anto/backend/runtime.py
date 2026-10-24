"""Identify the loaded server and safely compare its startup environment."""
import hashlib
import os
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
SECRET_NAMES=('STUDIO_GEMINI_API_KEY','GEMINI_API_KEY','GOOGLE_API_KEY','STUDIO_GROQ_API_KEY','GROQ_API_KEY')
ENV_NAMES=(*SECRET_NAMES,'STUDIO_CLOUD_ONLY','STUDIO_AI_PROVIDER')


def code_version(root=ROOT):
    digest=hashlib.sha256()
    for path in sorted((root/'backend').glob('*.py')):
        digest.update(path.name.encode());digest.update(b'\0');digest.update(path.read_bytes())
    return digest.hexdigest()


def owned_server(pid,root=ROOT,proc=Path('/proc')):
    """A stale/reused PID is insufficient: check owner, cwd and exact command."""
    if not isinstance(pid,int) or pid<=1:return False
    try:
        directory=proc/str(pid)
        if directory.stat().st_uid!=os.geteuid():return False
        if (directory/'cwd').resolve()!=root.resolve():return False
        args=(directory/'cmdline').read_bytes().decode().split('\0')
        return 'uvicorn' in args and 'backend.app:app' in args and '--port' in args and args[args.index('--port')+1]=='8765'
    except (OSError,ValueError,IndexError,UnicodeError):return False


def environment_matches(pid,root=ROOT,proc=Path('/proc')):
    if not owned_server(pid,root,proc):return False
    try:
        # Values are compared in memory only; never returned or logged.
        entries=(proc/str(pid)/'environ').read_bytes().decode().split('\0')
        values=dict(item.split('=',1) for item in entries if '=' in item)
        return all(values.get(name,'')==os.environ.get(name,'') for name in ENV_NAMES)
    except (OSError,UnicodeError):return False


def safe_error(value):
    from . import cloud
    try:return cloud.redact(value)
    except Exception:return 'No se pudo acceder a la configuración privada del servidor.'


def stop_owned_server(pidfile,root=ROOT,timeout=20):
    """Gracefully stop only this project's recorded server; never force-kill."""
    import signal
    import time
    try:pid=int(Path(pidfile).read_text().strip())
    except FileNotFoundError:return False
    except (OSError,ValueError):return False
    if not (Path('/proc')/str(pid)).exists() or not owned_server(pid,root):return False
    handle=None
    try:
        if hasattr(os,'pidfd_open') and hasattr(signal,'pidfd_send_signal'):
            handle=os.pidfd_open(pid)
        if not owned_server(pid,root):
            return False
        if handle is not None:signal.pidfd_send_signal(handle,signal.SIGTERM)
        else:os.kill(pid,signal.SIGTERM)
        deadline=time.monotonic()+timeout
        while owned_server(pid,root):
            if time.monotonic()>=deadline:
                raise ValueError('El servidor sigue terminando peticiones. Espera y vuelve a abrir el Codespace; no se forzó su cierre.')
            time.sleep(.2)
        return True
    except ProcessLookupError:return False
    finally:
        if handle is not None:os.close(handle)
