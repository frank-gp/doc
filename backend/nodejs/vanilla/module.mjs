import { createServer } from 'http';
import { parse } from 'url';

const data = [
  {
    url: 'google',
    redirect: 'https://google.com/',
    visits: 0,
  },
  {
    url: 'example',
    redirect: 'https://example.com/',
    visits: 0,
  },
];

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else if (parsedUrl.pathname.startsWith('/')) {
    const requestedUrl = parsedUrl.pathname.slice(1);
    const redirectEntry = data.find((entry) => entry.url === requestedUrl);

    if (redirectEntry) {
      redirectEntry.visits++;
      res.writeHead(302, { 'Location': redirectEntry.redirect });
      res.end();
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}/`);
});
