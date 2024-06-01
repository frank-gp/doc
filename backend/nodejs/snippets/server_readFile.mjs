import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      res.end("Error reading the file");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => console.info("http://localhost:3000"));
