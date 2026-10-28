"""Apply improvements to one existing checkout, using local Git and stub setup."""
import os
from pathlib import Path
import subprocess

import pytest


ORIGINAL='codex/studio-de-anto-modelo-real'
TARGET='codex/studio-de-anto-mejoras'
SCRIPT=Path(__file__).resolve().parents[1]/'scripts/apply-improvements.sh'


def git(root,*args):
    return subprocess.run(['git','-C',str(root),*args],check=True,capture_output=True,text=True).stdout.strip()


@pytest.fixture
def repositories(tmp_path,request):
    remote=tmp_path/'remote.git';seed=tmp_path/'seed';checkout=tmp_path/'existing Codespace'
    subprocess.run(['git','init','--bare',str(remote)],check=True,capture_output=True)
    subprocess.run(['git','init','-b',ORIGINAL,str(seed)],check=True,capture_output=True)
    git(seed,'config','user.name','Studio installer test')
    git(seed,'config','user.email','installer@example.invalid')
    scripts=seed/'studio-de-anto/scripts';scripts.mkdir(parents=True)
    if not getattr(request,'param',False):
        (scripts/'apply-improvements.sh').write_text(SCRIPT.read_text())
    for name,event,variable in [('install.sh','install','TEST_INSTALL_EXIT'),
                                 ('start-cloud.sh','start','TEST_START_EXIT')]:
        (scripts/name).write_text(
            '#!/usr/bin/env bash\nset -eu\n'
            f'printf "%s\\n" "{event}:$*" >> "$(dirname "$0")/../local-data/events"\n'
            f'exit "${{{variable}:-0}}"\n')
    (seed/'.gitignore').write_text('studio-de-anto/local-data/\n')
    (seed/'version.txt').write_text('original\n')
    git(seed,'add','.');git(seed,'commit','-m','Initial Studio')
    git(seed,'remote','add','origin',str(remote))
    git(seed,'push','origin',ORIGINAL,f'HEAD:refs/heads/{TARGET}')
    subprocess.run(['git','clone','--branch',ORIGINAL,str(remote),str(checkout)],check=True,capture_output=True)
    git(checkout,'config','user.name','Studio installer test')
    git(checkout,'config','user.email','installer@example.invalid')
    data=checkout/'studio-de-anto/local-data';(data/'private').mkdir(parents=True)
    (data/'studio.sqlite').write_bytes(b'private-project-marker')
    (data/'private/credentials.json').write_text('{"gemini":"synthetic-private-marker"}')
    return seed,checkout,data


def publish(seed):
    (seed/'version.txt').write_text('improved\n')
    git(seed,'add','version.txt');git(seed,'commit','-m','Studio improvements')
    git(seed,'push','origin',f'HEAD:refs/heads/{TARGET}')
    return git(seed,'rev-parse','HEAD')


def apply(checkout,*args,install_exit=0,start_exit=0,codespaces=True,script=None):
    env={**os.environ,'GIT_TERMINAL_PROMPT':'0','TEST_INSTALL_EXIT':str(install_exit),
         'TEST_START_EXIT':str(start_exit),'CODESPACES':'true' if codespaces else 'false'}
    env.pop('STUDIO_REPO_ROOT',None)
    if script is not None:env['STUDIO_REPO_ROOT']=str(checkout)
    return subprocess.run(['bash',str(script or checkout/'studio-de-anto/scripts/apply-improvements.sh'),*args],
                          env=env,cwd=checkout.parent,capture_output=True,text=True,timeout=15)


@pytest.mark.parametrize('branch',[ORIGINAL,TARGET])
def test_fast_forward_installs_then_starts_without_moving_or_losing_private_files(repositories,branch):
    seed,checkout,data=repositories
    if branch==TARGET:git(checkout,'switch','-c',TARGET)
    previous=git(checkout,'rev-parse','HEAD');target=publish(seed)
    private={path:path.read_bytes() for path in data.rglob('*') if path.is_file()}
    local=checkout/'my-notes.txt';local.write_text('Keep my untracked work\n')
    result=apply(checkout)
    assert result.returncode==0,result.stderr
    assert git(checkout,'rev-parse','HEAD')==target
    assert git(checkout,'branch','--show-current')==branch
    assert f'Referencia de recuperación del código anterior: {previous}' in result.stdout
    assert all(path.read_bytes()==value for path,value in private.items())
    assert local.read_text()=='Keep my untracked work\n'
    assert (data/'events').read_text().splitlines()==['install:','start:--background']
    assert git(checkout,'diff','--name-only')==''


@pytest.mark.parametrize('updated',[False,True])
def test_check_fetches_but_never_changes_head_installs_or_starts(repositories,updated):
    seed,checkout,data=repositories
    previous=git(checkout,'rev-parse','HEAD')
    target=publish(seed) if updated else previous
    result=apply(checkout,'--check')
    assert result.returncode==0,result.stderr
    assert target in result.stdout
    assert git(checkout,'rev-parse','HEAD')==previous
    assert git(checkout,'branch','--show-current')==ORIGINAL
    assert (checkout/'version.txt').read_text()=='original\n'
    assert not (data/'events').exists()


