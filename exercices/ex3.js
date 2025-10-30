const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.readFile('message.txt','utf8',(err,data)=>{
        if(err){res.writeHead(500);res.end("Erreur serveur");return;}
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<h1>Titre</h1><p>${data}</p><footer>Mon serveur Node.js</footer>`);
    });
});
server.listen(8080,()=>console.log("Serveur en écoute sur le port 8080"));
