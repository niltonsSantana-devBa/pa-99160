
const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

// CONFIGURANDO CONEXÃO COM BANCO DE DADOS.
const sequelize = new Sequelize('db_api2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// ORM - MAPEANDO CLASSE PARA RABELA NO BANCO DE DADOS.
const Cliente = sequelize.define('Cliente', {
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
    }
})

const Produtos = sequelize.define('Produtos', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    lote: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

const Motos = sequelize.define('Motos', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cilindrada: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    ano_do_modelo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipo_de_motor: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Carros = sequelize.define('Carros', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    quilometragem: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    ano_do_modelo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    combustivel: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


// CONFIGURANDO SERVIDOR EXPRESS.

const app = express()
app.use(cors()) // permite o front-end acessar a API.
app.use(express.json()) // permite o servidor entender JSON,

const port = 3000

// DEFININDO ROTAS.

app.get('/clientes', async (req, res) => {
    const todosOsClientes = await Cliente.findAll()
    res.json(todosOsClientes)
})

app.get('/produtos', async (req, res) => {
    const todosOsProdutos = await Produtos.findAll()
    res.json(todosOsProdutos)
})

app.get('/motos', async (req, res) => {
    const todosASMotos = await motos.findAll()
    res.json(todosASMotos)
})

app.get('/carros', async (req,res) => {
    const todosOsCarros = await carros.findAll()
    res.json(todosOsCarros)
})



// Rota para cadastrar um cliente e inserir no banco de dados 
app.post('/clientes', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body
        const novoCliente = await Cliente.create({ nome, email, telefone })

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso.',
            cliente: novoCliente
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar cliente. Verifique se o e-mail já existe',
        })
    }
})

app.post('/produtos', async (req, res) => {
    try {
        const { nome, quantidade, lote, preco } = req.body
        const novoProdutos = await Produtos.create({ nome, quantidade, lote, preco })

        res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso.',
            produtos: novoProdutos
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar produto.',
        })
    }
})


app.post('/motos', async (req, res) => {
    try {
        const { nome, marca, cilindrada, ano_do_modelo, tipo_de_motor } = req.body
        const novaMotos = await Motos.create({ nome, marca, cilindrada, ano_do_modelo, tipo_de_motor })

        res.status(201).json({
            mensagem: 'Nova moto criada.',
            motos: novaMotos
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar moto.',
        })
    }
})

app.post('/carros', async (req, res) => {
    try {
        const { nome, marca, quilometragem, ano_do_modelo, combustivel } = req.body
        const novoCarros = await Carros.create({ nome, marca, quilometragem, ano_do_modelo, combustivel })

        res.status(201).json({
            mensagem: 'Novo carro criado.',
            carros: novoCarros
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar carro.',
        })
    }
})



// INICIAR API E CONECTAR AO BANCO DE DADOS 
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`👌Servidor rodando em http://localhost:${port}`)
        console.log('✳️ Banco de dados sincronizado.')
    })
}).catch((erro) => {
    console.error('❌ Erro ao conectar ou sincronizar com o banco de dados')
})