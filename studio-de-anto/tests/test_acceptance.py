import io, time, json, asyncio
from pathlib import Path
import pandas as pd
import pytest
from fastapi.testclient import TestClient
from backend.app import app
from backend import store,models,engine
from backend.schemas import Analysis,Derived,Filter,Plan
from backend.data_tools import analyze,review,load

@pytest.fixture
def data():
    return pd.DataFrame({'producto':['A','A','B'],'region':['Norte','Sur','Norte'],'cantidad':[2,3,1],'precio':[10,10,50]})
def revenue(**kw): return Analysis(metric='ingresos',group_by=['producto'],derived=Derived(name='ingresos',left='cantidad',right='precio',op='multiply'),**kw)

def test_synthetic_revenue(data):
    r=analyze(data,revenue());assert {a['producto']:a['valor'] for a in r['table']}=={'A':50,'B':50};assert r['total']==100
    assert review(data,revenue(),r)['passed']
def test_units_changes_arguments(data):
    spec=Analysis(metric='cantidad',group_by=['producto']);r=analyze(data,spec)
    assert {a['producto']:a['valor'] for a in r['table']}=={'A':5,'B':1}
    assert spec.model_dump()!=revenue().model_dump()
def test_north(data):
    spec=revenue(filters=[Filter(column='region',op='eq',value='Norte')]);r=analyze(data,spec)
    assert r['total']==70 and r['rows_after']==2 and review(data,spec,r)['passed']
def test_tampering_blocks_approval(data):
    r=analyze(data,revenue());r['table'][0]['valor']=500
    assert not review(data,revenue(),r)['passed']
def test_missing_group_is_detected(data):
    r=analyze(data,revenue());r['table'].pop();assert not review(data,revenue(),r)['passed']
def test_nan_infinity_and_duplicates():
    data=pd.DataFrame({'g':['A','A',None,None],'v':[1,float('inf'),3,3]})
    spec=Analysis(metric='v',group_by=['g']);r=analyze(data,spec)
    assert r['total']==7 and r['excluded_missing']==1 and review(data,spec,r)['passed']
def test_two_sheets_and_duplicate_headers(tmp_path,data):
    path=tmp_path/'two.xlsx'
    with pd.ExcelWriter(path) as w:
        data.to_excel(w,sheet_name='Ventas',index=False)
        data.head(1).to_excel(w,sheet_name='Otra',index=False)
    assert len(load(path,{'sheet':'Otra'}))==1 and len(load(path,{'sheet':'Ventas'}))==3
    bad=tmp_path/'bad.csv';bad.write_text('a,a\n1,2\n')
    with pytest.raises(ValueError,match='repetidos'):load(bad,{})
def test_no_execution_of_cells(tmp_path):
    p=tmp_path/'untrusted.csv';p.write_text('texto,valor\n"__import__(os).system(rm)",2\n')
    result=analyze(load(p,{}),Analysis(metric='valor',group_by=['texto']))
    assert result['total']==2 and '__import__' in result['table'][0]['texto']
def test_plan_cycles_and_extra_fields():
    task={'id':'a','agent':'atlas','description':'Planificar proyecto','tools':['reason'],'outputs':['plan'],'acceptance':['revisado'],'depends_on':['a']}
    with pytest.raises(ValueError):Plan(objective='Objetivo',tasks=[task])
    with pytest.raises(ValueError):Analysis(metric='cantidad',execute='rm -rf')

def test_full_api_workflow_and_downloads(data):
    with TestClient(app) as client:
        project=client.post('/api/projects',json={'name':'SINTÉTICO · aceptación'}).json()['id']
        upload=client.post('/api/files',data={'project':project},files={'file':('sintetico.csv',data.to_csv(index=False),'text/csv')})
        assert upload.status_code==200,upload.text
        fid=upload.json()['id'];assert client.get(f'/api/files/{fid}/preview').json()['rows']==3
        ids=[]
        for _ in range(2):
            created=client.post('/api/tools/plan',json={'project':project,'file':fid,'request':'SINTÉTICO: ingresos por producto = cantidad × precio','analysis':revenue().model_dump()})
            assert created.status_code==200,created.text
            rid=created.json()['id'];ids.append(rid)
            assert created.json()['status']=='Espera aprobación'
            assert client.post('/api/runs/'+rid+'/approve').status_code==200
            for attempt in range(150):
                state=client.get('/api/runs/'+rid).json()
                if state['status'] in ['Completado','Fallido']:break
                time.sleep(.05)
            assert state['status']=='Completado',state
            assert json.loads(state['result'])['total']==100
            assert len(state['tasks'])==4
            assert json.loads(state['reviews'][0]['payload'])['passed']
        artifacts=client.get('/api/artifacts',params={'project':project}).json()
        assert len(artifacts)==16 and ids[0]!=ids[1]
        for a in artifacts:
            response=client.get('/api/artifacts/'+a['id']);assert response.status_code==200 and response.content
        assert len({store.one('SELECT path FROM artifacts WHERE id=?',(a['id'],))['path'] for a in artifacts})==16
        # Reinicializar conserva datos; no vuelve a ejecutar tareas completadas.
        store.init();assert len(client.get('/api/runs',params={'project':project}).json())==2
        assert all(r['status']=='Completado' for r in client.get('/api/runs',params={'project':project}).json())

