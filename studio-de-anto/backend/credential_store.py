"""Private server-side key storage; never part of settings, exports or Git."""
import json
import os
import tempfile
import threading
from pathlib import Path
from . import store

_LOCK=threading.RLock()


def path():
    result=store.ROOT/'private'/'credentials.json'
    public=Path(__file__).resolve().parents[1]/'frontend'/'dist'
    if result.resolve().is_relative_to(public.resolve()):
        raise ValueError('El directorio de claves no puede estar dentro de los archivos públicos.')
    if result.parent.is_symlink() or result.is_symlink():
        raise ValueError('El almacén privado no admite enlaces simbólicos.')
    return result


def read_all():
    with _LOCK:
        target=path()
        if not target.exists():return {}
        try:
            data=json.loads(target.read_text(encoding='utf-8'))
            if not isinstance(data,dict) or any(k not in ('gemini','groq') or not isinstance(v,str) for k,v in data.items()):
                raise ValueError()
            return data
        except (OSError,ValueError):
            raise ValueError('No se pudo leer el almacén privado de claves del servidor.') from None


def restore(data):
    with _LOCK:
        target=path();target.parent.mkdir(mode=0o700,parents=True,exist_ok=True)
        target.parent.chmod(0o700)
        fd,name=tempfile.mkstemp(prefix='.credentials-',dir=target.parent)
        temporary=Path(name)
        try:
            with os.fdopen(fd,'w',encoding='utf-8') as handle:
                json.dump(data,handle,ensure_ascii=False)
                handle.flush();os.fsync(handle.fileno())
            temporary.chmod(0o600)
            os.replace(temporary,target)
        except OSError:
            raise ValueError('No se pudo guardar la clave en el directorio privado del servidor.') from None
        finally:
            temporary.unlink(missing_ok=True)


def save(kind,value):
    with _LOCK:
        data=read_all();data[kind]=value;restore(data)


def delete(kind):
    with _LOCK:
        data=read_all();data.pop(kind,None);restore(data)