def test_failed_installation_preserves_data_and_can_retry_at_same_head(repositories):
    seed,checkout,data=repositories;previous=git(checkout,'rev-parse','HEAD');target=publish(seed)
    private={path:path.read_bytes() for path in data.rglob('*') if path.is_file()}
    failed=apply(checkout,install_exit=23)
    assert failed.returncode==23 and 'servidor no se reinició' in failed.stderr
    assert previous in failed.stdout and git(checkout,'rev-parse','HEAD')==target
    assert (data/'events').read_text().splitlines()==['install:']
    assert all(path.read_bytes()==value for path,value in private.items())
    retried=apply(checkout)
    assert retried.returncode==0,retried.stderr
    assert git(checkout,'rev-parse','HEAD')==target
    assert (data/'events').read_text().splitlines()==['install:','install:','start:--background']


def test_start_failure_propagates_without_undoing_installed_code(repositories):
    seed,checkout,data=repositories;target=publish(seed)
    result=apply(checkout,start_exit=19)
    assert result.returncode==19 and git(checkout,'rev-parse','HEAD')==target
    assert (data/'events').read_text().splitlines()==['install:','start:--background']


@pytest.mark.parametrize('staged',[False,True])
def test_dirty_tracked_files_stop_before_fetch(repositories,staged):
    seed,checkout,data=repositories;publish(seed)
    (checkout/'version.txt').write_text('My changes\n')
    if staged:git(checkout,'add','version.txt')
    result=apply(checkout)
    assert result.returncode!=0 and 'cambios locales rastreados' in result.stderr
    assert (checkout/'version.txt').read_text()=='My changes\n'
    assert not (checkout/'.git/FETCH_HEAD').exists()
    assert not (data/'events').exists()


@pytest.mark.parametrize('detached',[False,True])
def test_unrelated_branch_or_detached_head_stops_before_fetch(repositories,detached):
    _,checkout,data=repositories
    if detached:git(checkout,'switch','--detach')
    else:git(checkout,'switch','-c','my-unrelated-work')
    result=apply(checkout)
    assert result.returncode!=0 and 'no se cambió tu rama' in result.stderr
    assert not (checkout/'.git/FETCH_HEAD').exists()
    assert not (data/'events').exists()


def test_local_commits_are_never_rebased_reset_or_overwritten(repositories):
    seed,checkout,data=repositories;publish(seed)
    (checkout/'local-work.txt').write_text('Committed locally\n')
    git(checkout,'add','local-work.txt');git(checkout,'commit','-m','Local work')
    previous=git(checkout,'rev-parse','HEAD')
    result=apply(checkout)
    assert result.returncode!=0 and 'no contiene tus commits' in result.stderr
    assert git(checkout,'rev-parse','HEAD')==previous
    assert not (data/'events').exists()


@pytest.mark.parametrize('conflict',['untracked.txt','studio-de-anto/local-data/private/credentials.json'])
def test_untracked_and_ignored_conflicts_are_preserved(repositories,conflict):
    seed,checkout,data=repositories
    local=checkout/conflict
    if not local.exists():local.write_text('Local untracked work\n')
    before=local.read_bytes();incoming=seed/conflict;incoming.parent.mkdir(parents=True,exist_ok=True)
    incoming.write_text('Remote conflicting file\n')
    git(seed,'add','-f',conflict);git(seed,'commit','-m','Incoming file')
    git(seed,'push','origin',f'HEAD:refs/heads/{TARGET}')
    previous=git(checkout,'rev-parse','HEAD');result=apply(checkout)
    assert result.returncode!=0
    assert git(checkout,'rev-parse','HEAD')==previous and local.read_bytes()==before
    assert not (data/'events').exists()


@pytest.mark.parametrize('repositories',[True],indirect=True)
def test_temporary_bootstrap_script_uses_existing_repo_without_being_copied_into_it(repositories,tmp_path):
    seed,checkout,data=repositories
    assert not (checkout/'studio-de-anto/scripts/apply-improvements.sh').exists()
    (seed/'studio-de-anto/scripts/apply-improvements.sh').write_text(SCRIPT.read_text())
    git(seed,'add','studio-de-anto/scripts/apply-improvements.sh')
    target=publish(seed)
    temporary=tmp_path/'bootstrap installer.sh';temporary.write_text(SCRIPT.read_text())
    result=apply(checkout,script=temporary)
    assert result.returncode==0,result.stderr
    assert git(checkout,'rev-parse','HEAD')==target
    assert temporary.is_file()
    assert (data/'events').read_text().splitlines()==['install:','start:--background']


def test_non_codespaces_install_prints_local_start_instead_of_starting_server(repositories):
    seed,checkout,data=repositories;publish(seed)
    result=apply(checkout,codespaces=False)
    assert result.returncode==0 and 'scripts/start.sh' in result.stdout
    assert (data/'events').read_text().splitlines()==['install:']
