const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')


// ORM - MAPEANDO CLASSE PARA RABELA NO BANCO DE DADOS.
const Curso = sequelize.define('Curso', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidade: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    duracao: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Curso;