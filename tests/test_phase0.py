import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/api/v1/health/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_login_success():
    response = client.post("/api/v1/auth/login", data={"username": "controller1", "password": "pass"})
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_login_failure():
    response = client.post("/api/v1/auth/login", data={"username": "controller1", "password": "wrong"})
    assert response.status_code == 400

def test_get_assets_unauthorized():
    response = client.get("/api/v1/assets/")
    assert response.status_code == 401

def test_get_assets_authorized():
    login_response = client.post("/api/v1/auth/login", data={"username": "controller1", "password": "pass"})
    if login_response.status_code != 200:
        pytest.skip("Seed data not present or login failed")
    token = login_response.json()["access_token"]
    
    response = client.get("/api/v1/assets/", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_topology():
    login_response = client.post("/api/v1/auth/login", data={"username": "controller1", "password": "pass"})
    if login_response.status_code != 200:
        pytest.skip("Seed data not present or login failed")
    token = login_response.json()["access_token"]
    
    response = client.get("/api/v1/topology/", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    data = response.json()
    assert "nodes" in data
    assert "sections" in data
