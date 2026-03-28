import './style.css'

export default function InfoAluno(){
    const Nome = "Nilton Sacramento"
    const Idade = 23
    const Curso = "Desemvolvimento de Sistema"

    return (
        <div className='info-aluno'>
            <h2>Informaçõesdo aluno:</h2>
            <p>nome: {Nome}</p>
            <p>idade: {Idade}</p>
            <p>curso: {Curso}</p>
        </div>
    )
}