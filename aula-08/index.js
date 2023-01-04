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

app.get('/ola/:cargo/:nome',function(req,res){
    res.send("Ola");
})


app.listen(8081,function(){
    console.log("Servidor rodando na  url http://localhost:8081");
});