import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const Animal = mongoose.model("Animal", new mongoose.Schema({}, { strict: false }));

mongoose.connect('mongodb://nico:password@monguito:27018/miapp?authSource=admin')
// mongoose.connect("mongodb+srv://user_tutorial:password_tutorial@cluster1.f97mzsv.mongodb.net/moviesDB");
// mongoose.connect("mongodb://localhost:27017/test");

app.get("/", async (_req, res) => {
  console.log("listando... chanchitos...");
  const animales = await Animal.find();
  return res.send(animales);
});
app.post("/", async (_req, res) => {
  console.log("creando...");
  const result = await Animal.create(_req.body);
  return res.send(result);
});

app.delete("/drop-all", async (req, res) => {
  try {
    await Animal.deleteMany({});
    res.status(200).json({ message: "All Animal have been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => console.log("listening..."));
