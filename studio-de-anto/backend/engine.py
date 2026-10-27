import asyncio, json, os, tempfile, threading
from pathlib import Path
from . import store, models, usage
from .schemas import Plan
from .data_tools import load,analyze,review
from .reports import generate

QUEUE=asyncio.Queue()
ACTIVE={}
# Matplotlib's stateful renderer is shared by the process. A cancelled export
# may finish in its thread, so it must not render concurrently with another run.
EXPORT_LOCK=threading.Lock()
MAX_MODEL_CALLS=16
MAX_MODEL_REVIEWS=2
MAX_DIRECTOR_CALLS=6


def _write_director_artifact(path,content):
    """Complete writes before publishing the final name; never replace a file."""
    staged=None
    try:
        with tempfile.NamedTemporaryFile(mode='w',encoding='utf-8',dir=path.parent,
                                         prefix='.director-',suffix='.tmp',delete=False) as target:
            staged=Path(target.name);target.write(content);target.flush();os.fsync(target.fileno())
        # Same-directory hard links publish a complete file exclusively. A
        # storage/write failure leaves no partial final name to block resume.
        os.link(staged,path)
    finally:
        if staged is not None:staged.unlink(missing_ok=True)


def _director_state(run,plan,tasks,shared):
    """Validate the persisted graph and recover the portable attempt budget."""
    if run['file'] is not None or plan.analysis is not None:
        raise ValueError('La delegación automática solo admite trabajo de texto sin archivos.')
    persisted={json.loads(task['payload']).get('id'):task for task in tasks}
    if len(persisted)!=len(tasks) or set(persisted)!={task.id for task in plan.tasks}:
        raise ValueError('Las tareas guardadas no coinciden con el plan del director.')
    attempts={}
    for spec in plan.tasks:
        task=persisted[spec.id];payload=json.loads(task['payload'])
        expected={persisted[dependency]['id'] for dependency in spec.depends_on}
        if task['agent']!=spec.agent or payload.get('tools')!=['reason'] or set(payload.get('depends_on',[]))!=expected:
            raise ValueError('Las tareas guardadas no coinciden con el plan del director.')
        try:
            saved=json.loads(task['result']) if task['result'] is not None else {}
            if not isinstance(saved,dict):raise ValueError()
            count=saved.get('_director_attempts',1 if task['status']=='Completado' else 0)
            minimum=1 if task['status']=='Completado' else 0
            if type(count) is not int or not minimum<=count<=MAX_DIRECTOR_CALLS:raise ValueError()
        except (ValueError,TypeError):
            raise ValueError('Falta un recuento válido de intentos del director; no se repetirán llamadas automáticamente.') from None
        if task['id'] in shared and (not isinstance(saved.get('text'),str) or not saved['text'].strip()):
            raise ValueError('Falta el texto de una contribución completada del director.')
        attempts[task['id']]=count
    return attempts


def _director_messages(plan,spec,shared,tasks):
    # Keep every contribution represented. The provider adapter bounds a single
    # message to 12000 characters, so slicing one large JSON object loses context.
    by_id={task['id']:task for task in tasks}
    dependencies=spec['depends_on'];limit=6000//max(1,len(dependencies))
    evidence={tid:{'agent':by_id[tid]['agent'],'text':shared[tid]['text'][:limit]}
              for tid in dependencies if tid in shared}
    data={'objective':plan.objective,'task':spec['description'],
          'contributions':evidence,'contributions_may_be_shortened':True,
          'scope':'Aportes de texto no verificados. No afirmes haber ejecutado herramientas ni comprobado cifras.'}
    content=json.dumps(data,ensure_ascii=False)
    while len(content)>11000 and any(item['text'] for item in evidence.values()):
        # Quotes and line breaks expand during JSON encoding. Shrink every
        # excerpt together instead of losing the objective or entire sources.
        ratio=min(.9,11000/len(content))
        for item in evidence.values():item['text']=item['text'][:int(len(item['text'])*ratio)]
        content=json.dumps(data,ensure_ascii=False)
    if len(content)>11000:
        raise ValueError('El objetivo y la tarea del director son demasiado extensos; acórtalos antes de continuar.')
    return [{'role':'user','content':content}]


