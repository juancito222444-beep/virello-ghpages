"""A background server must not retain the updater's inherited flock descriptor."""
import fcntl
import os
from pathlib import Path
import shlex
import signal
import subprocess
import sys
import time

import pytest


def test_real_background_launch_releases_only_its_copy_of_update_lock(tmp_path):
    root = tmp_path / 'studio with spaces'; data = root / 'local-data'; data.mkdir(parents=True)
    lock = data / '.anto-update.lock'; fd = os.open(lock, os.O_CREAT | os.O_RDWR, 0o600)
    fcntl.flock(fd, fcntl.LOCK_EX | fcntl.LOCK_NB)
    ready = data / 'ready'; stop = data / 'stop'
    probe = root / 'probe.py'
    probe.write_text('import pathlib,time\np=pathlib.Path(__file__).parent/"local-data"\n'
                     '(p/"ready").write_text("ready")\n'
                     'for _ in range(200):\n if (p/"stop").exists():break\n time.sleep(.02)\n')
    binary = root / '.venv/bin/python'; binary.parent.mkdir(parents=True)
    binary.write_text('#!/bin/sh\nexec ' + shlex.quote(sys.executable) + ' ' + shlex.quote(str(probe)) + '\n'); binary.chmod(0o755)
    source = (Path(__file__).resolve().parents[1] / 'scripts/start-cloud.sh').read_text()
    launch = source[source.index('(\n  # The updater owns'):source.index('\ncloud_pid=$!')]
    env = {**os.environ, 'ANTO_UPDATE_LOCK_FD': str(fd), 'cloud_log': str(data / 'server.log')}
    child = None; second = None
    try:
        process = subprocess.run(['bash','-c',launch+'\nprintf "%s" "$!"'],cwd=root,env=env,
                                 pass_fds=(fd,),capture_output=True,text=True,timeout=5,check=True)
        child = int(process.stdout)
        deadline = time.monotonic() + 3
        while not ready.exists() and time.monotonic() < deadline: time.sleep(.02)
        assert ready.exists(), 'The stub server did not start'
        second = os.open(lock, os.O_RDWR)
        with pytest.raises(BlockingIOError): fcntl.flock(second, fcntl.LOCK_EX | fcntl.LOCK_NB)
        # Closing the updater's own descriptor must free the lock while its
        # background child is still alive; that is the regression being tested.
        os.close(fd); fd = None
        fcntl.flock(second, fcntl.LOCK_EX | fcntl.LOCK_NB)
        os.kill(child, 0)
    finally:
        stop.write_text('stop')
        if fd is not None: os.close(fd)
        if second is not None: os.close(second)
        if child is not None:
            try: os.kill(child, signal.SIGTERM)
            except ProcessLookupError: pass
