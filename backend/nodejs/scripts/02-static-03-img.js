const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Get the file path from the request URL
  const filePath = path.join(__dirname, req.url);

  // Read the file and serve it
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If the file is not found, send a 404 response
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    } else {
      // Determine the content type based on the file extension
      const extname = path.extname(filePath);
      let contentType = "text/html";

      switch (extname) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
          contentType = "image/jpg";
          break;
        case ".gif":
          contentType = "image/gif";
          break;
        case ".webp":
          contentType = "image/webp";
          break;
      }

      // Set the appropriate content type and send the file data
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
