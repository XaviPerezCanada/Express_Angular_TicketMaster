const express = require('express');
const router = express.Router();
const conciertosController = require('../controller/conciertos.controller');

// CRUD
router.get('/', conciertosController.findAll);
router.get('/:id', conciertosController.findOne);
router.post('/', conciertosController.create);
router.put('/:id', conciertosController.update);
router.delete('/:id', conciertosController.delete);

module.exports = router;
