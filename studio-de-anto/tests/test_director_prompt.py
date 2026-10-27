"""The planning prompt must survive the provider's character bound intact."""
import asyncio
import json

from backend import cloud, director, models, store


def test_escaped_history_and_memory_never_truncate_the_planning_contract(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'],*service.get('aliases',())):monkeypatch.delenv(name,raising=False)
    store.init();pid=store.rows('SELECT id FROM projects')[0]['id']
    request=('Objetivo "del usuario"\n'*150)[:2000].strip()
    note=('"\n'*1000)
    store.save_setting('project_memory:'+pid,note)
    with store.db() as connection:
        for _ in range(4):
            connection.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',
                               (store.uid(),pid,'anto','user','"\n'*300,None,store.now()))
    captured=[]
    async def complete(agent,messages,schema=None,token_limit=None):
        bounded=models._messages(models.snapshot(agent)['agent'],messages)
        assert bounded[-1]['content']==messages[-1]['content']
        assert len(bounded[-1]['content'])<=11000
        prompt=json.loads(bounded[-1]['content']);captured.append(prompt)
        assert prompt['objective_from_user']==request
        assert set(prompt['contract']['required'])=={'objective','clarification','assignments'}
        assert 'no tienen navegador, shell' in prompt['rules']
        return json.dumps({'objective':request,'clarification':None,'assignments':[
            {'agent':'leo','task':'Redactar una propuesta breve con sus límites','depends_on':[]}]})
    monkeypatch.setattr(models,'complete',complete)
    def forbidden(*args,**kwargs):raise AssertionError('No real provider calls in prompt regression')
    monkeypatch.setattr(models,'_api_client',forbidden)
    body=director.DirectorRequest(project=pid,request=request,request_id='bounded-prompt',confirmed=True)
    plan,_=asyncio.run(director.propose(body))
    assert plan.objective==request and len(captured)==1
