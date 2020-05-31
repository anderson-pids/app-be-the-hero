const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;