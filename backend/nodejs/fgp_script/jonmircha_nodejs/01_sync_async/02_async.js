// non-blocking

const fs = require("fs");

console.log("fist");

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("third");
