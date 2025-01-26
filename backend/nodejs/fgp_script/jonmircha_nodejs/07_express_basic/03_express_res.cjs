const express = require("express");
const path = require("path");

const app = express();

app.get("/json", (req, res) => {
  res.json({ name: "Frank", email: "email@mail.com" });
});

app.get("/file", (req, res) => {
  res.sendFile(path.resolve("home.html"));
});

app.set("view engine", "ejs");
// folder: views
app.get("/template", (req, res) => {
  res.render("template.ejs");
});

app.get("/redirect", (req, res) => {
  res.redirect(301, "https://example.com");
});

app.listen(3000, console.log("starting..."));
