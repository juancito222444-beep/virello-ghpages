#!/usr/bin/env python3
"""Check the running app against its configured model; never download or mock one.

Use .venv/bin/python scripts/verify-real-model.py for inference preflight only.
Add --run to create a labeled synthetic project and execute its revenue plan.
CPU inference can take several minutes per plan, including model repairs.
--request-timeout bounds each model request; --timeout bounds the approved run.
"""
import argparse
from contextlib import contextmanager
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import sys
import threading
import time
from urllib.parse import urlparse

import httpx

ROOT=Path(__file__).resolve().parents[1]
AGENTS=('anto','atlas','vera','bruno','iris','leo')
REQUESTS={
    'ingresos':('Calcula ingresos por producto: crea la columna ingresos = cantidad multiplicada por precio, '
                'agrupa por producto y suma ingresos, sin filtros. Usa un gráfico de barras. '
                'Incluye VERA analyze, BRUNO review, IRIS chart y LEO report con sus dependencias de revisión.'),
    'unidades':('Calcula unidades vendidas por producto: agrupa por producto y suma la columna cantidad, '
                'sin columna derivada y sin filtros. Usa un gráfico de barras y revisión de BRUNO.'),
    'norte':('Calcula ingresos por producto solo de la región Norte: crea la columna ingresos = cantidad '
             'multiplicada por precio, filtra region igual a Norte, agrupa por producto y suma ingresos. '
             'Usa un gráfico de barras y revisión de BRUNO.'),
}


class AcceptanceError(ValueError): pass


def now(): return datetime.now(timezone.utc).isoformat(timespec='seconds')


def expected_analysis(kind):
    return {'metric':'cantidad' if kind=='unidades' else 'ingresos','group_by':['producto'],
            'aggregation':'sum','derived':None if kind=='unidades' else
            {'name':'ingresos','left':'cantidad','op':'multiply','right':'precio'},
            'filters':[{'column':'region','op':'eq','value':'Norte'}] if kind=='norte' else [],
            'chart':'bar'}


def verify_analysis(kind,plan):
    """Compare model-selected operations, rather than titles or prose."""
    if plan.get('mode','real')!='real': raise AcceptanceError('El modelo no produjo un plan de modo real')
    if plan.get('clarification'): raise AcceptanceError('El modelo solicitó aclaración para una petición sintética explícita')
    analysis=plan.get('analysis')
    if not isinstance(analysis,dict): raise AcceptanceError('Falta analysis en el plan del modelo')
    expected=expected_analysis(kind)
    observed={key:analysis.get(key) for key in expected}
    if observed!=expected:
        differences=[key for key in expected if observed[key]!=expected[key]]
        raise AcceptanceError('Argumentos incorrectos para '+kind+': '+', '.join(differences))
    required={('vera','analyze'),('bruno','review')}
    if kind=='ingresos': required|={('iris','chart'),('leo','report')}
    assigned={(task.get('agent'),tool) for task in plan.get('tasks',[]) for tool in task.get('tools',[])}
    if not required<=assigned: raise AcceptanceError('Faltan tareas de agentes para '+kind+': '+str(sorted(required-assigned)))
    return observed


def verify_result(result):
    if not isinstance(result,dict): raise AcceptanceError('La ejecución no devolvió resultados calculados')
    table=result.get('table',[])
    if len(table)!=2 or {row.get('producto'):row.get('valor') for row in table}!={'A':50,'B':50}:
        raise AcceptanceError('Los ingresos por producto deben ser A=50 y B=50, sin grupos omitidos o repetidos')
    if result.get('total')!=100 or result.get('rows_before')!=3 or result.get('rows_after')!=3:
        raise AcceptanceError('El total debe ser 100 y deben conservarse las tres filas sintéticas')
    return True


