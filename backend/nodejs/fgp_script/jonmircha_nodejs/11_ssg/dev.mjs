import path from 'path';
import { fileURLToPath } from 'url';
import { URL } from 'url';


const __filename1 = fileURLToPath(import.meta.url);
const __dirname1 = path.dirname(__filename1);

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;


console.log(__filename)
console.log(__dirname)

console.log(__filename1)
console.log(__dirname1)