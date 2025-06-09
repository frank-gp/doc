// server.js
const http = require('http');
const { handleRequest } = require('./routes');

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
