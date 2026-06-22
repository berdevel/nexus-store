const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta Web
router.get('/', productController.index);

// Ruta API
router.get('/api/products', productController.getApiProducts);

module.exports = router;