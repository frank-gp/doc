const http = require("http");

const server = http.createServer((req, res) => {
  // Agrega este console.log para ver cada vez que se haga una petición
  console.log(`Petición recibida para la URL: ${req.url} con el método: ${req.method}`);
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});