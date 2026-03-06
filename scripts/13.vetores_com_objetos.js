// VETOR DE OBJETO

const usuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Bruno", idade: 22},
    {nome: "Carla", idade: 30},
    {nome: "Daniela", idade: 15}
]

console.log("Exibindo todos os usuários de vetor: ")
//EXIBINDO TODOS OS ELEMENTOS DO VETOR
usuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log("\nFiltrando idade maior que 18: ")
//ADICIONANDO EM NOVA LISTA APENAS MAIORES DE 18 ANOS
const maioresDe18 = usuarios.filter(
    usuario => usuario.idade > 18
)
// EXIBINDO TODOS OS ELEMENTOS
maioresDe18.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade}`)
)

console.log("\nMostrando apenas nomes")
const listaDeNomes = usuarios.map(u => u.nome)
listaDeNomes.forEach( nome => console.log(`${nome}`))

console.log("\nEncontra um usuário: ")
const usuarioEncontrado = usuarios .find(u => u.nome === "Carla")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nSoma as idades de todos os usuarios: ")
// total acumulado a soma das idades
// 0 é o valor inicial das contagem
// u é o objeto para acessar a variável que contém a idade
const somaIdade = usuarios.reduce((total, u) => total + u.idade, 0)
console.log(somaIdade)