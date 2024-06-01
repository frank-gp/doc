const { MongoClient, ObjectID } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Change this URI according to your MongoDB setup

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
  } catch (err) {
    console.error('Failed to connect to the database:', err);
  }
}

// Function to create a document
async function createDocument(collectionName, document) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  try {
    const result = await collection.insertOne(document);
    console.log('Document inserted successfully:', result.insertedId);
  } catch (err) {
    console.error('Failed to create document:', err);
  }
}

// Function to delete a document by its ID
async function deleteDocumentById(collectionName, id) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  try {
    const result = await collection.deleteOne({ _id: new ObjectID(id) });
    console.log('Document deleted successfully:', result.deletedCount);
  } catch (err) {
    console.error('Failed to delete document:', err);
  }
}

// Function to update a document by its ID
async function updateDocumentById(collectionName, id, update) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  try {
    const result = await collection.updateOne({ _id: new ObjectID(id) }, { $set: update });
    console.log('Document updated successfully:', result.modifiedCount);
  } catch (err) {
    console.error('Failed to update document:', err);
  }
}

// Function to display all documents in a collection
async function displayDocuments(collectionName) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  try {
    const documents = await collection.find().toArray();
    console.log('Documents in collection', collectionName, ':', documents);
  } catch (err) {
    console.error('Failed to display documents:', err);
  }
}

// Call the function to connect to the database
connectToDatabase();

// Example usage of the functions
(async () => {
//   await createDocument('mycollection', { name: 'John', age: 30 });
  await displayDocuments('mycollection');
//   await updateDocumentById('mycollection', '606cd8bc9f13000d5477c433', { age: 31 });
//   await displayDocuments('mycollection');
//   await deleteDocumentById('mycollection', '606cd8bc9f13000d5477c433');
//   await displayDocuments('mycollection');
})();

