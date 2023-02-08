const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


//Config
//Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
//app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

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
    res.send('FORMULÁRIO RECEBIDO!');
})

app.listen(8081, function() {
    console.log("Servidor rodando na  url http://localhost:8081");
});