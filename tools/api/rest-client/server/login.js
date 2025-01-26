const http = require("http");

const users = {
  user: "password123", // Usuario simulado
};

const TOKEN = "Bearer abc123456"; // Token simulado

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Raw body received:", body);
      try {
        const data = JSON.parse(body);
        console.log("Parsed JSON:", data);

        const { username, password } = data;

        if (users[username] && users[username] === password) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ token: TOKEN }));
        } else {
          res.writeHead(401, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid credentials" }));
        }
      } catch (error) {
        console.error("JSON parsing error:", error);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Bad request" }));
      }
    });
  } else if (req.method === "GET" && req.url === "/protected") {
    // 📌 Verificar el header Authorization
    const authHeader = req.headers["authorization"];
    console.log("Authorization header received:", authHeader);

    if (authHeader === TOKEN) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Access granted to protected route" }));
    } else {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Forbidden: Invalid token" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
