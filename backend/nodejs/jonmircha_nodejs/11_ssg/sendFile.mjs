// app.mjs


import express from "express";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirname0 = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

app.use(express.static("."));

app.get("/contacto", (req, res) => {
  let fgpPath = "D:\\tutorial\\pages\\contacto.html";

  const filePath = path.join(__dirname0, "pages/contacto.html");
  res.sendFile(filePath);
//   res.sendFile(".\\pages\\contacto.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
