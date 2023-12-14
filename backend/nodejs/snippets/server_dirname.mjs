import http from "http";
import url from "url";
import path from "path";

var __filename1 = url.fileURLToPath(import.meta.url);
var __filename2 = url.fileURLToPath(new URL("text.txt", import.meta.url));

var __dirname1 = process.cwd();
var __dirname2 = path.resolve();
var __dirname3 = url.fileURLToPath(new URL(".", import.meta.url));
var __dirname4 = path.dirname(url.fileURLToPath(import.meta.url));
var __dirname5 = path.parse(url.fileURLToPath(import.meta.url)).dir;
var __dirname6 = url.fileURLToPath(path.parse(import.meta.url).dir);
var __dirname_macos = path.dirname(new URL(import.meta.url).pathname);

const server = http.createServer((req, res) => {

  res.end(`
    __filename1: ${__filename1}
    __filename2: ${__filename2}

    __dirname1: ${__dirname1}
    __dirname2: ${__dirname2}
    __dirname3: ${__dirname3}
    __dirname4: ${__dirname4}
    __dirname5: ${__dirname5}
    __dirname6: ${__dirname6}
    __dirname_macos: ${__dirname_macos}
  `);
  
});

server.listen(3000, () => console.info("port 3000"));
