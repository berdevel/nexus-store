const express = require('express');
const path = require('path');
const app = express();

// Configuración de Vistas (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static('public')); // Archivos estáticos
app.use(express.json()); // Para entender JSON en la API
app.use(express.urlencoded({ extended: false })); // Para entender formularios

// Rutas (las crearemos ahora)
const productRoutes = require('./routes/productRoutes');
app.use('/', productRoutes);

module.exports = app;