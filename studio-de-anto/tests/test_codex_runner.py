"""Actual local Git and process cleanup; Codex and verification commands simulated."""
import asyncio
import os
from pathlib import Path
import subprocess
import sys
import pytest
from backend import autonomy, codex_runner as runner, store
from backend.execution_lock import exclusive


def git(root,*args):
    return subprocess.run(['git','-C',str(root),*args],capture_output=True,text=True,check=True).stdout.strip()

@pytest.fixture
def repository(tmp_path,monkeypatch):
    repo=tmp_path/'checkout';repo.mkdir()
    project=repo/'studio-de-anto';project.mkdir()
    (project/'source.txt').write_text('original\n')
    (repo/'.gitignore').write_text('studio-de-anto/local-data/\n')
    git(repo,'init','-b','codex/studio-de-anto-mejoras')
    git(repo,'config','user.name','Autonomy test')
    git(repo,'config','user.email','test@example.invalid')
    git(repo,'add','.');git(repo,'commit','-m','Initial')
    monkeypatch.setattr(runner,'REPO',repo);monkeypatch.setattr(runner,'PROJECT',project)
    monkeypatch.setattr(store,'ROOT',project/'local-data');store.ROOT.mkdir()
    store.init();autonomy.init()
    monkeypatch.setenv('CODESPACES','true')
    monkeypatch.setattr(runner.shutil,'which',lambda name:'/mock/codex')
    jid=autonomy.add('codex',autonomy.Objective(request='A finite code improvement'))['id']
    asyncio.run(autonomy.control('codex',autonomy.Control(action='start',confirmed=True)))
    job=autonomy.claim('codex')
    return repo,project,job


def simulated_commands(monkeypatch,project,*,failure=None,outside=False):
    actual=runner.command;calls=[]
    async def command(args,**kwargs):
        args=list(map(str,args));calls.append((args,kwargs))
        if args[0]=='/mock/codex':
            if args[1]=='exec':
                (project/'source.txt').write_text('improved\n')
                if outside:(project.parent/'outside.txt').write_text('Preserve for review\n')
                assert '--full-auto' in args and kwargs['check_stop']
                return (1 if failure=='model' else 0),''
            return (1 if failure=='auth' else 0),''
        if '-m' in args and 'pytest' in args:
            assert kwargs['env']['STUDIO_AUTONOMY_TEST']=='1'
            return (1 if failure=='tests' else 0),''
        if args[:3]==['npm','run','build']:
            return (1 if failure=='build' else 0),''
        return await actual(args,**kwargs)
    monkeypatch.setattr(runner,'command',command)
    return calls


def test_success_verifies_before_commit_and_never_repeats(repository,monkeypatch):
    repo,project,job=repository
    original=git(repo,'rev-parse','HEAD')
    calls=simulated_commands(monkeypatch,project)
    asyncio.run(runner.run_job(job,autonomy.Limits()))
    result=autonomy.report('codex')['jobs'][0]
    assert result['status']=='completed'
    assert result['run_id']==git(repo,'rev-parse','HEAD')!=original
    assert git(repo,'status','--porcelain')==''
    assert 'Studio-Autonomy-Job: '+job['id'] in git(repo,'log','-1','--format=%B')
    assert sum(args[0]=='/mock/codex' and args[1]=='exec' for args,_ in calls)==1
    steps=[args for args,_ in calls]
    test_index=next(i for i,a in enumerate(steps) if 'pytest' in a)
    commit_index=next(i for i,a in enumerate(steps) if a[:2]==['git','commit'])
    assert test_index<commit_index
    asyncio.run(runner.run_job(job,autonomy.Limits()))
    assert sum(args[0]=='/mock/codex' and args[1]=='exec' for args,_ in calls)==1
    assert not any('push' in args for args,_ in calls)


@pytest.mark.parametrize('failure',['auth','model','tests','build'])
def test_errors_pause_and_preserve_work_without_commit(repository,monkeypatch,failure):
    repo,project,job=repository;original=git(repo,'rev-parse','HEAD')
    calls=simulated_commands(monkeypatch,project,failure=failure)
    asyncio.run(runner.run_job(job,autonomy.Limits()))
    assert git(repo,'rev-parse','HEAD')==original
    state=autonomy.report('codex')
    assert state['status']=='paused' and state['jobs'][0]['status']=='blocked'
    if failure!='auth':assert (project/'source.txt').read_text()=='improved\n'
    assert not any(args[:2]==['git','commit'] for args,_ in calls)


