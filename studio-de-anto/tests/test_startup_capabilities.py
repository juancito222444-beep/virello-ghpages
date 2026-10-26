"""A new static interface must not conceal an old backend without Director."""
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.testclient import TestClient
import pytest

from backend import runtime
from backend.app import app,health


def test_old_backend_serves_new_interface_but_director_returns_405(tmp_path):
    (tmp_path/'index.html').write_text('Director interface')
    old=FastAPI(title='STUDIO DE ANTO')

    @old.post('/api/chat')
    def chat():return {'old':True}

    old.mount('/',StaticFiles(directory=tmp_path,html=True),name='frontend')
    with TestClient(old) as client:
        assert client.get('/').status_code==200
        response=client.post('/api/director',json={'project':'isolated','objective':'hola'})
        assert response.status_code==405
        assert response.json()['detail']=='Method Not Allowed'
        assert not runtime.api_capabilities_match(client.get('/openapi.json').json())


def test_current_api_has_all_capabilities_without_starting_models_or_storage():
    assert runtime.api_capabilities_match(app.openapi())
    assert runtime.health_capabilities_match(health())


@pytest.mark.parametrize('document',[
    None,[],{},
    {'info':None,'paths':{}},
    {'info':{'title':'STUDIO DE ANTO'},'paths':None},
    {'info':{'title':'Other application'},'paths':{'/api/chat':{'post':{}},'/api/director':{'post':{}}}},
    {'info':{'title':'STUDIO DE ANTO'},'paths':{'/api/chat':{'post':{}},'/api/director':{'get':{}}}},
    {'info':{'title':'STUDIO DE ANTO'},'paths':{'/api/chat':{'post':{}},'/api/director':{'post':None}}},
])
def test_missing_or_wrong_methods_never_count_as_ready(document):
    assert not runtime.api_capabilities_match(document)


@pytest.mark.parametrize('document',[
    None,{},
    {'api_version':'1','features':[]},
    {'api_version':'2','features':['director-v1']},
    {'api_version':1,'features':['director-v1']},
    {'api_version':'1','features':'director-v1'},
])
def test_health_requires_protocol_and_explicit_director_feature(document):
    assert not runtime.health_capabilities_match(document)
