const express = require('express')
const Professor = require('../model/professorModel')

module.exports = (router, ProfessorModel) => {
    // Rota para listar todos os professores cadastrados no banco de dados
    router.get('/professores', async (req, res) => {
        const todosOsProfessores = await ProfessorModel.findAll()
        res.json(todosOsProfessores)
    })

    // Rota para cadastrar um professore e inserir no banco de dados 
    router.post('/professores', async (req, res) => {
        try {
            const { nome, email, telefone } = req.body
            const novoProfessore = await ProfessorModel.create({ nome, email, telefone })

            res.status(201).json({
                mensagem: 'Professore cadastrado com sucesso.',
                professore: novoProfessore
            })
        } catch (erro) {
            res.status(400).json({
                mensagem: 'Erro ao cadastrar professore. Verifique se o e-mail já existe',
            })
        }
    })

    router.delete('/professores/:id', async (req, res) => {
        try {
            const { id } = req.params
            const professoreExistente = await ProfessorModel.findByPk(id)

            if (!professoreExistente) {
                return res.status(404).json({ mensagem: 'Professore não encontrado.' })
            }

            await ProfessorModel.destroy({ where: { id } })
            res.json({ mensagem: 'Professore excluído com sucesso.' })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao excluir professore.' })
        }
    })

    router.put('/professores/:id', async (req, res) => {
        try {
            const { id } = req.params
            const { nome, email, telefone } = req.body
            const professoreExistente = await ProfessorModel.findByPk(id)

            if (!professoreExistente) {
                return res.status(404).json({ mensagem: 'Professore não encontrado.' })
            }

            professoreExistente.nome = nome || professoreExistente.nome
            professoreExistente.email = email || professoreExistente.email
            professoreExistente.telefone = telefone || professoreExistente.telefone

            await professoreExistente.save()
            res.json({ mensagem: 'Professore atualizado com sucesso.', professore: professoreExistente })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao atualizar professore.' })
        }
    })
}