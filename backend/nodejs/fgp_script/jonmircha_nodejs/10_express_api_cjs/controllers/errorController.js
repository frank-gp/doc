const error404 = (req, res) => {
  res.status(404).json({
    code: 404,
    message: "not found",
  });
};

module.exports = error404;
