const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Hello, World! for the root path
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
  } else if (req.url === "/example") {
    // Redirect to "https://example.com"
    res.writeHead(302, { Location: "https://example.com" });
    res.end();
  } else if (req.url === "/contact") {
    // Custom response for "/contact"
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact us at: contact@example.com\n");
  } else {
    // Handle other requests with a default 404 response
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
