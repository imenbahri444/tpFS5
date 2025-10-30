const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.writeHead(500);
            res.end("Erreur serveur");
            return;
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });
});

server.listen(8080, () => console.log("Serveur HTML en écoute sur le port 8080"));
