const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Conexão com o Banco de Dados Mysql
const sequelize = new Sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

app.listen(8081, function() {
    console.log("Servidor rodando na  url http://localhost:8081");
});