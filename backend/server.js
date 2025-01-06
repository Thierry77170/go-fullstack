const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse rafraîchie du serveur !');
});

server.listen(3000, () => {
    console.log('Le serveur est en route sur le port 3000');
});