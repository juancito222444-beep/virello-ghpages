"""Isolate the database before any test module can import backend.store."""
import os
import tempfile

# Test selection/order must never make API tests open the running app's data.
_data=tempfile.TemporaryDirectory(prefix='anto-suite-')
_matplotlib=tempfile.TemporaryDirectory(prefix='anto-suite-mpl-')
# Legacy provider protocol fixtures opt in explicitly; production defaults to cloud.
os.environ['STUDIO_CLOUD_ONLY']='0'
os.environ['ANTO_DATA_DIR']=_data.name
os.environ['MPLCONFIGDIR']=_matplotlib.name


def pytest_sessionfinish(session,exitstatus):
    # These directories were created exclusively by this pytest process.
    _data.cleanup()
    _matplotlib.cleanup()

# The autonomous verifier cannot consume external APIs even if a future test forgets a mock.
if os.environ.get('STUDIO_AUTONOMY_TEST') == '1':
    import socket
    _original_connect = socket.socket.connect
    _original_connect_ex = socket.socket.connect_ex
    def _local_address(sock, address):
        return sock.family == socket.AF_UNIX or (isinstance(address, tuple) and address[0] in ('127.0.0.1', '::1', 'localhost'))
    def _offline_connect(sock, address):
        if not _local_address(sock, address):
            raise OSError('External network disabled during autonomy verification')
        return _original_connect(sock, address)
    def _offline_connect_ex(sock, address):
        if not _local_address(sock, address):
            raise OSError('External network disabled during autonomy verification')
        return _original_connect_ex(sock, address)
    socket.socket.connect = _offline_connect
    socket.socket.connect_ex = _offline_connect_ex
