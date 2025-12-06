```js
/* 

// ========== Download ==========
https://www.mongodb.com/try/download/atlascli


// ========== connection ==========
mongosh
mongosh %MONGO_URI%
mongosh mongodb://localhost:27017
mongosh mongodb://localhost:27017/mydatabase
mongosh mongodb+srv://user:password@cluster0.olzxglo.mongodb.net/mydatabase
mongosh "mongodb+srv://cluster0.olzxglo.mongodb.net/" --apiVersion 1 --username user
mongosh "mongodb+srv://cluster0.olzxglo.mongodb.net/" --username user


show dbs
use school

show collections
*/

// ========== Basic ==========
db.createCollection("students");

db.createCollection("teachers", { capped: true, size: 10000000, max: 100 }, { autoIndexId: false });

db.courses.drop();

db.dropDatabase();

db.students.insertOne({ name: "Frank" });
db.students.insertMany([{ name: "frank 2" }, { name: "frank 3" }]);
db.students.insertMany([{ date: new Date() }]);

db.students.find();
db.students.find({ name: "Frank" });
db.students.find({ _id: 1, name: "Frank" });
db.students.find({ _id: ObjectId("661174000276c4fd4b16c9ba") });

db.students.updateOne({ name: "Frank" }, { $set: { age: 36 } });
db.students.updateOne({ name: "Frank" }, { $unset: { age: "" } });
db.students.updateMany({}, { $set: { name: "newName" } });
db.students.updateMany({ age: { $exists: true } }, { $set: { name: "newName" } });

db.students.deleteMany({});
db.students.deleteOne({ name: "Frank" });
db.students.deleteMany({ name: { $exists: true } });

db.students.createIndex({ name: 1 });
db.students.getIndexes();
db.students.dropIndex("name_-1");

// ==========  ==========

db.movies.find({}, { title: 1, year: 1, _id: 0 });
db.movies.find({}, { title: 1, year: 1, _id: 0 }).forEach((movie) => printjson(movie));

db.students.find().sort({ name: 1 });
db.students.find().sort({ name: -1 });

db.students.find().limit(1);
db.students.find().sort({ name: -1 }).limit(1);

//  db.students.find({query}, {projection})
db.students.find({}, { name: true });
db.students.find({}, { _id: false, name: true });
db.students.find({ age: { $exists: true } });

// no equale
db.students.find({ name: { $ne: "Ana" } });
// less than (menos que)
db.students.find({ age: { $lt: 5 } });
// less than or equale
db.students.find({ age: { $lte: 4 } });
// greater than
db.students.find({ age: { $gt: 4 } });
db.students.find({ age: { $gte: 4 } });
db.students.find({ team: { $gte: 4, $lte: 6 } });

db.students.find({ $and: [{ lec: 4 }, { team: { $lte: 5 } }] });
db.students.find({ $or: [{ lec: 4 }, { team: { $lte: 5 } }] });
db.students.find({ $nor: [{ lec: 4 }, { team: { $lte: 5 } }] });
db.students.find({ team: { $not: { $gte: 5 } } });

// field is included in... comparison operator
db.students.find({ nameField: { $in: ["Alex", "Ana"] } });
db.students.find({ nameField: { $nin: ["Alex", "Ana"] } });

db.students.find({ name: "Alex" }).explain("executionStats");
```
