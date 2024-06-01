const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "mydatabase";
const mycollection = "mycollection";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to connectToDatabase ");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
}
connectToDatabase();

async function createData() {
  document = { name: "John 2", age: 30 };
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  const result = await collection.insertOne(document);
  console.log(result);
}

async function findData() {
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  const documents = await collection.find().toArray();
  console.log(documents);
}

async function deleteData() {
  const id = "6611ba99a01f4472f1fd761a";
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  console.log(result);
}

async function updateData() {
  const id = "661191caffa475e27836db83";
  const update = { name: "Updated 2", age: 35 };
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: update });
  console.log(result);
}

async function resetData() {
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  const result = await collection.deleteMany({});
  console.log(result);
}

// createData();
// findData();
// deleteData();
// updateData();
// resetData()
module.exports = { findData, createData, deleteData, updateData, resetData };
// const app = require("./fgp.js")
// const app = await import("./fgp.js")
