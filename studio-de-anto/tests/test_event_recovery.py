"""Synthetic SSE reconnects resume from persisted IDs without replaying projects."""
import asyncio
import json

import pytest
from fastapi import HTTPException

from backend import models, store
from backend.app import events


@pytest.fixture
def project(tmp_path, monkeypatch):
    monkeypatch.setattr(store, 'ROOT', tmp_path)
    def forbidden(*args, **kwargs):
        pytest.fail('Event recovery must never call a model')
    monkeypatch.setattr(models, '_api_client', forbidden)
    store.init()
    pid = store.one('SELECT id FROM projects')['id']
    with store.db() as connection:
        connection.execute('INSERT INTO projects VALUES(?,?,?)', ('other-project', 'Other', store.now()))
        for seq, owner in ((1, pid), (2, pid), (3, 'other-project')):
            connection.execute('INSERT INTO events(seq,project,kind,payload,created) VALUES(?,?,?,?,?)',
                               (seq, owner, 'run', json.dumps({'status': 'MOCK', 'seq': seq}), store.now()))
    return pid


class Request:
    def __init__(self, last_id=None):
        self.headers = {} if last_id is None else {'last-event-id': last_id}

    async def is_disconnected(self):
        return False


async def first_batch(project, last_id=None, after=0):
    response = await events(project, Request(last_id), after=after)
    chunks = []
    try:
        # A batch ends at ping. Close before the following sleep/reconnect loop.
        while True:
            chunk = await asyncio.wait_for(anext(response.body_iterator), timeout=1)
            chunks.append(chunk)
            if chunk.startswith(': ping'):
                return chunks
    finally:
        await response.body_iterator.aclose()


def test_last_received_event_yields_ping_first_without_replay(project):
    before = store.rows('SELECT * FROM events ORDER BY seq')
    assert asyncio.run(first_batch(project, '2')) == [': ping\n\n']
    assert store.rows('SELECT * FROM events ORDER BY seq') == before


def test_reconnect_delivers_only_unseen_events_from_its_project(project):
    chunks = asyncio.run(first_batch(project, '1'))
    assert len(chunks) == 2 and chunks[-1] == ': ping\n\n'
    assert chunks[0].startswith('id: 2\n')
    event = json.loads(chunks[0].split('data: ', 1)[1])
    assert event['seq'] == 2 and event['project'] == project


@pytest.mark.parametrize('last_id', ['1', '', None])
def test_query_cursor_cannot_be_rewound_by_a_header(project, last_id):
    assert asyncio.run(first_batch(project, last_id, after=2)) == [': ping\n\n']


@pytest.mark.parametrize('last_id', ['-1', 'private-invalid-marker', '1.5', '9' * 30, '\u0662'])
def test_invalid_last_event_header_is_rejected_without_echo(project, last_id):
    with pytest.raises(HTTPException) as caught:
        asyncio.run(first_batch(project, last_id))
    assert caught.value.status_code == 422
    assert last_id not in caught.value.detail


@pytest.mark.parametrize('after', [-1, 2 ** 63])
def test_query_cursor_rejects_negative_or_out_of_sqlite_range(project, after):
    with pytest.raises(HTTPException) as caught:
        asyncio.run(first_batch(project, after=after))
    assert caught.value.status_code == 422
