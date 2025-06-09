const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // Handling GET request
  if (method === "GET") {
    if (path === "/") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const newUser = JSON.parse(body);
        // Here you can save the new user to your database or perform other operations
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newUser));
      });
    } else {
      // Respond with 404 for other paths
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }

  // Handling POST request
  else if (method === "POST") {
    // Verifica si el método de la solicitud es POST
    if (path === "/") {
      // Verifica si la ruta de la solicitud es la raíz del servidor
      let body = ""; // Declara una variable para almacenar el cuerpo de la solicitud

      // Escucha eventos de "data" en el objeto de solicitud para recibir los datos
      req.on("data", (chunk) => {
        body += chunk.toString(); // Concatena los fragmentos de datos recibidos en la variable body
      });

      // Escucha el evento "end" para saber cuando se han recibido todos los datos
      req.on("end", () => {
        const newUser = JSON.parse(body); // Convierte el cuerpo de la solicitud (JSON) en un objeto JavaScript

        // Aquí puedes guardar el nuevo usuario en la base de datos u realizar otras operaciones

        // Establece el código de estado de la respuesta en 201 (Creado) y el tipo de contenido en "application/json"
        res.writeHead(201, { "Content-Type": "application/json" });

        // Envía la respuesta al cliente, que es el nuevo usuario convertido de nuevo a JSON
        res.end(JSON.stringify(newUser));
      });
    } else {
      // Si la ruta no es la raíz, devuelve una respuesta de "404 Not Found"
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }

  // Handling PUT request
  else if (method === "PUT") {
    if (path === "/") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const newUser = JSON.parse(body);
        // Here you can save the new user to your database or perform other operations
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newUser));
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }

  // Handling DELETE request
  else if (method === "DELETE") {
    if (path === "/") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const newUser = JSON.parse(body);
        // Here you can save the new user to your database or perform other operations
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newUser));
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }

  // Respond with 405 Method Not Allowed for unsupported methods
  else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
