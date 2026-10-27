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
