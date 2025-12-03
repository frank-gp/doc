const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static("."));

// Define a custom token for Morgan to display the client's domain
morgan.token("domain", (req, res) => req.headers["host"]);

const fileLog = "morganAccess.log";
const accessLogStream = fs.createWriteStream(path.join(__dirname, fileLog), { flags: "a" });

const custom_token = ":date[iso] :method :status :domain:url :res[content-length] - :response-time ms";
// Use Morgan middleware with the custom token
app.use(morgan(custom_token, { stream: accessLogStream }));
app.use(morgan(custom_token));

// Function to generate HTML response with logs wrapped inside the <title> tag
function generateHTMLResponse(data) {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Morgan Logs</title>
  </head>
<style>
  *{
    background-color: #000;
    color: white;
  }
</style>
  <body>
    <pre>${data}</pre>
  </body>
</html>`;
}

app.get("/morgan", (req, res) => {
  fs.readFile(path.join(__dirname, fileLog), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading log file");
    }
    const htmlResponse = generateHTMLResponse(data);
    res.set("Content-Type", "text/html");
    res.send(htmlResponse);
  });
});

app.get("/", (req, res) => {
  res.redirect("/morgan");
});

app.listen(3000, () => console.log("Server listening on port 3000"));
