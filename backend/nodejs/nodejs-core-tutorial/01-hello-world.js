const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

server.on("request", (request, response) => {
  const result = fs.readFileSync("./01-hello-world.txt");
  response.setHeader("Content-Type", "text/plain");
  response.end(result);
});

server.listen(3000, "127.0.0.1", () => {
  console.info("Server has started on: ", server.address());
});
