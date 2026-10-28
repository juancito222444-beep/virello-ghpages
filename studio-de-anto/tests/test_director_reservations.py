"""Director admission, cancellation and resume through real HTTP adapters/SQLite.

All provider responses are synthetic httpx streams. No account or network is used.
"""
import asyncio
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
import json
import threading
import time

import httpx
import pytest
from fastapi.testclient import TestClient

from backend import backups, cloud, credential_store, director, engine, models, store, usage
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1');monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'],*service.get('aliases',())):monkeypatch.delenv(name,raising=False)
    clock={'now':datetime(2026,10,28,12,tzinfo=timezone.utc)}
    monkeypatch.setattr(usage,'_now',lambda:clock['now'])
    store.init();store.save_setting('provider','gemini')
    store.save_setting('agents',[{**agent,'model':'gemini-2.5-flash-lite',
                                 'instructions':'MOCK_ROLE='+agent['id']} for agent in models.AGENTS])
    credential_store.save('gemini','synthetic-reservation-test-key')
    usage.save_policy({'daily_requests':7,'max_output_tokens':512,'concise':True})
    def forbidden(*args,**kwargs):pytest.fail('Never contact a real provider in reservation tests')
    monkeypatch.setattr(models,'_api_client',forbidden)
    return clock


def payload(project,key='one'):
    return {'project':project,'request':'Prepara una propuesta textual para mi proyecto.',
            'request_id':key,'confirmed':True}


def protocol(monkeypatch,*,block=None,reply=None,fail=None,after=None):
    control={'seen':[],'started':threading.Event(),'release':threading.Event()}
    async def handle(request):
        assert request.method=='POST' and request.url.host=='generativelanguage.googleapis.com'
        body=json.loads(request.content)
        role=body['systemInstruction']['parts'][0]['text']
        agent=next(item['id'] for item in models.AGENTS if 'MOCK_ROLE='+item['id'] in role)
        phase='planning' if body['generationConfig'].get('responseMimeType') else agent
        control['seen'].append(phase)
        if phase==block:
            control['started'].set()
            while not control['release'].is_set():await asyncio.sleep(.005)
        if phase==fail:return httpx.Response(429,json={'error':{}})
        if after:after(phase)
        plan={'objective':'Propuesta textual','clarification':None,
              'assignments':[{'agent':'leo','task':'Redactar una propuesta','depends_on':[]}]}
        text=(reply if isinstance(reply,str) else json.dumps(reply if reply is not None else plan)) if phase=='planning' else 'MOCK aporte '+agent
        data={'candidates':[{'content':{'parts':[{'text':text}]},'finishReason':'STOP'}]}
        return httpx.Response(200,stream=httpx.ByteStream(('data: '+json.dumps(data)+'\n\n').encode()))
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handle)))
    return control


def wait_run(client,rid):
    for _ in range(200):
        run=client.get('/api/runs/'+rid).json()
        if run['status'] in {'Completado','Fallido','Cancelado','Interrumpido'}:return run
        time.sleep(.01)
    pytest.fail('The simulated job did not reach a final/paused state')


def test_requires_seven_before_planning_and_same_request_can_retry_after_admission_failure(monkeypatch):
    control=protocol(monkeypatch)
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        usage.save_policy({'daily_requests':6,'max_output_tokens':512,'concise':True})
        blocked=client.post('/api/director',json=payload(project))
        assert blocked.status_code==422 and 'reservar 7' in blocked.json()['detail']
        assert control['seen']==[] and not store.rows('SELECT * FROM director_requests')
        assert usage.summary()['attempted']==usage.summary()['reserved']==0
        usage.save_policy({'daily_requests':7,'max_output_tokens':512,'concise':True})
        accepted=client.post('/api/director',json=payload(project))
        assert accepted.status_code==200,accepted.text
        assert wait_run(client,accepted.json()['id'])['status']=='Completado'
        assert control['seen']==['planning','leo','anto']
        assert usage.summary()['attempted']==3 and usage.summary()['reserved']==0
        duplicate=client.post('/api/director',json=payload(project))
        assert duplicate.status_code==200 and duplicate.json()['id']==accepted.json()['id']
        assert control['seen']==['planning','leo','anto']


