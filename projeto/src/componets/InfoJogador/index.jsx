import { useState } from 'react'
import './style.css'

export default function AdicionarJogador() {
    const[nome, setNome] = useState("")
    const[NCamisa, setNCamisa] = useState("")
    const[Jogadores, setJogadores] = useState([])

    // Função para adicionar um Jogador na lista.
    const handleAdcionarJogador = (event) =>{
        event.preventDefault() // Impede que a página seja recarregada.

        // Se os campos estiverem preenchidos...
        if (nome && NCamisa) {
            setJogadores([...Jogadores, {nome, NCamisa}]) // Adicionar na lista
            setNome("") // Apaga o nome informado deixando o campo vazio.
            setNCamisa("") // Apaga o número informado deixando o campo vazio.
        }
    }

    return(
        <div className="vitoria-container">
            <h2 className="vitoria-titulo">Adicionar Jogador</h2>
            
            <form className="vitoria-form" onSubmit={handleAdcionarJogador}>
                <input
                    className="vitoria-input"
                    type="text"
                    placeholder="Nome do Jogador"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                
                <input
                    className="vitoria-input"
                    type="number" 
                    placeholder="Nº da Camisa"
                    value={NCamisa}
                    onChange={(e) => setNCamisa(e.target.value)}
                />
                
                <button className="vitoria-botao" type='submit'>
                    Escalar Leão
                </button>
            </form>
            
            <hr className="vitoria-linha" />
            
            <h2 className="vitoria-titulo">Escalação do Leão</h2>
            <ul className="vitoria-lista">
                {Jogadores.map((Jogador, index) => (
                    <li className="vitoria-item" key={index}>
                        <span className="vitoria-numero">{Jogador.NCamisa}</span>
                        <span className="vitoria-nome">{Jogador.nome}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}