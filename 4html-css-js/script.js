function resultado() {
    // 1. Pega o valor usando o ID exato que está no HTML
    const input1 = document.getElementById("idadeInput").value;

    // 2. Validação se o campo está vazio
    if (!input1) {
        alert("Preencha sua idade");
        return;
    }

    // 3. Converte para número e chama de "idade" para bater com os IFs
    let idade = parseInt(input1);
    
    // Atalho para não ter que digitar document.getElementById toda hora
    let statusTexto = document.getElementById("resStatus");

    // 4. Lógica das idades corrigida
    if (idade < 16) {
        statusTexto.textContent = "Não pode votar";
        statusTexto.style.color = "red";
    } 
    // Junta as duas regras de voto opcional (16-17 anos E maiores de 65)
    else if ((idade >= 16 && idade <= 17) || idade > 65) {
        statusTexto.textContent = "Voto opcional";
        statusTexto.style.color = "orange"; // Laranja combina melhor com "opcional"
    } 
    // Se não é menor de 16, nem tem 16/17 e nem é maior de 65, sobrou apenas 18 a 65 anos
    else {
        statusTexto.textContent = "Voto obrigatório";
        statusTexto.style.color = "green";
    }

    // 5. Remove a classe 'hidden' para o resultado aparecer na tela
    document.getElementById("resultado").classList.remove("hidden");
}