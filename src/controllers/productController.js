const products = [
    { id: 1, name: "Teclado Mecánico", price: 80 },
    { id: 2, name: "Ratón Gaming", price: 45 }
];

const productController = {
    // Renderiza la página web
    index: (req, res) => {
        res.render('index', { products });
    },
    // Endpoint para la API
    getApiProducts: (req, res) => {
        res.json(products);
    }
};

module.exports = productController;