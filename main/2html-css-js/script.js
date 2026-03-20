document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mediaForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita recarregar a página

        // Captura os valores dos inputs
        const nomeValor = document.getElementById("nomeInput").value;
        const nota1Valor = document.getElementById("nota1Input").value;
        const nota2Valor = document.getElementById("nota2Input").value;
        const valorMedia = (Number(nota1Valor) + Number(nota2Valor)) / 2;

        const resStatus = document.getElementById("resStatus");
        const resultadoMedia = document.getElementById("resultadoMedia");

        // Exibe os resultados no HTML
        document.getElementById("resNome").textContent = nomeValor;
        document.getElementById("resMedia").textContent = valorMedia.toFixed(2);
        
        // Remove a classe que esconde
        resultadoMedia.classList.remove("hidden");

        // Situação do aluno
        if (valorMedia >= 7) {
            resStatus.textContent = "Aprovado";
            resStatus.style.color = "green";
        } else {
            resStatus.textContent = "Reprovado";
            resStatus.style.color = "red";
        }
    });
});