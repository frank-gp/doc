function cors1() {
  // Define una función llamada corsMiddleware que actuará como middleware de CORS
  function corsMiddleware(req, res, next) {
    // Establece el encabezado Access-Control-Allow-Origin para permitir solicitudes desde cualquier origen
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Establece el encabezado Access-Control-Allow-Methods para permitir ciertos métodos HTTP
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    // Establece el encabezado Access-Control-Allow-Headers para permitir ciertos encabezados en la solicitud
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Maneja las solicitudes de pre-vuelo (preflight requests)
    if (req.method === "OPTIONS") {
      // Si la solicitud es de tipo OPTIONS, responde con un estado 200 OK
      res.sendStatus(200);
    } else {
      // Si no es una solicitud OPTIONS, pasa al siguiente middleware
      next();
    }
  }
  // Retorna la función corsMiddleware para su uso como middleware
  return corsMiddleware;
}

// Utiliza el middleware de CORS en la aplicación
app.use(cors1());
