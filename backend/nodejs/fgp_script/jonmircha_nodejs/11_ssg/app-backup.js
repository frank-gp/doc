const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const markdownIt = require("markdown-it");
const fm = require("front-matter");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", "pages");
app.set("view engine", "pug");

app.use(express.static("public"));

// Rutas dinamicas desde ....
// const pagesDir = "pages";
const pagesDir = path.join(__dirname, "pages");

// const files = await fs.readdir(pagesDir);
// Utilizando readdirSync para sincronizar la lectura de archivos
// const files = fs.readdirSync(pagesDir);
// logica para archivos...

// Utilizando readdir para operaciones asíncronas

  

// app.listen(port, () => console.log("start..."));
