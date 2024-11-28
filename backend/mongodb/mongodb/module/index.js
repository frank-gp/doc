const express = require("express");
const mongoose = require("mongoose");

const app = express.Router();

const noteSchema = new mongoose.Schema({ _id: String }, { strict: false });
const TempModel = mongoose.model("Temp", noteSchema);

app.get("/", async (req, res) => {
  try {
    const find = await TempModel.find().sort({ _id: -1 });
    res.status(200).json(find);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las notas" });
  }
});

// Obtener una nota por ID
app.get("/:id", async (req, res) => {
  try {
    const note = await TempModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Nota no encontrada" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la nota" });
  }
});

app.post("/", async (req, res) => {
  try {
    const reqBody = req.body;

    // Verificar si el _id está presente en el cuerpo de la solicitud, si no, generarlo automáticamente
    const _id =
      reqBody._id ||
      new Date()
        .toISOString()
        .replace(/[^0-9]/g, "")
        .slice(2, 14); // Generar _id si no existe en el cuerpo

    // Crear la nota con el _id (proporcionado o generado)
    const noteCreated = await TempModel.create({ ...reqBody, _id });

    res.status(201).json(noteCreated);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la nota" });
  }
});

// Actualizar una nota por ID
app.put("/:id", async (req, res) => {
  try {
    const updatedNote = await TempModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true, runValidators: true });
    if (!updatedNote) {
      return res.status(404).json({ error: "Nota no encontrada" });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la nota" });
  }
});

// Eliminar todas las notas
app.delete("/delete-all", async (req, res) => {
  console.log("delete-all");
  try {
    const result = await TempModel.deleteMany({});
    res.json({ message: "Todas las notas han sido eliminadas", deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar todas las notas" });
  }
});

// Eliminar una nota por ID
app.delete("/:id", async (req, res) => {
  try {
    const deletedNote = await TempModel.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Nota no encontrada" });
    }
    res.json({ message: "Nota eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la nota" });
  }
});

module.exports = app;
