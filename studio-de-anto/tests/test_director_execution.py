"""Director execution uses isolated data and explicit mock inference only."""
import asyncio
import contextlib
import io
import json
from pathlib import Path

import httpx
import pytest

from backend import backups, cloud, credential_store, engine, models, store, usage
from backend.schemas import Plan

MODEL='gemini-2.5-flash-lite'
KEY='director-protocol-test-key'


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'],*service.get('aliases',())):
            monkeypatch.delenv(name,raising=False)
    monkeypatch.setattr(models,'LOCK',asyncio.Lock())
    monkeypatch.setattr(engine,'ACTIVE',{})
    store.init();store.save_setting('provider','gemini')
    store.save_setting('agents',[{**agent,'model':MODEL,'instructions':'MOCK_ROLE='+agent['id']} for agent in models.AGENTS])
    credential_store.save('gemini',KEY)
    usage.save_policy({'daily_requests':100,'max_output_tokens':512,'concise':True})
    def forbidden(*args,**kwargs):pytest.fail('No live provider client is permitted in director tests')
    monkeypatch.setattr(models,'_api_client',forbidden)


def create_run(specialists=('atlas','bruno'),depends=None):
    project=store.rows('SELECT id FROM projects')[0]['id']
    tasks=[{'id':agent,'agent':agent,'description':'Aportar una perspectiva de '+agent,
            'tools':['reason'],'depends_on':(depends or {}).get(agent,[]),
            'outputs':['contribution'],'acceptance':['Texto revisable']}
           for agent in specialists]
    tasks.append({'id':'summary','agent':'anto','description':'Integrar todas las contribuciones y sus límites',
                  'tools':['reason'],'depends_on':list(specialists),'outputs':['summary'],
                  'acceptance':['Síntesis revisable de todas las contribuciones']})
    plan=Plan(mode='director',objective='Preparar una propuesta de lanzamiento sin inventar cifras',tasks=tasks)
    rid=store.uid();mapping={task.id:store.uid() for task in plan.tasks}
    with store.db() as c:
        c.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',(rid,project,None,plan.objective,'Pendiente',plan.model_dump_json(),None,store.now()))
        c.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',(rid+'_director_user',project,'anto','user',plan.objective,MODEL,store.now()))
        for i,task in enumerate(plan.tasks):
            payload=task.model_dump();payload['depends_on']=[mapping[dependency] for dependency in task.depends_on]
            c.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)',(mapping[task.id],rid,i,task.agent,'Pendiente',json.dumps(payload),None))
            c.executemany('INSERT INTO dependencies VALUES(?,?)',[(mapping[task.id],mapping[dependency]) for dependency in task.depends_on])
    return store.one('SELECT * FROM runs WHERE id=?',(rid,))


def protocol(monkeypatch,*,fail=None,long=False,change_settings=False):
    seen=[]
    def handler(request):
        assert request.method=='POST' and request.url.host=='generativelanguage.googleapis.com'
        assert request.headers['x-goog-api-key']==KEY
        body=json.loads(request.content)
        instruction=body['systemInstruction']['parts'][0]['text']
        agent=next(agent['id'] for agent in models.AGENTS if 'MOCK_ROLE='+agent['id'] in instruction)
        seen.append((agent,body))
        if change_settings and len(seen)==1:
            store.save_setting('provider','groq')
            store.save_setting('agents',[{**item,'model':'changed-model','instructions':'Changed'} for item in models.AGENTS])
        if fail and fail(agent,len(seen)):
            return httpx.Response(429,stream=httpx.ByteStream(b'{"error":{}}'))
        text='MOCK síntesis final' if agent=='anto' else 'MOCK aporte '+agent+(' '+agent*2000 if long else '')
        data={'candidates':[{'content':{'parts':[{'text':text}]},'finishReason':'STOP'}],
              'usageMetadata':{'promptTokenCount':20,'candidatesTokenCount':8,'totalTokenCount':28}}
        return httpx.Response(200,stream=httpx.ByteStream(('data: '+json.dumps(data)+'\n\n').encode()))
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    return seen


