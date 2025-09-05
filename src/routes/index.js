const express = require('express');
const routes = require('./routes');

const produtoController = require('./controllers/produtoController');
const clienteController = require('./controllers/clienteController');

routes.post('/produtos', produtoController.create);
routes.get('/produtos', produtoController.read);
routes.get('/produtos/:id', produtoController.readById);

routes.post('/clientes', clienteController.create);
routes.get('/clientes', clienteController.read);
routes.get('/clientes/:id', clienteController.readById);

module.exports = routes