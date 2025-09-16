const Concierto = require('../models/conciertos.model');

// Obtener todos los conciertos
exports.findAll = async (req, res) => {
  try {
    const conciertos = await Concierto.find();
    res.json(conciertos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un concierto por ID
exports.findOne = async (req, res) => {
  try {
    const concierto = await Concierto.findById(req.params.id);
    if (!concierto) return res.status(404).json({ message: "Concierto no encontrado" });
    res.json(concierto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo concierto
exports.create = async (req, res) => {
  try {
    const nuevoConcierto = new Concierto(req.body);
    const saved = await nuevoConcierto.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar concierto
exports.update = async (req, res) => {
  try {
    const updated = await Concierto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Concierto no encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar concierto
exports.delete = async (req, res) => {
  try {
    const deleted = await Concierto.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Concierto no encontrado" });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
