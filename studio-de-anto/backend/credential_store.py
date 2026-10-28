"""Private server-side key storage; never part of settings, exports or Git."""
import json
import os
import stat
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


def storage_error(exc,action):
    import errno
    if isinstance(exc,PermissionError) or getattr(exc,'errno',None) in (errno.EACCES,errno.EPERM):
        return ValueError('El servidor no tiene permisos para '+action+' la clave. No se reemplazó la clave anterior; revisa los permisos del directorio privado del servidor.')
    if getattr(exc,'errno',None)==errno.ENOSPC:
        return ValueError('El servidor no tiene espacio para guardar la clave. No se reemplazó la clave anterior.')
    return ValueError('No se pudo '+action+' la clave en el almacenamiento privado del servidor. No se reemplazó la clave anterior.')


def repair_owned_permissions(target,mode):
    """Repair only our own known data paths; never take ownership or use sudo."""
    if target.is_symlink():raise ValueError('El almacén privado no admite enlaces simbólicos.')
    if not target.exists():return
    info=target.stat()
    uid=getattr(os,'geteuid',lambda:None)()
    if uid is not None and info.st_uid==uid and stat.S_IMODE(info.st_mode)!=mode:
        target.chmod(mode)


def read_all(*, readonly=False):
    with _LOCK:
        try:
            target=path()
            if not readonly:
                repair_owned_permissions(target.parent,0o700)
                repair_owned_permissions(target,0o600)
            if not target.exists():return {}
            raw=target.read_text(encoding='utf-8')
        except OSError as exc:raise storage_error(exc,'leer') from None
        try:
            data=json.loads(raw)
            if not isinstance(data,dict) or any(k not in ('gemini','groq') or not isinstance(v,str) for k,v in data.items()):
                raise ValueError()
            return data
        except ValueError:
            raise ValueError('No se pudo leer el almacén privado de claves del servidor.') from None


def prepare_path():
    target=path()
    if store.ROOT.exists():
        info=store.ROOT.stat()
        repair_owned_permissions(store.ROOT,stat.S_IMODE(info.st_mode)|stat.S_IRUSR|stat.S_IWUSR|stat.S_IXUSR)
    target.parent.mkdir(mode=0o700,parents=True,exist_ok=True)
    target.parent.chmod(0o700)
    return target


def check_writable():
    """Probe storage without storing the candidate or calling a paid/free API."""
    temporary=None
    try:
        target=prepare_path()
        fd,name=tempfile.mkstemp(prefix='.credentials-',dir=target.parent)
        temporary=Path(name)
        os.close(fd)
    except OSError as exc:raise storage_error(exc,'guardar') from None
    finally:
        if temporary is not None:
            try:temporary.unlink(missing_ok=True)
            except OSError:pass


def restore(data):
    with _LOCK:
        temporary=None
        try:
            target=prepare_path()
            fd,name=tempfile.mkstemp(prefix='.credentials-',dir=target.parent)
            temporary=Path(name)
            with os.fdopen(fd,'w',encoding='utf-8') as handle:
                json.dump(data,handle,ensure_ascii=False)
                handle.flush();os.fsync(handle.fileno())
            temporary.chmod(0o600)
            os.replace(temporary,target)
        except OSError as exc:
            raise storage_error(exc,'guardar') from None
        finally:
            if temporary is not None:
                try:temporary.unlink(missing_ok=True)
                except OSError:pass


def save(kind,value):
    with _LOCK:
        data=read_all();data[kind]=value;restore(data)


def delete(kind):
    with _LOCK:
        data=read_all();data.pop(kind,None);restore(data)
