
const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
// const Sequelize = require('sequelize');


//Config
//Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
//app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    Post.findAll().then(function (posts) {
        // Filtrando os dados antes de mandar para View
        const context = {
            postsContext: posts.map(post => {
                return {
                    titulo: post.titulo,
                    conteudo: post.conteudo
                }
            })
        }
        res.render('home', { posts: context. postsContext })
    })
})
// app.get('/', function(req, res)  {
    
//    Post.findAll().then(function(posts){
//         res.render("home", {posts:posts});
//     })
// }) 

// app.get('/', function(req, res){
//     Post.findAll().then(function(posts){
//         res.render('home', {posts: posts})
//     })
// })

app.get('/cad', function(req, res) {
    //res.send('ROTA DE CADASTRO DE POSTS');
    res.render('formulario'); //não precisa colocar a extensão handlebars
})

app.post('/add', function(req, res){
    //req.body.conteudo
    //res.send('FORMULÁRIO RECEBIDO!');
    //res.send("Texto: "+req.body.titulo+" Conteudo:"+req.body.conteudo)

    // Post.create({
    //     titulo: req.body.titulo,
    //     conteudo: req.body.conteudo
    // })
    
    // Post.create({
    //     titulo: req.body.titulo,
    //     conteudo: req.body.conteudo
    // }).then(function(){
    //     res.send("Post criado com sucesso!!!")
    // }).catch(function(erro){
    //     res.send("Houve um erro: "+ erro)
    // })
    
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
    })
})

app.listen(8081, function() {
    console.log("Servidor rodando na  url http://localhost:8081");
});