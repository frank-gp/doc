const { MongoClient, ObjectId } = require("mongodb");

class Database {
  constructor(uri, dbName, collectionName) {
    this.uri = uri;
    this.dbName = dbName;
    this.collectionName = collectionName;
    this.client = new MongoClient(uri);
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected successfully to the database");
    } catch (err) {
      console.error("Failed to connect to the database:", err);
    }
  }

  async createData(document) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(this.collectionName);
      const result = await collection.insertOne(document);
      console.log(result);
    } catch (err) {
      console.error("Error creating data:", err);
    }
  }

  async findData() {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(this.collectionName);
      const documents = await collection.find().toArray();
      console.log(documents);
    } catch (err) {
      console.error("Error finding data:", err);
    }
  }

  async deleteData(id) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(this.collectionName);
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      console.log(result);
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  }

  async updateData(id, update) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(this.collectionName);
      const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: update });
      console.log(result);
    } catch (err) {
      console.error("Error updating data:", err);
    }
  }

  async resetData() {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(this.collectionName);
      const result = await collection.deleteMany({});
      console.log(result);
    } catch (err) {
      console.error("Error resetting data:", err);
    }
  }
}

// Usage:
const uri = "mongodb://localhost:27017";
const dbName = "mydatabase";
const collectionName = "mycollection";
const db = new Database(uri, dbName, collectionName);
db.connect();

// db.createData({ name: "John 2", age: 30 });
// db.findData();
// db.deleteData("6611ca87d14b972a386ddd88");
// db.updateData("661191caffa475e27836db83", { name: "Updated 2", age: 35 });
// db.resetData();

module.exports = Database;
