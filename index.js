const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');


//Config
//Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
//app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Conexão com o Banco de Dados Mysql
const sequelize = new Sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

//Rotas
app.get('/cad', function(req, res) {
    //res.send('ROTA DE CADASTRO DE POSTS');
    res.render('formulario'); //não precisa colocar a extensão handlebars
})

app.post('/add', function(req, res){
    //req.body.conteudo
    //res.send('FORMULÁRIO RECEBIDO!');
    res.send("Texto: "+req.body.titulo+" Conteudo:"+req.body.conteudo)
})

app.listen(8081, function() {
    console.log("Servidor rodando na  url http://localhost:8081");
});