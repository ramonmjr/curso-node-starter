const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

// Primeira rota
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);

module.exports = routes;