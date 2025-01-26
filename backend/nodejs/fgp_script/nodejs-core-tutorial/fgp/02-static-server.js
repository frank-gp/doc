const http = require('http');
const fs = require('fs');
const path = require('path');

const puerto = 3000;

const server = http.createServer((req, res) => {
  // Ruta principal que muestra un mensaje de bienvenida
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvenido a mi servidor estático');
  }

  // Servir archivos estáticos desde la carpeta 'public'
  if (req.url.startsWith('/public/')) {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Archivo no encontrado');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

// Iniciar el servidor
server.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
