const express = require('express');

const app = express();

// Rota principal do site
app.get('/', (req, res) => {
    res.send('Bem-vindo ao site da Marvel e DC!');
});

// Rota da Marvel
app.get('/marvel', (req, res) => {
    res.send('Este é o universo de heróis da Marvel.');
});

// Rota da DC
app.get('/dc', (req, res) => {
    res.send('Este é o universo de heróis da DC.');
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000!');
});