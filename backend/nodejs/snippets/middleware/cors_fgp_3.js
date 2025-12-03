function cors1() {
  function corsMiddleware(req, res, next) {
    // Verifica si la solicitud proviene de example.com
    const allowedOrigin = "http://example.com";
    const requestOrigin = req.headers.origin;

    // Si la solicitud proviene de example.com, permite el acceso
    if (requestOrigin === allowedOrigin) {
      res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    } else {
      // Si no proviene de example.com, no se permite el acceso
      res.setHeader("Access-Control-Allow-Origin", "false");
    }

    // Establece los demás encabezados CORS
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Maneja las solicitudes de pre-vuelo
    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  }
  return corsMiddleware;
}

// Utiliza el middleware de CORS en la aplicación
app.use(cors1());
