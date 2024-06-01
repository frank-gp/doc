import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

let database = [
  { name: "frank", email: "user@mail.com" },
  { name: "frank", email: "user@mail.com" },
];

app.get("/", (req, res) => {
  res.json(database);
});

app.post("/", (req, res) => {
  database.push(req.body);
  res.json(database);
});

app.delete("/", (req, res) => {
  database.shift();
  res.json(database);
});

app.listen(3000);
console.info("htts://localhost:3000/")
