const http = require("http");

const server = http.createServer((req, res) => {
  const protocol = req.socket.encrypted ? "https" : "http";
  const fullUrl = `${protocol}://${req.headers.host}${req.url}`;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Full URL: " + fullUrl);
});

server.listen(3000);
