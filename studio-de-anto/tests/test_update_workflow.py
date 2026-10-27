"""Update real temporary repositories through a local remote, never the network."""
import os
from pathlib import Path
import subprocess

import pytest


BRANCH='codex/studio-de-anto-modelo-real'
SCRIPT=Path(__file__).resolve().parents[1]/'scripts/update-cloud.sh'


def git(root,*args):
    return subprocess.run(['git','-C',str(root),*args],check=True,capture_output=True,text=True).stdout.strip()


@pytest.fixture
def repositories(tmp_path):
    remote=tmp_path/'remote.git'
    seed=tmp_path/'seed'
    checkout=tmp_path/'checkout with spaces'
    subprocess.run(['git','init','--bare',str(remote)],check=True,capture_output=True)
    subprocess.run(['git','init','-b',BRANCH,str(seed)],check=True,capture_output=True)
    git(seed,'config','user.name','Studio update test')
    git(seed,'config','user.email','studio-update@example.invalid')
    scripts=seed/'studio-de-anto/scripts';scripts.mkdir(parents=True)
    (scripts/'update-cloud.sh').write_text(SCRIPT.read_text())
    (scripts/'start-cloud.sh').write_text('#!/usr/bin/env bash\nset -eu\nprintf "%s\\n" "$*" >> "$(dirname "$0")/../local-data/starts"\nexit "${TEST_START_EXIT:-0}"\n')
    (seed/'.gitignore').write_text('studio-de-anto/local-data/\n')
    (seed/'version.txt').write_text('original\n')
    git(seed,'add','.');git(seed,'commit','-m','Initial studio')
    git(seed,'remote','add','origin',str(remote));git(seed,'push','-u','origin',BRANCH)
    subprocess.run(['git','clone','--branch',BRANCH,str(remote),str(checkout)],check=True,capture_output=True)
    git(checkout,'config','user.name','Studio update test')
    git(checkout,'config','user.email','studio-update@example.invalid')
    data=checkout/'studio-de-anto/local-data';(data/'private').mkdir(parents=True)
    (data/'studio.sqlite').write_bytes(b'private-project-marker')
    (data/'private/credentials.json').write_text('{"gemini":"fake-private-key"}')
    return seed,checkout,data


def publish(seed):
    (seed/'version.txt').write_text('updated\n')
    git(seed,'add','version.txt');git(seed,'commit','-m','Studio improvement')
    git(seed,'push','origin',BRANCH)
    return git(seed,'rev-parse','HEAD')


def update(checkout,*args,start_exit=0):
    env={**os.environ,'TEST_START_EXIT':str(start_exit),'GIT_TERMINAL_PROMPT':'0'}
    return subprocess.run(['bash',str(checkout/'studio-de-anto/scripts/update-cloud.sh'),*args],env=env,capture_output=True,text=True,timeout=15)


def test_update_is_fast_forward_preserves_private_files_and_starts_once_per_run(repositories):
    seed,checkout,data=repositories
    previous=git(checkout,'rev-parse','HEAD')
    private={path:path.read_bytes() for path in data.rglob('*') if path.is_file()}
    target=publish(seed)
    result=update(checkout)
    assert result.returncode==0,result.stderr
    assert git(checkout,'rev-parse','HEAD')==target
    assert f'Versión anterior: {previous}' in result.stdout
    assert f'Versión nueva: {target}' in result.stdout
    assert f'switch --detach {previous}' in result.stdout
    assert git(checkout,'branch','--show-current')==BRANCH  # rollback was only printed
    assert all(path.read_bytes()==content for path,content in private.items())
    assert (data/'starts').read_text().splitlines()==['--background']
    assert git(checkout,'status','--porcelain')==''
    again=update(checkout)
    assert again.returncode==0 and 'Ya tienes la versión' in again.stdout
    assert git(checkout,'rev-parse','HEAD')==target
    assert (data/'starts').read_text().splitlines()==['--background','--background']


def test_check_fetches_without_changing_sources_or_starting(repositories):
    seed,checkout,data=repositories
    previous=git(checkout,'rev-parse','HEAD');target=publish(seed)
    result=update(checkout,'--check')
    assert result.returncode==0,result.stderr
    assert target in result.stdout and 'actualización disponible' in result.stdout
    assert git(checkout,'rev-parse','HEAD')==previous
    assert (checkout/'version.txt').read_text()=='original\n'
    assert git(checkout,'status','--porcelain')==''
    assert not (data/'starts').exists()


