const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

router.get('/', clientesController.index);

router.get('/:id', clientesController.show);

module.exports = router;