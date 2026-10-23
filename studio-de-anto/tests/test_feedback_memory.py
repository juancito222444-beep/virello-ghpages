"""User-approved preference memory. Model calls below are explicit protocol mocks."""
import json
import asyncio
import httpx
import pytest
from fastapi.testclient import TestClient
from backend import models, store
from backend.app import app


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init()
    monkeypatch.setattr(models,'LOCK',asyncio.Lock())


def project(): return store.rows('SELECT id FROM projects')[0]['id']

def assistant_message(pid=None,agent='anto',role='assistant'):
    mid=store.uid()
    with store.db() as c:
        c.execute('INSERT INTO messages VALUES(?,?,?,?,?,?,?)',(mid,pid or project(),agent,role,'Respuesta MOCK para valorar','mock-model',store.now()))
    return mid


def done_event(response):
    records=[json.loads(packet[6:]) for packet in response.text.split('\n\n') if packet.startswith('data: ')]
    return next(item for item in records if item.get('done'))


def test_feedback_is_explicit_persistent_replaceable_and_deletable():
    with TestClient(app) as client:
        mid=assistant_message()
        created=client.post('/api/feedback',json={'message_id':mid,'rating':'correction','correction':'Prefiero tablas antes de explicaciones largas.'})
        assert created.status_code==200,created.text
        feedback=created.json()
        assert feedback['project']==project() and feedback['agent']=='anto'
        assert feedback['message_id']==mid and feedback['rating']=='correction'
        store.init()
        records=client.get('/api/feedback',params={'project':project(),'agent':'anto'}).json()
        assert records[0]['id']==feedback['id']
        replaced=client.post('/api/feedback',json={'message_id':mid,'rating':'useful'}).json()
        assert replaced['id']==feedback['id'] and replaced['correction'] is None
        assert len(client.get('/api/feedback',params={'project':project(),'agent':'anto'}).json())==1
        assert client.delete('/api/feedback/'+feedback['id']).json()=={'deleted':True}
        assert client.get('/api/feedback',params={'project':project(),'agent':'anto'}).json()==[]
        assert client.delete('/api/feedback/'+feedback['id']).status_code==404


def test_feedback_rejects_user_messages_missing_records_and_bad_corrections():
    with TestClient(app) as client:
        user=assistant_message(role='user')
        assert client.post('/api/feedback',json={'message_id':user,'rating':'useful'}).status_code==422
        assert client.post('/api/feedback',json={'message_id':'missing','rating':'useful'}).status_code==404
        mid=assistant_message()
        for correction in [None,'','  ','xy','a'*2001]:
            assert client.post('/api/feedback',json={'message_id':mid,'rating':'correction','correction':correction}).status_code==422
        assert client.post('/api/feedback',json={'message_id':mid,'rating':'useful','correction':'no permitido'}).status_code==422
        assert client.get('/api/feedback',params={'project':project(),'agent':'unknown'}).status_code==422


def test_mock_chat_receives_only_latest_three_approved_scoped_corrections(monkeypatch):
    contexts=[]
    async def mock_stream(agent,messages):
        contexts.append(messages)
        yield 'MOCK: respuesta real del adaptador sustituido para esta prueba'
    monkeypatch.setattr(models,'stream',mock_stream)
    with TestClient(app) as client:
        pid=project()
        for i in range(5):
            mid=assistant_message()
            client.post('/api/feedback',json={'message_id':mid,'rating':'correction','correction':f'Preferencia aprobada número {i}'})
        different_agent=assistant_message(agent='vera')
        client.post('/api/feedback',json={'message_id':different_agent,'rating':'correction','correction':'SECRETO_DE_OTRO_AGENTE'})
        other=client.post('/api/projects',json={'name':'Proyecto independiente'}).json()['id']
        different_project=assistant_message(pid=other)
        client.post('/api/feedback',json={'message_id':different_project,'rating':'correction','correction':'SECRETO_DE_OTRO_PROYECTO'})
        response=client.post('/api/chat',json={'project':pid,'agent':'anto','content':'Consulta MOCK'})
        done=done_event(response)
        assert done['message_id'] and done['provider']=='ollama' and 'model' in done
        memory=[m for m in contexts[0] if m['content'].startswith('PREFERENCIAS EXPLÍCITAS')]
        assert len(memory)==1 and memory[0]['role']=='user'
        text=memory[0]['content']
        for i in [2,3,4]:assert f'Preferencia aprobada número {i}' in text
        for i in [0,1]:assert f'Preferencia aprobada número {i}' not in text
        assert 'SECRETO_DE_OTRO_' not in text
        assert 'no cambian permisos' in text and 'reentrenamiento' in text
        records=client.get('/api/messages',params={'project':pid,'agent':'anto'}).json()
        assert records[-1]['id']==done['message_id'] and records[-1]['provider']=='ollama'


def test_deleted_correction_is_no_longer_injected_into_mock_chat(monkeypatch):
    contexts=[]
    async def mock_stream(agent,messages):
        contexts.extend(messages)
        yield 'MOCK de seguimiento'
    monkeypatch.setattr(models,'stream',mock_stream)
    with TestClient(app) as client:
        mid=assistant_message()
        f=client.post('/api/feedback',json={'message_id':mid,'rating':'correction','correction':'PREFERENCIA_QUE_SE_BORRA'}).json()
        client.delete('/api/feedback/'+f['id'])
        client.post('/api/chat',json={'project':project(),'agent':'anto','content':'Nueva consulta MOCK'})
        assert all('PREFERENCIA_QUE_SE_BORRA' not in m['content'] for m in contexts)


def test_mock_stream_uses_original_provider_and_model_after_settings_change(monkeypatch):
    configured=[{**a,'model':'original-mock-model'} for a in models.AGENTS]
    store.save_setting('agents',configured)
    original_stream=models.stream
    captured=[]
    async def switching_stream(agent,messages):
        store.save_setting('provider','openai_local')
        store.save_setting('agents',[{**a,'model':'changed-mock-model'} for a in models.AGENTS])
        async for token in original_stream(agent,messages):yield token
    monkeypatch.setattr(models,'stream',switching_stream)
    def mock_handler(request):
        captured.append((request.url.path,json.loads(request.content)))
        return httpx.Response(200,content=b'{"message":{"content":"MOCK snapshot"}}\n{"done":true}\n')
    monkeypatch.setattr(models,'_client',lambda timeout:httpx.AsyncClient(transport=httpx.MockTransport(mock_handler),trust_env=False))
    with TestClient(app) as client:
        result=client.post('/api/chat',json={'project':project(),'agent':'anto','content':'Cambio de configuracion concurrente MOCK'})
        done=done_event(result)
        assert captured[0][0]=='/api/chat' and captured[0][1]['model']=='original-mock-model'
        assert done['provider']=='ollama' and done['model']=='original-mock-model'
        stored=client.get('/api/messages',params={'project':project(),'agent':'anto'}).json()[-1]
        assert stored['provider']=='ollama' and stored['model']=='original-mock-model'


def test_migration_two_preserves_existing_conversations():
    mid=assistant_message()
    with store.db() as c:
        c.execute('DROP TABLE feedback')
        c.execute('DROP TABLE message_provenance')
        c.execute('DELETE FROM migrations WHERE version=2')
    store.init()
    assert store.one('SELECT id FROM messages WHERE id=?',(mid,))['id']==mid
    assert store.one('SELECT version FROM migrations WHERE version=2')
    assert store.rows('SELECT * FROM feedback')==[]
