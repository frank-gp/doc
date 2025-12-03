const express = require("express");
const path = require("path");
const app = express();

const buildPath = path.join(__dirname, "./frontend/");
app.use(express.static(buildPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor React corriendo en http://localhost:${PORT}`);
});