def tasks(run):return store.rows('SELECT * FROM tasks WHERE run=? ORDER BY position',(run['id'],))


def test_director_protocol_respects_budget_snapshots_and_all_contributions(monkeypatch):
    run=create_run(('atlas','vera','bruno','iris','leo'));keys=credential_store.read_all()
    seen=protocol(monkeypatch,long=True,change_settings=True)
    asyncio.run(engine.execute(run))
    assert [agent for agent,_ in seen]==['atlas','vera','bruno','iris','leo','anto']
    assert all(body['generationConfig']['maxOutputTokens']==512 for _,body in seen)
    final=json.loads(seen[-1][1]['contents'][-1]['parts'][-1]['text'])
    assert {item['agent'] for item in final['contributions'].values()}=={'atlas','vera','bruno','iris','leo'}
    assert len(seen[-1][1]['contents'][-1]['parts'][-1]['text'])<12000
    assert all(item['text'].startswith('MOCK aporte '+item['agent']) for item in final['contributions'].values())
    saved=store.one('SELECT * FROM runs WHERE id=?',(run['id'],))
    assert saved['status']=='Completado' and json.loads(saved['result'])['provisional'] is True
    event=store.one("SELECT payload FROM events WHERE run=? AND kind='run' ORDER BY seq DESC LIMIT 1",(run['id'],))
    assert json.loads(event['payload'])['result_state']=='provisional' and not json.loads(event['payload'])['mathematical_review_passed']
    message=store.one('SELECT * FROM messages WHERE id=?',(run['id']+'_director_answer',))
    assert message['content']=='MOCK síntesis final' and message['model']==MODEL
    assert store.one('SELECT provider FROM message_provenance WHERE message_id=?',(message['id'],))['provider']=='gemini'
    artifacts=store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))
    assert {artifact['name'] for artifact in artifacts}=={'colaboracion.json','resumen-director.md'}
    assert 'MOCK síntesis final' in next(Path(item['path']).read_text() for item in artifacts if item['name'].endswith('.md'))
    assert all(json.loads(task['result'])['_director_attempts']==1 for task in tasks(run))
    assert usage.summary()['completed']==6 and store.setting('run_calls:'+run['id'],0)==6
    assert credential_store.read_all()==keys and KEY not in json.dumps(store.rows('SELECT * FROM settings'))


def test_escaped_contributions_preserve_objective_task_and_every_source_through_adapter():
    run=create_run(('atlas','vera','bruno','iris','leo'));saved_tasks=tasks(run)
    objective=('Objetivo "completo"\n'*150)[:2000]
    description=('Tarea "concreta"\n'*100)[:1000]
    plan=Plan.model_validate_json(run['plan']).model_copy(update={'objective':objective})
    spec=json.loads(saved_tasks[-1]['payload']);spec['description']=description
    original='"\n'*10000
    shared={task['id']:{'text':original} for task in saved_tasks[:-1]}
    messages=engine._director_messages(plan,spec,shared,saved_tasks)
    assert len(messages[0]['content'])<=11000
    bounded=models._messages(models.agents()[0],messages)
    assert bounded[-1]['content']==messages[0]['content']
    data=json.loads(bounded[-1]['content'])
    assert data['objective']==objective and data['task']==description
    assert set(data['contributions'])==set(shared)
    excerpts=[item['text'] for item in data['contributions'].values()]
    assert all(text and original.startswith(text) for text in excerpts)
    assert len({len(text) for text in excerpts})==1 and len(excerpts[0])<1200


def test_director_daily_limit_stops_before_another_provider_request(monkeypatch):
    run=create_run(('atlas',));seen=protocol(monkeypatch)
    usage.save_policy({'daily_requests':1,'max_output_tokens':512,'concise':True})
    with pytest.raises(ValueError,match='límite'):
        asyncio.run(engine.execute(run))
    assert [agent for agent,_ in seen]==['atlas']
    assert json.loads(tasks(run)[1]['result'])['_director_attempts']==1
    assert not store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))
    assert not store.rows("SELECT * FROM messages WHERE role='assistant'")


