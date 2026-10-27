"""Cancelled synthetic uploads must leave previous and committed originals intact."""
import asyncio
import io
import json
from pathlib import Path
import threading

from fastapi import UploadFile
import pytest

from backend import app, attachments, store


@pytest.fixture
def project(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init()
    pid=store.one('SELECT id FROM projects')['id']
    folder=tmp_path/'uploads';folder.mkdir()
    original=folder/'existing.csv';original.write_bytes(b'original,kept\n1,2\n')
    with store.db() as connection:
        connection.execute('INSERT INTO files VALUES(?,?,?,?,?,?)',('existing',pid,'original.csv',str(original),json.dumps({'kind':'table'}),store.now()))
    return pid,original


def assert_previous_only(original):
    assert list(original.parent.iterdir())==[original]
    assert original.read_bytes()==b'original,kept\n1,2\n'
    assert [row['id'] for row in store.rows('SELECT id FROM files')]==['existing']
    assert store.rows('SELECT * FROM events')==[]


def test_cancel_during_read_removes_only_the_uncommitted_partial_upload(project):
    pid,original=project
    async def scenario():
        entered=asyncio.Event()
        class SlowRead(UploadFile):
            reads=0
            async def read(self,size=-1):
                self.reads+=1
                if self.reads==1:return b'a,b\n1,2\n'
                entered.set();await asyncio.Event().wait()
        upload=SlowRead(file=io.BytesIO(),filename='new.csv')
        task=asyncio.create_task(app.upload(pid,upload))
        await asyncio.wait_for(entered.wait(),2)
        task.cancel()
        with pytest.raises(asyncio.CancelledError):await task
        assert upload.file.closed
    asyncio.run(scenario())
    assert_previous_only(original)


@pytest.mark.parametrize('validation_fails',[False,True])
def test_cancel_waits_for_validation_before_removing_its_original(project,monkeypatch,validation_fails):
    pid,original=project
    entered=threading.Event();release=threading.Event();finished=threading.Event()
    def validate(path,ext):
        entered.set()
        try:
            assert release.wait(3),'The synthetic validation was not released'
            assert Path(path).is_file(),'Cleanup must wait until validation releases the original'
            if validation_fails:raise ValueError('Synthetic invalid upload')
            return {'kind':'table','mime':'text/csv','size':8}
        finally:finished.set()
    monkeypatch.setattr(attachments,'validate',validate)
    async def scenario():
        upload=UploadFile(file=io.BytesIO(b'a,b\n1,2\n'),filename='new.csv')
        task=asyncio.create_task(app.upload(pid,upload))
        try:
            assert await asyncio.to_thread(entered.wait,2)
            task.cancel();await asyncio.sleep(0)
            assert not task.done()
            assert len(list(original.parent.iterdir()))==2
            # A second cancellation must not release cleanup before the thread.
            task.cancel();await asyncio.sleep(0)
            assert not task.done()
        finally:release.set()
        with pytest.raises(asyncio.CancelledError):await task
        assert finished.is_set() and upload.file.closed
    asyncio.run(scenario())
    assert_previous_only(original)


def test_cancel_while_closing_does_not_delete_an_already_committed_upload(project):
    pid,original=project
    async def scenario():
        entered=asyncio.Event()
        class SlowClose(UploadFile):
            async def close(self):
                entered.set()
                try:await asyncio.Event().wait()
                finally:await super().close()
        upload=SlowClose(file=io.BytesIO(b'a,b\n1,2\n'),filename='new.csv')
        task=asyncio.create_task(app.upload(pid,upload))
        await asyncio.wait_for(entered.wait(),2)
        saved=store.one("SELECT * FROM files WHERE id!='existing'")
        assert saved is not None
        task.cancel()
        with pytest.raises(asyncio.CancelledError):await task
        assert Path(saved['path']).read_bytes()==b'a,b\n1,2\n'
        assert upload.file.closed
    asyncio.run(scenario())
    assert original.read_bytes()==b'original,kept\n1,2\n'
    assert len(store.rows('SELECT * FROM files'))==2
    assert len(store.rows('SELECT * FROM events'))==1


def test_upload_id_collision_never_overwrites_or_unlinks_a_previous_original(project,monkeypatch):
    pid,original=project
    monkeypatch.setattr(store,'uid',lambda:'existing')
    async def scenario():
        upload=UploadFile(file=io.BytesIO(b'replacement'),filename='new.csv')
        with pytest.raises(FileExistsError):await app.upload(pid,upload)
        assert upload.file.closed
    asyncio.run(scenario())
    assert_previous_only(original)
