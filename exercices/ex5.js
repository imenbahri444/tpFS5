const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Serveur mis à jour sans redémarrage manuel");
});

server.listen(8081, () => console.log("Serveur en écoute sur le port 8080"));
