import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("conectado"))
  .catch((err) => console.log(err));

const itemSchema = new mongoose.Schema({}, { strict: false });

const Item = mongoose.model("Item", itemSchema);
const User = mongoose.model("User", itemSchema);

Item.find()
  .then((items) => console.log("Items:", items))
  .catch((err) => console.log(err));

User.create({ name: "Frank GP" })
  .then((user) => {
    console.log("User created:", user);
    return User.find();
  })
  .then((users) => console.log("Users:", users))
  .catch((err) => console.log(err));
