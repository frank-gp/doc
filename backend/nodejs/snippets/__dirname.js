const http = require("http");
const path = require("path");

var __filename1 = module.filename;

var __dirname1 = process.cwd();
var __dirname2 = path.resolve();
var __dirname3 = module.path;

let data = `
${__filename} _____ __filename
${__filename1} _____ module.filename
${__dirname} _____ __dirname
${__dirname1} _____ process.cwd()
${__dirname2} _____ path.resolve()
${__dirname3} _____ module.path
`;
console.log(data);

const server = http.createServer((req, res) => {
  res.end(data);
});

server.listen(3000, () => console.info("http://localhost:3000"));
