const express = require('express')
const funcionarios = require('../model/funcionariosModel')

module.exports = (router, funcionariosModel) => {
    // Rota para listar todos os/funcionarioss cadastrados no banco de dados
    router.get('/funcionarioss', async (req, res) => {
        const todosOsfuncionarios = await funcionariosModel.findAll()
        res.json(todosOsfuncionarios)
    })

    // Rota para cadastrar um clientes e inserir no banco de dados 
    router.post('/funcionarioss', async (req, res) => {
        try {
            const { nome, telefone, email, cargo, setor } = req.body
            const novoFuncionarios = await funcionariosModel.create({ nome, telefone, email, cargo, setor })

            res.status(201).json({
                mensagem: 'funcionario cadastrado com sucesso.',
                funcionario: novoFuncionarios
            })
        } catch (erro) {
            res.status(400).json({
                mensagem: 'Erro ao cadastrar funcionario. Verifique se o e-mail já existe',
            })
        }
    })

        router.delete('/funcionarioss/:id', async (req, res) => {
        try {
            const { id } = req.params
            const funcionarioExistente = await funcionariosModel.findByPk(id)

            if (!funcionarioExistente) {
                return res.status(404).json({ mensagem: 'funcionario não encontrado.' })
            }

            await funcionariosModel.destroy({ where: { id } })
            res.json({ mensagem: 'funcionario excluído com sucesso.' })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao excluir funcionario.' })
        }
    })

    router.put('/funcionarioss/:id', async (req, res) => {
        try {
            const { id } = req.params
            const { nome, telefone, email, cargo, setor } = req.body
            const funcionarioExistente = await funcionariosModel.findByPk(id)

            if (!funcionarioExistente) {
                return res.status(404).json({ mensagem: 'funcionarios não encontrado.' })
            }

            funcionarioExistente.nome = nome || funcionarioExistente.nome
            funcionarioExistente.telefone = telefone || funcionarioExistente.telefone
            funcionarioExistente.email = email || funcionarioExistente.email
            funcionarioExistente.cargo = cargo || funcionarioExistente.cargo
            funcionarioExistente.setor = setor || funcionarioExistente.setor

            await funcionarioExistente.save()
            res.json({ mensagem: 'funcionarios atualizado com sucesso.', funcionarios: funcionarioExistente })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao atualizar funcionarios.' })
        }
    })
}