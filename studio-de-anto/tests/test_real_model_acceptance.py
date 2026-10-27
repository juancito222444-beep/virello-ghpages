"""Unit checks for acceptance criteria; these do not claim real inference."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import threading
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer

import pytest

ROOT=Path(__file__).resolve().parents[1]


@pytest.fixture
def verifier():
    spec=importlib.util.spec_from_file_location('real_model_verifier',ROOT/'scripts/verify-real-model.py')
    module=importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def plan(verifier,kind):
    return {'mode':'real','analysis':verifier.expected_analysis(kind),
            'tasks':[{'agent':agent,'tools':[tool]} for agent,tool in
                     [('vera','analyze'),('bruno','review'),('iris','chart'),('leo','report')]]}


@pytest.mark.parametrize('kind',['ingresos','unidades','norte'])
def test_explicit_operation_arguments_are_verified(verifier,kind):
    assert verifier.verify_analysis(kind,plan(verifier,kind))==verifier.expected_analysis(kind)


@pytest.mark.parametrize('kind,field,value',[
    ('ingresos','derived',None),('ingresos','group_by',['region']),
    ('unidades','metric','ingresos'),('norte','filters',[]),
    ('norte','filters',[{'column':'region','op':'eq','value':'Sur'}]),
])
def test_wrong_operations_fail_even_if_a_plan_exists(verifier,kind,field,value):
    payload=plan(verifier,kind);payload['analysis'][field]=value
    with pytest.raises(verifier.AcceptanceError): verifier.verify_analysis(kind,payload)


def test_tools_fallback_and_clarification_cannot_pass(verifier):
    payload=plan(verifier,'ingresos');payload['mode']='tools'
    with pytest.raises(verifier.AcceptanceError): verifier.verify_analysis('ingresos',payload)
    payload['mode']='real';payload['clarification']='Faltan datos'
    with pytest.raises(verifier.AcceptanceError): verifier.verify_analysis('ingresos',payload)


def test_calculated_result_must_have_correct_groups_total_and_rows(verifier):
    result={'table':[{'producto':'A','valor':50},{'producto':'B','valor':50}],
            'total':100,'rows_before':3,'rows_after':3}
    assert verifier.verify_result(result)
    result['table'][0]['valor']=500
    with pytest.raises(verifier.AcceptanceError): verifier.verify_result(result)
    result['table'][0]['valor']=50;result['rows_after']=2
    with pytest.raises(verifier.AcceptanceError): verifier.verify_result(result)


def test_cli_preflight_without_model_fails_without_mutations(tmp_path):
    requests=[]
    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            requests.append(('GET',self.path))
            body=json.dumps({'connected':False,'models':[],'error':'Modelo no conectado'}).encode()
            self.send_response(200);self.send_header('Content-Length',str(len(body)))
            self.end_headers();self.wfile.write(body)
        def do_POST(self):
            requests.append(('POST',self.path));self.send_error(500)
        def log_message(self,*args): pass
    server=ThreadingHTTPServer(('127.0.0.1',0),Handler)
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
    evidence=tmp_path/'acceptance.json'
    try:
        process=subprocess.run([sys.executable,str(ROOT/'scripts/verify-real-model.py'),
                                '--base-url',f'http://127.0.0.1:{server.server_port}',
                                '--output',str(evidence)],capture_output=True,text=True,timeout=10)
    finally:
        server.shutdown();thread.join(timeout=3);server.server_close()
    assert process.returncode==1
    saved=json.loads(evidence.read_text())
    assert saved['status']=='failed' and saved['preflight']['passed'] is False
    assert saved['acceptance']=={'requested':False,'passed':None}
    assert saved['synthetic_project'] is None and saved['finished_at']
    assert 'Modelo no conectado' in json.dumps(saved)
    assert requests==[('GET','/api/models')]
