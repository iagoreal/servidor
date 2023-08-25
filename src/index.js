const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores')

const app = express();

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediário');
    next();
}

const intermediarioDaRota = (req, res, next) => {
    console.log('passei no intermediário da rota');
    next();
}

// intermediario independente
app.use(primeiroIntermediario);

// localhost:3000/professores + intermediario de rota
app.get('/professores/', intermediarioDaRota, filtrarProfessores);

//localhost:3000/professores/2
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);