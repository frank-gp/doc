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



console.info(__filename1);
console.info(__filename2);

console.info(__dirname1);
console.info(__dirname2);
console.info(__dirname3);
console.info(__dirname4);
console.info(__dirname5);
console.info(__dirname6);
console.info(__dirname_macos);

