"""Startup recovery exercises SQLite state and persisted SSE events, not inference."""
import json
import pytest
from backend import store


@pytest.fixture(autouse=True)
def isolated_database(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    store.init()


def pid(): return store.rows('SELECT id FROM projects')[0]['id']


def make_run(status,project=None):
    rid=store.uid()
    with store.db() as c:
        c.execute('INSERT INTO runs VALUES(?,?,?,?,?,?,?,?)',(rid,project or pid(),None,'Solicitud preservada',status,'{}','{"evidence":"preserved"}',store.now()))
    return rid


def make_task(run,status,agent='vera',position=0):
    tid=store.uid()
    payload={'id':'logical-'+str(position),'description':'Tarea '+str(position),'tools':['analyze']}
    with store.db() as c:
        c.execute('INSERT INTO tasks VALUES(?,?,?,?,?,?,?)',(tid,run,position,agent,status,json.dumps(payload),'resultado guardado' if status=='Completado' else None))
    return tid


def event_payloads():
    return [{**item,'data':json.loads(item['payload'])} for item in store.rows('SELECT * FROM events ORDER BY seq')]


@pytest.mark.parametrize('initial',['En ejecución','Pendiente','En corrección'])
def test_restart_closes_active_and_dependent_tasks_and_preserves_completed_evidence(initial):
    rid=make_run(initial)
    complete=make_task(rid,'Completado','vera',0)
    active=make_task(rid,'En ejecución','bruno',1)
    pending=make_task(rid,'Pendiente','iris',2)
    with store.db() as c:
        c.execute('INSERT INTO dependencies VALUES(?,?)',(pending,active))
        c.execute('INSERT INTO reviews VALUES(?,?,?,?)',(store.uid(),rid,'{"passed":true}',store.now()))
        c.execute('INSERT INTO artifacts VALUES(?,?,?,?,?,?,?)',(store.uid(),rid,'existente.csv','/retained/file.csv','text/csv',1,store.now()))
    store.event(pid(),'task',{'status':'En ejecución','task_id':active},rid,'bruno')
    store.init()
    assert store.one('SELECT status FROM runs WHERE id=?',(rid,))['status']=='Interrumpido'
    statuses={item['id']:item['status'] for item in store.rows('SELECT * FROM tasks WHERE run=?',(rid,))}
    assert statuses=={complete:'Completado',active:'Interrumpido',pending:'Interrumpido'}
    assert store.one('SELECT result FROM tasks WHERE id=?',(complete,))['result']=='resultado guardado'
    assert store.one('SELECT result FROM runs WHERE id=?',(rid,))['result']=='{"evidence":"preserved"}'
    assert len(store.rows('SELECT * FROM artifacts WHERE run=?',(rid,)))==1
    assert len(store.rows('SELECT * FROM dependencies'))==1
    terminal=event_payloads()[1:]
    task_events=[event for event in terminal if event['kind']=='task']
    assert {event['data']['task_id'] for event in task_events}=={active,pending}
    assert all(event['data']['status']=='Interrumpido' and event['data']['agent_status']=='Interrumpido' for event in task_events)
    assert all(event['data']['run_id']==rid and event['data']['recovery'] for event in terminal)
    assert terminal[-1]['kind']=='run' and terminal[-1]['data']['status']=='Interrumpido'
    assert terminal[-1]['data']['result_state']=='provisional' and terminal[-1]['data']['mathematical_review_passed']
    visible={event['agent']:event['data'].get('agent_status') or event['data'].get('status') for event in terminal if event['agent']}
    assert visible=={'vera':'Disponible','bruno':'Interrumpido','iris':'Interrumpido'}


def test_restart_keeps_unapproved_plans_and_finished_runs_untouched():
    runs=[]
    for status in ['Espera aprobación','Requiere información','Completado']:
        rid=make_run(status);tid=make_task(rid,'Completado' if status=='Completado' else 'Pendiente')
        runs.append((rid,tid,status))
    store.init()
    assert store.rows('SELECT * FROM events')==[]
    for rid,tid,status in runs:
        assert store.one('SELECT status FROM runs WHERE id=?',(rid,))['status']==status
        assert store.one('SELECT status FROM tasks WHERE id=?',(tid,))['status']==('Completado' if status=='Completado' else 'Pendiente')


def test_restart_recovery_is_idempotent_and_does_not_repeat_events():
    rid=make_run('En ejecución');make_task(rid,'En ejecución');make_task(rid,'Pendiente','leo',1)
    store.init()
    first=store.rows('SELECT * FROM events ORDER BY seq')
    store.init();store.init()
    assert first==store.rows('SELECT * FROM events ORDER BY seq')
    assert len([e for e in first if e['kind']=='run'])==1


@pytest.mark.parametrize('status,active,pending',[
    ('Interrumpido','Interrumpido','Interrumpido'),
    ('Cancelado','Cancelado','Cancelado'),
    ('Fallido','Fallido','Interrumpido'),
])
def test_restart_repairs_crash_between_terminal_run_update_and_task_cleanup(status,active,pending):
    rid=make_run(status)
    completed=make_task(rid,'Completado','vera',0)
    running=make_task(rid,'En ejecución','bruno',1)
    dependent=make_task(rid,'Pendiente','iris',2)
    store.init()
    statuses={row['id']:row['status'] for row in store.rows('SELECT * FROM tasks WHERE run=?',(rid,))}
    assert statuses=={completed:'Completado',running:active,dependent:pending}
    assert store.one('SELECT status FROM runs WHERE id=?',(rid,))['status']==status
    before=store.rows('SELECT * FROM events')
    store.init()
    assert before==store.rows('SELECT * FROM events')


def test_restart_closes_abandoned_chat_per_project_without_inventing_response():
    original=pid()
    with store.db() as c:
        other=store.uid();c.execute('INSERT INTO projects VALUES(?,?,?)',(other,'Otro proyecto',store.now()))
    store.event(original,'chat',{'status':'En ejecución','provider':'ollama','model':'local-test'},agent='anto')
    store.event(other,'chat',{'status':'Disponible'},agent='anto')
    store.init()
    events=event_payloads()
    assert len(events)==3 and events[-1]['project']==original
    assert events[-1]['agent']=='anto' and events[-1]['data']['status']=='Interrumpido'
    assert events[-1]['data']['provider']=='ollama' and events[-1]['data']['model']=='local-test'
    assert store.rows('SELECT * FROM messages')==[]
    store.init()
    assert len(event_payloads())==3


def test_completed_task_with_missing_terminal_event_becomes_available_not_interrupted():
    rid=make_run('Completado');tid=make_task(rid,'Completado')
    store.event(pid(),'task',{'status':'En ejecución','task_id':tid},rid,'vera')
    store.init()
    assert store.one('SELECT status FROM tasks WHERE id=?',(tid,))['status']=='Completado'
    assert event_payloads()[-1]['data']['status']=='Disponible'
    before=event_payloads();store.init()
    assert event_payloads()==before
