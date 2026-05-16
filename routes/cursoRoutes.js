const express = require('express')
const Curso = require('../model/cursoModel')

module.exports = (router, CursoModel) => {
    // Rota para listar todos os/cursos cadastrados no banco de dados
    router.get('/cursos', async (req, res) => {
        const todosOsCursos = await CursoModel.findAll()
        res.json(todosOsCursos)
    })

    // Rota para cadastrar um aluno e inserir no banco de dados 
    router.post('/cursos', async (req, res) => {
        try {
            const { nome, unidade, duracao } = req.body
            const novoCurso = await CursoModel.create({ nome, unidade, duracao })

            res.status(201).json({
                mensagem: 'Curso cadastrado com sucesso.',
                curso: novoCurso
            })
        } catch (erro) {
            res.status(400).json({
                mensagem: 'Erro ao cadastrar curso. Verifique se o e-mail já existe',
            })
        }
    })

        router.delete('/cursos/:id', async (req, res) => {
        try {
            const { id } = req.params
            const cursoExistente = await CursoModel.findByPk(id)

            if (!cursoExistente) {
                return res.status(404).json({ mensagem: 'Curso não encontrado.' })
            }

            await CursoModel.destroy({ where: { id } })
            res.json({ mensagem: 'Curso excluído com sucesso.' })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao excluir curso.' })
        }
    })

    router.put('/cursos/:id', async (req, res) => {
        try {
            const { id } = req.params
            const { nome, unidade, duracao } = req.body
            const cursoExistente = await CursoModel.findByPk(id)

            if (!cursoExistente) {
                return res.status(404).json({ mensagem: 'Curso não encontrado.' })
            }

            cursoExistente.nome = nome || cursoExistente.nome
            cursoExistente.unidade = unidade || cursoExistente.unidade
            cursoExistente.duracao = duracao || cursoExistente.duracao

            await cursoExistente.save()
            res.json({ mensagem: 'Curso atualizado com sucesso.', curso: cursoExistente })
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao atualizar curso.' })
        }
    })
}