document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("kiraForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita recarregar a tela

        let inputTexto = document.getElementById("quantidadeInput").value;
        let quantidade = parseInt(inputTexto);

        let divResultado = document.getElementById("resultado");
        let statusTexto = document.getElementById("resStatus");

        // EASTER EGG: Regra dos 40 Segundos do Death Note
        if (quantidade === 40) {
            statusTexto.textContent = "Você escreveu 40... Cuidado com o ataque cardíaco em 40 segundos! 💀";
            divResultado.classList.remove("hidden");
            
            // Reinicia a animacao
            divResultado.classList.remove("show-scrawl");
            void divResultado.offsetWidth;
            divResultado.classList.add("show-scrawl");
            return; 
        }

        // Lógica de preço
        let precoPorMaca = (quantidade < 12) ? 1.30 : 1.00;
        let valorTotal = quantidade * precoPorMaca;

        // Formata Moeda
        let valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Mostra o resultado na tela
        statusTexto.textContent = `O shinigami cobrará ${valorFormatado} por ${quantidade} maçã(s).`;
        
        // Animacao Death Note
        divResultado.classList.remove("hidden");
        divResultado.classList.remove("show-scrawl");
        void divResultado.offsetWidth; // Reflow para forçar a animação reiniciar
        divResultado.classList.add("show-scrawl");
    });
});