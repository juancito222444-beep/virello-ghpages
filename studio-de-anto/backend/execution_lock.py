"""Advisory lock shared with every repository updater."""
from contextlib import contextmanager
import os
from pathlib import Path

@contextmanager
def exclusive(path: Path):
    import fcntl
    path.parent.mkdir(parents=True,exist_ok=True)
    fd=os.open(path,os.O_CREAT|os.O_RDWR|getattr(os,'O_NOFOLLOW',0),0o600)
    try:
        fcntl.flock(fd,fcntl.LOCK_EX|fcntl.LOCK_NB)
        yield fd
    finally:os.close(fd)
