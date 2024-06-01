import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("hello 👌00_hello.js");
  console.log(req);
  console.log(res);
});

app.listen(3000, () => console.log("web http://localhost:3000"));
