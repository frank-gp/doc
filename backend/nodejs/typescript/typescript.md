## cmd command

```bash

npm init -y

npm install express
npm install --save-dev typescript @types/node @types/express ts-node

npx tsc --init


```

## package.json

```json
{
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node src/index.ts",
    "start": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "morgan": "^1.10.0",
    "resend": "^3.2.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/morgan": "^1.9.9",
    "@types/node": "^20.12.7",
    "nodemon": "^3.1.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016",
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
    /* Completeness */
    "skipLibCheck": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## nodemon.json

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

## src/index.ts

```js
import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

interface Item {
  id: number;
  name: string;
  description: string;
}

let tempData: Item[] = [];
let currentId = 1;

// Create an item
app.post("/items", (req: Request, res: Response) => {
  const newItem: Item = { id: currentId++, ...req.body };
  tempData.push(newItem);
  res.status(201).json(newItem);
});

// Read all items
app.get("/items", (req: Request, res: Response) => {
  res.json(tempData);
});

// Read an item by id
app.get("/items/:id", (req: Request, res: Response) => {
  const item = tempData.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Update an item by id
app.put("/items/:id", (req: Request, res: Response) => {
  const itemIndex = tempData.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex >= 0) {
    tempData[itemIndex] = { id: parseInt(req.params.id), ...req.body };
    res.json(tempData[itemIndex]);
  } else {
    res.status(404).send("Item not found");
  }
});

// Delete an item by id
app.delete("/items/:id", (req: Request, res: Response) => {
  const itemIndex = tempData.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex >= 0) {
    const deletedItem = tempData.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).send("Item not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
