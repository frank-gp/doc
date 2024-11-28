const express = require("express");
const app = express();

const domain = "/note";

app.get("/", (req, res) => {
  res.redirect(301, domain);
});

// app.get("*", (req, res) => {
//   const newUrl = domain + req.originalUrl;
//   res.redirect(301, newUrl);
// });

app.get("*", (req, res, next) => {
  // Verifica si la URL contiene "/notepad/"
  if (req.originalUrl.startsWith("/notepad/")) {
    // Reemplaza "/notepad/" por "/note/"
    const newUrl = req.originalUrl.replace("/notepad/", "/note/");
    res.redirect(301, newUrl); // Redirección permanente
  } else {
    next();
  }
});

module.exports = app;
