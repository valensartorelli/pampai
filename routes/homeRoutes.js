const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.index);

router.get('/quienes-somos', homeController.empresa);

router.get('/productos', homeController.productos);

router.get('/construccion-sustentable', homeController.construccion);

router.get('/presupuestos', homeController.presupuestos);

router.get('/contacto', homeController.contacto);



module.exports = router;