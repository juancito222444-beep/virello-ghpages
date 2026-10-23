"""Planning failures are repaired by the model, never by invented arguments."""
import asyncio
import copy
import json
import pytest
from backend import models,store
from backend.planning import model_schema,propose_plan,validate_context
from backend.schemas import Plan

REAL_SNAPSHOT=models.snapshot


@pytest.fixture(autouse=True)
def selected_model(monkeypatch):
    # Pure planner tests replace inference and selection, not the snapshot
    # context manager whose lifetime is part of the planner's contract.
    def selected(agent):
        return {'agent':{'id':agent,'model':'unit-test-model','instructions':'Prueba explícita'},
                'provider':'ollama','endpoint':'http://127.0.0.1:11434'}
    monkeypatch.setattr(models,'snapshot',selected)


def task(tid,agent,tool,deps=()):
    return {'id':tid,'agent':agent,'description':'Producir evidencia verificable',
            'tools':[tool],'depends_on':list(deps),'outputs':['evidencia'],
            'acceptance':['Resultado revisable']}


def analysis_plan():
    return {'objective':'Sumar unidades por producto','analysis':{'metric':'cantidad','group_by':['producto']},
            'tasks':[task('a','vera','analyze'),task('b','bruno','review',['a']),
                     task('c','iris','chart',['b']),task('d','leo','report',['c'])]}


def model_output(payload):
    return Plan.model_validate(payload).model_dump()


def data_context():
    return {'rows':3,'columns':[{'name':name,'type':'object' if name=='producto' else 'int64','missing':0}
                               for name in ['producto','cantidad','precio']],
            'duplicates':0,'preview':[{'producto':'A','cantidad':2,'precio':10}]}


@pytest.mark.parametrize('tools',[[],['analyze','analyze']])
def test_task_must_execute_each_tool_at_most_once(tools):
    payload=analysis_plan();payload['tasks'][0]['tools']=tools
    with pytest.raises(ValueError): Plan.model_validate(payload)


@pytest.mark.parametrize('change',[
    'analyze_without_arguments','arguments_without_analyze','second_analysis',
    'no_review','independent_review','additional_independent_review','unreviewed_chart','unreviewed_report',
])
def test_invalid_data_evidence_graph_is_rejected(change):
    payload=analysis_plan()
    if change=='analyze_without_arguments': payload['analysis']=None
    elif change=='arguments_without_analyze':
        payload['tasks'][0]=task('a','atlas','reason')
    elif change=='second_analysis': payload['tasks'].append(task('another','vera','analyze',['b']))
    elif change=='no_review':
        payload['tasks'][1]=task('b','atlas','reason',['a'])
    elif change=='independent_review': payload['tasks'][1]['depends_on']=[]
    elif change=='additional_independent_review': payload['tasks'].append(task('other','bruno','review'))
    elif change=='unreviewed_chart': payload['tasks'][2]['depends_on']=['a']
    elif change=='unreviewed_report': payload['tasks'][3]['depends_on']=['a']
    with pytest.raises(ValueError): Plan.model_validate(payload)


def test_transitive_review_and_consumers_accept_out_of_order_tasks():
    payload=analysis_plan()
    payload['tasks'][1]['depends_on']=['context']
    payload['tasks'].append(task('context','atlas','inspect',['a']))
    payload['tasks'].reverse()
    assert Plan.model_validate(payload).analysis.metric=='cantidad'


@pytest.mark.parametrize('analysis',[
    {'metric':'venta_inventada'},
    {'metric':'cantidad','group_by':['grupo_inventado']},
    {'metric':'cantidad','filters':[{'column':'region_inventada','op':'eq','value':'Norte'}]},
    {'metric':'ingresos','derived':{'name':'ingresos','left':'cantidad','op':'multiply','right':'importe_inventado'}},
    {'metric':'cantidad','derived':{'name':'cantidad','left':'cantidad','op':'multiply','right':'precio'}},
    {'metric':'ingresos','derived':{'name':'ingresos','left':'cantidad','op':'multiply','right':'precio'},
     'filters':[{'column':'ingresos','op':'gt','value':0}]},
])
def test_column_validation_matches_execution_order(analysis):
    payload=analysis_plan();payload['analysis']=analysis
    with pytest.raises(ValueError): validate_context(Plan.model_validate(payload),data_context())