def _publish_director(run,plan,tasks,shared,snapshots):
    """Publish final text, provenance and downloads once, including after restore."""
    final=next(task for task in tasks if task['agent']=='anto')
    output=shared[final['id']];summary=output['text']
    if not isinstance(summary,str) or not summary.strip():raise ValueError('ANTO no devolvió una síntesis completa.')
    provider=output.get('provider',snapshots['anto']['provider'])
    model=output.get('model',snapshots['anto']['agent']['model'])
    folder=store.ROOT/'artifacts'/run['id']
    if (store.ROOT/'artifacts').is_symlink() or folder.is_symlink():
        raise ValueError('La carpeta de entregables del director no está disponible.')
    folder.mkdir(parents=True,exist_ok=True)
    owned=folder.resolve()
    if not owned.is_relative_to((store.ROOT/'artifacts').resolve()) or folder.is_symlink():
        raise ValueError('La carpeta de entregables del director no está disponible.')
    contents={
        'colaboracion.json':(json.dumps(shared,ensure_ascii=False,indent=2,sort_keys=True),'application/json'),
        'resumen-director.md':('# '+plan.objective+'\n\n## Síntesis de ANTO\n\n'+summary+
                               '\n\n---\nPropuesta del equipo pendiente de revisión humana.\n','text/markdown'),
    }
    paths={}
    for name,(content,_) in contents.items():
        existing=store.one('SELECT path FROM artifacts WHERE run=? AND name=?',(run['id'],name))
        path=Path(existing['path']) if existing else folder/name
        if path.is_symlink() or not path.resolve().is_relative_to(owned):
            raise ValueError('Un entregable del director está fuera de su carpeta.')
        if existing:
            if not path.is_file():raise ValueError('Falta un entregable guardado del director. Restaura una copia del proyecto.')
        else:
            try:
                _write_director_artifact(path,content)
            except FileExistsError:
                # A crash before the SQLite commit can leave an unpublished file.
                if path.is_symlink() or not path.is_file() or path.read_text(encoding='utf-8')!=content:
                    raise ValueError('Hay un entregable distinto en la carpeta del director; no se sobrescribió.') from None
        paths[name]=path
    with store.db() as c:
        c.execute('BEGIN IMMEDIATE')
        current=c.execute('SELECT result FROM runs WHERE id=?',(run['id'],)).fetchone()
        try:saved=json.loads(current['result']) if current and current['result'] else {}
        except (ValueError,TypeError):saved={}
        # Backups remap message_id in run.result. Reuse that mapped reply when a
        # crash happened after publication and before the final status update.
        previous=saved.get('message_id') if isinstance(saved,dict) and saved.get('kind')=='director' else None
        message_id=previous if isinstance(previous,str) and previous and c.execute('SELECT 1 FROM messages WHERE id=? AND project=? AND agent=? AND role=?',(previous,run['project'],'anto','assistant')).fetchone() else run['id']+'_director_answer'
        existing=c.execute('SELECT * FROM messages WHERE id=?',(message_id,)).fetchone()
        if existing and (existing['project']!=run['project'] or existing['agent']!='anto' or existing['role']!='assistant' or existing['content']!=summary):
            raise ValueError('La respuesta guardada del director no coincide; no se reemplazó.')
        c.execute('INSERT OR IGNORE INTO messages VALUES(?,?,?,?,?,?,?)',(message_id,run['project'],'anto','assistant',summary,model,store.now()))
        c.execute('INSERT OR IGNORE INTO message_provenance VALUES(?,?)',(message_id,provider))
        for name,(_,mime) in contents.items():
            if not c.execute('SELECT 1 FROM artifacts WHERE run=? AND name=?',(run['id'],name)).fetchone():
                c.execute('INSERT INTO artifacts VALUES(?,?,?,?,?,?,?)',(store.uid(),run['id'],name,str(paths[name]),mime,1,store.now()))
        c.execute('UPDATE runs SET result=? WHERE id=?',(json.dumps({'kind':'director','summary':summary,'message_id':message_id,'provisional':True},ensure_ascii=False),run['id']))


