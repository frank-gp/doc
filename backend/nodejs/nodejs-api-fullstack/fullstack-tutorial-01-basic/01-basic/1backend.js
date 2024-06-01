import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const data = [
  { name: "frank", email: "frank@mail.com" },
  { name: "frank", email: "frank@mail.com" },
];

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/", (req, res) => {
  data.push(req.body);
  res.json(data);
});

app.delete("/", (req, res) => {
  data.shift();
  res.json(data);
});

app.listen(3000);
console.info("http://localhost:3000/");