def test_reduced_plan_releases_excess_and_chats_cannot_spend_held_synthesis(monkeypatch):
    control=protocol(monkeypatch,block='leo')
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        created=client.post('/api/director',json=payload(project));assert created.status_code==200
        try:
            assert control['started'].wait(timeout=3)
            summary=client.get('/api/usage').json()
            assert summary['attempted']==2 and summary['reserved']==1
            assert summary['available']==summary['remaining']==4
            for _ in range(4):
                with usage.tracking('groq','simulated-other-chat'):pass
            with pytest.raises(usage.UsageLimitExceeded):
                with usage.tracking('groq','simulated-other-chat'):pytest.fail('Reserved capacity is protected')
        finally:control['release'].set()
        assert wait_run(client,created.json()['id'])['status']=='Completado'
        assert usage.summary()['attempted']==7 and usage.summary()['reserved']==0


def test_pending_planning_blocks_duplicate_and_cannot_overreserve_another_project(monkeypatch):
    control=protocol(monkeypatch,block='planning')
    usage.save_policy({'daily_requests':10,'max_output_tokens':512,'concise':True})
    with TestClient(app) as client,ThreadPoolExecutor(max_workers=1) as pool:
        project=client.get('/api/projects').json()[0]['id']
        other=client.post('/api/projects',json={'name':'Other project'}).json()['id']
        pending=pool.submit(client.post,'/api/director',json=payload(project))
        try:
            assert control['started'].wait(timeout=3)
            assert client.post('/api/director',json=payload(project)).status_code==409
            assert client.post('/api/director',json=payload(other)).status_code==422
            assert control['seen']==['planning']
            assert usage.summary()['attempted']==1 and usage.summary()['reserved']==6
            assert not store.rows('SELECT * FROM director_requests WHERE project=?',(other,))
        finally:control['release'].set()
        accepted=pending.result(timeout=5)
        assert accepted.status_code==200
        assert wait_run(client,accepted.json()['id'])['status']=='Completado'
        assert usage.summary()['reserved']==0


@pytest.mark.parametrize('reply,fail',[
    ('not JSON',None),
    ({'objective':'Faltan datos','clarification':'Precisa el objetivo','assignments':[]},None),
    (None,'planning'),
    (None,'leo'),
])
def test_invalid_planning_clarification_and_provider_failure_release_unused_capacity(monkeypatch,reply,fail):
    control=protocol(monkeypatch,reply=reply,fail=fail)
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        result=client.post('/api/director',json=payload(project))
        if fail=='leo':
            assert result.status_code==200
            assert wait_run(client,result.json()['id'])['status']=='Fallido'
        else:assert result.status_code==422
        assert usage.summary()['reserved']==0
        assert usage.summary()['attempted']==len(control['seen'])
        assert not store.rows("SELECT * FROM messages WHERE role='assistant'")


@pytest.mark.parametrize('queued',[False,True])
def test_cancel_releases_queued_or_active_capacity_without_refunding_sent_calls(monkeypatch,queued):
    if queued:
        async def busy_worker():await asyncio.Event().wait()
        monkeypatch.setattr(engine,'worker',busy_worker)
    control=protocol(monkeypatch,block=None if queued else 'leo')
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        created=client.post('/api/director',json=payload(project));assert created.status_code==200
        if not queued:assert control['started'].wait(timeout=3)
        rid=created.json()['id']
        assert client.post('/api/runs/'+rid+'/cancel').status_code==200
        assert wait_run(client,rid)['status']=='Cancelado'
        assert usage.summary()['reserved']==0
        assert usage.summary()['attempted']==(1 if queued else 2)
        assert not store.rows("SELECT * FROM messages WHERE role='assistant'")
        control['release'].set()


def test_shutdown_releases_active_job_and_keeps_consumed_attempts(monkeypatch):
    control=protocol(monkeypatch,block='leo')
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        result=client.post('/api/director',json=payload(project));assert result.status_code==200
        assert control['started'].wait(timeout=3)
    assert usage.summary()['reserved']==0 and usage.summary()['attempted']==2
    assert store.one('SELECT status FROM runs WHERE id=?',(result.json()['id'],))['status']=='Interrumpido'
    assert usage.summary()['cancelled']==1