def task_event(run, task, status, **extra):
    """Publish provenance and a separate agent state for the office renderer."""
    payload=json.loads(task['payload'])
    agent_status='Disponible' if status=='Completado' else status
    store.event(run['project'],'task',{
        'status':status,'agent_status':agent_status,
        'task':payload['description'],'task_id':task['id'],'logical_id':payload.get('id'),'run_id':run['id'],
        'result_ref':f"task:{task['id']}:v1" if status=='Completado' else None,
        **extra,
    },run['id'],task['agent'])


def close_unfinished_tasks(run,status):
    """Terminal run states must also close tasks and their visible agent state."""
    tasks=store.rows("SELECT * FROM tasks WHERE run=? AND status!='Completado'",(run['id'],))
    for task in tasks:
        task_status=('Fallido' if task['status']=='En ejecución' else 'Interrumpido') if status=='Fallido' else status
        with store.db() as c:
            c.execute('UPDATE tasks SET status=? WHERE id=?',(task_status,task['id']))
        task_event(run,task,task_status,reason=f'Ejecución {status.lower()}')


def _generate_serialized(run,result,checked,narrative):
    with EXPORT_LOCK:
        return generate(run,result,checked,narrative)


def _discard_cancelled_export(future,run):
    """A cancelled thread cannot be killed; remove only its unpublished files."""
    if future.cancelled(): return
    try:
        paths=future.result()
        if store.one('SELECT id FROM artifacts WHERE run=?',(run['id'],)): return
        folder=(store.ROOT/'artifacts'/run['id']).resolve()
        for path in paths:
            path=path.resolve()
            if path.is_relative_to(folder): path.unlink(missing_ok=True)
        try: folder.rmdir()
        except OSError: pass
    except Exception:
        # The worker records the cancellation; cleanup must not manufacture a
        # completed run or conceal a cancelled task with an unhandled callback.
        pass

def set_status(run,status):
    with store.db() as c: c.execute('UPDATE runs SET status=? WHERE id=?',(status,run['id']))
    if status in ['Cancelado','Fallido','Interrumpido']:
        close_unfinished_tasks(run,status)
    review=store.one('SELECT payload FROM reviews WHERE run=? ORDER BY created DESC LIMIT 1',(run['id'],))
    verified=bool(review and json.loads(review['payload']).get('passed'))
    store.event(run['project'],'run',{
        'status':status,'run_id':run['id'],
        'result_state':'verified' if status=='Completado' and verified else 'provisional',
        'mathematical_review_passed':verified,
    },run['id'])

def load_frame(run):
    f=store.one('SELECT * FROM files WHERE id=? AND project=?',(run['file'],run['project']))
    if not f: raise ValueError('Selecciona un archivo del proyecto')
    return load(f['path'],store.setting('run_options:'+run['id'],json.loads(f['options'])))

def checkpoints(run):
    shared={};result=None;checked=None;narrative=''
    tasks=store.rows('SELECT * FROM tasks WHERE run=? ORDER BY position',(run['id'],))
    for task in tasks:
        if task['status']!='Completado':continue
        try:
            output=json.loads(task['result'])
            if not isinstance(output,dict):raise ValueError()
        except (ValueError,TypeError):
            raise ValueError('No se puede retomar: falta evidencia válida de una tarea completada.') from None
        shared[task['id']]=output
        if 'analysis' in output:result=output['analysis']
        if 'review' in output:checked=output['review']
        if 'report' in json.loads(task['payload'])['tools'] and isinstance(output.get('commentary'),str):
            narrative=output['commentary']
    return tasks,shared,result,checked,narrative

