function resultado() {
    // 1. Pega o valor digitado no input
    let inputTexto = document.getElementById("quantidadeInput").value;
    let quantidade = parseInt(inputTexto);

    // 2. Valida se o usuário digitou um número válido
    if (!quantidade || quantidade <= 0) {
        alert("Escreva uma quantidade válida, humano...");
        return;
    }

    let precoPorMaca = 0;
    let divResultado = document.getElementById("resultado");
    let statusTexto = document.getElementById("resStatus");

    // EASTER EGG: Regra dos 40 Segundos do Death Note
    if (quantidade === 40) {
        statusTexto.textContent = "Você escreveu 40... Cuidado com o ataque cardíaco em 40 segundos! 💀";
        divResultado.classList.remove("hidden");
        return; // O "return" faz o código parar aqui e não calcular o preço
    }

    // 3. Lógica para definir o preço baseado na quantidade
    if (quantidade < 12) {
        precoPorMaca = 1.30;
    } else {
        precoPorMaca = 1.00;
    }

    // 4. Calcula o valor total
    let valorTotal = quantidade * precoPorMaca;

    // 5. Formata o valor para o padrão de moeda brasileiro (R$)
    let valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // 6. Mostra o resultado na tela
    statusTexto.textContent = `O shinigami cobrará ${valorFormatado} por ${quantidade} maçã(s).`;
    
    // Remove a classe hidden para o texto aparecer com a animação
    divResultado.classList.remove("hidden");
}