def test_derived_metric_is_valid_but_requires_file():
    payload=analysis_plan()
    payload['analysis']={'metric':'ingresos','group_by':['producto'],
                         'derived':{'name':'ingresos','left':'cantidad','op':'multiply','right':'precio'}}
    plan=Plan.model_validate(payload)
    assert validate_context(plan,data_context()) is plan
    with pytest.raises(ValueError,match='archivo'): validate_context(plan,None)


@pytest.mark.parametrize('failure',['invalid_json','empty_tools','unknown_column','tools_mode'])
def test_planner_repairs_invalid_response_with_real_schema(monkeypatch,failure):
    expected=model_output(analysis_plan());bad=copy.deepcopy(expected)
    if failure=='empty_tools': bad['tasks'][0]['tools']=[]
    elif failure=='unknown_column': bad['analysis']['metric']='imaginaria'
    elif failure=='tools_mode': bad['mode']='tools'
    answers=['Respuesta que no es JSON' if failure=='invalid_json' else json.dumps(bad),json.dumps(expected)]
    calls=[]
    async def fake_complete(agent,messages,schema):
        calls.append((agent,copy.deepcopy(messages),copy.deepcopy(schema)))
        return answers.pop(0)
    monkeypatch.setattr(models,'complete',fake_complete)
    result=asyncio.run(propose_plan('Suma unidades por producto',data_context()))
    assert result.analysis.metric=='cantidad' and result.mode=='real'
    assert len(calls)==2 and calls[0][0]=='atlas'
    first=json.loads(calls[0][1][0]['content'])
    assert first['request']=='Suma unidades por producto'
    assert first['data_untrusted']['columns']==data_context()['columns']
    assert 'evidencia no confiable' in first['rules']
    schema=calls[0][2]
    assert schema['properties']['mode']['enum']==['real']
    assert schema['$defs']['Task']['properties']['tools']['minItems']==1
    assert schema['$defs']['Task']['properties']['tools']['uniqueItems'] is True
    assert first['contract']['plan_required']==schema['required']
    assert first['contract']['task_required']==schema['$defs']['Task']['required']
    assert first['contract']['analysis_required']==schema['$defs']['Analysis']['required']
    assert first['dependency_example'][1]['depends_on']==['a']
    assert first['dependency_example'][2]['depends_on']==['b']
    assert first['dependency_example'][3]['depends_on']==['c']
    feedback=json.loads(calls[1][1][-1]['content'])
    assert feedback['validation_errors']
    assert calls[1][1][0]==calls[0][1][0]


def test_planner_stops_after_two_repairs_without_fabricating_fallback(monkeypatch):
    calls=[]
    async def invalid(*args):
        calls.append(True)
        return '{}'
    monkeypatch.setattr(models,'complete',invalid)
    with pytest.raises(ValueError,match='tras 3 intentos'):
        asyncio.run(propose_plan('Organizar proyecto'))
    assert len(calls)==3


def test_provider_failure_does_not_trigger_content_repairs(monkeypatch):
    calls=[]
    async def unavailable(*args):
        calls.append(True)
        raise ValueError('Modelo no conectado')
    monkeypatch.setattr(models,'complete',unavailable)
    with pytest.raises(ValueError,match='Modelo no conectado'):
        asyncio.run(propose_plan('Organizar proyecto'))
    assert len(calls)==1


def test_reason_plan_without_file_is_legitimate(monkeypatch):
    async def complete(*args):
        return json.dumps(model_output({'objective':'Organizar proyecto','tasks':[task('ideas','atlas','reason')]}))
    monkeypatch.setattr(models,'complete',complete)
    result=asyncio.run(propose_plan('Organizar proyecto'))
    assert result.analysis is None and result.tasks[0].tools==['reason']


