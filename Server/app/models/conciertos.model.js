const mongoose = require('mongoose');
const slugify = require('slugify');

const ConciertoSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true
  },
  nombre: { type: String, required: true },
  artista: { type: String, required: true },
  fecha: { type: Date, required: true },
  lugar: { type: String, required: true },
  precio: { type: Number, required: true }
}, {
  timestamps: true
});

// Middleware para generar slug antes de validar
ConciertoSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.generateSlug();
  }
  next();
});


ConciertoSchema.methods.generateSlug = function () {
  this.slug = slugify(this.nombre, { lower: true, strict: true }) + '-' + (Math.random() * Math.pow(36, 10) | 0).toString(36);
};

module.exports = mongoose.model('Concierto', ConciertoSchema);
