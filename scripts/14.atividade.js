const listaDeAlunos =[
    {nome: 'Ana', nota: 5.0},
    {nome: 'Bruno', nota: 10.0},
    {nome: 'Carla', nota: 2.0},
    {nome: 'Andrea', nota: 7.0},
    {nome: 'Marta', nota: 6.0}
];

console.log("Encontre a aluna Marta e mostra o nome e a media dela.")
//RESPOSTA
console.log("\nEncontra a aluna: ")
const usuarioEncontrado = listaDeAlunos .find(u => u.nome === "Marta")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nNota: ${usuarioEncontrado.nota}`)

console.log("Mostre a média geral da turma.")
//RESPOSTA
console.log("\nSoma das notas de todos os alunos: ")
const somaIdade = listaDeAlunos.reduce((total, u) => total + u.nota, 0)
console.log(somaIdade)

console.log("Mostre o nome e anota dos alunos com nata abaixo de 7.0.")
//RESPOSTA
console.log("\nFiltrando nota abaixo de 7.0: ")

const menorque7 = listaDeAlunos.filter(
    usuario => listaDeAlunos.nota < 7.0
)
menorque7.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.nota}`)
)
// console.log("Mostre apenas o nome dos alunos com nota maior ou igual a 7.0.")