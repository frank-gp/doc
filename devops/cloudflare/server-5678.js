const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`${new Date()} - ${req.method} ${req.url}`);
  res.end("hello world" + new Date());
});

server.listen(5678, () => {
  console.log("Server running at http://localhost:5678");
});