class Acceptance:
    def __init__(self,args):
        self.args=args
        self.stage='preflight'
        self.run_id=None
        self.running=False
        self.evidence={'schema_version':1,'started_at':now(),'finished_at':None,
                       'base_url':args.base_url,'status':'running','checks':[],
                       'preflight':{'passed':False},'acceptance':{'requested':args.run,'passed':None},
                       'synthetic_project':None,'plans':{},'run':None,'artifacts':[],
                       'narrative_verified':False,
                       'scope':'Inferencia por la API configurada, selección de argumentos y verificación matemática; no certifica la narrativa ni el entrenamiento del modelo.',
                       'errors':[]}
        self.client=httpx.Client(base_url=args.base_url,trust_env=False,follow_redirects=False,
                                 timeout=httpx.Timeout(args.request_timeout,connect=5))

    def save(self):
        self.args.output.parent.mkdir(parents=True,exist_ok=True)
        temporary=self.args.output.with_name(self.args.output.name+'.tmp')
        temporary.write_text(json.dumps(self.evidence,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
        temporary.replace(self.args.output)

    def progress(self,message):
        print(f'[{now()}] {message}',file=sys.stderr,flush=True)
        self.save()

    def check(self,name,passed,**details):
        self.evidence['checks'].append({'name':name,'passed':bool(passed),'at':now(),**details})
        self.save()
        if not passed: raise AcceptanceError(name)

    def request(self,method,path,**kwargs):
        with self.waiting(path if method=='POST' and path in ('/api/plans','/api/models/test') else None):
            response=self.client.request(method,path,**kwargs)
        if response.status_code<200 or response.status_code>=300:
            raise AcceptanceError(f'{method} {path}: HTTP {response.status_code}: {response.text[:1200]}')
        return response

    @contextmanager
    def waiting(self,path):
        if path is None:
            yield
            return
        stop=threading.Event();started=time.monotonic()
        def report():
            while not stop.wait(30):
                elapsed=round(time.monotonic()-started)
                print(f'[{now()}] Esperando {path}: {elapsed}s; el modelo en CPU puede necesitar varios minutos.',file=sys.stderr,flush=True)
        reporter=threading.Thread(target=report,daemon=True);reporter.start()
        try: yield
        finally:
            stop.set();reporter.join(timeout=1)

    def preflight(self):
        self.progress('Comprobando catálogo y configuración; no se descargan modelos.')
        discovery=self.request('GET','/api/models',timeout=10).json()
        self.evidence['preflight']['discovery']=discovery
        self.check('API de modelos conectada y catálogo no vacío',
                   discovery.get('connected') is True and bool(discovery.get('models')),
                   error=discovery.get('error'))
        agents=self.request('GET','/api/agents',timeout=10).json()
        configured={agent['id']:agent.get('model','') for agent in agents if isinstance(agent,dict) and agent.get('id') in AGENTS}
        self.evidence['preflight']['configured_models']=configured
        self.check('Seis agentes con modelos configurados y anunciados',
                   set(configured)==set(AGENTS) and all(model and model in discovery['models'] for model in configured.values()))
        self.progress('Probando una inferencia real de ATLAS por la API de la aplicación.')
        probe=self.request('POST','/api/models/test',json={'agent':'atlas'}).json()
        self.evidence['preflight']['inference']=probe
        self.check('ATLAS respondió mediante el modelo configurado',
                   probe.get('verified') is True and bool(str(probe.get('response','')).strip())
                   and probe.get('model')==configured['atlas'] and probe.get('provider')==discovery.get('provider'))
        self.evidence['preflight']['passed']=True
        self.save()

    def plans(self):
        self.stage='planning'
        dataset=ROOT/'examples/ventas_sinteticas.csv'
        if not dataset.is_file(): raise AcceptanceError('Falta el archivo sintético examples/ventas_sinteticas.csv')
        name='VALIDACION MODELO · SINTETICO · '+now()
        project=self.request('POST','/api/projects',json={'name':name}).json()
        pid=project['id']
        self.evidence['synthetic_project']={'id':pid,'name':name,'created_by_this_check':True}
        self.progress('Proyecto sintético creado; los proyectos existentes se conservan.')
        with dataset.open('rb') as source:
            uploaded=self.request('POST','/api/files',data={'project':pid},
                                  files={'file':('ventas_sinteticas.csv',source,'text/csv')}).json()
        self.evidence['synthetic_project']['file_id']=uploaded['id']
        valid=True
        for kind,request in REQUESTS.items():
            self.progress('Solicitando al modelo el plan de '+kind+'.')
            run=self.request('POST','/api/plans',json={'project':pid,'file':uploaded['id'],'request':request}).json()
            plan=json.loads(run['plan'])
            record={'run_id':run['id'],'request':request,'plan':plan,'arguments_verified':False}
            self.evidence['plans'][kind]=record
            try:
                record['verified_arguments']=verify_analysis(kind,plan)
                if run.get('status')!='Espera aprobación': raise AcceptanceError('El plan no está disponible para aprobación')
                record['arguments_verified']=True
                self.check('Argumentos del plan '+kind,True,run_id=run['id'])
            except AcceptanceError as exc:
                valid=False
                record['error']=str(exc)
                self.evidence['checks'].append({'name':'Argumentos del plan '+kind,'passed':False,'at':now(),'error':str(exc)})
            self.save()
        if not valid: raise AcceptanceError('Uno o más planes no representan la petición; no se aprobó ninguna ejecución')
        variations=[record['verified_arguments'] for record in self.evidence['plans'].values()]
        distinct=len({json.dumps(spec,sort_keys=True) for spec in variations})==3
        self.evidence['plan_variation']={'passed':distinct,'compared':'metric, group_by, aggregation, derived, filters, chart'}
        self.check('Los tres planes seleccionan argumentos distintos y correctos',distinct)
        return self.evidence['plans']['ingresos']['run_id']

    def cancel(self):
        if not self.run_id or not self.running: return
        self.progress('Solicitando cancelación de la ejecución sintética pendiente.')
        try:
            response=self.request('POST',f'/api/runs/{self.run_id}/cancel',timeout=10).json()
            self.evidence['cancellation']={'requested_at':now(),'response':response}
        except Exception as exc:
            self.evidence['cancellation']={'requested_at':now(),'error':str(exc)}
        self.save()

    def execute(self,rid):
        self.stage='execution'
        self.run_id=rid
        self.progress('Aprobando únicamente el plan sintético de ingresos.')
        self.request('POST',f'/api/runs/{rid}/approve',timeout=10)
        self.running=True
        deadline=time.monotonic()+self.args.timeout
        previous=None;last_progress=0
        while True:
            remaining=deadline-time.monotonic()
            if remaining<=0:
                self.cancel()
                raise AcceptanceError(f'La ejecución excedió {self.args.timeout:g} segundos; se solicitó cancelación')
            run=self.request('GET',f'/api/runs/{rid}',timeout=min(10,remaining)).json()
            status=run.get('status')
            if status!=previous or time.monotonic()-last_progress>=30:
                self.progress('Estado de la ejecución sintética: '+str(status))
                previous=status
                last_progress=time.monotonic()
            self.evidence['run']={'id':rid,'status':status,'last_checked_at':now()}
            if status in ('Completado','Fallido','Cancelado','Interrumpido'):
                self.running=False
                break
            self.save()
            time.sleep(min(self.args.poll_interval,max(0,deadline-time.monotonic())))
        self.check('Ejecución real completada',status=='Completado',status=status)
        result=json.loads(run['result']) if run.get('result') else None
        self.evidence['run']['result']=result
        verify_result(result)
        self.check('Ingresos calculados: total=100, A=50, B=50 y tres filas',True)
        reviews=[json.loads(review['payload']) for review in run.get('reviews',[])]
        self.evidence['run']['mathematical_reviews']=reviews
        self.check('Revisión matemática superada',bool(reviews) and all(review.get('passed') is True and not review.get('problems') for review in reviews))
        model_outputs=[]
        for task in run.get('tasks',[]):
            output=json.loads(task['result']) if task.get('result') else {}
            if output.get('model_review') or output.get('commentary'):
                model_outputs.append({'agent':task['agent'],'model_review':output.get('model_review'),'commentary':output.get('commentary')})
        self.evidence['run']['model_outputs_unverified']=model_outputs
        self.check('BRUNO, IRIS y LEO devolvieron respuestas de modelo',
                   {'bruno','iris','leo'}<={output['agent'] for output in model_outputs})
        self.stage='artifacts'
        self.progress('Descargando y comprobando los artefactos de la ejecución sintética.')
        artifacts=self.request('GET','/api/artifacts',params={'project':self.evidence['synthetic_project']['id']},timeout=10).json()
        artifacts=[artifact for artifact in artifacts if artifact.get('run')==rid]
        required={'resultados.csv','resultados.xlsx','grafico.png','informe.md','informe.html','evidencia.json','manifiesto.json','entrega.zip'}
        self.check('Artefactos esperados publicados',required<={artifact['name'] for artifact in artifacts})
        for artifact in artifacts:
            downloaded=self.request('GET','/api/artifacts/'+artifact['id'],timeout=30).content
            self.evidence['artifacts'].append({'id':artifact['id'],'name':artifact['name'],'bytes':len(downloaded),
                                                'sha256':hashlib.sha256(downloaded).hexdigest(),'downloaded_at':now()})
            self.check('Descarga no vacía: '+artifact['name'],bool(downloaded))
        self.evidence['acceptance']['passed']=True

    def run(self):
        try:
            self.save()
            self.preflight()
            if self.args.run: self.execute(self.plans())
            self.evidence['status']='passed' if self.args.run else 'preflight_passed'
            return 0
        except KeyboardInterrupt:
            self.cancel()
            self.evidence['status']='interrupted'
            self.evidence['errors'].append({'stage':self.stage,'at':now(),'error':'Interrumpido por el usuario'})
            if self.args.run: self.evidence['acceptance']['passed']=False
            return 130
        except Exception as exc:
            self.cancel()
            self.evidence['status']='failed'
            self.evidence['errors'].append({'stage':self.stage,'at':now(),'error':str(exc)})
            if self.args.run: self.evidence['acceptance']['passed']=False
            print('VALIDACIÓN FALLIDA: '+str(exc),file=sys.stderr,flush=True)
            return 1
        finally:
            self.client.close()
            self.evidence['finished_at']=now()
            self.save()
            print(json.dumps({'status':self.evidence['status'],'preflight_passed':self.evidence['preflight']['passed'],
                              'acceptance_passed':self.evidence['acceptance']['passed'],
                              'narrative_verified':False,'evidence':str(self.args.output)},ensure_ascii=False),flush=True)


def seconds(value):
    parsed=float(value)
    if not 0<parsed<=3600: raise argparse.ArgumentTypeError('Usa un número de segundos entre 0 y 3600')
    return parsed


def main(argv=None):
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base-url',default='http://127.0.0.1:8765',help='API de STUDIO ya iniciada en esta máquina')
    parser.add_argument('--run',action='store_true',help='Crear un proyecto sintético, generar tres planes y ejecutar solo ingresos')
    parser.add_argument('--timeout',type=seconds,default=600,help='Máximo de segundos para la ejecución aprobada (600)')
    parser.add_argument('--request-timeout',type=seconds,default=900,help='Máximo de espera por petición al modelo, incluidas sus reparaciones (900)')
    parser.add_argument('--poll-interval',type=seconds,default=2,help='Intervalo de consulta, como máximo 10 segundos (2)')
    parser.add_argument('--output',type=Path,default=ROOT/'local-data/model-acceptance.json',help='Archivo de evidencia JSON')
    args=parser.parse_args(argv)
    parsed=urlparse(args.base_url)
    if (parsed.scheme!='http' or parsed.hostname not in ('127.0.0.1','localhost','::1')
            or parsed.username or parsed.password or parsed.query or parsed.fragment or parsed.path not in ('','/')):
        parser.error('--base-url debe ser la dirección HTTP local de la aplicación, sin credenciales ni rutas')
    if args.poll_interval>10: parser.error('--poll-interval debe ser como máximo 10 segundos')
    args.base_url=args.base_url.rstrip('/')
    args.output=args.output.resolve()
    return Acceptance(args).run()


if __name__=='__main__': raise SystemExit(main())
