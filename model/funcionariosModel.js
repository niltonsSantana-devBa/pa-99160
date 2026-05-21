const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')


// ORM - MAPEANDO CLASSE PARA RABELA NO BANCO DE DADOS.
const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
})

module.exports = Funcionario;