def test_disconnected_provider_and_cancel():
    with TestClient(app) as c:
        pid=c.get('/api/projects').json()[0]['id']
        response=c.post('/api/chat',json={'project':pid,'agent':'anto','content':'Hola'})
        assert 'Modelo no conectado' in response.text and '"error"' in response.text
        assert not any(m['role']=='assistant' for m in c.get('/api/messages',params={'project':pid,'agent':'anto'}).json())
        plan=Plan(objective='Organizar proyecto',tasks=[{'id':'a','agent':'atlas','description':'Proponer ideas','tools':['reason'],'outputs':['ideas'],'acceptance':['Revisables']}])
        from backend.app import save_run,PlanRequest
        run=save_run(PlanRequest(project=pid,request='Organizar proyecto'),plan)
        assert c.post('/api/runs/'+run['id']+'/cancel').status_code==200
        assert c.get('/api/runs/'+run['id']).json()['status']=='Cancelado'
        assert c.post('/api/runs/'+run['id']+'/approve').status_code==422

def test_fake_provider_streaming_is_explicit_mock(monkeypatch):
    async def mock_stream(*args,**kwargs):
        yield 'MOCK: ';yield 'respuesta de prueba'
    monkeypatch.setattr(models,'stream',mock_stream)
    with TestClient(app) as c:
        pid=c.get('/api/projects').json()[0]['id']
        r=c.post('/api/chat',json={'project':pid,'agent':'vera','content':'Prueba mock'})
        assert 'MOCK' in r.text and '"done": true' in r.text
        store.init()
        history=c.get('/api/messages',params={'project':pid,'agent':'vera'}).json()
        assert history[-1]['content']=='MOCK: respuesta de prueba'

def test_security():
    with TestClient(app) as c:
        assert c.post('/api/projects',json={'name':'Ataque'},headers={'Origin':'https://evil.example'}).status_code==403
        assert c.get('/api/projects',headers={'host':'evil.example'}).status_code==403
        assert c.get('/api/artifacts/../../etc/passwd').status_code==404

def test_active_cancellation_does_not_complete(monkeypatch):
    async def slow_model(*args,**kwargs):
        await asyncio.Event().wait()
    monkeypatch.setattr(models,'complete',slow_model)
    with TestClient(app) as c:
        pid=c.get('/api/projects').json()[0]['id']
        from backend.app import save_run,PlanRequest
        p=Plan(objective='Prueba de cancelación activa',tasks=[{'id':'x','agent':'atlas','description':'Inferencia bloqueada mock','tools':['reason'],'outputs':['ideas'],'acceptance':['Revisión']}])
        r=save_run(PlanRequest(project=pid,request='Prueba cancelación'),p)
        c.post('/api/runs/'+r['id']+'/approve')
        for _ in range(100):
            if c.get('/api/runs/'+r['id']).json()['status']=='En ejecución':break
            time.sleep(.01)
        c.post('/api/runs/'+r['id']+'/cancel')
        for _ in range(100):
            state=c.get('/api/runs/'+r['id']).json()
            if state['status']=='Cancelado':break
            time.sleep(.01)
        assert state['status']=='Cancelado'
        assert all(t['status']!='Completado' for t in state['tasks'])

def test_mock_planner_changes_arguments(monkeypatch,data):
    async def mock_plan(agent,messages,schema):
        prompt=json.loads(messages[0]['content']);is_units='unidades' in prompt['request']
        from backend.schemas import Task
        args=Analysis(metric='cantidad',group_by=['producto']) if is_units else revenue()
        tasks=[Task(id='a',agent='vera',description='Calcular',tools=['analyze'],outputs=['tabla'],acceptance=['Correcta']),Task(id='b',agent='bruno',description='Recalcular',tools=['review'],depends_on=['a'],outputs=['revision'],acceptance=['Sin discrepancias'])]
        return Plan(objective=prompt['request'],analysis=args,tasks=tasks).model_dump_json()
    monkeypatch.setattr(models,'complete',mock_plan)
    with TestClient(app) as c:
        pid=c.get('/api/projects').json()[0]['id']
        fid=c.post('/api/files',data={'project':pid},files={'file':('sintetico.csv',data.to_csv(index=False),'text/csv')}).json()['id']
        plans=[c.post('/api/plans',json={'project':pid,'file':fid,'request':request}).json() for request in ['ingresos por producto','unidades por producto']]
        assert all(p['status']=='Espera aprobación' for p in plans)
        assert json.loads(plans[0]['plan'])['analysis']!=json.loads(plans[1]['plan'])['analysis']

def test_report_html_sanitized(tmp_path,data):
    from backend.reports import generate
    r=analyze(data,revenue());check=review(data,revenue(),r)
    paths=generate({'id':store.uid(),'file':'sintético','request':'<script>alert(1)</script>'},r,check,'<img src=x onerror=alert(1)>')
    body=next(p for p in paths if p.name=='informe.html').read_text()
    assert '<script>' not in body and '<img src=x onerror' not in body
    import zipfile
    with zipfile.ZipFile(next(p for p in paths if p.name=='entrega.zip')) as z:
        manifest=json.loads(z.read('manifiesto.json'))
        assert all(item['name'] in z.namelist() for item in manifest['files'])
