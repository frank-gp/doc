const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
console.log("iniciando...");

mongoose
  // .connect("mongodb://localhost:27017/test")
  .connect("mongodb://nico:password@monguito:27017/miapp?authSource=admin")
  // .connect('mongodb://nico:password@localhost:27018/test?authSource=admin')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define an empty schema
const itemSchema = new mongoose.Schema({}, { strict: false });

// Create the model
const Item = mongoose.model("Item", itemSchema);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/", async (req, res) => {
  console.log("listando chanchitos...");
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to drop all items
app.delete("/drop-all", async (req, res) => {
  try {
    await Item.deleteMany({});
    res.status(200).json({ message: "All items have been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
