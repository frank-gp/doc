import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

let data = [
  { name: "Frank", email: "back@mail.com" },
  { name: "Frank", email: "back@mail.com" },
];

app.get("/", (req, res) => {
  console.log(data);
  res.json(data);
});

app.post("/", (req, res) => {
  console.log(req.body);
  data.push(req.body);
  console.log(data);
  res.json(data);
});

app.delete("/", (req, res) => {
  data.shift();
  console.log(data);
  res.json(data);
});

app.listen(3000);
console.log("http://localhost:3000");
