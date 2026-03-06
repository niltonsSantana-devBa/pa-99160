// Vetor

const numeros =[1, 2, 3, 4, 5]

// Usando o map, crie um vetor com os números
//  do vetor'numeos' cada um mutiplicado por 2.

question1 = numeros.map( n => n * 2)
console.log(question1)  


// Filtre os elementos do vetor 'numeros' para
//obter um novo vetor apenas com números pares.
question2 = numeros.filter( n => n % 2 === 0)
console.log(question2)


// Usando o reduce, some todos os números do vetor'numeros'.
question3 = numeros.reduce ((total, u) => total + u, 0)
console.log(question3)