
const express = require('express')
const clientes = require('../model/clientesModel')

module.exports = (router, clientesModelModel) => {
    // Rota para listar todos os/clientes cadastrados no banco de dados
    router.get('/clientes', async (req, res) => {
        const todosOsclientes = await clientesModelModel.findAll()
        res.json(todosOsclientes)
    })

    // Rota para cadastrar um cliente e inserir no banco de dados 
    router.post('/clientes', async (req, res) => {
        try {
            const { nome, email, telefone, cpf } = req.body
            const novoClientes = await clientesModelModel.create({ nome, email, telefone, cpf })

            res.status(201).json({
                mensagem: 'clientes cadastrado com sucesso.',
                clientes: novoClientes
            })
        } catch (erro) {
            res.status(400).json({
                mensagem: 'Erro ao cadastrar clientes. Verifique se o e-mail já existe',
            })
        }
    })
    
    router.delete('/clientes/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const clienteExistente = await clientesModelModel.findByPk(id);

            if (!clienteExistente) {
                return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
            }

            // Exclui a instância que já foi encontrada
            await clienteExistente.destroy(); 
            
            res.json({ mensagem: 'Cliente excluído com sucesso.' });
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao excluir cliente.' });
        }
    });
    router.put('/clientes/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, telefone, cpf } = req.body;
            
            const clientesExistente = await clientesModelModel.findByPk(id);

            if (!clientesExistente) {
                return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
            }

            // O método update é mais seguro e limpo do que reatribuir variável por variável
            await clientesExistente.update({
                nome,
                email,
                telefone,
                cpf
            });

            res.json({ mensagem: 'Cliente atualizado com sucesso.', clientes: clientesExistente });
        } catch (erro) {
            // ISSO É FUNDAMENTAL PARA DESCOBRIR O ERRO:
            console.error("ERRO DETALHADO NO PUT:", erro); 
            
            res.status(500).json({ 
                mensagem: 'Erro ao atualizar cliente.',
                detalhe: erro.message // Mostra uma dica do erro na resposta do Postman/Insomnia
            });
        }
    });
}
