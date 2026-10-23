"""Tests deterministic worker state transitions; providers are explicit mocks."""
import asyncio
import contextlib
import json
import threading
from pathlib import Path

import pytest

from backend import engine, models, store
from backend.schemas import Plan


@pytest.fixture
def isolated_store(tmp_path, monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init()
    monkeypatch.setattr(engine,'ACTIVE',{})
    return tmp_path


def create_run(*, tools='reason', dependency=False):
    project=store.rows('SELECT id FROM projects')[0]['id']
    tasks=[{'id':'first','agent':'atlas','description':'Primera tarea de prueba',
            'tools':[tools],'outputs':['evidence'],'acceptance':['Resultado verificable']}]
    if dependency:
        tasks.append({'id':'second','agent':'anto','description':'Segunda tarea de prueba',
                      'tools':['reason'],'depends_on':['first'],'outputs':['summary'],
                      'acceptance':['Evidencia disponible']})
    plan=Plan(objective='Objetivo de prueba con mocks',tasks=tasks)
    rid=store.uid()
    mapping={t.id:store.uid() for t in plan.tasks}
    with store.db() as c:
        c.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',
                  (rid,project,None,plan.objective,'Pendiente',plan.model_dump_json(),None,store.now()))
        for i,t in enumerate(plan.tasks):
            payload=t.model_dump()
            payload['depends_on']=[mapping[d] for d in t.depends_on]
            c.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)',
                      (mapping[t.id],rid,i,t.agent,'Pendiente',json.dumps(payload),None))
    return store.one('SELECT * FROM runs WHERE id=?',(rid,))


async def wait_for_status(rid,status):
    for _ in range(200):
        if store.one('SELECT status FROM runs WHERE id=?',(rid,))['status']==status:
            return
        await asyncio.sleep(.005)
    raise AssertionError(f'No llegó a {status}')


def task_events(rid):
    return [json.loads(e['payload']) for e in store.rows(
        "SELECT payload FROM events WHERE run=? AND kind='task' ORDER BY seq",(rid,))]


def test_failed_inference_closes_dependent_tasks_and_agent(isolated_store,monkeypatch):
    async def mock_failed(*args,**kwargs):
        raise ValueError('MOCK: proveedor desconectado')
    monkeypatch.setattr(models,'complete',mock_failed)
    async def scenario():
        engine.QUEUE=asyncio.Queue()
        run=create_run(dependency=True)
        worker=asyncio.create_task(engine.worker())
        await engine.QUEUE.put(run['id'])
        await wait_for_status(run['id'],'Fallido')
        worker.cancel()
        with contextlib.suppress(asyncio.CancelledError): await worker
        tasks=store.rows('SELECT * FROM tasks WHERE run=? ORDER BY position',(run['id'],))
        assert [t['status'] for t in tasks]==['Fallido','Interrumpido']
        events=task_events(run['id'])
        assert events[-2]['status']=='Fallido' and events[-1]['status']=='Interrumpido'
        assert events[-2]['agent_status']=='Fallido'
        assert events[-2]['task_id']==tasks[0]['id']
        assert events[-2]['logical_id']=='first'
        assert events[-2]['run_id']==run['id']
    asyncio.run(scenario())


def test_active_cancel_emits_terminal_states(isolated_store,monkeypatch):
    async def mock_wait(*args,**kwargs):
        await asyncio.Event().wait()
    monkeypatch.setattr(models,'complete',mock_wait)
    async def scenario():
        engine.QUEUE=asyncio.Queue()
        run=create_run(dependency=True)
        worker=asyncio.create_task(engine.worker())
        await engine.QUEUE.put(run['id'])
        await wait_for_status(run['id'],'En ejecución')
        engine.ACTIVE[run['id']].cancel()
        await wait_for_status(run['id'],'Cancelado')
        worker.cancel()
        with contextlib.suppress(asyncio.CancelledError): await worker
        assert all(t['status']=='Cancelado' for t in store.rows('SELECT * FROM tasks WHERE run=?',(run['id'],)))
        assert all(e['status']=='Cancelado' for e in task_events(run['id'])[-2:])
        assert not store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))
    asyncio.run(scenario())


def test_worker_shutdown_marks_active_run_interrupted(isolated_store,monkeypatch):
    async def mock_wait(*args,**kwargs):
        await asyncio.Event().wait()
    monkeypatch.setattr(models,'complete',mock_wait)
    async def scenario():
        engine.QUEUE=asyncio.Queue()
        run=create_run(dependency=True)
        worker=asyncio.create_task(engine.worker())
        await engine.QUEUE.put(run['id'])
        await wait_for_status(run['id'],'En ejecución')
        worker.cancel()
        await worker
        assert store.one('SELECT status FROM runs WHERE id=?',(run['id'],))['status']=='Interrumpido'
        assert all(t['status']=='Interrumpido' for t in store.rows('SELECT * FROM tasks WHERE run=?',(run['id'],)))
        assert all(e['status']=='Interrumpido' for e in task_events(run['id'])[-2:])
    asyncio.run(scenario())


def test_completed_task_emits_free_agent_and_result_reference(isolated_store):
    async def scenario():
        # inspect without a file is a genuine deterministic schema operation.
        run=create_run(tools='inspect')
        await engine.execute(run)
        task=store.one('SELECT * FROM tasks WHERE run=?',(run['id'],))
        final=task_events(run['id'])[-1]
        assert final['status']=='Completado' and final['agent_status']=='Disponible'
        assert final['result_ref']==f"task:{task['id']}:v1"
        assert json.loads(task['result'])=={'schema':[]}
        assert store.one('SELECT status FROM runs WHERE id=?',(run['id'],))['status']=='Completado'
    asyncio.run(scenario())


def test_cancelled_export_removes_only_unpublished_files(isolated_store):
    run=create_run(tools='inspect')
    folder=store.ROOT/'artifacts'/run['id'];folder.mkdir(parents=True)
    generated=folder/'grafico.png';generated.write_bytes(b'test')
    outside=store.ROOT/'original.csv';outside.write_text('keep')
    async def scenario():
        future=asyncio.get_running_loop().create_future()
        future.set_result([generated,outside])
        engine._discard_cancelled_export(future,run)
    asyncio.run(scenario())
    assert not generated.exists() and outside.read_text()=='keep'


def test_inference_budget_blocks_repeated_model_calls(isolated_store,monkeypatch):
    calls=[]
    async def mock_answer(*args,**kwargs):
        calls.append(args[0]);return 'MOCK: resultado'
    monkeypatch.setattr(models,'complete',mock_answer)
    monkeypatch.setattr(engine,'MAX_MODEL_CALLS',1)
    async def scenario():
        engine.QUEUE=asyncio.Queue()
        run=create_run(dependency=True)
        worker=asyncio.create_task(engine.worker())
        await engine.QUEUE.put(run['id'])
        await wait_for_status(run['id'],'Fallido')
        worker.cancel()
        with contextlib.suppress(asyncio.CancelledError): await worker
        assert calls==['atlas']
        assert not store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))
        error=store.one("SELECT payload FROM events WHERE run=? AND kind='error'",(run['id'],))
        assert 'Límite' in json.loads(error['payload'])['message']
    asyncio.run(scenario())
