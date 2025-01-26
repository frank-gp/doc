import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(resolve("hello.html"));
});

app.listen(3000, () => console.log("web http://localhost:3000"));
