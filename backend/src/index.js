const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();

// Converte body da req em json
app.use(express.json());
// Permite que os frontends possam acessar liberando o cross origin
app.use(cors());
// disponibiliza as rotas do app
app.use(routes);


app.listen(3333);