const express = require('express');

const app = express();

// Página inicial do catálogo
app.get('/', (req, res) => {
    res.send(`
        <h1>Catálogo de Heróis</h1>

        <p>Bem-vindo ao catálogo de heróis da Marvel e DC!</p>

        <h2>Empresas</h2>

        <p><a href="/marvel">Marvel</a></p>
        <p><a href="/dc">DC</a></p>

        <hr>

        <h2>Personagens</h2>

        <p><a href="/personagem/marvel/Thor">Thor</a></p>
        <p><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></p>
        <p><a href="/personagem/dc/Batman">Batman</a></p>
        <p><a href="/personagem/dc/Superman">Superman</a></p>
    `);
});

// Página da Marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <h1>Marvel</h1>

        <p>A Marvel é uma empresa conhecida por seus heróis e suas histórias em quadrinhos.</p>

        <h2>Personagens</h2>

        <ul>
            <li><a href="/personagem/marvel/Thor">Thor</a></li>
            <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
        </ul>

        <p><a href="/">Voltar para a página inicial</a></p>
    `);
});

// Página da DC
app.get('/dc', (req, res) => {
    res.send(`
        <h1>DC</h1>

        <p>A DC é uma empresa conhecida por personagens como Batman e Superman.</p>

        <h2>Personagens</h2>

        <ul>
            <li><a href="/personagem/dc/Batman">Batman</a></li>
            <li><a href="/personagem/dc/Superman">Superman</a></li>
        </ul>

        <p><a href="/">Voltar para a página inicial</a></p>
    `);
});

// Página que recebe a empresa e o nome do personagem pela URL
app.get('/personagem/:empresa/:nome', (req, res) => {
    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <h1>Informações do personagem</h1>

        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Personagem:</strong> ${nome}</p>

        <p><a href="/">Voltar para a página inicial</a></p>
    `);
});

// Inicia o servidor
app.listen(3030, () => {
    console.log('Servidor iniciado na porta 3030!');
});