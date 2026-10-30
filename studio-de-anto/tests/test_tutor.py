"""Tutor persistence and source boundaries, with all model entry points blocked."""
import pytest
from fastapi.testclient import TestClient
from backend import store, tutor, models
from backend.app import app

@pytest.fixture(autouse=True)
def isolated(tmp_path, monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init()
    with store.db() as c:
        c.executemany('INSERT INTO projects VALUES(?,?,?)', [('a','A',store.now()),('b','B',store.now())])
        c.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',('source','a','anto','assistant','Example evidence',None,store.now()))
    def forbidden(*args,**kwargs):
        pytest.fail('No real or simulated model call allowed for tutor state operations')
    for name in ('stream','complete','_api_client'):
        monkeypatch.setattr(models,name,forbidden)


def test_persistence_progress_memory_and_disable():
    with TestClient(app) as client:
        path='/api/projects/a/tutor'
        state=client.get(path).json()
        assert state['enabled'] is False
        state.update(enabled=True,level='intermedio',goal='Learn Python',
                     exercises=[{'id':'e','question':'Explain a loop','answer':'Repeat','status':'completed'}],
                     memories=[{'id':'m','text':'Review loops','source':'source'}])
        assert client.put(path,json=state).status_code==200
        assert client.get(path).json()==state
        assert client.get('/api/projects/b/tutor').json()['memories']==[]
        assert 'Review loops' in tutor.context('a')['content']
        assert tutor.context('b') is None
        assert client.get(path+'/sources/source').json()['content']=='Example evidence'
        state.update(enabled=False,memories=[])
        assert client.put(path,json=state).status_code==200
        assert tutor.context('a') is None
        store.init()
        assert tutor.read('a').exercises[0].status=='completed'


def test_cross_project_sources_and_limits():
    with TestClient(app) as client:
        state=tutor.State(memories=[tutor.Memory(id='m',text='No',source='source')]).model_dump()
        assert client.put('/api/projects/b/tutor',json=state).status_code==422
        assert client.get('/api/projects/b/tutor/sources/source').status_code==404
        assert client.get('/api/projects/missing/tutor').status_code==404
        assert client.put('/api/projects/a/tutor',json={'level':'invalid'}).status_code==422
        assert client.put('/api/projects/a/tutor',json={'goal':'x'*1001}).status_code==422
        assert client.put('/api/projects/a/tutor',json={'exercises':[{'id':'x','question':'Q'}]*31}).status_code==422
        assert client.put('/api/projects/a/tutor',json={'exercises':[{'id':'x','question':'Q'}]*2}).status_code==422
        assert client.put('/api/projects/a/tutor',json={},headers={'Origin':'https://evil.example'}).status_code==403
        assert tutor.read('b').memories==[]


def test_chat_receives_tutor_only_when_enabled(monkeypatch):
    captured=[]
    async def stream(agent, messages, **kwargs):
        captured.append(messages)
        yield 'Simulated explanation'
    monkeypatch.setattr(models,'stream',stream)
    with TestClient(app) as client:
        tutor.save('a',tutor.State(enabled=True,level='avanzado',goal='Unique learning goal'))
        for project in ('a','b'):
            response=client.post('/api/chat',json={'project':project,'agent':'anto','content':'Explain loops'})
            assert '"done": true' in response.text
        assert any('Unique learning goal' in m['content'] for m in captured[0])
        assert not any('MODO TUTOR' in m['content'] for m in captured[1])
        assert captured[0][-1]['content']=='Explain loops'
