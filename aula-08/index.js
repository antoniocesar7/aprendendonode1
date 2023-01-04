const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Hello World!");
});

app.get("/sobre",function(req,res){
    res.send("Minha página sobre");
});

app.get("/blog",function(req,res){
    res.send("Bem-vindo ao meu blog!");
});

app.get('/ola/:cargo/:nome/:cor',function(req,res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+
    "<h2>Cargo: "+req.params.cargo+"</h2>"+
    "<h3>Cor: "+req.params.cor+"</h3>");
    
   
})


app.listen(8081,function(){
    console.log("Servidor rodando na  url http://localhost:8081");
});