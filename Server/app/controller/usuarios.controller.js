const Usuario = require('../models/usuarios.model');

// Crear usuario
const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).send('Usuario guardado');
  } catch (err) {
    res.status(500).send('Error al guardar usuario');
  }
};

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).send('Error al obtener usuarios');
  }
};
const obtenerunUsuario = async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await Usuario.findById(id); // tu modelo de Mongoose
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuario", error });
  }
};

const modificarunUsuario = async (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body; // los datos que vienen del frontend

  try {
    const usuario = await Usuario.findByIdAndUpdate(
      id,
      datosActualizados,
      { new: true } // devuelve el documento actualizado
    );

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json({
      mensaje: "Usuario actualizado correctamente",
      usuario
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar usuario", error });
  }
};

module.exports = { crearUsuario, obtenerUsuarios, obtenerunUsuario, modificarunUsuario };
