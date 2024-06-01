const http = require("http");
const fs = require("fs");
// const path = require("path");

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/html');

  fs.readFile("folder/index.html", "utf8", (err, data) => {
    res.end(data);
  });

  // const pathFile = path.join(__dirname, "index.html");
  // fs.readFile(pathFile, "utf8", (err, data) => {
  //   res.end(data);
  // });
});

server.listen(3000);
