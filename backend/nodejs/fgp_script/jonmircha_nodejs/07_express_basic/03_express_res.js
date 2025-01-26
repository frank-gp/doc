import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  res.send("hello 👌03_express_res.js");
});

app.get("/json", (req, res) => {
  res.json({
    name: "frank",
    age: "35",
    youtube: "@frankgp_com",
  });
});

app.get("/file", (req, res) => {
  res.sendFile(resolve("hello.html"));
});

app.get("/template", (req, res) => {
  res.render("template");
});

app.get("/redirect", (req, res) => {
    res.redirect(301, "https://frank-gp.github.io/")
});

app.listen(8080, () => console.log("web http://localhost:3000"));
