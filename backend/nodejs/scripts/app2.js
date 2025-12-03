var http = require("http");

var data = {
  "/example": "http://example.com",
  "/google": "http://google.com",
};



let server = http.createServer((req, res) => {

    // Log the current domain to the console
    const currentDomain = req.headers.host;
    console.log("Current Domain:", currentDomain);

    
  if (req.url === "/displayKeys") {
    const keys = Object.keys(data);
    const protocol = req.socket.encrypted ? "https" : "http";
    const links = keys.map((key) => `<a target="_blank" href="${key}">${protocol}://${req.headers.host}${key}</a>`).join("<br><br>");
    
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>URL Shortener:</h1>${links}`);
  } else {
    const destination = data[req.url];
    if (destination) {
      res.writeHead(302, { location: destination });
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>hello world</h1>");
    }
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
