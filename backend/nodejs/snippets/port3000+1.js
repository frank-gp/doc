const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("Hello, World!");
});

// ========== port 3000+1 if 3000 is used ==========

let PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${PORT} is in use, trying the next one...`);
    PORT++;
    server.listen(PORT);
  }
});
