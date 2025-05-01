# typeorm

- https://typeorm.io/#quick-start
- https://www.postgresql.org/download/
- https://fgp.one/postgresql.md

## Command

```bash
npx typeorm init

npx typeorm init --database postgress --express

npx ts-node-dev --respawn src/index.ts
npx nodemon
```

### package.json

```json
{
  "name": "typeorm-sample",
  "version": "0.0.1",
  "description": "Awesome project developed with TypeORM.",
  "type": "commonjs",
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^16.11.10",
    "nodemon": "^3.1.0",
    "ts-node": "10.9.1",
    "typescript": "4.5.2"
  },
  "dependencies": {
    "express": "^4.19.2",
    "pg": "^8.4.0",
    "reflect-metadata": "^0.1.13",
    "typeorm": "0.3.20"
  },
  "scripts": {
    "start": "ts-node-dev --respawn src/index.ts",
    "typeorm": "typeorm-ts-node-commonjs"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["es5", "es6"],
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./build",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "esModuleInterop": true
  }
}
```

### nodemon.json

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

### data-source.ts

```js
import "reflect-metadata";
import { DataSource } from "typeorm";
import { ProductEntity } from "../entity/ProductsEtity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [ProductEntity],
  migrations: [],
  subscribers: [],
  dropSchema: true,
});
```
