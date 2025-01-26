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

// Rutas dinámicas desde archivos en la carpeta "pages"
const pagesDir = "pages";

async function setupApp() {
  const files = await fs.readdir(pagesDir);
  console.info(files);

  // Additional setup logic can go here

  app.listen(port, () =>
    console.log(`Sitio web corriendo en http://localhost:${port}`)
  );
}

// Call the async function to set up the app
setupApp();
