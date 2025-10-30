const http = require('http');

const port = process.argv[2] || 4000;  // prendre le port depuis la ligne de commande

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Bonjour depuis le serveur Node.js !");
});

server.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));
