const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/sobre",function(req,res){
    res.sendFile(__dirname + "/sobre.html");
});

app.get("/blog",function(req,res){
    res.send("Bem-vindo ao meu blog!");
});




app.listen(8081,function(){
    console.log("Servidor rodando na  url http://localhost:8081");
});