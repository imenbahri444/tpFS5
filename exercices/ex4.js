const http = require('http');
const port = 4000;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Bonjour depuis le serveur Node.js !");
});
server.listen(port,()=>console.log(`Serveur lancé sur le port ${port}`));
