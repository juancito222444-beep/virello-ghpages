"""Local usage rejections must not spend the Director's portable call budget."""
import asyncio
import json
import time

import httpx
import pytest
from fastapi.testclient import TestClient

from backend import cloud, credential_store, engine, models, store, usage
from backend.app import app
from backend.schemas import Plan


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'],*service.get('aliases',())):
            monkeypatch.delenv(name,raising=False)
    monkeypatch.setattr(models,'LOCK',asyncio.Lock())
    store.init();store.save_setting('provider','gemini')
    store.save_setting('agents',[{**agent,'model':'gemini-2.5-flash-lite',
                                 'instructions':'MOCK_ROLE='+agent['id']} for agent in models.AGENTS])
    credential_store.save('gemini','synthetic-director-budget-key')
    def forbidden(*args,**kwargs):pytest.fail('Budget tests must not contact a live provider')
    monkeypatch.setattr(models,'_api_client',forbidden)


def create_run(agents):
    project=store.rows('SELECT id FROM projects')[0]['id']
    tasks=[{'id':agent,'agent':agent,'description':'Aportar texto de '+agent,'tools':['reason'],
            'depends_on':[],'outputs':['Texto'],'acceptance':['Texto revisable']} for agent in agents]
    tasks.append({'id':'summary','agent':'anto','description':'Integrar todos los aportes',
                  'tools':['reason'],'depends_on':list(agents),'outputs':['Síntesis'],
                  'acceptance':['Texto revisable']})
    plan=Plan(mode='director',objective='Preparar una propuesta textual',tasks=tasks)
    rid=store.uid();mapping={task.id:store.uid() for task in plan.tasks}
    with store.db() as c:
        c.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',
                  (rid,project,None,plan.objective,'Pendiente',plan.model_dump_json(),None,store.now()))
        for index,task in enumerate(plan.tasks):
            payload=task.model_dump();payload['depends_on']=[mapping[dep] for dep in task.depends_on]
            c.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)',
                      (mapping[task.id],rid,index,task.agent,'Pendiente',json.dumps(payload),None))
            c.executemany('INSERT INTO dependencies VALUES(?,?)',
                          [(mapping[task.id],mapping[dep]) for dep in task.depends_on])
    return store.one('SELECT * FROM runs WHERE id=?',(rid,))


def protocol(monkeypatch,*,after_fifth=None,fail_first=False):
    seen=[]
    def handler(request):
        assert request.method=='POST' and request.url.host=='generativelanguage.googleapis.com'
        instruction=json.loads(request.content)['systemInstruction']['parts'][0]['text']
        agent=next(agent['id'] for agent in models.AGENTS if 'MOCK_ROLE='+agent['id'] in instruction)
        seen.append(agent)
        if fail_first and len(seen)==1:return httpx.Response(429,json={'error':{}})
        if len(seen)==5 and after_fifth:after_fifth()
        data={'candidates':[{'content':{'parts':[{'text':'MOCK aporte '+agent}]},'finishReason':'STOP'}]}
        return httpx.Response(200,stream=httpx.ByteStream(('data: '+json.dumps(data)+'\n\n').encode()))
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:
                        httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    return seen


def saved_tasks(run):
    return store.rows('SELECT * FROM tasks WHERE run=? ORDER BY position',(run['id'],))


def wait_run(client,run):
    for _ in range(150):
        current=client.get('/api/runs/'+run['id']).json()
        if current['status'] in {'Interrumpido','Completado','Fallido'}:return current
        time.sleep(.02)
    pytest.fail('The simulated Director job did not finish or pause')


@pytest.mark.parametrize('blocked_by',['quota','invalid_policy'])
def test_repeated_local_rejections_leave_room_for_final_synthesis(monkeypatch,blocked_by):
    with TestClient(app) as client:
        run=create_run(('atlas','vera','bruno','iris','leo'))
        engine.set_status(run,'Interrumpido')
        usage.save_policy({'daily_requests':6,
                           'max_output_tokens':512,'concise':True})
        corrupt=((lambda:store.save_setting('usage_policy',{'daily_requests':0})) if blocked_by=='invalid_policy'
                 else lambda:usage.save_policy({'daily_requests':5,'max_output_tokens':512,'concise':True}))
        seen=protocol(monkeypatch,after_fifth=corrupt)
        assert client.post('/api/runs/'+run['id']+'/resume').status_code==200
        assert wait_run(client,run)['status']=='Interrumpido'
        for _ in range(3):
            resumed=client.post('/api/runs/'+run['id']+'/resume')
            assert resumed.status_code==422,resumed.text
            assert wait_run(client,run)['status']=='Interrumpido'
            assert seen==['atlas','vera','bruno','iris','leo']
            assert store.setting('run_calls:'+run['id'],0)==5
            assert saved_tasks(run)[-1]['result'] is None
            assert len(store.rows('SELECT * FROM api_usage'))==5
            assert not store.rows("SELECT * FROM messages WHERE role='assistant'")
        repaired=client.put('/api/usage/policy',json={'daily_requests':6,'max_output_tokens':512,'concise':True})
        assert repaired.status_code==200,repaired.text
        assert client.post('/api/runs/'+run['id']+'/resume').status_code==200
        assert wait_run(client,run)['status']=='Completado'
        assert seen==['atlas','vera','bruno','iris','leo','anto']
        assert store.setting('run_calls:'+run['id'],0)==6
        assert [json.loads(task['result'])['_director_attempts'] for task in saved_tasks(run)]==[1]*6
        assert usage.summary()['attempted']==6
        assert len(store.rows("SELECT * FROM messages WHERE role='assistant'"))==1


def test_local_rejection_preserves_previous_paid_failure_on_resume(monkeypatch):
    run=create_run(('atlas',));seen=protocol(monkeypatch,fail_first=True)
    usage.save_policy({'daily_requests':2,'max_output_tokens':512,'concise':True})
    with pytest.raises(ValueError):asyncio.run(engine.execute(run))
    prior_result=saved_tasks(run)[0]['result']
    assert json.loads(prior_result)['_director_attempts']==1
    engine.set_status(run,'Interrumpido')
    run=store.one('SELECT * FROM runs WHERE id=?',(run['id'],))
    with pytest.raises(usage.UsageLimitExceeded):asyncio.run(engine.execute(run))
    assert seen==['atlas'] and saved_tasks(run)[0]['result']==prior_result
    assert store.setting('run_calls:'+run['id'],0)==1
    usage.save_policy({'daily_requests':3,'max_output_tokens':512,'concise':True})
    asyncio.run(engine.execute(store.one('SELECT * FROM runs WHERE id=?',(run['id'],))))
    assert seen==['atlas','atlas','anto']
    assert [json.loads(task['result'])['_director_attempts'] for task in saved_tasks(run)]==[2,1]
    assert store.setting('run_calls:'+run['id'],0)==3
    assert usage.summary()['failed']==1 and usage.summary()['completed']==2
