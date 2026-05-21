const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')    


// ORM - MAPEANDO CLASSE PARA RABELA NO BANCO DE DADOS.
const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Produto;