def test_failed_attempts_and_completed_checkpoints_survive_project_backup(monkeypatch):
    run=create_run();seen=protocol(monkeypatch,fail=lambda agent,n:agent=='bruno' and n==2)
    with pytest.raises(ValueError):asyncio.run(engine.execute(run))
    engine.set_status(run,'Interrumpido')
    restored=backups.import_project(backups.export_project(run['project']))
    resumed=store.one('SELECT * FROM runs WHERE project=?',(restored['id'],))
    assert store.setting('run_calls:'+resumed['id'],None) is None
    asyncio.run(engine.execute(resumed))
    assert [agent for agent,_ in seen]==['atlas','bruno','bruno','anto']
    assert [json.loads(task['result'])['_director_attempts'] for task in tasks(resumed)]==[1,2,1]
    assert store.setting('run_calls:'+resumed['id'],0)==4
    assert len(store.rows("SELECT * FROM messages WHERE project=? AND role='assistant'",(restored['id'],)))==1


@pytest.mark.parametrize('source',['settings','portable'])
def test_director_never_resets_an_exhausted_six_call_budget(monkeypatch,source):
    run=create_run(('atlas',))
    if source=='settings':store.save_setting('run_calls:'+run['id'],6)
    else:
        with store.db() as c:c.execute('UPDATE tasks SET result=? WHERE id=?',(json.dumps({'_director_attempts':6}),tasks(run)[0]['id']))
        restored=backups.import_project(backups.export_project(run['project']))
        run=store.one('SELECT * FROM runs WHERE project=?',(restored['id'],))
    async def forbidden(*args,**kwargs):pytest.fail('The persisted director budget is exhausted')
    monkeypatch.setattr(models,'complete',forbidden)
    with pytest.raises(ValueError,match='Límite'):asyncio.run(engine.execute(run))
    assert not store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))


def test_completed_publication_is_idempotent_after_restart_and_backup(monkeypatch):
    run=create_run(('atlas',));seen=protocol(monkeypatch)
    original=engine.set_status;crash=[True]
    def status(value,state):
        if state=='Completado' and crash[0]:crash[0]=False;raise RuntimeError('MOCK process loss after publication')
        return original(value,state)
    monkeypatch.setattr(engine,'set_status',status)
    with pytest.raises(RuntimeError):asyncio.run(engine.execute(run))
    store.init()
    restored=backups.import_project(backups.export_project(run['project']))
    resumed=store.one('SELECT * FROM runs WHERE project=?',(restored['id'],))
    mapped_message=json.loads(resumed['result'])['message_id']
    assert mapped_message!=resumed['id']+'_director_answer'
    asyncio.run(engine.execute(resumed));asyncio.run(engine.execute(store.one('SELECT * FROM runs WHERE id=?',(resumed['id'],))))
    assert [agent for agent,_ in seen]==['atlas','anto']
    assert len(store.rows("SELECT * FROM messages WHERE project=? AND role='assistant'",(restored['id'],)))==1
    assert len(store.rows('SELECT * FROM artifacts WHERE run=?',(resumed['id'],)))==2
    assert json.loads(store.one('SELECT result FROM runs WHERE id=?',(resumed['id'],))['result'])['message_id']==mapped_message


def test_publication_database_failure_rolls_back_message_and_artifacts(monkeypatch):
    # Execution order differs from stored position; orphan JSON must still be
    # byte-for-byte stable when checkpoints are read back after publication fails.
    run=create_run(('bruno','atlas'),depends={'bruno':['atlas']});seen=protocol(monkeypatch)
    with store.db() as c:
        c.execute("CREATE TRIGGER fail_director BEFORE INSERT ON message_provenance BEGIN SELECT RAISE(ABORT,'MOCK publication failure'); END")
    with pytest.raises(Exception,match='MOCK publication failure'):asyncio.run(engine.execute(run))
    assert not store.rows("SELECT * FROM messages WHERE role='assistant'")
    assert not store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))
    with store.db() as c:c.execute('DROP TRIGGER fail_director')
    asyncio.run(engine.execute(store.one('SELECT * FROM runs WHERE id=?',(run['id'],))))
    assert [agent for agent,_ in seen]==['atlas','bruno','anto']
    assert len(store.rows("SELECT * FROM messages WHERE role='assistant'"))==1
    assert len(store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],)))==2


