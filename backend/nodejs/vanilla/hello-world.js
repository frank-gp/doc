const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
