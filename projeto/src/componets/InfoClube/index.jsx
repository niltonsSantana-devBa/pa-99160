import './style.css'

export default function InfoAluno(){
    const Nome = "EC Vitoria"
    const Idade = 2023 - 1899
    const Titulo = "Maior do Nordeste"

    return (
        <div className='info-aluno'>
            <h2>Informações do clube:</h2>
            <p>Nome: {Nome}</p>
            <p>Idade: {Idade}</p>
            <p>Titulo: {Titulo}</p>
        </div>
    )
}