const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html')
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works-page.html')
})

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/photo-album.html')
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});