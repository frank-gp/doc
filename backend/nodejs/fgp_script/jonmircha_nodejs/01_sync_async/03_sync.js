// blocking

const fs = require("fs");

console.log("fist");

const data = fs.readFileSync("text.txt", "utf-8");

console.log(data);

console.log("third");
