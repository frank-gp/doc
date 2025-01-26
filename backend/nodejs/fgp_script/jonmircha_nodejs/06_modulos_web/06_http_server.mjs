import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, {
    // "Content-Type": "text/html; charset=utf-8",
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end("Hello World! 😊");
});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("http://127.0.0.1:3000")
})