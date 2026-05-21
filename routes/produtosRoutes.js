const express = require('express')
const produto = require('../model/produtosModel')

module.exports = (router, produtoModel) => {
    // Rota para listar todos os produtos cadastrados no banco de dados
    router.get('/produtos', async (req, res) => {
        const todosOsprodutos = await produtoModel.findAll()
        res.json(todosOsprodutos)
    })

    // Rota para cadastrar um produto e inserir no banco de dados 
    router.post('/produtos', async (req, res) => {
        try {
            const { nome, lote, quantidade, preco } = req.body
            const novoproduto = await produtoModel.create({ nome, lote, quantidade, preco })

            res.status(201).json({
                mensagem: 'produto cadastrado com sucesso.',
                produto: novoproduto
            })
        } catch (erro) {
            res.status(400).json({
                mensagem: 'Erro ao cadastrar produto. Verifique se o e-mail já existe',
            })
        }
    })

    router.delete('/produtos/:id', async (req, res) => {
        try {
            const { id } = req.params
            const produtoExistente = await produtoModel.findByPk(id)

            if (!produtoExistente) {
                return res.status(404).json({ mensagem: 'produto não encontrado.' })
            }

            await produtosModel.destroy({ where: { id } })
            res.json({ mensagem: 'produto excluído com sucesso.' })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao excluir produto.' })
        }
    })

    router.put('/produtos/:id', async (req, res) => {
        try {
            const { id } = req.params
            const { nome, email, telefone } = req.body
            const produtoExistente = await produtosModel.findByPk(id)

            if (!produtoExistente) {
                return res.status(404).json({ mensagem: 'produto não encontrado.' })
            }

            produtoExistente.nome = nome || produtoExistente.nome
            produtoExistente.lote = lote || produtoExistente.lote
            produtoExistente.quantidade = quantidade || produtoExistente.quantidade
            produtoExistente.preco = preco || produtoExistente.preco

            await produtoExistente.save()
            res.json({ mensagem: 'produto atualizado com sucesso.', produto: produtoExistente })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao atualizar produto.' })
        }
    })
}