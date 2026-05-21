const { Sequelize } = require('sequelize')
// CONFIGURANDO CONEXÃO COM BANCO DE DADOS.
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;