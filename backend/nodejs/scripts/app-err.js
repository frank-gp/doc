const http = require("http");

const data = {
  "/google": "https://google.com",
  "/example": "https://example.com",
};
// let destination = data["/google"];
// if (destination) {
//   console.log(destination);
// }

// let result = destination ? "Value if true" : "Value if false";
// console.log(result);

const server = http.createServer((req, res) => {
  // const path1 = req.url;

  // console.info(path1);

  const destination = data[req.url];
  if (destination) {
    // console.log(destination);
    res.writeHead(302, { location: destination });
    res.end();
  } else {
    // Set appropriate headers for a regular response
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  }

  // res.writeHead(200, {"Content-Type": "text/text"})
  // res.writeHead(302, { location: "https://example.com" });
//   res.end("hello world");
});

server.listen(3000);

// https://example.com/example
