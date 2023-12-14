const http = require("http");
const path = require("path");

var __dirname1 = process.cwd();
var __dirname2 = path.resolve();

const server = http.createServer((req, res) => {
  res.end(`
    __dirname: ${__dirname}
    __dirname1: ${__dirname1}
    __dirname2: ${__dirname2}
  `);
});

server.listen(3000, () => console.info("port 3000"));
