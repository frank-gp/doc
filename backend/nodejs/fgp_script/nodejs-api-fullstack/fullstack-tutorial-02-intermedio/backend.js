import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

let data = [
  { name: "Frank", email: "back@mail.com", id: 1 },
  { name: "Frank", email: "back@mail.com", id: 2 },
];

app.get("/", (req, res) => {
  console.log(data);
  res.json(data);
});

app.get("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const resource = data.find((r) => r.id === id);
  if (resource) {
    res.json(resource);
  } else {
    res.status(404).json({ message: "Recurso no encontrado" });
  }
});

app.post("/api", (req, res) => {
  const newData = req.body;
  newData.id = data.length + 1;
  data.push(newData);
  res.json(data);
});

// Endpoint para actualizar un recurso por ID usando PUT
app.put("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;

  // Buscamos el recurso por ID
  const _index = data.findIndex((r) => r.id === id);

  if (_index !== -1) {
    data[_index] = { id, ...updatedData };
    // res.json({ message: "Recurso actualizado con éxito" });
    res.json(data);
  } else {
    res.status(404).json({ message: "Recurso no encontrado" });
  }
});

// Endpoint para actualizar un recurso por ID usando PATCH
app.patch("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;

  // Buscamos el recurso por ID
  const oldData = data.find((x) => x.id === id);

  if (oldData) {
    // Aplicamos las actualizaciones parciales
    for (const key in newData) {
      oldData[key] = newData[key];
    }
    res.json({ message: "Recurso actualizado con éxito", data });
    // res.json(data);

  } else {
    res.status(404).json({ message: "Recurso no encontrado" });
  }
});

app.delete("/api", (req, res) => {
  data.shift();
  console.log(data);
  res.json(data);
});

// DELETE endpoint to remove a resource by ID
app.delete("/api/:id", (req, res) => {
  const resourceId = req.params.id;
  const _index = data.findIndex((item) => item.id === parseInt(resourceId));

  // res.json({_index})
  // console.log({_index})
  if (_index !== -1) {
    // Remove the resource from the data array
    const deletedResource = data.splice(_index, 1)[0];
    res.json({ message: "Resource deleted", deletedResource });
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
});

app.listen(3000);
console.log("http://localhost:3000");
