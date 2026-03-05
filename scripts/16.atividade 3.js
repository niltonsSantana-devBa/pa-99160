// Atividade

// Crie uma função para verificar se um número
// é positivo ouy negativo.
// let a  = 20;

// function verificarnumero (num) {
//     if (num > 0) {
//         console.log(" O devido número é positivo")
//     }
//     else if (num < 0){
//         console.log("O devido número é negativo")
//     }
//     else{
//         console.log("O devido número é zero")
//     }
// }



// SIMPLIFICADO

const verificar = (numero) =>
    //Operador ternário
    numero > 0 ? "Positivo" : "Negativo"

resultado = verificar(-5)
console.log(resultado)    