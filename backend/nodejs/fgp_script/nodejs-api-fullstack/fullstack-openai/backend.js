const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

let data = [
  {
    id: 1,
    name: "Item 1",
    description: "This is the first item",
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is the second item",
  },
  {
    id: 3,
    name: "Item 3",
    description: "This is the third item",
  },
];

// GET endpoint to retrieve all resources
app.get("/api/resource", (req, res) => {
  res.json(data);
});

// POST endpoint to create a new resource
app.post("/api/resource", (req, res) => {
  const newData = req.body;
  newData.id = data.length + 1; // Generate the ID based on the array length
  data.push(newData);
  res.json(newData);
});

// PUT endpoint to update a resource by ID
app.put("/api/resource/:id", (req, res) => {
  const resourceId = req.params.id;
  const updatedData = req.body;
  const resourceIndex = data.findIndex((item) => item.id === parseInt(resourceId));

  if (resourceIndex !== -1) {
    data[resourceIndex] = { ...data[resourceIndex], ...updatedData };
    res.json(data[resourceIndex]);
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
});

// PATCH endpoint to partially update a resource by ID
app.patch("/api/resource/:id", (req, res) => {
  const resourceId = req.params.id;
  const patchData = req.body;
  const resourceIndex = data.findIndex((item) => item.id === parseInt(resourceId));

  if (resourceIndex !== -1) {
    data[resourceIndex] = { ...data[resourceIndex], ...patchData };
    res.json(data[resourceIndex]);
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
