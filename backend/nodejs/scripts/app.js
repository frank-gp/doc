const http = require("http");

const data = {
  "/iPlpe": "http://example.com",
  "/example": "http://example.com",
  "/google": "http://google.com",
};

const server = http.createServer((req, res) => {
  const destination = data[req.url];

  if (destination) {
    res.writeHead(302, { location: destination });
    res.end();
  } else {
    const links = Object.keys(data)
      .map((key) => `<a href="${key}">${req.headers.host}${key}</a>`)
      .join("<br><br>");

    const htmlResponse = `<h1>URL Shortener:</h1>${links}`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlResponse);
  }
});

server.listen(3000);
