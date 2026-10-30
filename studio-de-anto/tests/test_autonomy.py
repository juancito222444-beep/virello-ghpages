"""Durable queue tests with synthetic checkpoints and forbidden model calls."""
import asyncio
from concurrent.futures import ThreadPoolExecutor
import json
import pytest
from fastapi.testclient import TestClient
from backend import autonomy, director, engine, models, store
from backend.app import app

@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init();director.init();autonomy.init()
    pid=store.rows('SELECT id FROM projects')[0]['id']
    def forbidden(*a,**kw):pytest.fail('Queue management must not call a provider')
    for name in ('complete','stream','_api_client'):monkeypatch.setattr(models,name,forbidden)
    autonomy.TASKS.clear()
    return pid


def queue(pid):return 'anto:'+pid

def add(pid,text='Write a finite proposal'):
    return autonomy.add(queue(pid),autonomy.Objective(request=text))['id']


def start(scope):asyncio.run(autonomy.control(scope,autonomy.Control(action='start',confirmed=True)))


def run(pid,status='Interrumpido'):
    rid=store.uid()
    with store.db() as c:
        c.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',(rid,pid,None,'Objective',status,'{}',None,store.now()))
    return rid


def test_default_and_api_project_permissions(isolated):
    pid=isolated
    with TestClient(app) as client:
        path='/api/projects/'+pid+'/autonomy'
        assert client.get(path).json()['status']=='stopped'
        assert client.post(path+'/control',json={'action':'start'}).status_code==422
        assert client.post(path+'/jobs',json={'request':'  '}).status_code==422
        assert client.get('/api/projects/missing/autonomy').status_code==404
        assert client.post(path+'/jobs',json={'request':'Some objective'},headers={'Origin':'https://evil.example'}).status_code==403
        assert client.put(path+'/limits',json={'max_jobs':0}).status_code==422
        assert client.get('/api/autonomy/codex').json()['status']=='stopped'


def test_deduplication_survives_concurrency_and_completion(isolated):
    pid=isolated
    with ThreadPoolExecutor(max_workers=4) as pool:
        ids=list(pool.map(lambda _:add(pid),range(8)))
    assert len(set(ids))==1
    autonomy.set_job(ids[0],'completed')
    assert add(pid,'  WRITE  a finite proposal  ')==ids[0]
    assert len(autonomy.report(queue(pid))['jobs'])==1
    with pytest.raises(ValueError):autonomy.retry(queue(pid),ids[0])


def test_claim_is_singleton_and_activation_budget_is_finite(isolated):
    pid=isolated;scope=queue(pid)
    first=add(pid);add(pid,'A different objective')
    autonomy.limits(scope,autonomy.Limits(max_jobs=1))
    start(scope)
    with ThreadPoolExecutor(max_workers=4) as pool:
        claims=list(pool.map(lambda _:autonomy.claim(scope),range(4)))
    assert sum(c is not None for c in claims)==1
    start(scope)
    assert autonomy.report(scope)['used']==1
    autonomy.set_job(first,'completed')
    assert autonomy.claim(scope) is None
    assert autonomy.report(scope)['status']=='paused'
    assert autonomy.report(scope)['jobs'][1]['status']=='queued'


def test_stop_requires_explicit_retry_and_never_resets_attempts(isolated):
    pid=isolated;scope=queue(pid);jid=add(pid)
    start(scope);autonomy.claim(scope)
    autonomy.set_job(jid,'blocked','Synthetic failure')
    asyncio.run(autonomy.control(scope,autonomy.Control(action='stop')))
    autonomy.retry(scope,jid);start(scope);autonomy.claim(scope)
    autonomy.set_job(jid,'blocked','Synthetic failure')
    asyncio.run(autonomy.control(scope,autonomy.Control(action='pause')))
    with pytest.raises(ValueError,match='agotaron'):autonomy.retry(scope,jid)
    assert autonomy.report(scope)['jobs'][0]['attempts']==2


def test_recovery_reuses_run_and_completed_contributions(isolated):
    pid=isolated;scope=queue(pid);jid=add(pid);rid=run(pid)
    start(scope);autonomy.claim(scope);autonomy.set_job(jid,'running',run_id=rid)
    autonomy.recover();job=autonomy.claim(scope)
    calls=[]
    async def delegate(*args):pytest.fail('Recovered execution must not replan')
    async def resume(value):
        calls.append(value)
        with store.db() as c:c.execute("UPDATE runs SET status='Completado' WHERE id=?",(value,))
    asyncio.run(autonomy.anto_job(job,delegate,resume))
    assert calls==[rid]
    assert autonomy.report(scope)['jobs'][0]['status']=='completed'
    assert autonomy.claim(scope) is None


