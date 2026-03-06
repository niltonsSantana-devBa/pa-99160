//Atividade

// Crie uma função para calcular média aritmetica.

notas = [5, 5, 5]

const media = (notas) => {
    const somaMedia = notas.reduce ((total, n) => total + n, 0)
    const media = somaMedia / notas.length
    console.log (`A média aritmética é: ${media}`)
}

media(notas)

// console.log("\nSoma das notas de todos os alunos: ")
// const somaIdade = listaDeAlunos.reduce((total, u) => total + u.nota, 0)
// console.log(somaIdade)