// Custom JSON parsing middleware
function customJsonParser(req, res, next) {
  if (req.headers["content-type"] === "application/json") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", () => {
      try {
        req.body = JSON.parse(data);
        next();
      } catch (error) {
        res.status(400).send("Invalid JSON");
      }
    });
  } else {
    next();
  }
}

// Use the custom JSON parsing middleware in the application
app.use(customJsonParser);
