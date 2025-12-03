const mongoose = require("mongoose");

const shortenerSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: {
    type: String,
    enum: ["user", "admin"], // Valores permitidos para el rol
    default: "user", // Valor por defecto
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const AuthModel = mongoose.model("Auth123", shortenerSchema);

module.exports = AuthModel;
