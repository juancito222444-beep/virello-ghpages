"""One bounded Codex task, coordinated with updates. No login, downloads or force Git."""
import asyncio
import contextlib
from contextvars import ContextVar
import os
from pathlib import Path
import shutil
import signal
import sys
from . import autonomy, store
from .execution_lock import exclusive

PROJECT=Path(__file__).resolve().parents[1]
REPO=PROJECT.parent
COMMAND_LOCK=ContextVar('codex_command_lock',default=None)
CHILD=Path(__file__).with_name('codex_child.py')
BRANCHES={'codex/studio-de-anto-modelo-real','codex/studio-de-anto-mejoras'}


async def terminate(process):
    try:os.killpg(process.pid,signal.SIGTERM)
    except ProcessLookupError:return
    try:await asyncio.wait_for(process.wait(),5)
    except asyncio.TimeoutError:
        with contextlib.suppress(ProcessLookupError):os.killpg(process.pid,signal.SIGKILL)
        await process.wait()
    # Also close descendants if the leader exited before its children.
    with contextlib.suppress(ProcessLookupError):os.killpg(process.pid,signal.SIGKILL)


async def command(args, *, cwd=None, timeout=30, prompt=None, capture=False, env=None, check_stop=False):
    """Never use a shell; discard model/tool text so credentials cannot enter activity."""
    cwd=cwd or REPO
    process=None
    lock_fd=COMMAND_LOCK.get()
    spawn=asyncio.create_task(asyncio.create_subprocess_exec(sys.executable,str(CHILD),str(os.getpid()),*map(str,args),cwd=cwd,
        stdin=asyncio.subprocess.PIPE if prompt is not None else asyncio.subprocess.DEVNULL,
        stdout=asyncio.subprocess.PIPE if capture else asyncio.subprocess.DEVNULL,
        stderr=asyncio.subprocess.DEVNULL,start_new_session=True,env=env,
        pass_fds=(lock_fd,) if lock_fd is not None else ()))
    try:
        process=await asyncio.shield(spawn)
        async def communicate():
            output,_=await process.communicate(prompt.encode() if prompt is not None else None)
            return output or b''
        reading=asyncio.create_task(communicate())
        deadline=asyncio.get_running_loop().time()+timeout
        try:
            while not reading.done():
                if asyncio.get_running_loop().time()>=deadline:raise TimeoutError('Tiempo máximo de ejecución agotado')
                if check_stop:
                    queue=store.one('SELECT status FROM autonomy_queues WHERE scope=?',('codex',))
                    if not queue or queue['status']!='running' or (PROJECT/'local-data/.codex-autonomy-stop').exists():
                        raise InterruptedError('Parada de Codex solicitada')
                await asyncio.wait({reading},timeout=.2)
            output=await reading
            return process.returncode,output.decode('utf-8',errors='replace')
        finally:
            await terminate(process)
            if not reading.done():reading.cancel()
            await asyncio.gather(reading,return_exceptions=True)
    except BaseException:
        if process is None:process=await spawn
        await terminate(process)
        raise


async def git(*args):
    code,out=await command(['git',*args],capture=True)
    if code:raise ValueError('Git no pudo comprobar el repositorio; revisa permisos o bloqueos')
    return out.strip() if '-z' not in args else out


def allowed(path):
    parts=Path(path).parts
    return (len(parts)>1 and parts[0]=='studio-de-anto'
            and not any(p in {'local-data','.venv','node_modules','.git','.codex','.aws','private'} for p in parts)
            and not any(p.startswith('.env') or p.endswith(('.sqlite','.sqlite3','.db','.pem','.key')) or 'credentials' in p.casefold() for p in parts))


async def verified_job_commit(jid):
    # A crash between a verified commit and the SQLite checkpoint must not rerun it.
    return await git('log','-100','--format=%H','--fixed-strings','--grep=Studio-Autonomy-Job: '+jid)


