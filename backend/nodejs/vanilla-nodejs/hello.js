import { createServer } from 'http';

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  res.write('Hello, World!\n');
  
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
