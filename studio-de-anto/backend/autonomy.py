"""Finite durable queues. Only explicit objectives; no automatic planning retries."""
import asyncio
import hashlib
import json
from typing import Literal
from pydantic import Field, field_validator
from . import director, engine, runtime, store
from .schemas import Strict

TASKS = {}

class Limits(Strict):
    max_jobs: int = Field(default=3, ge=1, le=20, strict=True)
    max_attempts: int = Field(default=2, ge=1, le=3, strict=True)
    interval_seconds: int = Field(default=60, ge=15, le=3600, strict=True)
    timeout_seconds: int = Field(default=900, ge=60, le=1800, strict=True)
    max_files: int = Field(default=30, ge=1, le=100, strict=True)

class Objective(Strict):
    request: str = Field(min_length=3, max_length=2000)

    @field_validator('request')
    @classmethod
    def text(cls, value):
        value=value.strip()
        if len(value)<3 or any(ord(c)<32 and c not in '\n\r\t' for c in value):
            raise ValueError('Describe un objetivo válido de al menos tres caracteres')
        return value

class Control(Strict):
    action: Literal['start', 'pause', 'stop']
    confirmed: bool = Field(default=False, strict=True)


def init():
    with store.db() as c:
        c.executescript('''
        CREATE TABLE IF NOT EXISTS autonomy_queues(
            scope TEXT PRIMARY KEY,status TEXT NOT NULL DEFAULT 'stopped',
            limits TEXT NOT NULL,used INTEGER NOT NULL DEFAULT 0,error TEXT NOT NULL DEFAULT '',updated TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS autonomy_jobs(
            id TEXT PRIMARY KEY,scope TEXT NOT NULL REFERENCES autonomy_queues(scope),
            fingerprint TEXT NOT NULL,request TEXT NOT NULL,status TEXT NOT NULL,
            attempts INTEGER NOT NULL DEFAULT 0,run_id TEXT,error TEXT NOT NULL DEFAULT '',
            created TEXT NOT NULL,updated TEXT NOT NULL,UNIQUE(scope,fingerprint));
        CREATE INDEX IF NOT EXISTS autonomy_queue_jobs ON autonomy_jobs(scope,status,created);
        CREATE TABLE IF NOT EXISTS autonomy_activity(
            seq INTEGER PRIMARY KEY AUTOINCREMENT,scope TEXT NOT NULL,job TEXT,
            phase TEXT NOT NULL,message TEXT NOT NULL,created TEXT NOT NULL);
        ''')


def ensure(scope):
    with store.db() as c:
        c.execute('INSERT OR IGNORE INTO autonomy_queues(scope,limits,updated) VALUES(?,?,?)',
                  (scope,Limits().model_dump_json(),store.now()))


def activity(scope,job,phase,message):
    with store.db() as c:
        c.execute('INSERT INTO autonomy_activity(scope,job,phase,message,created) VALUES(?,?,?,?,?)',
                  (scope,job,phase,runtime.safe_error(message)[:600],store.now()))
        c.execute('DELETE FROM autonomy_activity WHERE scope=? AND seq NOT IN (SELECT seq FROM autonomy_activity WHERE scope=? ORDER BY seq DESC LIMIT 200)',(scope,scope))


def report(scope):
    ensure(scope)
    queue=store.one('SELECT * FROM autonomy_queues WHERE scope=?',(scope,))
    queue['limits']=json.loads(queue['limits'])
    queue['jobs']=store.rows('SELECT * FROM autonomy_jobs WHERE scope=? ORDER BY created,id LIMIT 200',(scope,))
    queue['activity']=store.rows('SELECT * FROM autonomy_activity WHERE scope=? ORDER BY seq DESC LIMIT 30',(scope,))
    counts={row['run']:row for row in store.rows("SELECT t.run,count(*) AS total,sum(t.status='Completado') AS done FROM tasks t JOIN autonomy_jobs j ON j.run_id=t.run WHERE j.scope=? GROUP BY t.run",(scope,))}
    for job in queue['jobs']:
        job['progress']=counts.get(job['run_id'],{'total':0,'done':0})
    queue['completed']=sum(j['status']=='completed' for j in queue['jobs'])
    return queue


