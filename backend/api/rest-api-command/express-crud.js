const express = require("express");
const app = express();
const PORT = 3000;

// Array to store data
let arrayData = [{ id: 1, name: "John" }];

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static("public"));

// Create operation - POST
app.post("/api", (req, res) => {
  const newData = req.body;
  arrayData.push(newData);
  res.json({ message: "Data added successfully", data: newData });
});

// Read operation - GET all data
app.get("/api", (req, res) => {
  res.json(arrayData);
});

// Read operation - GET single data by id
app.get("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = arrayData.find((item) => item.id === id);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

// Update operation - PUT
app.put("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = arrayData.findIndex((item) => item.id === id);
  if (index !== -1) {
    arrayData[index] = req.body;
    res.json({ message: "Data updated successfully", data: arrayData[index] });
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

// Delete operation - DELETE
app.delete("/api/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = arrayData.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedData = arrayData.splice(index, 1);
    res.json({ message: "Data deleted successfully", data: deletedData });
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
