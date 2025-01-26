import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("Home 😊");
  } else if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("Home 👌");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("404 ✖️");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("http://127.0.0.1:3000");
});