def test_recover_lost_link_after_director_saved_run(isolated):
    pid=isolated;scope=queue(pid);jid=add(pid);rid=run(pid)
    start(scope);autonomy.claim(scope)
    with store.db() as c:
        c.execute('INSERT INTO director_requests VALUES(?,?,?,?,?,?,?)',(pid,jid,'Objective','ready',rid,None,store.now()))
    autonomy.recover()
    job=autonomy.report(scope)['jobs'][0]
    assert job['run_id']==rid and job['status']=='queued'


def test_uncertain_planning_never_replays_on_restart(isolated):
    pid=isolated;scope=queue(pid);jid=add(pid)
    start(scope);autonomy.claim(scope)
    with store.db() as c:
        c.execute('INSERT INTO director_requests VALUES(?,?,?,?,?,?,?)',(pid,jid,'Objective','planning',None,None,store.now()))
    director.init();autonomy.recover()
    assert autonomy.report(scope)['status']=='paused'
    assert autonomy.report(scope)['jobs'][0]['status']=='blocked'
    with pytest.raises(ValueError,match='revisado'):autonomy.retry(scope,jid)


def test_quota_or_permission_error_pauses_without_retry(isolated):
    pid=isolated;scope=queue(pid);jid=add(pid);start(scope);job=autonomy.claim(scope)
    calls=[]
    async def denied(body):
        calls.append(body.request_id)
        raise ValueError('Synthetic quota exhausted')
    async def resume(*args):pytest.fail('No run to resume')
    asyncio.run(autonomy.anto_job(job,denied,resume))
    assert calls==[jid]
    assert autonomy.report(scope)['status']=='paused'
    assert autonomy.claim(scope) is None
    assert 'quota' in autonomy.report(scope)['jobs'][0]['error']


def test_paused_and_stopped_queues_stay_inactive_after_recovery(isolated):
    pid=isolated;scope=queue(pid);jid=add(pid)
    start(scope)
    asyncio.run(autonomy.control(scope,autonomy.Control(action='pause')))
    autonomy.recover();assert autonomy.claim(scope) is None
    asyncio.run(autonomy.control(scope,autonomy.Control(action='stop')))
    autonomy.recover();assert autonomy.claim(scope) is None
    assert autonomy.report(scope)['jobs'][0]['status']=='stopped'
    autonomy.retry(scope,jid)
    assert autonomy.report(scope)['status']=='stopped'


def test_pause_pending_run_preserves_completed_tasks(isolated):
    pid=isolated;rid=run(pid,'Pendiente')
    with store.db() as c:
        c.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)',('done',rid,0,'vera','Completado','{}',json.dumps({'text':'Checkpoint'})))
    asyncio.run(engine.pause_run(rid))
    assert store.one('SELECT status FROM runs WHERE id=?',(rid,))['status']=='Interrumpido'
    assert store.one('SELECT result FROM tasks WHERE id=?',('done',))['result']==json.dumps({'text':'Checkpoint'})


def test_codex_restart_blocks_instead_of_repeating(isolated):
    jid=autonomy.add('codex',autonomy.Objective(request='Improve something finite'))['id']
    start('codex');autonomy.claim('codex');autonomy.recover()
    assert autonomy.report('codex')['jobs'][0]['id']==jid
    assert autonomy.report('codex')['jobs'][0]['status']=='blocked'
    assert autonomy.claim('codex') is None


def test_worker_recovers_at_start_and_cancels_its_own_children(isolated,monkeypatch):
    pid=isolated;scope=queue(pid);add(pid);start(scope)
    async def scenario():
        began=asyncio.Event();closed=asyncio.Event()
        async def operation(*args):
            began.set()
            try:await asyncio.Event().wait()
            finally:closed.set()
        monkeypatch.setattr(autonomy,'bounded_anto',operation)
        first=asyncio.create_task(autonomy.worker(None,None))
        await asyncio.wait_for(began.wait(),2)
        second=asyncio.create_task(autonomy.worker(None,None))
        await asyncio.wait_for(second,2)
        assert not closed.is_set()
        first.cancel();await asyncio.gather(first,return_exceptions=True)
        assert closed.is_set() and not autonomy.TASKS
    asyncio.run(scenario())


def test_pause_active_engine_run_is_resumable(isolated,monkeypatch):
    pid=isolated;rid=run(pid,'Pendiente')
    async def scenario():
        engine.QUEUE=asyncio.Queue();began=asyncio.Event()
        async def execute(run):
            began.set();await asyncio.Event().wait()
        monkeypatch.setattr(engine,'execute',execute)
        worker=asyncio.create_task(engine.worker())
        await engine.QUEUE.put(rid);await asyncio.wait_for(began.wait(),2)
        await asyncio.wait_for(engine.pause_run(rid),2)
        assert store.one('SELECT status FROM runs WHERE id=?',(rid,))['status']=='Interrumpido'
        assert rid not in engine.ACTIVE
        worker.cancel();await asyncio.gather(worker,return_exceptions=True)
    asyncio.run(scenario())
