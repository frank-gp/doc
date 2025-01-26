import { fileURLToPath } from "url";
import url from "url";
import path from "path";

// const __filename = fileURLToPath(".", import.meta.url);
// const __dirname = path.dirname(__filename);
// path.format
const __dirname_mircha = path.dirname(new URL(import.meta.url).pathname);
const __dirname_mircha_fgp = import.meta.url;
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// import { fileURLToPath } from "url";
const __dirname_suscriptor = fileURLToPath(new URL(".", import.meta.url));
const __dirname_suscriptor2 = url.fileURLToPath(new URL(".", import.meta.url));
const __dirname_fgp = path.dirname(url.fileURLToPath(import.meta.url));

// console.log(import.meta.url);
// console.log(__filename);
// console.log(__dirname);
console.log(__dirname_mircha);
console.log(__dirname_mircha_fgp);
console.log(__dirname_suscriptor);
// console.log(__dirname_suscriptor2);

let fgpPath = "D:\\tutorial\\pages\\contacto.html";
// console.info(fgpPath);