async def execute(job,config):
    jid=job['id']
    if os.environ.get('CODESPACES')!='true':raise ValueError('Codex automático solo se ejecuta mientras Codespaces está activo')
    executable=shutil.which('codex')
    if not executable:raise ValueError('Instala Codex CLI y ejecuta codex login --device-auth en la terminal del mismo Codespace')
    branch=await git('branch','--show-current')
    if branch not in BRANCHES:raise ValueError('Rama no admitida; conserva el trabajo y revisa la rama del estudio')
    if await git('status','--porcelain=v1','--untracked-files=all'):
        raise ValueError('Hay cambios locales o conflictos. Se conservan; revísalos antes de iniciar Codex')
    if (PROJECT/'local-data/.codex-autonomy-stop').exists():raise ValueError('Parada de emergencia activa; retira el archivo de parada para volver a iniciar')
    committed=await verified_job_commit(jid)
    if committed:
        autonomy.set_job(jid,'completed',run_id=committed.splitlines()[0]);return
    code,_=await command([executable,'login','status'])
    if code:raise ValueError('Codex no está autenticado. Usa codex login --device-auth en la terminal')
    baseline=await git('rev-parse','HEAD')
    autonomy.activity('codex',jid,'executing','Ejecutando una mejora con Codex; sin publicación remota automática')
    prompt=('Trabaja solo en studio-de-anto, en el checkout existente. Lee ../AGENTS.md y README.md. '
            'Conserva datos, credenciales y carpetas. Implementa únicamente esta mejora finita. '
            'No ejecutes APIs de IA reales durante comprobaciones, ni actualizaciones o nuevos agentes. '
            'No hagas commits, push, checkout, reset, stash ni cambios fuera de studio-de-anto. '
            'No leas ni modifiques local-data, claves ni secretos. No cambies las pruebas para ocultar fallos. '
            'Si falta autorización, hay conflictos o un bloqueo, detente y explica el bloqueo. '
            'El supervisor comprobará pruebas y compilación y guardará el commit. Objetivo del usuario:\n'+job['request'])
    code,_=await command([executable,'exec','--full-auto','-C',str(PROJECT),'-'],prompt=prompt,
                         timeout=config.timeout_seconds,check_stop=True)
    if code:raise ValueError('Codex terminó con error. Revisa autenticación, sandbox y cambios locales; no se reintenta automáticamente')
    if await git('branch','--show-current')!=branch or await git('rev-parse','HEAD')!=baseline:
        raise ValueError('El historial o la rama cambió durante el ciclo; requiere revisión')
    if await git('diff','--cached','--name-only'):raise ValueError('Se detectaron cambios preparados por otro proceso; revisión necesaria')
    changed=[p for p in (await git('diff','--name-only','-z')).split('\0') if p]
    changed += [p for p in (await git('ls-files','--others','--exclude-standard','-z')).split('\0') if p]
    if not changed:raise ValueError('Codex no produjo cambios verificables; objetivo bloqueado para revisión')
    if len(set(changed))>config.max_files or not all(allowed(p) for p in changed):
        raise ValueError('Los cambios exceden el alcance o el límite de archivos; se conservaron sin commit')
    autonomy.activity('codex',jid,'testing','Comprobando backend con red externa bloqueada')
    testenv={**os.environ,'STUDIO_AUTONOMY_TEST':'1'}
    code,_=await command([PROJECT/'.venv/bin/python','-m','pytest','-q'],cwd=PROJECT,
                         timeout=config.timeout_seconds,env=testenv,check_stop=True)
    if code:raise ValueError('Fallaron las pruebas del backend; cambios conservados sin commit')
    autonomy.activity('codex',jid,'building','Compilando la interfaz')
    code,_=await command(['npm','run','build'],cwd=PROJECT/'frontend',timeout=config.timeout_seconds,check_stop=True)
    if code:raise ValueError('Falló la compilación; cambios conservados sin commit')
    # Recheck the full change set after tests/build, including new build artifacts.
    changed=[p for p in (await git('diff','--name-only','-z')).split('\0') if p]
    changed += [p for p in (await git('ls-files','--others','--exclude-standard','-z')).split('\0') if p]
    if len(set(changed))>config.max_files or not all(allowed(p) for p in changed):raise ValueError('El resultado de las comprobaciones excede el alcance permitido')
    if await git('branch','--show-current')!=branch or await git('rev-parse','HEAD')!=baseline or await git('diff','--cached','--name-only'):
        raise ValueError('Git cambió durante las comprobaciones; pausa para revisión')
    code,_=await command(['git','diff','--check'])
    if code:raise ValueError('El diff contiene errores de formato')
    autonomy.activity('codex',jid,'committing','Guardando exclusivamente los cambios verificados del ciclo')
    code,_=await command(['git','add','--',*sorted(set(changed))])
    if code:raise ValueError('No se pudieron preparar los archivos; revisión necesaria')
    code,_=await command(['git','commit','-m','Studio: mejora autónoma verificada','-m','Studio-Autonomy-Job: '+jid],timeout=30)
    if code:raise ValueError('No se pudo guardar el commit verificado; se conserva el índice para revisión')
    revision=await git('rev-parse','HEAD')
    autonomy.set_job(jid,'completed',run_id=revision)
    autonomy.activity('codex',jid,'completed','Mejora verificada guardada en commit '+revision[:12]+'. Sin push automático.')


async def run_job(job,config):
    try:
        with exclusive(PROJECT/'local-data/.anto-update.lock') as lock_fd:
            token=COMMAND_LOCK.set(lock_fd)
            try:
                await asyncio.wait_for(execute(job,config),timeout=config.timeout_seconds)
            finally:COMMAND_LOCK.reset(token)
    except asyncio.CancelledError:
        autonomy.set_job(job['id'],'blocked','Ciclo interrumpido; cambios locales conservados para revisión')
        raise
    except Exception as exc:
        detail=('El actualizador u otro ejecutor tiene el bloqueo; vuelve a iniciar tras revisarlo'
                if isinstance(exc,BlockingIOError) else str(exc) or 'Tiempo máximo de ciclo agotado')
        autonomy.set_job(job['id'],'blocked',detail)
        autonomy.pause_queue('codex',detail)
        autonomy.activity('codex',job['id'],'blocked',detail)