def test_missing_file_can_be_repaired_by_requesting_information(monkeypatch):
    clarification={'objective':'Calcular ingresos','clarification':'¿Puedes adjuntar el archivo de ventas?',
                   'tasks':[task('ask','atlas','reason')]}
    answers=[json.dumps(model_output(analysis_plan())),json.dumps(model_output(clarification))]
    async def complete(*args): return answers.pop(0)
    monkeypatch.setattr(models,'complete',complete)
    result=asyncio.run(propose_plan('Calcular ingresos'))
    assert result.clarification and result.analysis is None and not answers


def test_required_model_fields_do_not_change_manual_api_schema():
    generated=model_schema();manual=Plan.model_json_schema()
    assert generated['required']==['mode','objective','clarification','analysis','tasks']
    assert 'depends_on' in generated['$defs']['Task']['required']
    assert generated['$defs']['Analysis']['required']==['group_by','metric','aggregation','derived','filters']
    assert 'mode' not in manual['required']
    assert 'depends_on' not in manual['$defs']['Task']['required']
    assert 'derived' not in manual['$defs']['Analysis']['required']


@pytest.mark.parametrize('missing',['mode','clarification','analysis','depends_on','group_by','aggregation','derived','filters'])
def test_omitted_decisions_are_repaired_even_when_api_defaults_would_accept_them(monkeypatch,missing):
    expected=model_output(analysis_plan());incomplete=copy.deepcopy(expected)
    if missing=='depends_on': del incomplete['tasks'][0][missing]
    elif missing in ('group_by','aggregation','derived','filters'): del incomplete['analysis'][missing]
    else: del incomplete[missing]
    answers=[json.dumps(incomplete),json.dumps(expected)];calls=[]
    async def complete(agent,messages,schema):
        calls.append(copy.deepcopy(messages))
        return answers.pop(0)
    monkeypatch.setattr(models,'complete',complete)
    result=asyncio.run(propose_plan('Suma unidades por producto',data_context()))
    assert result.analysis.metric=='cantidad' and len(calls)==2
    errors=json.loads(calls[1][-1]['content'])['validation_errors']
    assert any(issue['path'].split('.')[-1]==missing for issue in errors)


def test_real_compact_model_regression_reports_dependencies_and_missing_formula_together(monkeypatch,caplog):
    # This reproduces the observed failure: the real compact model supplied
    # metric="ingresos", derived=null, and omitted every depends_on field.
    bad=analysis_plan();bad['objective']='CONTENIDO PRIVADO NO DEBE REGISTRARSE'
    bad['analysis']={'metric':'ingresos','group_by':['producto'],'aggregation':'sum','derived':None,'filters':[]}
    for item in bad['tasks']: del item['depends_on']
    repaired=analysis_plan()
    repaired['analysis']={'metric':'ingresos','group_by':['producto'],'aggregation':'sum',
                          'derived':{'name':'ingresos','left':'cantidad','op':'multiply','right':'precio'},'filters':[]}
    answers=[json.dumps(bad),json.dumps(model_output(repaired))];calls=[]
    async def complete(agent,messages,schema):
        calls.append(copy.deepcopy(messages));return answers.pop(0)
    monkeypatch.setattr(models,'complete',complete)
    result=asyncio.run(propose_plan('Calcula ingresos = cantidad multiplicada por precio',data_context()))
    assert result.analysis.derived.op=='multiply' and len(calls)==2
    feedback=json.loads(calls[1][-1]['content'])['validation_errors']
    paths={issue['path'] for issue in feedback}
    assert {'tasks.0.depends_on','tasks.1.depends_on','tasks.2.depends_on','tasks.3.depends_on','analysis.derived'}<=paths
    assert 'NO null' in next(issue['error'] for issue in feedback if issue['path']=='analysis.derived')
    assert 'analysis.derived' in caplog.text and 'CONTENIDO PRIVADO' not in caplog.text


