const express = require("express");
const path = require("path");

console.log(path.resolve("home.html"));

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("home.html"));
});

app.listen(3000);
