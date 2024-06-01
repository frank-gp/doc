import { parse } from "url";

const urlString = "https://example.com/ruta?parameter1=value1&parameter2=value2";

const parsedUrl = parse(urlString, true);

console.log("Protocolo:", parsedUrl.protocol);
console.log("Hostname:", parsedUrl.hostname);
console.log("Pathname:", parsedUrl.pathname);
console.log("Parameter:", parsedUrl.query);
