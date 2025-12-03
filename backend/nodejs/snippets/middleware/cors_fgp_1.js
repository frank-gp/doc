// ========== CORS ==========
// CORS middleware function
function corsMiddleware(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Allow specific headers

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next(); // Pass control to the next middleware
  }
}

// Use the CORS middleware in the application
app.use(corsMiddleware);

// ========== CORS ==========

function corsMiddleware(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
  res.setHeader("Access-Control-Allow-Methods", "*"); // Permitir todos los métodos HTTP
  res.setHeader("Access-Control-Allow-Headers", "*"); // Permitir todos los encabezados

  // Manejar solicitudes preflight
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next(); // Pasar el control al siguiente middleware
  }
}

// Usar el middleware CORS en la aplicación
app.use(corsMiddleware);
