# Nest JS

```bash
npm i -g @nestjs/cli

nest -v

nest

nest new new-proyect
nest new .

 nest generate resource
 nest generate resource [options] <schematic> [name] [path]
 nest g res

 npm run test
 npm run test:e2e

```
### Config VSCode

Preferences: Open Workspace Settings (JSON)

```json
{
  "material-icon-theme.activeIconPack": "nest"
}
```
### Chrome Tab

- (in console - inspect page)
cl// about:blank
fetch("http://localhost:3000/")

fetch("http://localhost:3000/")
.then(res=>res.text())
.then(data=>document.write(data))


```

### Packages

```bash

npm install morgan

npm i @nestjs/typeorm @nestjs/config typeorm pg

npm install uuid
npm install dotenv
npm install --save @nestjs/swagger
```
