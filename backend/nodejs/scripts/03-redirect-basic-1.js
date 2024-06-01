const http = require("http");

const server = http.createServer((req, res) => {
  const dataFind = data.find((x) => x.path === req.url);

  if (dataFind) {
    dataFind.engagements++;
    // res.writeHead(302, { Location: dataFind.destination });
    // res.end(); // End the response after setting the redirect headers
    res.end(JSON.stringify(data));
  } else {
    // If no match is found, send a 404 response
    // res.writeHead(404, { "Content-Type": "text/plain" });
    // res.end("Not Found");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }
});

const data = [
  { path: "/example", destination: "https://example.com", engagements: 0 },
  { path: "/google", destination: "https://google.com", engagements: 0 },
];

server.listen(3000);
