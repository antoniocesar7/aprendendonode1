const Sequelize = require('sequelize');
//Conexão com o Banco de Dados Mysql
const sequelize = new Sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}