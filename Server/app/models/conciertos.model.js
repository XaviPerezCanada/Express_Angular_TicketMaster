const mongoose = require('mongoose');

const ConciertoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  artista: { type: String, required: true },
  fecha: { type: Date, required: true },
  lugar: { type: String, required: true },
  precio: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Concierto', ConciertoSchema);
