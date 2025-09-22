const express = require('express');
const router = express.Router();
const conciertosController = require('../controller/conciertos.controller');

// CRUD
router.get('/', conciertosController.findAll);
// router.get('/:id', conciertosController.findOne);
router.get('/:slug', conciertosController.findOne);
router.post('/', conciertosController.create);
// router.put('/:id', conciertosController.update);
router.put('/:slug', conciertosController.update);
// router.delete('/:id', conciertosController.delete);
router.delete('/:slug', conciertosController.delete);

module.exports = router;
