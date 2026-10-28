"""End-to-end HTTP contracts; all inference replies are explicit protocol mocks."""
import asyncio
import base64
import io
import json
import zipfile

import httpx
import pytest
from PIL import Image
from pypdf import PdfWriter
from fastapi.testclient import TestClient
from backend import cloud,engine,models,store
from backend.app import app
from backend.data_tools import analyze,load
from backend.schemas import Analysis

KEY='product-workflow-protocol-key'
def pdf_bytes():
    output=io.BytesIO()
    writer=PdfWriter()
    writer.add_blank_page(width=612,height=792)
    writer.write(output)
    return output.getvalue()

PDF=pdf_bytes()

@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    monkeypatch.setenv('STUDIO_CLOUD_ONLY','1')
    monkeypatch.setenv('STUDIO_AI_PROVIDER','gemini')
    for service in cloud.PROVIDERS.values():
        for name in (service['secret'],*service.get('aliases',())):monkeypatch.delenv(name,raising=False)
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY',KEY)

def provider(monkeypatch):
    seen=[]
    def handler(request):
        assert request.headers['x-goog-api-key']==KEY
        seen.append(request)
        if request.method=='GET':return httpx.Response(200,json={'models':[{'name':'models/gemini-2.5-flash-lite','supportedGenerationMethods':['generateContent']}]})
        packets=[{'candidates':[{'content':{'parts':[{'text':'MOCK: '}]}}]},
                 {'candidates':[{'content':{'parts':[{'text':'archivo recibido'}]},'finishReason':'STOP'}],
                  'usageMetadata':{'promptTokenCount':20,'candidatesTokenCount':8,'totalTokenCount':28}}]
        return httpx.Response(200,stream=httpx.ByteStream(''.join('data: '+json.dumps(p)+'\n\n' for p in packets).encode()))
    monkeypatch.setattr(models,'_api_client',lambda kind,timeout:httpx.AsyncClient(transport=httpx.MockTransport(handler)))
    return seen

def upload(client,pid,name,data,mime):
    result=client.post('/api/files',data={'project':pid},files={'file':(name,data,mime)})
    assert result.status_code==200,result.text
    return result.json()['id']

def chat(client,pid,**fields):
    return client.post('/api/chat',json={'project':pid,'agent':'anto','content':'Lee estos adjuntos.',**fields})

def test_pdf_and_jpg_reach_gemini_without_storing_base64_in_history(monkeypatch):
    seen=provider(monkeypatch)
    image=io.BytesIO();Image.new('RGB',(80,50),'red').save(image,format='JPEG')
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        pdf=upload(client,pid,'informe.pdf',PDF,'application/pdf')
        jpg=upload(client,pid,'foto.jpg',image.getvalue(),'image/jpeg')
        assert client.get('/api/files/'+pdf+'/preview').json()['kind']=='document'
        assert client.get('/api/files/'+jpg+'/content').headers['content-type'].startswith('image/jpeg')
        original=client.get('/api/files/'+pdf+'/content?download=true')
        assert original.content==PDF and 'attachment' in original.headers['content-disposition']
        answer=chat(client,pid,attachments=[pdf,jpg])
        assert '"done": true' in answer.text and 'archivo recibido' in answer.text
        body=json.loads(seen[-1].content)
        parts=body['contents'][-1]['parts']
        native=[p['inlineData'] for p in parts if 'inlineData' in p]
        assert [p['mimeType'] for p in native]==['application/pdf','image/jpeg']
        assert base64.b64decode(native[0]['data'])==PDF
        saved=client.get('/api/messages',params={'project':pid,'agent':'anto'}).json()
        assert {f['id'] for f in saved[0]['attachments']}=={pdf,jpg}
        assert native[0]['data'] not in json.dumps(saved) and KEY not in json.dumps(saved)
        again=chat(client,pid,content='Otra pregunta sin adjuntos.')
        assert '"done": true' in again.text
        assert all('inlineData' not in p for item in json.loads(seen[-1].content)['contents'] for p in item['parts'])
        status=client.get('/api/usage').json()
        assert status['completed']==2 and status['total_tokens']==56 and status['unknown_attempts']==0

def test_foreign_and_invalid_files_fail_before_provider_and_do_not_create_records(monkeypatch):
    seen=provider(monkeypatch)
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        other=client.post('/api/projects',json={'name':'Other'}).json()['id']
        fid=upload(client,other,'other.pdf',PDF,'application/pdf')
        assert chat(client,pid,attachments=[fid]).status_code==422
        bad=client.post('/api/files',data={'project':pid},files={'file':('fake.jpg',b'not jpeg','image/jpeg')})
        assert bad.status_code==422
        assert not client.get('/api/files',params={'project':pid}).json()
        assert seen==[]

