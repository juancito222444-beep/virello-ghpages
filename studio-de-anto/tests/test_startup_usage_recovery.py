"""Startup recovers abandoned attempts before requests; GET leaves live calls alone."""
from fastapi.testclient import TestClient
from backend import store,usage
from backend.app import app


def test_lifespan_preserves_consumed_quota_and_does_not_recover_new_live_attempts(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init()
    abandoned=usage._reserve('gemini','mock-model')
    with TestClient(app) as client:
        recovered=store.one('SELECT status,interrupted FROM api_usage WHERE id=?',(abandoned,))
        assert recovered=={'status':'failed','interrupted':1}
        summary=client.get('/api/usage').json()
        assert summary['attempted']==1 and summary['interrupted']==1
        live=usage._reserve('gemini','mock-model')
        summary=client.get('/api/usage').json()
        assert summary['attempted']==2 and summary['active']==1 and summary['interrupted']==1
        assert store.one('SELECT status FROM api_usage WHERE id=?',(live,))['status']=='active'
