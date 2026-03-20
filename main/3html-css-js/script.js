document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("calcForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita recarregar a tela (padrão do form)

        // 1. Pega os valores pelos IDs
        const input1 = document.getElementById("nota1Input").value;
        const input2 = document.getElementById("nota2Input").value;

        // 2. Converte para Números reais
        let number1 = parseFloat(input1);
        let number2 = parseFloat(input2);

        // 3. Verifica entradas numéricas válidas (além do HTML5 reqs)
        if (isNaN(number1) || isNaN(number2)) {
            alert("Insira números válidos.");
            return;
        }

        // 4. Faz os cálculos
        let soma = number1 + number2;
        let media = soma / 2;
        let produto = number1 * number2;
        let maior = Math.max(number1, number2);
        let menor = Math.min(number1, number2);

        // 5. Exibe os resultados
        document.getElementById("resSoma").textContent = soma;
        document.getElementById("resMedia").textContent = media.toFixed(2);
        document.getElementById("resProduto").textContent = produto;
        document.getElementById("resMaior").textContent = maior;
        document.getElementById("resMenor").textContent = menor;
        
        // Exibe a caixa de resultado com animacao
        const resBox = document.getElementById("resultadoMedia");
        resBox.classList.remove("hidden");
        // Truque para disparar a animacao CSS depois de remover hidden
        setTimeout(() => {
            resBox.classList.add("show");
        }, 10);
    });
});