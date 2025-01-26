import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("hello 02_express_req.js");
});

app.get("/user/:id-:name-:age", (req, res) => {
  // http://localhost:3000/user/05-frank-35
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(
    `
    <h1>${req.params.name}</h1>
    <h2>${req.params.id}</h2>
    <h2>${req.params.age}</h2>
    `
  );
});

app.get("/search", (req, res) => {
  // http://localhost:3000/search?id=12&name=frank&age=35
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(
    `
    <h1>${req.query.name}</h1>
    <h2>${req.query.id}</h2>
    <h2>${req.query.age}</h2>
    `
  );
});

app.listen(3000, () => console.log("web http://localhost:3000"));
