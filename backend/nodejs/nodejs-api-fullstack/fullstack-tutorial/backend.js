import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

let data = [
  { name: "Frank", email: "user@mail.com" },
  { name: "Frank", email: "user@mail.com" },
];

app.get("/", (request, response) => {
  const html = `
        <h1>User List</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            ${data
              .map(
                (user) => `
              <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
  `;

  response.setHeader("Content-Type", "text/html");
  response.send(html);
});

app.get("/api", (request, response) => {
  response.json(data);
});

app.post("/api", (request, response) => {
  data.push(request.body);
  console.log(data);
  response.send(data);
});

app.delete("/api", (request, response) => {
  data = [];
  response.send(data);
});

app.listen(3000);
console.log("http://localhost:3000/");
