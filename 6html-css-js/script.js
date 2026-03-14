function verificarAposentadoria() {
    // 1. Captura os valores digitados no HTML
    let codigo = document.getElementById("codigo").value;
    let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    let tempoTrabalho = parseInt(document.getElementById("tempoTrabalho").value);

    // 2. Validação simples para evitar campos vazios
    if (!codigo || isNaN(anoNascimento) || isNaN(tempoTrabalho)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // 3. Calcula a idade baseada no ano atual
    let anoAtual = new Date().getFullYear(); // Pega o ano atual do computador (ex: 2024)
    let idade = anoAtual - anoNascimento;

    // 4. Lógica de decisão (O coração do seu algoritmo)
    // Se a idade for maior ou igual a 65 OU (||) o tempo de trabalho for maior ou igual a 30
    let podeAposentar = false;
    
    if (idade >= 65 || tempoTrabalho >= 30) {
        podeAposentar = true;
    }

    // 5. Prepara a exibição do resultado
    let divResultado = document.getElementById("resultado");
    
    // Limpa as classes de cores antigas antes de aplicar a nova
    divResultado.classList.remove("hidden", "aprovado", "negado");

    let mensagemStatus = "";

    if (podeAposentar) {
        mensagemStatus = "<span style='color: #27ae60;'>Requerer aposentadoria</span>";
        divResultado.classList.add("aprovado"); // Fica verde
    } else {
        mensagemStatus = "<span style='color: #c0392b;'>Não requerer aposentadoria</span>";
        divResultado.classList.add("negado"); // Fica vermelho
    }

    // 6. Imprime as informações na tela
    divResultado.innerHTML = `
        <p><strong>Matrícula:</strong> ${codigo}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Tempo de Trabalho:</strong> ${tempoTrabalho} anos</p>
        <p class="status">Situação: ${mensagemStatus}</p>
    `;
}