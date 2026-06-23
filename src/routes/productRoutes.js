const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// --- RUTAS DE LA WEB ---
router.get('/', productController.index);               // Ver la página
router.post('/products', productController.createWebProduct); // Enviar formulario web

// --- RUTAS DE LA API (JSON) ---
router.get('/api/products', productController.getApiProducts);   // Obtener JSON
router.post('/api/products', productController.createApiProduct); // Crear mediante API

module.exports = router;