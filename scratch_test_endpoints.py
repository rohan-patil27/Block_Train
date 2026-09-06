import httpx
import json

base_url = "http://localhost:8000/api/v1"

def login(username, password):
    r = httpx.post(f"{base_url}/auth/login", data={"username": username, "password": password})
    if r.status_code == 200:
        return r.json()["access_token"]
    return None

def test_endpoints():
    print("Testing GET /api/v1/health")
    print(httpx.get(f"{base_url}/health/").status_code)

    roles = ["controller1", "maintenance1", "divisional1", "management1", "crew1"]
    tokens = {}
    
    print("\nTesting Logins for all roles")
    for u in roles:
        t = login(u, "pass")
        tokens[u] = t
        print(f"User {u} logged in: {t is not None}")

    if not tokens.get("controller1"):
        print("Failed to login controller1, skipping rest")
        return
        
    t = tokens["controller1"]
    headers = {"Authorization": f"Bearer {t}"}
    
    print("\nTesting GET /api/v1/topology")
    r = httpx.get(f"{base_url}/topology/", headers=headers)
    print("topology:", r.status_code)
    
    print("\nTesting GET /api/v1/assets")
    r = httpx.get(f"{base_url}/assets/", headers=headers)
    print("assets:", r.status_code)
    
    # Check if other endpoints exist (blocks, trains may not be fully implemented)
    print("\nTesting GET /api/v1/blocks")
    r = httpx.get(f"{base_url}/blocks/", headers=headers)
    print("blocks:", r.status_code)
    
    print("\nTesting GET /api/v1/trains")
    r = httpx.get(f"{base_url}/trains/", headers=headers)
    print("trains:", r.status_code)

if __name__ == "__main__":
    test_endpoints()
