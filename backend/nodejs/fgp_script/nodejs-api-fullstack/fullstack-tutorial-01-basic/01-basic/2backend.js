import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

let data = [
  { name: "frank", email: "user@mail.com" },
  { name: "frank", email: "user@mail.com" },
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
