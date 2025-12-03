console.log(btoa("Hello, World!"));
console.log(atob("SGVsbG8sIFdvcmxkIQ=="));

// Node.js script

// Codificar una cadena a Base64
const originalString = "Hello, World!";
const buffer = Buffer.from(originalString); // Crear un Buffer desde la cadena
const base64String = buffer.toString("base64"); // Codificar el Buffer a Base64
console.log(base64String); // Salida: "SGVsbG8sIFdvcmxkIQ=="

// Decodificar la cadena Base64 de vuelta a un Buffer
const decodedBuffer = Buffer.from(base64String, "base64"); // Decodificar la cadena Base64 a un Buffer
const decodedString = decodedBuffer.toString(); // Convertir el Buffer de vuelta a una cadena
console.log(decodedString); // Salida: "Hello, World!"
