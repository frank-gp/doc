```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "env": "node --env-file=.env index.js",
    "dev-env": "node --env-file=.env --env-file=.development.env index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

# Angular19 & Nodejs package.json

```json
{
  "scripts": {
    "dev": "npm run dev --prefix backend",
    "start": "npm start --prefix angular19",
    "build": "npm run build --prefix angular19",
    "deploy": "git add . && git commit --amend --no-edit && git push --force"
  }
}
```

# ReactJS & NestJS package.json

```json
{
  "scripts": {
    "deploy": "npm run build && git add . && git commit --amend --no-edit && git push --force",
    "dev": "npm run dev --prefix front && npm run build --prefix front",
    "build": "npm run build --prefix front",
    "build:all": "npm run build --prefix back && npm run build --prefix front"
  }
}
```
