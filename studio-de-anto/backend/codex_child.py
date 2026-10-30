"""Linux process guardian: a dead supervisor must not leave a coding agent alive.

Invoked only by codex_runner in a fresh session; all descendants share this group.
It inherits stdin/stdout but never reads prompts or credentials itself.
"""
import ctypes
import os
import signal
import subprocess
import sys


def main():
    expected=int(sys.argv[1]);args=sys.argv[2:]
    if not args or sys.platform!='linux':return 126
    def stop(*_):
        os.killpg(os.getpgrp(),signal.SIGKILL)
    signal.signal(signal.SIGTERM,stop)
    # A catchable parent-death signal lets us kill the entire group, not just
    # the leading CLI process. Check the race where the parent already exited.
    libc=ctypes.CDLL(None,use_errno=True)
    if libc.prctl(1,signal.SIGTERM,0,0,0)!=0:return 126
    if os.getppid()!=expected:stop()
    try:
        child=subprocess.Popen(args)
        return child.wait()
    except OSError:return 126


if __name__=='__main__':sys.exit(main())
