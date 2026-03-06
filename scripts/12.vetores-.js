//CRIANDO UM VETOR.

const listaNames = ["Marta", "José", "Maria", "Juliana"]

console.log("Exibindo todos os elementos: ")
console.log(listaNames)

console.log("\nExibindo o elementos: ")
console.log(listaNames[0])

console.log("\nExibindo o elementos: ")
console.log(listaNames[1])

console.log("\nExibindo o elementos: ")
console.log(listaNames[2])

console.log("\nAdicionando um elemento: ")
listaNames.push("Mariana")
console.log(listaNames)

console.log("\n Removendo o primeiro elemento: ")
listaNames.shift()
console.log(listaNames)

console.log("\n Removendo o último elemento: ")
listaNames.pop()
console.log(listaNames)

console.log("\n Removendo o primeiro elemento: ")
listaNames.splice(1,1)
console.log(listaNames)