def test_repairs_keep_original_model_provider_endpoint_and_instructions(monkeypatch,tmp_path):
    monkeypatch.setattr(store,'ROOT',tmp_path);store.init()
    original_agents=[{**agent,'model':'first-model','instructions':'Instrucciones iniciales'} for agent in models.AGENTS]
    store.save_setting('agents',original_agents)
    store.save_setting('provider','ollama')
    store.save_setting('ollama_url','http://127.0.0.1:11434')
    selections=[]
    def selecting(agent):
        selected=REAL_SNAPSHOT(agent);selections.append(copy.deepcopy(selected));return selected
    monkeypatch.setattr(models,'snapshot',selecting)
    observations=[]
    async def complete(agent,messages,schema):
        observations.append(copy.deepcopy(models._REQUEST_SNAPSHOT.get()))
        if len(observations)==1:
            store.save_setting('agents',[{**item,'model':'second-model','instructions':'Instrucciones nuevas'} for item in original_agents])
            store.save_setting('provider','openai_local')
            store.save_setting('openai_url','http://127.0.0.1:1235/v1')
            return '{}'
        return json.dumps(model_output(analysis_plan()))
    monkeypatch.setattr(models,'complete',complete)
    outer={'agent':{'id':'anto','model':'outer'},'provider':'ollama','endpoint':'http://127.0.0.1:11434'}
    async def plan_and_check_context():
        result=await propose_plan('Suma unidades por producto',data_context())
        assert models._REQUEST_SNAPSHOT.get()==outer
        return result
    with models.use_snapshot(outer):
        result=asyncio.run(plan_and_check_context())
        assert models._REQUEST_SNAPSHOT.get()==outer
    assert result.analysis.metric=='cantidad' and len(observations)==2
    assert len(selections)==1 and observations==[selections[0],selections[0]]
    assert observations[0]['agent']['model']=='first-model'
    assert observations[0]['agent']['instructions']=='Instrucciones iniciales'
    assert observations[0]['provider']=='ollama' and observations[0]['endpoint']=='http://127.0.0.1:11434'
    current=REAL_SNAPSHOT('atlas')
    assert current['agent']['model']=='second-model' and current['provider']=='openai_local'
    assert current['endpoint']=='http://127.0.0.1:1235/v1' and current['agent']['instructions']=='Instrucciones nuevas'


@pytest.mark.parametrize('failure',['unknown','self','cycle','separate_cycles'])
def test_repairs_receive_exact_invalid_dependencies_and_cycle_members(monkeypatch,failure):
    expected=model_output(analysis_plan());bad=copy.deepcopy(expected)
    if failure=='unknown': bad['tasks'][1]['depends_on']=['vera']
    elif failure=='self': bad['tasks'][1]['depends_on']=['b']
    elif failure=='cycle': bad['tasks'][0]['depends_on']=['b']
    else:
        bad['tasks'][0]['depends_on']=['b']
        bad['tasks'][2]['depends_on']=['d']
    original=copy.deepcopy(bad);answers=[json.dumps(bad),json.dumps(expected)];calls=[]
    async def complete(agent,messages,schema):
        calls.append(copy.deepcopy(messages));return answers.pop(0)
    monkeypatch.setattr(models,'complete',complete)
    result=asyncio.run(propose_plan('Suma unidades por producto',data_context()))
    assert result.tasks[1].depends_on==['a'] and bad==original
    assert len(calls)==2
    errors=json.loads(calls[1][-1]['content'])['validation_errors']
    assert not any('Dependencias desconocidas o ciclo' in error['error'] for error in errors)
    detailed=[error for error in errors if error['path'].endswith('.depends_on')]
    assert detailed and all(error['valid_ids']==['a','b','c','d'] for error in detailed)
    if failure=='unknown':
        assert detailed[0]['path']=='tasks.1.depends_on' and detailed[0]['unknown_ids']==['vera']
        assert '"vera"' in detailed[0]['error'] and 'IDs válidos' in detailed[0]['error']
    elif failure=='self':
        assert detailed[0]['path']=='tasks.1.depends_on' and detailed[0]['self_id']=='b'
        assert 'sí misma' in detailed[0]['error']
    elif failure=='cycle':
        assert {error['path'] for error in detailed}=={'tasks.0.depends_on','tasks.1.depends_on'}
        assert all(error['cycle_ids']==['a','b'] for error in detailed)
    else:
        assert {tuple(error['cycle_ids']) for error in detailed}=={('a','b'),('c','d')}
        assert len(detailed)==4