def limits(scope,body):
    ensure(scope)
    with store.db() as c:
        if c.execute('SELECT status FROM autonomy_queues WHERE scope=?',(scope,)).fetchone()['status']=='running':
            raise ValueError('Pausa la cola antes de cambiar sus límites')
        c.execute('UPDATE autonomy_queues SET limits=?,updated=? WHERE scope=?',(body.model_dump_json(),store.now(),scope))
    return report(scope)


def add(scope,body):
    ensure(scope)
    fingerprint=hashlib.sha256(' '.join(body.request.casefold().split()).encode()).hexdigest()
    with store.db() as c:
        c.execute('BEGIN IMMEDIATE')
        existing=c.execute('SELECT id FROM autonomy_jobs WHERE scope=? AND fingerprint=?',(scope,fingerprint)).fetchone()
        if existing:return dict(existing)
        if c.execute('SELECT count(*) FROM autonomy_jobs WHERE scope=?',(scope,)).fetchone()[0]>=200:
            raise ValueError('La cola alcanzó su límite de 200 objetivos guardados')
        jid=store.uid();now=store.now()
        c.execute('INSERT INTO autonomy_jobs(id,scope,fingerprint,request,status,created,updated) VALUES(?,?,?,?,?,?,?)',
                  (jid,scope,fingerprint,body.request,'queued',now,now))
    activity(scope,jid,'queued','Objetivo guardado, pendiente de iniciar la cola')
    return {'id':jid}


def set_job(jid,status,error='',run_id=None):
    with store.db() as c:
        c.execute('UPDATE autonomy_jobs SET status=?,error=?,run_id=COALESCE(?,run_id),updated=? WHERE id=?',
                  (status,runtime.safe_error(error)[:600],run_id,store.now(),jid))


def pause_queue(scope,error=''):
    with store.db() as c:
        c.execute("UPDATE autonomy_queues SET status='paused',error=?,updated=? WHERE scope=?",(runtime.safe_error(error)[:600],store.now(),scope))


def recover():
    """Called by the singleton worker after store/director startup recovery."""
    for job in store.rows("SELECT * FROM autonomy_jobs WHERE status='running'"):
        if job['scope']=='codex':
            set_job(job['id'],'blocked','Codex se interrumpió. Revisa los cambios locales antes de reintentar.')
            pause_queue('codex','Ejecución interrumpida; no se repite automáticamente')
            continue
        previous=store.one('SELECT * FROM director_requests WHERE project=? AND request_id=?',(job['scope'][5:],job['id']))
        rid=job['run_id'] or (previous['run_id'] if previous else None)
        if rid:
            set_job(job['id'],'queued',run_id=rid)
        elif previous:
            set_job(job['id'],'blocked','Planificación interrumpida; no se repite una llamada incierta')
            pause_queue(job['scope'],'Planificación interrumpida: revisa el objetivo')
        else:
            set_job(job['id'],'queued')
        activity(job['scope'],job['id'],'recovered','Estado recuperado del almacenamiento local')


