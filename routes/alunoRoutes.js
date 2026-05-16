
const express = require('express')
const Aluno = require('../model/alunoModel')

module.exports = (router, AlunoModel) => {
    // Rota para listar todos os alunos cadastrados no banco de dados
    router.get('/alunos', async (req, res) => {
        const todosOsAlunos = await AlunoModel.findAll()
        res.json(todosOsAlunos)
    })

    // Rota para cadastrar um aluno e inserir no banco de dados 
    router.post('/alunos', async (req, res) => {
        try {
            const { nome, email, telefone } = req.body
            const novoAluno = await AlunoModel.create({ nome, email, telefone })

            res.status(201).json({
                mensagem: 'Aluno cadastrado com sucesso.',
                aluno: novoAluno
            })
        } catch (erro) {
            res.status(400).json({
                mensagem: 'Erro ao cadastrar aluno. Verifique se o e-mail já existe',
            })
        }
    })
    
    router.delete('/alunos/:id', async (req, res) => {
        try {
            const { id } = req.params
            const alunoExistente = await AlunoModel.findByPk(id)

            if (!alunoExistente) {
                return res.status(404).json({ mensagem: 'Aluno não encontrado.' })
            }

            await AlunoModel.destroy({ where: { id } })
            res.json({ mensagem: 'Aluno excluído com sucesso.' })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao excluir aluno.' })
        }
    })

    router.put('/alunos/:id', async (req, res) => {
        try {
            const { id } = req.params
            const { nome, email, telefone } = req.body
            const alunoExistente = await AlunoModel.findByPk(id)

            if (!alunoExistente) {
                return res.status(404).json({ mensagem: 'Aluno não encontrado.' })
            }

            alunoExistente.nome = nome || alunoExistente.nome
            alunoExistente.email = email || alunoExistente.email
            alunoExistente.telefone = telefone || alunoExistente.telefone

            await alunoExistente.save()
            res.json({ mensagem: 'Aluno atualizado com sucesso.', aluno: alunoExistente })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao atualizar aluno.' })
        }
    })

}