def test_dirty_work_is_preserved_without_invoking_codex(repository,monkeypatch):
    repo,project,job=repository
    (project/'source.txt').write_text('User local changes\n')
    calls=simulated_commands(monkeypatch,project)
    asyncio.run(runner.run_job(job,autonomy.Limits()))
    assert (project/'source.txt').read_text()=='User local changes\n'
    assert not any(args[0]=='/mock/codex' for args,_ in calls)
    assert 'cambios locales' in autonomy.report('codex')['error']


def test_updater_lock_excludes_codex(repository,monkeypatch):
    _,project,job=repository;calls=simulated_commands(monkeypatch,project)
    with exclusive(project/'local-data/.anto-update.lock'):
        asyncio.run(runner.run_job(job,autonomy.Limits()))
    assert not calls
    assert autonomy.report('codex')['status']=='paused'


def test_outside_changes_are_retained_without_staging(repository,monkeypatch):
    repo,project,job=repository
    simulated_commands(monkeypatch,project,outside=True)
    asyncio.run(runner.run_job(job,autonomy.Limits()))
    assert (repo/'outside.txt').exists()
    assert not git(repo,'diff','--cached','--name-only')
    assert autonomy.report('codex')['jobs'][0]['status']=='blocked'


@pytest.mark.parametrize('path',['outside.txt','studio-de-anto/local-data/private.json','studio-de-anto/.env','studio-de-anto/.env.production','studio-de-anto/private/key.txt','studio-de-anto/credentials.json'])
def test_private_and_outside_paths_are_never_staged(path):
    assert not runner.allowed(path)


def test_emergency_file_and_non_codespace_never_invoke_codex(repository,monkeypatch):
    _,project,job=repository;calls=simulated_commands(monkeypatch,project)
    (project/'local-data/.codex-autonomy-stop').touch()
    asyncio.run(runner.run_job(job,autonomy.Limits()))
    assert not any(args[0]=='/mock/codex' for args,_ in calls)
    monkeypatch.setenv('CODESPACES','false')
    calls.clear();asyncio.run(runner.run_job(job,autonomy.Limits()))
    assert not calls


def test_timeout_and_cancel_reap_child_processes(tmp_path,monkeypatch):
    spawned=[];original=asyncio.create_subprocess_exec
    async def spawn(*args,**kwargs):
        process=await original(*args,**kwargs);spawned.append(process);return process
    monkeypatch.setattr(asyncio,'create_subprocess_exec',spawn)
    async def scenario():
        with pytest.raises(TimeoutError):
            await runner.command([sys.executable,'-c','import time; time.sleep(60)'],cwd=tmp_path,timeout=.1)
        task=asyncio.create_task(runner.command([sys.executable,'-c','import time; time.sleep(60)'],cwd=tmp_path))
        while len(spawned)<2:await asyncio.sleep(.01)
        task.cancel()
        with pytest.raises(asyncio.CancelledError):await task
    asyncio.run(scenario())
    for process in spawned:
        assert process.returncode is not None
        with pytest.raises(ProcessLookupError):os.kill(process.pid,0)


def test_running_process_observes_emergency_stop(repository):
    _,project,_=repository
    async def scenario():
        task=asyncio.create_task(runner.command([sys.executable,'-c','import time; time.sleep(60)'],cwd=project,check_stop=True))
        await asyncio.sleep(.1)
        (project/'local-data/.codex-autonomy-stop').touch()
        with pytest.raises(InterruptedError):await task
    asyncio.run(scenario())


def test_guardian_kills_group_when_supervisor_dies(tmp_path):
    import time
    marker=tmp_path/'child.json'
    import json
    project=Path(runner.__file__).resolve().parents[1]
    child="import json,os,time;open("+repr(str(marker))+",'w').write(json.dumps([os.getpid(),os.getpgrp()]));time.sleep(60)"
    supervisor=("import asyncio,os,sys;from pathlib import Path;from backend.codex_runner import command\n"
                "async def main():\n"
                " asyncio.create_task(command([sys.executable,'-c',"+repr(child)+"],cwd="+repr(str(tmp_path))+"))\n"
                " while not Path("+repr(str(marker))+").exists():await asyncio.sleep(.01)\n"
                " os._exit(0)\n"
                "asyncio.run(main())")
    process=subprocess.Popen([sys.executable,'-c',supervisor],cwd=project)
    process.wait(timeout=10)
    assert process.returncode==0
    pid,group=json.loads(marker.read_text())
    def alive():
        try:return '\nState:\tZ' not in Path('/proc',str(pid),'status').read_text()
        except FileNotFoundError:return False
    try:
        deadline=time.monotonic()+3
        while alive() and time.monotonic()<deadline:time.sleep(.02)
        assert not alive(),'The coding child must die with its supervisor'
    finally:
        import signal
        try:os.killpg(group,signal.SIGKILL)
        except ProcessLookupError:pass
