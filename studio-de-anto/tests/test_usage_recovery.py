"""Startup accounting recovery uses temporary SQLite only, never model APIs."""
from datetime import datetime, timezone
import json
import sqlite3

import pytest

from backend import store, usage


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setattr(usage,'_now',lambda:datetime(2026,10,27,12,tzinfo=timezone.utc))


def legacy_rows():
    # Deliberately reproduce the released schema without the new detail flag.
    with store.db() as c:
        c.execute('''CREATE TABLE api_usage(
            id TEXT PRIMARY KEY,day TEXT NOT NULL,provider TEXT NOT NULL,model TEXT NOT NULL,
            status TEXT NOT NULL CHECK(status IN ('active','completed','failed','cancelled')),
            input_tokens INTEGER,output_tokens INTEGER,total_tokens INTEGER,created TEXT NOT NULL)''')
        c.executemany('INSERT INTO api_usage VALUES(?,?,?,?,?,?,?,?,?)',[
            ('active-today','2026-10-27','gemini','model-a','active',11,2,13,'2026-10-27T10:00:00+00:00'),
            ('completed','2026-10-27','gemini','model-a','completed',5,0,5,'2026-10-27T09:00:00+00:00'),
            ('failed','2026-10-27','groq','model-b','failed',None,3,None,'2026-10-27T08:00:00+00:00'),
            ('cancelled','2026-10-27','groq','model-b','cancelled',0,0,0,'2026-10-27T07:00:00+00:00'),
            ('active-yesterday','2026-10-26','gemini','model-a','active',7,2,9,'2026-10-26T23:59:00+00:00'),
        ])


def rows():return store.rows('SELECT * FROM api_usage ORDER BY id')


def test_old_schema_migration_preserves_records_tokens_and_status_constraint():
    legacy_rows();before=rows()
    assert usage.recover_interrupted()==2
    recovered=rows()
    assert len(recovered)==len(before)
    for original,current in zip(before,recovered):
        interrupted=original['status']=='active'
        assert current=={**original,'status':'failed' if interrupted else original['status'],
                         'interrupted':int(interrupted)}
    result=usage.summary()
    assert result['attempted']==4 and result['completed']==1 and result['failed']==2
    assert result['cancelled']==1 and result['active']==0 and result['interrupted']==1
    assert (result['input_tokens'],result['output_tokens'],result['total_tokens'])==(16,5,18)
    assert result['unknown_attempts']==1
    assert result['by_provider']['gemini']['interrupted']==1
    assert result['by_provider']['groq']['interrupted']==0
    with pytest.raises(sqlite3.IntegrityError):
        with store.db() as c:
            c.execute("INSERT INTO api_usage(id,day,provider,model,status,created) VALUES('bad','2026-10-27','gemini','model','interrupted','now')")


def test_recovery_is_idempotent_and_does_not_change_projects_or_preferences(tmp_path):
    store.init();legacy_rows()
    store.save_setting('custom_setting',{'preserve':'original'})
    store.save_setting('usage_policy',{'daily_requests':7,'max_output_tokens':512,'concise':False})
    before_projects=store.rows('SELECT * FROM projects')
    before_settings=store.rows('SELECT * FROM settings ORDER BY key')
    private=tmp_path/'private';private.mkdir()
    credentials=private/'credentials.json';credentials.write_text(json.dumps({'gemini':'synthetic-key-marker'}))
    original_credentials=credentials.read_bytes()
    assert usage.recover_interrupted()==2
    first=rows()
    assert usage.recover_interrupted()==0 and rows()==first
    assert store.rows('SELECT * FROM projects')==before_projects
    assert store.rows('SELECT * FROM settings ORDER BY key')==before_settings
    assert credentials.read_bytes()==original_credentials


def test_interrupted_attempt_still_consumes_the_daily_limit():
    usage.save_policy({'daily_requests':1,'max_output_tokens':512,'concise':True})
    request_id=usage._reserve('gemini','model-a')
    assert usage.summary()['active']==1
    assert usage.recover_interrupted()==1
    with pytest.raises(ValueError,match='límite'):
        usage._reserve('gemini','model-a')
    result=usage.summary()
    assert result['attempted']==result['failed']==result['interrupted']==1
    assert result['remaining']==0 and result['active']==0
    assert rows()[0]['id']==request_id and rows()[0]['total_tokens'] is None


def test_summary_preserves_genuine_active_attempts_after_startup():
    assert usage.recover_interrupted()==0
    with usage.tracking('gemini','model-a'):
        usage.observe({'usageMetadata':{'promptTokenCount':0,'candidatesTokenCount':4,'totalTokenCount':4}},'gemini')
        first=rows()
        for _ in range(2):
            result=usage.summary()
            assert result['active']==1 and result['failed']==result['interrupted']==0
            assert result['attempted']==1 and result['total_tokens']==4
        assert rows()==first
    result=usage.summary()
    assert result['active']==0 and result['completed']==1 and result['interrupted']==0
    assert result['total_tokens']==4 and rows()[0]['interrupted']==0


def test_summary_on_legacy_schema_reports_active_without_reconciling_or_migrating():
    legacy_rows();before=rows()
    result=usage.summary()
    assert result['active']==1 and result['interrupted']==0
    assert result['attempted']==4 and result['failed']==1
    assert rows()==before
    with store.db() as c:
        assert 'interrupted' not in {row['name'] for row in c.execute('PRAGMA table_info(api_usage)')}
