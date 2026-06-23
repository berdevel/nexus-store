// src/controllers/productController.js

// Dejamos el array fuera para que actúe como nuestra "base de datos" temporal
const products = [
    { id: 1, name: "Teclado Mecánico", price: 80 },
    { id: 2, name: "Ratón Gaming", price: 45 }
];

const productController = {
    // 1. RENDERIZAR WEB: Muestra la página con el catálogo y el formulario
    index: (req, res) => {
        res.render('index', { products });
    },

    // 2. ACCIÓN WEB: Recibe los datos del formulario web y Redirecciona
    createWebProduct: (req, res) => {
        const { name, price } = req.body;
        
        if (name && price) {
            products.push({
                id: Date.now(), // ID temporal único basado en el tiempo
                name: name,
                price: Number(price)
            });
        }
        res.redirect('/'); // Recarga la página principal para ver el cambio
    },

    // 3. API GET: Devuelve el JSON
    getApiProducts: (req, res) => {
        res.json(products);
    },

    // 4. API POST: Recibe un JSON y responde con formato de API
    createApiProduct: (req, res) => {
        const { name, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({ 
                status: "error", 
                message: "Los campos 'name' y 'price' son obligatorios." 
            });
        }

        const newProduct = {
            id: Date.now(),
            name,
            price: Number(price)
        };

        products.push(newProduct);

        res.status(201).json({
            status: "success",
            message: "Producto creado exitosamente vía API",
            data: newProduct
        });
    }
};

module.exports = productController;