async def control(scope,body):
    ensure(scope)
    if body.action=='start' and not body.confirmed:
        raise ValueError('Confirma el uso de IA y los límites antes de iniciar')
    if body.action=='start':
        if scope in TASKS and not TASKS[scope].done():return report(scope)
        with store.db() as c:
            # Repeated start requests do not replenish an active budget.
            c.execute("UPDATE autonomy_queues SET status='running',used=0,error='',updated=? WHERE scope=? AND status!='running'",(store.now(),scope))
    else:
        with store.db() as c:
            c.execute('UPDATE autonomy_queues SET status=?,updated=? WHERE scope=?',('paused' if body.action=='pause' else 'stopped',store.now(),scope))
        task=TASKS.get(scope)
        if task and not task.done():
            task.cancel()
            await asyncio.gather(task,return_exceptions=True)
        if body.action=='stop':
            with store.db() as c:
                c.execute("UPDATE autonomy_jobs SET status='stopped',updated=? WHERE scope=? AND status IN ('queued','running')",(store.now(),scope))
    activity(scope,None,body.action,{'start':'Cola iniciada con presupuesto finito','pause':'Cola pausada; conserva los checkpoints','stop':'Cola detenida; los objetivos pendientes no se reinician solos'}[body.action])
    return report(scope)


def retry(scope,jid):
    job=store.one('SELECT * FROM autonomy_jobs WHERE id=? AND scope=?',(jid,scope))
    if not job:raise ValueError('Objetivo inexistente en esta cola')
    queue=report(scope)
    if queue['status']=='running':raise ValueError('Pausa la cola antes de reintentar')
    if job['status'] not in ('blocked','stopped'):raise ValueError('Este objetivo no admite reintento')
    if job['attempts']>=queue['limits']['max_attempts']:raise ValueError('Se agotaron los intentos de este objetivo')
    if scope.startswith('anto:') and not job['run_id'] and store.one('SELECT 1 FROM director_requests WHERE project=? AND request_id=?',(scope[5:],jid)):
        raise ValueError('La planificación ya se intentó. Añade un objetivo revisado para autorizar otro reparto')
    set_job(jid,'queued')
    activity(scope,jid,'retry','Reintento autorizado; los intentos anteriores se conservan')
    return report(scope)


async def anto_job(job,delegate,resume):
    scope=job['scope'];jid=job['id'];rid=job['run_id']
    try:
        if rid:
            run=store.one('SELECT * FROM runs WHERE id=? AND project=?',(rid,scope[5:]))
            if not run:raise ValueError('Falta la ejecución guardada')
            if run['status']=='Completado':
                set_job(jid,'completed');return
            if run['status']=='Interrumpido':
                activity(scope,jid,'resuming','Reanudando checkpoints del Director')
                await resume(rid)
            elif run['status'] not in ('Pendiente','En ejecución'):
                raise ValueError('La ejecución requiere revisión: '+run['status'])
        else:
            activity(scope,jid,'planning','Preparando el reparto con Director y sus reservas de cuota')
            result=await delegate(director.DirectorRequest(project=scope[5:],request=job['request'],request_id=jid,confirmed=True))
            rid=result['id'];set_job(jid,'running',run_id=rid)
        while True:
            run=store.one('SELECT * FROM runs WHERE id=? AND project=?',(rid,scope[5:]))
            if not run:raise ValueError('Falta la ejecución del objetivo')
            if run['status']=='Completado':
                set_job(jid,'completed');activity(scope,jid,'completed','Director completado; resultados disponibles en Tareas y chat de ANTO');return
            if run['status'] not in ('Pendiente','En ejecución'):
                error=store.one("SELECT payload FROM events WHERE run=? AND kind='error' ORDER BY seq DESC LIMIT 1",(rid,))
                detail=json.loads(error['payload']).get('message','') if error else ''
                raise ValueError('Director: '+run['status']+('. '+detail if detail else ''))
            await asyncio.sleep(1)
    except asyncio.CancelledError:
        if not rid:
            previous=store.one('SELECT run_id FROM director_requests WHERE project=? AND request_id=?',(scope[5:],jid))
            rid=previous['run_id'] if previous else None
        if rid:await engine.pause_run(rid)
        previous=store.one('SELECT status FROM director_requests WHERE project=? AND request_id=?',(scope[5:],jid))
        set_job(jid,'queued' if rid or not previous else 'blocked',
                '' if rid or not previous else 'Planificación interrumpida; requiere un objetivo revisado',run_id=rid)
        raise
    except Exception as exc:
        detail=runtime.safe_error(getattr(exc,'detail',exc))
        set_job(jid,'blocked',detail,run_id=rid);pause_queue(scope,detail);activity(scope,jid,'blocked',detail)


