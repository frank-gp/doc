/* 
{
    "document": {
        "name": "John 1",
        "age": 30
    }
}
 */
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

// Initialize Express
const app = express();
const port = 3000;

// Connection URI
const uri = "mongodb://localhost:27017"; // Change this URI according to your MongoDB setup

// Database Name
const dbName = "mydatabase";

// Collection Name
const mycollection = "mycollection"; // Define your collection name here

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to connectToDatabase ");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
}

// Middleware to parse JSON bodies
app.use(express.json());

// Route to create a document
app.post("/", async (req, res) => {
  const { document } = req.body;
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  try {
    const result = await collection.insertOne(document);
    res.json({ message: "Document inserted successfully", insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create document", message: err.message });
  }
});

// Route to delete a document by its ID
app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: "Document deleted successfully", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete document", message: err.message });
  }
});

// Route to reset/clear all documents in the collection
app.delete("/reset", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  try {
    const result = await collection.deleteMany({});
    res.json({ message: "All documents deleted successfully", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete documents", message: err.message });
  }
});

// Route to update a document by its ID
// {
//   "name": "Updated Name",
//   "age": 35
// }
app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  try {
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: update });
    res.json({ message: "Document updated successfully", modifiedCount: result.modifiedCount });
  } catch (err) {
    res.status(500).json({ error: "Failed to update document", message: err.message });
  }
});

// Route to display all documents
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  try {
    const documents = await collection.find().toArray();
    res.json(documents);
  } catch (err) {
    res.status(500).json({ error: "Failed to display documents", message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Call the function to connect to the database
connectToDatabase();
