const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Read the content of index.html
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      // Send the HTML content as the response
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
