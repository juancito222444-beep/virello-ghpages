"""Planning failures are repaired by the model, never by invented arguments."""
import asyncio
import copy
import json
import pytest
from backend import models
from backend.planning import propose_plan,validate_context
from backend.schemas import Plan


def task(tid,agent,tool,deps=()):
    return {'id':tid,'agent':agent,'description':'Producir evidencia verificable',
            'tools':[tool],'depends_on':list(deps),'outputs':['evidencia'],
            'acceptance':['Resultado revisable']}


def analysis_plan():
    return {'objective':'Sumar unidades por producto','analysis':{'metric':'cantidad','group_by':['producto']},
            'tasks':[task('a','vera','analyze'),task('b','bruno','review',['a']),
                     task('c','iris','chart',['b']),task('d','leo','report',['c'])]}


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
    expected=analysis_plan();bad=copy.deepcopy(expected)
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
        return json.dumps({'objective':'Organizar proyecto','tasks':[task('ideas','atlas','reason')]})
    monkeypatch.setattr(models,'complete',complete)
    result=asyncio.run(propose_plan('Organizar proyecto'))
    assert result.analysis is None and result.tasks[0].tools==['reason']


def test_missing_file_can_be_repaired_by_requesting_information(monkeypatch):
    clarification={'objective':'Calcular ingresos','clarification':'¿Puedes adjuntar el archivo de ventas?',
                   'tasks':[task('ask','atlas','reason')]}
    answers=[json.dumps(analysis_plan()),json.dumps(clarification)]
    async def complete(*args): return answers.pop(0)
    monkeypatch.setattr(models,'complete',complete)
    result=asyncio.run(propose_plan('Calcular ingresos'))
    assert result.clarification and result.analysis is None and not answers