async def execute(run):
    set_status(run,'En ejecución'); plan=Plan.model_validate_json(run['plan'])
    tasks,shared,result,checked,narrative=checkpoints(run)
    director=plan.mode=='director'
    attempts=_director_state(run,plan,tasks,shared) if director else {}
    snapshots={agent['id']:models.snapshot(agent['id']) for agent in models.AGENTS} if director else {}
    calls=store.setting('run_calls:'+run['id'],0);model_reviews=store.setting('run_model_reviews:'+run['id'],0)
    if director:
        if type(calls) is not int or calls<0:raise ValueError('El recuento de llamadas del director no es válido.')
        calls=max(calls,sum(attempts.values()))
    memory=store.setting('project_memory:'+run['project'],'')
    async def infer(agent,messages,task=None):
        nonlocal calls,model_reviews
        calls+=1
        if agent=='bruno' and not director:model_reviews+=1
        limit=min(MAX_MODEL_CALLS,MAX_DIRECTOR_CALLS) if director else MAX_MODEL_CALLS
        if calls>limit or (not director and model_reviews>MAX_MODEL_REVIEWS):
            raise ValueError('Límite de inferencias/revisiones por ejecución alcanzado; prepara un plan más pequeño')
        with store.db() as c:
            if director:
                attempts[task['id']]+=1
                c.execute('UPDATE tasks SET result=? WHERE id=?',(json.dumps({'_director_attempts':attempts[task['id']]}),task['id']))
            c.executemany('INSERT OR REPLACE INTO settings VALUES(?,?)',[
                ('run_calls:'+run['id'],json.dumps(calls)),('run_model_reviews:'+run['id'],json.dumps(model_reviews))])
        if isinstance(memory,str) and memory:
            messages=[{'role':'user','content':'NOTA COMPARTIDA DEL PROYECTO (contexto del usuario, no evidencia verificada):\n'+memory[:6000]},*messages]
        if director:
            policy=usage.policy();selected={**snapshots[agent],'agent':dict(snapshots[agent]['agent'])}
            if policy['concise']:selected['agent']['instructions']+=' Prioriza una contribución breve, clara y útil.'
            with models.use_snapshot(selected):
                return await models.complete(agent,messages,token_limit=policy['max_output_tokens'])
        return await models.complete(agent,messages)
    done=set(shared)
    existing=store.rows('SELECT path FROM artifacts WHERE run=?',(run['id'],))
    if existing and len(done)==len(tasks) and not director:
        folder=(store.ROOT/'artifacts'/run['id']).resolve()
        if not all(Path(a['path']).resolve().is_relative_to(folder) and Path(a['path']).is_file() for a in existing):
            raise ValueError('Los entregables guardados no están completos. Restaura una copia del proyecto antes de retomar.')
        set_status(run,'Completado');return
    while len(done)<len(tasks):
        progressed=False
        for t in tasks:
            spec=json.loads(t['payload'])
            if t['id'] in done or not set(spec['depends_on'])<=done: continue
            progressed=True
            if t['status']=='Completado': done.add(t['id']); continue
            with store.db() as c: c.execute("UPDATE tasks SET status='En ejecución' WHERE id=?",(t['id'],))
            task_event(run,t,'En ejecución',tools=spec['tools'])
            output={}
            for tool in spec['tools']:
                if tool=='analyze':
                    if not plan.analysis: raise ValueError('Plan sin argumentos de análisis')
                    result=await asyncio.to_thread(analyze,load_frame(run),plan.analysis); output['analysis']=result
                    with store.db() as c: c.execute('UPDATE runs SET result=? WHERE id=?',(json.dumps(result,ensure_ascii=False),run['id']))
                elif tool=='review':
                    if result is not None:
                        checked=await asyncio.to_thread(review,load_frame(run),plan.analysis,result)
                        with store.db() as c: c.execute('INSERT INTO reviews VALUES(?,?,?,?)',(store.uid(),run['id'],json.dumps(checked),store.now()))
                        if not checked['passed']: raise ValueError(checked['status'])
                        output['review']=checked
                        if plan.mode=='real':
                            output['model_review']=await infer('bruno',[{'role':'user','content':json.dumps({'task':'Revisa estos resultados y sus limitaciones. No sustituyas la comprobación matemática.','objective':plan.objective,'result':result,'checks':checked},ensure_ascii=False)[:22000]}])
                    else: output['review']=await infer('bruno',[{'role':'user','content':json.dumps({'objective':plan.objective,'evidence':shared},ensure_ascii=False)[:18000]}])
                elif tool in ['report','chart']:
                    # Los archivos se generan juntos tras terminar y verificar todas las tareas.
                    if result is None: output[tool]=await infer(t['agent'],[{'role':'user','content':plan.objective+'\nEvidencia: '+json.dumps(shared,ensure_ascii=False)[:18000]}])
                    else:
                        output[tool]={'source':'analysis-v1','status':'Preparado para exportación tras verificación'}
                        if plan.mode=='real':
                            output['commentary']=await infer(t['agent'],[{'role':'user','content':json.dumps({'task':spec['description'],'objective':plan.objective,'result':result,'review':checked},ensure_ascii=False)[:22000]}])
                            if tool=='report': narrative=output['commentary']
                elif tool=='inspect': output['schema']=list(load_frame(run).columns) if run['file'] else []
                else:
                    evidence={key:shared[key] for key in spec['depends_on'] if key in shared}
                    messages=_director_messages(plan,spec,shared,tasks) if director else [{'role':'user','content':json.dumps({'objective':plan.objective,'task':spec['description'],'evidence':evidence},ensure_ascii=False)[:20000]}]
                    output['text']=await infer(t['agent'],messages,task=t)
                    if director:output.update(_director_attempts=attempts[t['id']],provider=snapshots[t['agent']]['provider'],model=snapshots[t['agent']]['agent']['model'])
            shared[t['id']]=output
            with store.db() as c: c.execute("UPDATE tasks SET status='Completado',result=? WHERE id=?",(json.dumps(output,ensure_ascii=False),t['id']))
            done.add(t['id']); task_event(run,t,'Completado',output_keys=list(output))
        if not progressed: raise ValueError('Dependencias sin resolver')
    if director:
        _publish_director(run,plan,tasks,shared,snapshots)
    elif result is not None:
        if not checked or not checked['passed']: raise ValueError('Exportación bloqueada: falta revisión matemática')
        export=asyncio.create_task(asyncio.to_thread(_generate_serialized,run,result,checked,narrative))
        try:
            paths=await asyncio.shield(export)
        except asyncio.CancelledError:
            export.add_done_callback(lambda future:_discard_cancelled_export(future,run))
            raise
        folder=(store.ROOT/'artifacts'/run['id']).resolve()
        if not paths or len(paths)!=len(set(paths)) or any(not p.is_file() or not p.resolve().is_relative_to(folder) for p in paths):
            raise ValueError('Exportación incompleta: se bloqueó el manifiesto de descarga')
        import mimetypes
        with store.db() as c:
            for p in paths:
                c.execute('INSERT INTO artifacts VALUES(?,?,?,?,?,?,?)',(store.uid(),run['id'],p.name,str(p),mimetypes.guess_type(p)[0] or 'application/octet-stream',1,store.now()))
    else:
        folder=store.ROOT/'artifacts'/run['id']; folder.mkdir(parents=True,exist_ok=True)
        p=folder/'colaboracion.json'; p.write_text(json.dumps(shared,ensure_ascii=False,indent=2))
        with store.db() as c: c.execute('INSERT INTO artifacts VALUES(?,?,?,?,?,?,?)',(store.uid(),run['id'],p.name,str(p),'application/json',1,store.now()))
    set_status(run,'Completado')

async def worker():
    while True:
        rid=await QUEUE.get()
        run=store.one('SELECT * FROM runs WHERE id=?',(rid,))
        if not run or run['status']!='Pendiente': QUEUE.task_done(); continue
        task=asyncio.create_task(execute(run)); ACTIVE[rid]=task
        try: await task
        except asyncio.CancelledError:
            if asyncio.current_task().cancelling():
                set_status(run,'Interrumpido')
                return
            set_status(run,'Cancelado')
        except Exception as e:
            set_status(run,'Fallido')
            store.event(run['project'],'error',{'message':str(e),'run_id':rid,'result_state':'provisional'},rid)
        finally: ACTIVE.pop(rid,None); QUEUE.task_done()
