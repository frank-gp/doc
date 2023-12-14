const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const filePath = path.join(__dirname, reqUrl.pathname);

  if (filePath.endsWith("/data.json")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else if (reqUrl.pathname === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    const reqParams = reqUrl.pathname.slice(1);
    const dataFind = data.find((entry) => entry.back_half === reqParams);

    if (dataFind) {
      dataFind.engagements++;
      console.log(dataFind);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, data: dataFind }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ success: false, message: "Not Found", data: data })
      );
    }
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const data = [
  { back_half: "google", destination: "https://google.com", engagements: 0 },
  { back_half: "example", destination: "https://example.com", engagements: 0 },
];
