function resultado() {
    // 1. Pega o valor usando o ID exato que está no HTML
    const input1 = document.getElementById("idadeInput").value;

    // 2. Validação se o campo está vazio
    if (!input1) {
        alert("Preencha sua idade, amigo da vizinhança!");
        return;
    }

    // 3. Converte para número
    let idade = parseInt(input1);
    
    // Atalho para o texto
    let statusTexto = document.getElementById("resStatus");

    // 4. Lógica das idades
    if (idade < 16) {
        statusTexto.textContent = "NÃO PODE VOTAR";
        statusTexto.style.color = "#FF3333"; // Vermelho claro
    } 
    else if ((idade >= 16 && idade <= 17) || idade > 65) {
        statusTexto.textContent = "VOTO OPCIONAL";
        statusTexto.style.color = "#FF9900"; // Laranja HQ
    } 
    else {
        statusTexto.textContent = "VOTO OBRIGATÓRIO";
        statusTexto.style.color = "#33CC33"; // Verde rádioativo HQ
    }

    // 5. Remove a classe 'hidden' para o resultado aparecer com a animação
    document.getElementById("resultado").classList.remove("hidden");
}