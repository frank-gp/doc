const http = require("http");

const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}`;
  console.log(log);
  res.end("Hello world\n" + log);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
