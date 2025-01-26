const error404 = (req, res) => {
  res.status(404).render("error", {
    title: "error 404 Not found",
    message: "la pagina que esta buscando no existe",
  });
};

module.exports = error404;
