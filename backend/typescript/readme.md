## TypeScript

https://github.com/fgp555/nodejs-typescript

```bash
npm init -y
npx tsc --init

npm install express mysql2 typeorm cors morgan pg dotenv

npm install --save-dev typescript ts-node @types/node
npm install --save-dev @types/express @types/morgan @types/cors nodemon


npx ts-node-dev --respawn src/index.ts

npx tsc --watch
node --watch dist/index.js

npm run build
npm run serve

# build file
npx tsc index.ts

npm install -g ts-node-dev
ts-node-dev --respawn resume/monolito_homework_simple.ts

```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016",
    "lib": ["ES6"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    /* Modules */
    "module": "commonjs",
    "rootDir": "./src",
    /* Emit */
    "outDir": "./dist",
    /* Interop Constraints */
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    /* Type Checking */
    "strict": true,
    "strictPropertyInitialization": false,
    /* Completeness */
    "skipLibCheck": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["./node_modules/**"]
}
```

### index.ts

```ts
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### package.json

```json
  "scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc",
    "serve": "node dist/index.js",
    "dev": "npx ts-node-dev --respawn src/index.ts"
  },

```
