const http = require("http");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "uploads");

// Crear la carpeta 'uploads' si no existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    const boundary = req.headers["content-type"].split("boundary=")[1];
    let rawData = "";

    req.on("data", (chunk) => {
      rawData += chunk.toString();
    });

    req.on("end", () => {
      const parts = rawData.split(`--${boundary}`);
      const filePart = parts.find((part) => part.includes("filename="));

      if (!filePart) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "No file uploaded" }));
      }

      // Extraer nombre del archivo
      const match = filePart.match(/filename="(.+?)"/);
      if (!match) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Invalid file format" }));
      }

      const filename = match[1];
      const fileData = filePart.split("\r\n\r\n")[1].split("\r\n--")[0];

      // Guardar el archivo
      fs.writeFile(path.join(uploadDir, filename), fileData, "binary", (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ error: "Error saving file" }));
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "File uploaded successfully", filename }));
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`File upload server running on http://localhost:${PORT}`);
});