@pytest.mark.parametrize('pause',['rollover','reduced_policy'])
def test_day_change_or_policy_reduction_pauses_and_only_explicit_resume_uses_pending_call(monkeypatch,isolated,pause):
    def after(phase):
        if phase!='leo':return
        if pause=='rollover':isolated['now']+=timedelta(days=1)
        else:usage.save_policy({'daily_requests':2,'max_output_tokens':512,'concise':True})
    control=protocol(monkeypatch,after=after)
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        result=client.post('/api/director',json=payload(project));assert result.status_code==200
        rid=result.json()['id'];paused=wait_run(client,rid)
        assert paused['status']=='Interrumpido' and control['seen']==['planning','leo']
        assert usage.summary()['reserved']==0
        if pause=='reduced_policy':assert client.post('/api/runs/'+rid+'/resume').status_code==422
        daily=1 if pause=='rollover' else 3
        assert client.put('/api/usage/policy',json={'daily_requests':daily,'max_output_tokens':512,'concise':True}).status_code==200
        assert client.post('/api/runs/'+rid+'/resume').status_code==200
        assert wait_run(client,rid)['status']=='Completado'
        assert control['seen']==['planning','leo','anto']
        assert usage.summary()['reserved']==0
        assert usage.summary()['attempted']==(1 if pause=='rollover' else 3)


def test_project_backups_never_copy_live_installation_holds(monkeypatch):
    protocol(monkeypatch)
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        result=client.post('/api/director',json=payload(project))
        assert wait_run(client,result.json()['id'])['status']=='Completado'
        usage.reserve_budget('unrelated-live-job',2)
        before=store.rows('SELECT * FROM api_usage_holds')
        restored=backups.import_project(backups.export_project(project))
        assert restored['id']!=project
        assert store.rows('SELECT * FROM api_usage_holds')==before
        assert not any(director.run_budget(run['id'])==row['id']
                       for run in store.rows('SELECT id FROM runs WHERE project=?',(restored['id'],)) for row in before)


def test_completed_publication_can_resume_with_zero_capacity_and_no_new_inference(monkeypatch):
    control=protocol(monkeypatch)
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        result=client.post('/api/director',json=payload(project));rid=result.json()['id']
        assert wait_run(client,rid)['status']=='Completado'
        usage.save_policy({'daily_requests':3,'max_output_tokens':512,'concise':True})
        # Simulate losing only the final status checkpoint after publication.
        engine.set_status(store.one('SELECT * FROM runs WHERE id=?',(rid,)),'Interrumpido')
        assert client.post('/api/runs/'+rid+'/resume').status_code==200
        assert wait_run(client,rid)['status']=='Completado'
        assert control['seen']==['planning','leo','anto']
        assert usage.summary()['attempted']==3 and usage.summary()['reserved']==0
        assert len(store.rows("SELECT * FROM messages WHERE role='assistant'"))==1


def test_worker_releases_persisted_hold_when_child_is_cancelled_before_start(monkeypatch):
    protocol(monkeypatch)
    async def idle_worker():await asyncio.Event().wait()
    original_worker=engine.worker;monkeypatch.setattr(engine,'worker',idle_worker)
    with TestClient(app) as client:
        project=client.get('/api/projects').json()[0]['id']
        result=client.post('/api/director',json=payload(project));rid=result.json()['id']
        assert usage.summary()['reserved']==2
    # The idle fixture did not acquire/execute this pending run. Emulate the
    # scheduler cancelling the real worker's child before its first step.
    async def scenario():
        monkeypatch.setattr(engine,'QUEUE',asyncio.Queue())
        original_create=asyncio.create_task
        def cancel_before_start(coro,*args,**kwargs):
            task=original_create(coro,*args,**kwargs)
            if getattr(coro,'__name__',None)=='execute':task.cancel()
            return task
        monkeypatch.setattr(asyncio,'create_task',cancel_before_start)
        worker=original_create(original_worker())
        await engine.QUEUE.put(rid)
        await asyncio.wait_for(engine.QUEUE.join(),2)
        worker.cancel()
        try:await worker
        except asyncio.CancelledError:pass
    asyncio.run(scenario())
    assert usage.summary()['reserved']==0 and usage.summary()['attempted']==1
    assert store.one('SELECT status FROM runs WHERE id=?',(rid,))['status']=='Cancelado'