def test_partial_artifact_write_can_resume_without_more_inference(monkeypatch):
    run=create_run(('atlas',));seen=protocol(monkeypatch)
    folder=store.ROOT/'artifacts'/run['id'];original_open=io.open;failed=[False]
    class InterruptedWrite:
        def __init__(self,target):self.target=target
        def __getattr__(self,name):return getattr(self.target,name)
        def __enter__(self):return self
        def __exit__(self,*args):return self.target.__exit__(*args)
        def write(self,value):
            self.target.write(value[:12]);self.target.flush()
            raise OSError(28,'MOCK: artifact storage is full')
    def interrupted_open(file,mode='r',*args,**kwargs):
        target=original_open(file,mode,*args,**kwargs)
        if not failed[0] and isinstance(file,(str,Path)) and mode[0] in {'x','w'} and (Path(file)==folder or Path(file).parent==folder):
            failed[0]=True;return InterruptedWrite(target)
        return target
    monkeypatch.setattr(io,'open',interrupted_open)
    with pytest.raises(OSError,match='MOCK: artifact storage is full'):
        asyncio.run(engine.execute(run))
    assert failed[0] and all(task['status']=='Completado' for task in tasks(run))
    assert not store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))
    assert not store.rows("SELECT * FROM messages WHERE role='assistant'")
    monkeypatch.setattr(io,'open',original_open)
    asyncio.run(engine.execute(store.one('SELECT * FROM runs WHERE id=?',(run['id'],))))
    assert [agent for agent,_ in seen]==['atlas','anto']
    assert len(store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],)))==2
    assert len(store.rows("SELECT * FROM messages WHERE role='assistant'"))==1


def test_cancellation_preserves_checkpoint_attempts_and_never_publishes(monkeypatch):
    run=create_run(('atlas',))
    async def scenario():
        entered=asyncio.Event();engine.QUEUE=asyncio.Queue()
        async def answer(agent,messages,**kwargs):
            if agent=='atlas':return 'MOCK aporte completado'
            entered.set();await asyncio.Event().wait()
        monkeypatch.setattr(models,'complete',answer)
        worker=asyncio.create_task(engine.worker());await engine.QUEUE.put(run['id'])
        await asyncio.wait_for(entered.wait(),2);engine.ACTIVE[run['id']].cancel()
        for _ in range(100):
            if store.one('SELECT status FROM runs WHERE id=?',(run['id'],))['status']=='Cancelado':break
            await asyncio.sleep(.005)
        worker.cancel()
        with contextlib.suppress(asyncio.CancelledError):await worker
    asyncio.run(scenario())
    assert store.one('SELECT status FROM runs WHERE id=?',(run['id'],))['status']=='Cancelado'
    saved=tasks(run);assert [task['status'] for task in saved]==['Completado','Cancelado']
    assert [json.loads(task['result'])['_director_attempts'] for task in saved]==[1,1]
    assert not store.rows("SELECT * FROM messages WHERE role='assistant'")
    assert not store.rows('SELECT * FROM artifacts WHERE run=?',(run['id'],))


def test_director_rejects_files_before_inference(monkeypatch):
    run=create_run(('atlas',));run['file']='foreign-file'
    async def forbidden(*args,**kwargs):pytest.fail('Director must never read or process an attached file')
    monkeypatch.setattr(models,'complete',forbidden)
    with pytest.raises(ValueError,match='sin archivos'):asyncio.run(engine.execute(run))
