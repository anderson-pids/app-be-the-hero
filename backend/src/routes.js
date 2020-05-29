const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    return response.json({
        evento: 'Criação do backend',
        dev: 'Anderson Pimentel'
    });
});

module.exports = routes;