import { basename, dirname, extname } from "path";

const ruta = "/ruta/principal/archivo.txt";

const nombreArchivo = basename(ruta);
const nombreDirectorio = dirname(ruta);
const extension = extname(ruta);

console.log(nombreArchivo);
console.log(nombreDirectorio);
console.log(extension);
