const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.static("public"));

app.get("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.put("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.delete("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  // res.send("delete datas")
});

app.patch("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.options("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.propfind("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, console.log("localhost:3000"));
