document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dbzForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita recarregar a tela

        // 1. Captura os valores digitados no HTML
        let codigo = document.getElementById("codigo").value;
        let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
        let tempoTrabalho = parseInt(document.getElementById("tempoTrabalho").value);

        // 2. Validação simples para evitar NaN (além do HTML5 reqs)
        if (isNaN(anoNascimento) || isNaN(tempoTrabalho)) {
            alert("Por favor, preencha os dados corretamente com números.");
            return;
        }

        // 3. Calcula a idade baseada no ano atual
        let anoAtual = new Date().getFullYear();
        let idade = anoAtual - anoNascimento;

        // 4. Lógica de decisão (O coração do seu algoritmo)
        let podeAposentar = false;
        
        if (idade >= 65 || tempoTrabalho >= 30) {
            podeAposentar = true;
        }

        // 5. Prepara a exibição do resultado
        let divResultado = document.getElementById("resultado");
        
        // Limpa as classes antigas
        divResultado.classList.remove("hidden", "aprovado", "negado");

        let mensagemStatus = "";

        if (podeAposentar) {
            mensagemStatus = "<span style='color: var(--scouter-green);'>Requerer aposentadoria</span>";
            divResultado.classList.add("aprovado"); 
        } else {
            mensagemStatus = "<span style='color: var(--kaioh-red);'>Não requerer aposentadoria</span>";
            divResultado.classList.add("negado"); 
        }

        // 6. Imprime as informações na tela
        divResultado.innerHTML = `
            <p><strong>Matrícula:</strong> ${codigo}</p>
            <p><strong>Idade:</strong> ${idade} anos</p>
            <p><strong>Tempo de Trabalho:</strong> ${tempoTrabalho} anos</p>
            <p class="status">Situação: ${mensagemStatus}</p>
        `;
        
        // Repintar para animacao caso ja estivesse aberto
        divResultado.style.opacity = '0';
        void divResultado.offsetWidth;
        divResultado.style.opacity = '1';
    });
});