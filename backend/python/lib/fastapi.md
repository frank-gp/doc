https://fastapi.tiangolo.com/

```sh
pip install "fastapi[standard]"

fastapi dev main.py

```

# Classic

```sh
pip install fastapi uvicorn

# VSCode plugin: Python Microsoft microsoft.com
# Python: Select Interpreter

uvicorn main:app
uvicorn main:app --reload --port 8000 --host 0.0.0.0

# --host 0.0.0.0 acceder desde cualquier dispositivo en la red

GET http://127.0.0.1:8000/docs
GET http://127.0.0.1:8000/redoc
```