def claim(scope):
    with store.db() as c:
        c.execute('BEGIN IMMEDIATE')
        queue=c.execute('SELECT * FROM autonomy_queues WHERE scope=?',(scope,)).fetchone()
        if not queue or queue['status']!='running':return None
        config=Limits.model_validate_json(queue['limits'])
        if c.execute("SELECT 1 FROM autonomy_jobs WHERE scope=? AND status='running'",(scope,)).fetchone():return None
        if queue['used']>=config.max_jobs:
            c.execute("UPDATE autonomy_queues SET status='paused',error='Presupuesto de ciclos agotado' WHERE scope=?",(scope,));return None
        job=c.execute("SELECT * FROM autonomy_jobs WHERE scope=? AND status='queued' ORDER BY created,id LIMIT 1",(scope,)).fetchone()
        if not job:
            c.execute("UPDATE autonomy_queues SET status='paused',error='Cola completada o sin objetivos pendientes' WHERE scope=?",(scope,));return None
        if job['attempts']>=config.max_attempts:
            c.execute("UPDATE autonomy_jobs SET status='blocked',error='Límite de intentos agotado' WHERE id=?",(job['id'],))
            c.execute("UPDATE autonomy_queues SET status='paused',error='Límite de intentos agotado' WHERE scope=?",(scope,));return None
        c.execute("UPDATE autonomy_jobs SET status='running',attempts=attempts+1,updated=? WHERE id=?",(store.now(),job['id']))
        c.execute('UPDATE autonomy_queues SET used=used+1,updated=? WHERE scope=?',(store.now(),scope))
        return dict(job)


async def bounded_anto(job,delegate,resume,config):
    try:
        await asyncio.wait_for(anto_job(job,delegate,resume),config.timeout_seconds)
    except asyncio.TimeoutError:
        detail='Tiempo máximo del objetivo agotado; checkpoints conservados'
        set_job(job['id'],'blocked',detail)
        pause_queue(job['scope'],detail)
        activity(job['scope'],job['id'],'blocked',detail)


async def worker(delegate,resume):
    from .execution_lock import exclusive
    try:
        with exclusive(store.ROOT/'.anto-autonomy.lock'):
            try:
                recover();next_cycle={}
                while True:
                    for queue in store.rows("SELECT scope,limits FROM autonomy_queues WHERE status='running'"):
                        scope=queue['scope']
                        if scope in TASKS and not TASKS[scope].done():continue
                        now=asyncio.get_running_loop().time()
                        if next_cycle.get(scope,0)>now:continue
                        job=claim(scope)
                        if not job:continue
                        config=Limits.model_validate_json(queue['limits'])
                        next_cycle[scope]=now+config.interval_seconds
                        if scope=='codex':
                            from .codex_runner import run_job
                            TASKS[scope]=asyncio.create_task(run_job(job,config))
                        else:TASKS[scope]=asyncio.create_task(bounded_anto(job,delegate,resume,config))
                    await asyncio.sleep(1)
            except Exception:
                for item in store.rows("SELECT scope FROM autonomy_queues WHERE status='running'"):
                    pause_queue(item['scope'],'El supervisor se detuvo por un error interno; revisa el servidor')
                    activity(item['scope'],None,'blocked','El supervisor necesita revisión antes de continuar')
            finally:
                # Keep the singleton lock until every child has actually stopped.
                tasks=list(TASKS.values())
                for task in tasks:task.cancel()
                await asyncio.gather(*tasks,return_exceptions=True)
                TASKS.clear()
    except BlockingIOError:
        return