def test_daily_studio_budget_stops_inference_and_shared_memory_reaches_all_agents(monkeypatch):
    seen=provider(monkeypatch)
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        note='Proyecto Aurora: utilizar euros y recordar la fecha acordada.'
        assert client.put('/api/projects/'+pid+'/memory',json={'summary':note}).status_code==200
        assert client.put('/api/usage/policy',json={'daily_requests':2,'max_output_tokens':512,'concise':True}).status_code==200
        for agent in ['anto','vera']:
            answer=chat(client,pid,agent=agent,content='Recuerda el proyecto.')
            assert '"done": true' in answer.text
            payload=json.loads(seen[-1].content)
            assert payload['generationConfig']['maxOutputTokens']==512
            assert note in json.dumps(payload,ensure_ascii=False)
        blocked=chat(client,pid)
        errors=[json.loads(part[6:]) for part in blocked.text.split('\n\n') if part.startswith('data: ')]
        assert any('límite diario' in item.get('error','').lower() for item in errors)
        assert len([r for r in seen if r.method=='POST'])==2
        assert client.get('/api/usage').json()['remaining']==0

def test_project_backup_http_restores_a_new_project_with_documents_and_memory():
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        upload(client,pid,'document.pdf',PDF,'application/pdf')
        client.put('/api/projects/'+pid+'/memory',json={'summary':'Nota compartida'})
        backup=client.get('/api/projects/'+pid+'/backup')
        assert backup.status_code==200 and backup.headers['content-type']=='application/zip'
        restored=client.post('/api/projects/import',files={'file':('project.zip',backup.content,'application/zip')})
        assert restored.status_code==200,restored.text
        newpid=restored.json()['id'];assert newpid!=pid
        assert len(client.get('/api/files',params={'project':pid}).json())==1
        imported=client.get('/api/files',params={'project':newpid}).json()
        assert len(imported)==1 and imported[0]['kind']=='document'
        assert client.get('/api/files/'+imported[0]['id']+'/content?download=true').content==PDF
        assert client.get('/api/projects/'+newpid+'/memory').json()['summary']=='Nota compartida'

def test_backup_import_rejects_unsupported_file_types_without_creating_a_project():
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        upload(client,pid,'original.pdf',PDF,'application/pdf')
        exported=client.get('/api/projects/'+pid+'/backup').content
        rebuilt=io.BytesIO()
        with zipfile.ZipFile(io.BytesIO(exported)) as original,zipfile.ZipFile(rebuilt,'w') as output:
            manifest=json.loads(original.read('manifest.json'))
            manifest['tables']['files'][0]['name']='unsupported.html'
            output.writestr('manifest.json',json.dumps(manifest))
            for name in original.namelist():
                if name!='manifest.json':output.writestr(name,original.read(name))
        result=client.post('/api/projects/import',files={'file':('changed.zip',rebuilt.getvalue(),'application/zip')})
        assert result.status_code==422
        assert len(client.get('/api/projects').json())==1
        assert client.get('/api/files',params={'project':pid}).json()[0]['name']=='original.pdf'

def test_resume_restores_completed_calculation_without_repeating_it(monkeypatch):
    with TestClient(app) as client:
        pid=client.get('/api/projects').json()[0]['id']
        fid=upload(client,pid,'sales.csv',b'item,value\nA,30\nB,70\n','text/csv')
        spec=Analysis(metric='value',group_by=['item'],chart='none')
        run=client.post('/api/tools/plan',json={'project':pid,'file':fid,'request':'Sumar valores por item','analysis':spec.model_dump()}).json()
        first=store.one('SELECT * FROM tasks WHERE run=? ORDER BY position',(run['id'],))
        result=analyze(load(store.one('SELECT path FROM files WHERE id=?',(fid,))['path'],{}),spec)
        with store.db() as c:
            c.execute("UPDATE runs SET status='Interrumpido',result=? WHERE id=?",(json.dumps(result),run['id']))
            c.execute("UPDATE tasks SET status='Completado',result=? WHERE id=?",(json.dumps({'analysis':result}),first['id']))
        def no_repeat(*args):raise AssertionError('Completed analysis must not be repeated')
        monkeypatch.setattr(engine,'analyze',no_repeat)
        queued=client.post('/api/runs/'+run['id']+'/resume')
        assert queued.status_code==200 and queued.json()['completed_checkpoints']==1
        assert client.post('/api/runs/'+run['id']+'/resume').status_code==422
        import time
        for _ in range(200):
            status=client.get('/api/runs/'+run['id']).json()['status']
            if status in ('Completado','Fallido'):break
            time.sleep(.01)
        assert status=='Completado'
        assert json.loads(store.one('SELECT result FROM runs WHERE id=?',(run['id'],))['result'])['total']==100
        assert len(client.get('/api/artifacts',params={'project':pid}).json())>=7
        assert store.one('SELECT result FROM tasks WHERE id=?',(first['id'],))['result']==json.dumps({'analysis':result})
