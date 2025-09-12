const express = require('express');
const router = express.Router();
const { crearUsuario, obtenerUsuarios, obtenerunUsuario,modificarunUsuario } = require('../controller/usuarios.controller');

// Rutas
router.post('/usuarios', crearUsuario);
router.get('/usuarios', obtenerUsuarios);
router.get('/usuarios/:id', obtenerunUsuario);
router.put('/usuarios/:id', modificarunUsuario);


module.exports = router;
