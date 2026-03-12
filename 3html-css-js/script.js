function resultado() {
    // 1. Pega os valores pelos IDs corretos definidos no HTML
    const input1 = document.getElementById("nota1").value;
    const input2 = document.getElementById("nota2").value;

    // 2. Validação usando as variáveis corretas
    if (!input1 || !input2) {
        alert("Preencha todos os campos");
        return;
    }

    // 3. Converte os textos recebidos para Números reais (Float)
    let number1 = parseFloat(input1);
    let number2 = parseFloat(input2);

    // 4. Faz os cálculos matemáticos
    let soma = number1 + number2;
    let media = soma / 2;
    let produto = number1 * number2;
    let maior = Math.max(number1, number2);
    let menor = Math.min(number1, number2);

    // 5. Exibe os resultados no HTML buscando os IDs corretos
    document.getElementById("resSoma").textContent = soma;
    document.getElementById("resMedia").textContent = media.toFixed(2);
    document.getElementById("resProduto").textContent = produto;
    document.getElementById("resMaior").textContent = maior;
    document.getElementById("resMenor").textContent = menor;
    
    // Bônus: Se você tem uma classe 'hidden' no HTML para esconder a div de resultado, 
    // você precisa removê-la aqui para o resultado aparecer na tela:
    document.getElementById("resultadoMedia").classList.remove("hidden");
}