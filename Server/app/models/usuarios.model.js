const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
