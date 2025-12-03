import http from "http";

const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.end("hello world");
});

server.listen(3000, () => console.info("http://localhost:3000"));
