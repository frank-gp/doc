// https://chat.openai.com/c/ce0b76a4-fd25-46b5-997b-fedce49b7fb5
const operations = [
  { insertOne: { document: { _id: 1, name: "John" } } },
  { insertOne: { document: { _id: 2, name: "Jane" } } },
  { updateOne: { filter: { _id: 1 }, update: { $set: { age: 30 } } } },
  { deleteOne: { filter: { name: "Jane" } } },
];

const result = db.collection.bulkWrite(operations);

const bulkOperations = [
  { insertOne: { document: { _id: 1, name: "Alice" } } },
  { insertOne: { document: { _id: 2, name: "Bob" } } },
  { updateOne: { filter: { _id: 1 }, update: { $set: { age: 30 } } } },
  { updateOne: { filter: { _id: 2 }, update: { $set: { age: 25 } } } },
  { replaceOne: { filter: { _id: 3 }, replacement: { name: "Charlie", age: 35 } } },
  { deleteOne: { filter: { name: "David" } } },
];

const result2 = db.collection.bulkWrite(bulkOperations);
