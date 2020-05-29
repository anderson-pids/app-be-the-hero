const express = require('express');
const routes = require('./routes');

const app = express();

// Converte body da req em json
app.use(express.json());
app.use(routes);


app.listen(3333);