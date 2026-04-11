import './style.css'

export default function InfoPresidente(){
    const Nome = "Fabio Mota"
    const Idade = 2023 - 1967
    const Titulo = "Presidente do EC Vitoria"

    return (
        <div className='info-aluno'>
            <h2>Informações do presidente:</h2>
            <p>Nome: {Nome}</p>
            <p>Idade: {Idade}</p>
            <p>Titulo: {Titulo}</p>
        </div>
    )
}