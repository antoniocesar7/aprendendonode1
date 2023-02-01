/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "Um titulo qualquer",
//     conteudo: "fasdfsadjçlfjsadçflkjsdçfkljsdçfklsjdçfklsdjçflksdjfçsdlkfjççsdklfjçsdlk"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Antonio",
    idade: 25,
    email: "antoniocesar@email.com"
})

//Usuario.sync({ force: true })