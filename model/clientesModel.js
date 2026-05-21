
const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

// ORM - MAPEANDO CLASSE PARA RABELA NO BANCO DE DADOS.
const clientes = sequelize.define('clientes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = clientes;