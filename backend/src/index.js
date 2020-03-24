
const express = require('express');
const cors = require('cors');

//colocar o ./ para informar que é um arq e não um pacote
const routes = require('./routes');

const app = express();

//usado para determinar quais endereços poderão usar a aplicação
app.use(cors());

//informando ao express que será usado json como formado de dados
app.use(express.json());
app.use(routes);

app.listen(3333);