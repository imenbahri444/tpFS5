const fs = require('fs');
console.log("Reading file, please wait...");
fs.readFile('data.txt','utf8',(err,data)=>{
    if(err){console.error(err); return;}
    console.log(data);
});
