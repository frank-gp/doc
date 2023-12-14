const http = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: ");
      res.write("File Not Found");
      res.end();
    } else {
      res.end(data);
    }
  });
});

const listeningListener = () => {
  console.info(`Server started at: http://${hostname}:${port}`);
};

server.listen(port, hostname, listeningListener);
