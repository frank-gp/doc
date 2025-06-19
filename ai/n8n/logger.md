```sh
# Crear el archivo request-logger.js
sudo vim /usr/lib/node_modules/n8n/bin/request-logger.js
```

```javascript
const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");

const LOG_FILE = "/tmp/n8n-request.log";

// Asegura que el archivo exista
function writeToFile(data) {
  const logLine = `[${new Date().toISOString()}] ${data}\n`;
  fs.appendFile(LOG_FILE, logLine, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
}

function logRequest(module, options) {
  const { method, hostname, path: requestPath, headers } = options;
  const line = `[${module.toUpperCase()}] ${method || "GET"} https://${hostname}${requestPath}`;

  console.log(line);
  if (headers) {
    console.log("Headers:", headers);
  }

  // Guardar en archivo
  writeToFile(line);
  if (headers) {
    writeToFile("Headers: " + JSON.stringify(headers));
  }
}

// Interceptar HTTP
const originalHttpRequest = http.request;
http.request = function (options, callback) {
  logRequest("http", options);
  return originalHttpRequest.apply(this, arguments);
};

// Interceptar HTTPS
const originalHttpsRequest = https.request;
https.request = function (options, callback) {
  logRequest("https", options);
  return originalHttpsRequest.apply(this, arguments);
};

// (Opcional) Interceptar el body de las peticiones
const originalWrite = http.ClientRequest.prototype.write;
http.ClientRequest.prototype.write = function (chunk, encoding, callback) {
  const body = chunk?.toString();
  if (body) {
    // console.log("Request Body Chunk:", body);
    writeToFile("Body: " + body);
  }
  return originalWrite.call(this, chunk, encoding, callback);
};
```

```sh
# Editar el ejecutable de n8n
sudo vim /usr/bin/n8n
```

```javascript
// Busca esta parte
// require("source-map-support").install();
// require("reflect-metadata");

// Log all outgoing HTTP/HTTPS requests for debugging purposes
// const path = require('path'); // Asegúrate de que esto esté presente
require(path.join(__dirname, "request-logger"));
```

# 📖 Ver el contenido completo del log

```sh
cat /tmp/n8n-request.log

# Ver solo las últimas 20 líneas
tail /tmp/n8n-request.log

# Ver en tiempo real mientras se actualiza (modo streaming)
tail -f /tmp/n8n-request.log

# Buscar algo específico, como una URL o verbo HTTP
grep "POST" /tmp/n8n-request.log
grep "api.openai.com" /tmp/n8n-request.log

```

# Sugerencia opcional: registrar el cuerpo (body) de los requests

```js
const originalWrite = http.ClientRequest.prototype.write;
http.ClientRequest.prototype.write = function (chunk, encoding, callback) {
  console.log("Request Body Chunk:", chunk.toString());
  return originalWrite.call(this, chunk, encoding, callback);
};
```
