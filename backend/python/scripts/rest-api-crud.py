from fastapi import FastAPI

app = FastAPI()

userMock = [
    {"id": 1,"name": "Frank GP"}
]

@app.get("/hello")
def hello():
    return "hello worlds"

@app.get("/user/findAll")
def findAll():
    return userMock

@app.get("/user/findOne/{id}")
def findOne(id:int):
    print("findOne")
    findItem = next((item for item in userMock if item["id"] == id), None)
    if findItem: return findItem
    # for item in userMock:
    #     if item["id"] == id:
    #         return item
    return "user not found"

@app.post("/user/create")
def create(body: dict):
    id = len(userMock) + 1
    newUser = {"id": id, **body}
    userMock.append(newUser)
    return newUser

@app.patch("/user/update/{id}")
def update(id: int, body: dict):
    for item in userMock:
        if item["id"] == id:
            item.update(body)
            return item
    return "user not found"

@app.delete("/user/delete/{id}")
def delete(id: int):
    for index,item in enumerate(userMock):
        if item["id"] == id:
            return userMock.pop(index)
            # userMock.remove(item)
            return "delete ok"
    return id