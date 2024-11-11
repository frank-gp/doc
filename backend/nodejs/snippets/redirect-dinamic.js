const express = require("express");
const app = express();

const domain = "https://giomr.site";

app.get("/", (req, res) => {
  res.redirect(301, domain);
});

app.get("*", (req, res) => {
  const newUrl = domain + req.originalUrl;
  res.redirect(301, newUrl);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
