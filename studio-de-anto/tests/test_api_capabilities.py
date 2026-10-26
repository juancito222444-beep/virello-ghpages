"""A new interface must not mistake old/static API routes for working features."""
import json

import pytest
from fastapi.testclient import TestClient

from backend import models, store
from backend.app import app, APP_RELEASE


@pytest.fixture(autouse=True)
def isolated(tmp_path,monkeypatch):
    monkeypatch.setattr(store,'ROOT',tmp_path)
    def forbidden(*args,**kwargs):pytest.fail('Compatibility checks must never query a model')
    monkeypatch.setattr(models,'_api_client',forbidden)


def test_health_reports_actual_registered_capabilities_without_credentials(monkeypatch):
    monkeypatch.setenv('STUDIO_GEMINI_API_KEY','private-capability-marker')
    with TestClient(app) as client:
        response=client.get('/api/health')
        assert response.status_code==200
        health=response.json()
        assert health['release']==APP_RELEASE and health['api_version']=='1'
        assert set(health['features'])=={'director-v1','context-draft-v1','recovery-backups-v1'}
        assert response.headers['cache-control']=='no-store'
        assert 'private-capability-marker' not in json.dumps(health)


def test_missing_director_is_detected_without_static_405_or_inference(monkeypatch):
    with TestClient(app) as client:
        # Simulate a backend whose real route registry lacks the new operation,
        # even if its OpenAPI cache was generated before the route disappeared.
        client.get('/openapi.json')
        monkeypatch.setattr(app.router,'routes',[route for route in app.router.routes
                                               if getattr(route,'path',None)!='/api/director'])
        assert 'director-v1' not in client.get('/api/health').json()['features']
        result=client.post('/api/director',json={'project':'ignored','request':'No inferir'})
        assert result.status_code==404 and result.json()['error_code']=='API_NOT_FOUND'
        assert 'Actualiza y reinicia' in result.json()['detail']
        assert result.headers['cache-control']=='no-store'
        assert not store.rows('SELECT * FROM messages')


@pytest.mark.parametrize('method',['get','post','put','delete'])
def test_unknown_api_routes_never_serve_the_frontend(method):
    with TestClient(app) as client:
        result=getattr(client,method)('/api/not-an-operation')
        assert result.status_code==404
        assert result.headers['content-type'].startswith('application/json')
        assert result.json()['error_code']=='API_NOT_FOUND'
        assert '<html' not in result.text.lower()


def test_real_route_wrong_method_has_a_specific_method_error_and_allow_header():
    with TestClient(app) as client:
        result=client.post('/api/health')
        assert result.status_code==405
        assert result.json()['error_code']=='API_METHOD_NOT_ALLOWED'
        assert 'GET' in result.headers['allow']
        assert client.get('/api/health').status_code==200
