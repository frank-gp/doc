# Nest JS

```bash
npm i -g @nestjs/cli

nest -v
nest -h

nest new new-proyect
nest new .

# nest generate|g <schematic> [name] [path]
nest generate resource user modulesFolder
nest g res user modulesFolder
nest g res user --no-spec


npm run test
npm run test:e2e

```

## Config VSCode

### Plugins VSCode

- Material Icon Theme - Philipp Kief
- REST Client - Huachao Mao

`F1` Preferences: Open Workspace Settings (JSON)

```json
{
  "material-icon-theme.activeIconPack": "nest"
}
```

### Chrome Tab

- about:blank

```js
fetch("http://localhost:3000/");
```

```js
fetch("http://localhost:3000/")
  .then((res) => res.text())
  .then((data) => document.write(data));
```

### Node Packages

```bash

npm install morgan

npm install @nestjs/serve-static

npm i @nestjs/typeorm @nestjs/config typeorm pg

npm install uuid
npm install dotenv
npm install --save @nestjs/swagger
```

## request.rest file

```bash
###
GET http://localhost:3000/

###
GET http://localhost:3000/api/user

###
POST http://localhost:3000/api/user

###
PATCH http://localhost:3000/api/user/1

###
DELETE http://localhost:3000/api/user/1
```

## files

```ts
// src/main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as morgan from "morgan";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors();
  app.use(morgan("dev"));
  await app.listen(3000);
}
bootstrap();

// npm install morgan
```

```ts
// src/app.module.ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
      exclude: ["/api*"],
    }),

    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
