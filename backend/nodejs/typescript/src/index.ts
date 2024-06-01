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
