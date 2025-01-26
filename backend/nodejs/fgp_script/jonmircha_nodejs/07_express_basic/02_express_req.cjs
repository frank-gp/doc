const express = require("express");

const app = express();

// http://localhost:3000/user/05-frank-35
app.get("/user/:id-:name-:age", (req, res) => {
  console.log(req.params);
  //   { id: '05', name: 'frank', age: '35' }
  res.end();
});

// irm "http://localhost:3000/search?id=12&name=frank&age=35"
app.get("/search", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

app.listen(3000);
