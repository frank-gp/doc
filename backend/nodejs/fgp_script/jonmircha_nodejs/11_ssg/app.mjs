import express from "express";
import fs from "fs/promises";
import path from "path";
import markdownIt from "markdown-it";
import fm from "front-matter";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import url from "url";

const app = express();
const port = process.env.PORT || 3000;
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", "pages");
app.set("view engine", "pug");

app.use(express.static("public"));

// Rutas dinámicas desde archivos en la carpeta "pages"
const pagesDir = "pages";
// const pagesDir = path.join(__dirname, "pages");

const files = await fs.readdir(pagesDir);

for (let file of files) {
  const filePath = path.join(pagesDir, file); //jonmircha
  // const filePath = path.join(pagesDir, file);
  //   const filePath = path.join(__dirname, 'pages/contacto.html');
  // const filePathdirname = path.join(__dirname, pagesDir, file);
  // const filePath = path.join(pagesDir, file);

  // let extname = path.extname(filePath);
  let extname = path.extname(file);
  //   const filePath2 = "pages/" + file;
  // console.info(extname);

  if (extname === ".md" || extname === ".pug" || extname === ".html") {
    let fileName = path.basename(file, extname);
    // console.info(fileName)

    app.get("/" + fileName, async (req, res) => {
      try {
        if (extname === ".pug") {
          // console.info(filePath);
          //   res.render(fileName);
          res.render("hola");
          //   res.sendFile("pages/contacto.html");
        }

        if (extname === ".html") {
          // let fgpPath = "D:\\tutorial\\pages\\contacto.html";
          // console.log(filePathdirname);
          console.log(path.join(__dirname, filePath));
          // console.log(fgpPath);
          // res.end()
          // res.sendFile(filePath)
          res.sendFile(path.join(__dirname, filePath));
          //   res.render("pages/hola");
          //   const filePath = path.join(__dirname, 'pages/contacto.html');
          //   res.sendFile(filePath);
        }

        if (extname === ".md") {
          // let fileContent = await fs.readFile(filePath, "utf-8");
          let fileContent = await fs.readFile(filePath, "utf-8");
          let { attributes: frontMatterAttributes, body } = fm(fileContent);

          let attributes = frontMatterAttributes;
          let contentHTML = markdownIt().render(body);
          res.render("layout-markdown", { ...attributes, contentHTML });
        }
      } catch (err) {
        res.status(404).render("error-404");
      }
    });
  }
}

// pagina principal
app.get("/", (req, res) => {
  res.render("index");
});

// 404
app.use((req, res) => {
  res.status(404).render("error-404");
});

app.listen(port, () => console.log(`Sitio web corriendo en http://localhost:${port}`));
