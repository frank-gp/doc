const http = require("http");

const server = http.createServer((req, res) => {
  // Obtiene la dirección IP del cliente
  const clientIP = req.socket.remoteAddress;

  // Obtiene la URL de referencia (si está disponible)
  const referer = req.headers.referer || req.headers.referrer;

  const info = `Hola Mundo\nCliente IP: ${clientIP}\nReferencia: ${referer || "No disponible"}\n`;
  console.info(info);
  
  // Configura la respuesta HTTP con la información obtenida
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(info);
});

const PORT = 3000;
const IP = "127.0.0.1";
server.listen(PORT, IP, () => {
  console.log(`Servidor ejecutándose en http://${IP}:${PORT}/`);
});