def test_check_when_current_does_not_start(repositories):
    _,checkout,data=repositories
    previous=git(checkout,'rev-parse','HEAD')
    result=update(checkout,'--check')
    assert result.returncode==0 and 'Ya tienes la versión' in result.stdout
    assert git(checkout,'rev-parse','HEAD')==previous
    assert not (data/'starts').exists()


@pytest.mark.parametrize('staged',[False,True])
def test_dirty_tracked_changes_stop_before_fetch(repositories,staged):
    seed,checkout,data=repositories
    publish(seed)
    (checkout/'version.txt').write_text('local edits\n')
    if staged:git(checkout,'add','version.txt')
    fetch_head=checkout/'.git/FETCH_HEAD'
    before=fetch_head.read_bytes() if fetch_head.exists() else None
    result=update(checkout)
    assert result.returncode!=0 and 'cambios locales rastreados' in result.stderr
    assert (checkout/'version.txt').read_text()=='local edits\n'
    assert (fetch_head.read_bytes() if fetch_head.exists() else None)==before
    assert not (data/'starts').exists()


@pytest.mark.parametrize('detached',[False,True])
def test_other_branch_or_detached_head_stops_before_fetch(repositories,detached):
    _,checkout,data=repositories
    git(checkout,'switch','--detach' if detached else '-c',*(() if detached else ('other-work',)))
    result=update(checkout,'--check')
    assert result.returncode!=0 and 'abre la rama' in result.stderr
    assert not (checkout/'.git/FETCH_HEAD').exists()
    assert not (data/'starts').exists()


def test_diverged_history_is_never_overwritten(repositories):
    seed,checkout,data=repositories
    publish(seed)
    (checkout/'local-work.txt').write_text('Keep this committed work\n')
    git(checkout,'add','local-work.txt');git(checkout,'commit','-m','Local work')
    previous=git(checkout,'rev-parse','HEAD')
    result=update(checkout)
    assert result.returncode!=0 and 'no contiene el remoto' in result.stderr
    assert git(checkout,'rev-parse','HEAD')==previous
    assert (checkout/'local-work.txt').read_text()=='Keep this committed work\n'
    assert not (data/'starts').exists()


def test_start_failure_keeps_updated_code_and_printed_recovery(repositories):
    seed,checkout,_=repositories
    previous=git(checkout,'rev-parse','HEAD');target=publish(seed)
    result=update(checkout,start_exit=7)
    assert result.returncode==7
    assert git(checkout,'rev-parse','HEAD')==target
    assert f'switch --detach {previous}' in result.stdout


def test_untracked_files_are_not_overwritten_by_update(repositories):
    seed,checkout,data=repositories
    (checkout/'new-file.txt').write_text('Local untracked work\n')
    (seed/'new-file.txt').write_text('Remote file\n')
    git(seed,'add','new-file.txt');git(seed,'commit','-m','Add a file');git(seed,'push','origin',BRANCH)
    previous=git(checkout,'rev-parse','HEAD')
    result=update(checkout)
    assert result.returncode!=0
    assert git(checkout,'rev-parse','HEAD')==previous
    assert (checkout/'new-file.txt').read_text()=='Local untracked work\n'
    assert not (data/'starts').exists()


def test_even_ignored_private_files_cannot_be_overwritten(repositories):
    seed,checkout,data=repositories
    secret=data/'private/credentials.json';before=secret.read_bytes()
    remote_secret=seed/'studio-de-anto/local-data/private/credentials.json'
    remote_secret.parent.mkdir(parents=True);remote_secret.write_text('{}')
    git(seed,'add','-f','studio-de-anto/local-data/private/credentials.json')
    git(seed,'commit','-m','Accidentally tracked ignored data');git(seed,'push','origin',BRANCH)
    previous=git(checkout,'rev-parse','HEAD')
    result=update(checkout)
    assert result.returncode!=0
    assert git(checkout,'rev-parse','HEAD')==previous
    assert secret.read_bytes()==before
    assert not (data/'starts').exists()
