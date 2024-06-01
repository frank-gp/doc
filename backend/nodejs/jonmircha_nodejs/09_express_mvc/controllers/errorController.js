const error404 = (req, res) => {
  res.status(404).render("error", {
    title: "error 404",
    message: "no found",
  });
};

export default {
  error404,
};
