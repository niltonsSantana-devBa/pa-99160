
const express = require('express')
const cors = require('cors')
const sequelize = require('./config/db')
const Curso = require('./model/cursoModel')
const Aluno = require('./model/alunoModel')
const Professor = require('./model/professorModel')

// CONFIGURANDO SERVIDOR EXPRESS.

const router = express()
router.use(cors()) // permite o front-end acessar a API.
router.use(express.json()) // permite o servidor entender JSON,

const port = 3000

// DEFININDO ROTAS.

require('./routes/cursoRoutes')(router, Curso)
require('./routes/alunoRoutes')(router, Aluno)
require('./routes/professorRoutes')(router, Professor)



// INICIAR API E CONECTAR AO BANCO DE DADOS 
sequelize.sync().then(() => {
    router.listen(port, () => {
        console.log(`👌Servidor rodando em http://localhost:${port}`)
        console.log('✳️ Banco de dados sincronizado.')
    })
}).catch((erro) => {
    console.error('❌ Erro ao conectar ou sincronizar com o banco de dados:', erro)
})