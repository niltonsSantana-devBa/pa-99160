function gerarTabuada() {
    // Pegar o valor do input no HTML
    const numeroInput = document.getElementById("numeroInput")
    let numero = parseInt(numeroInput.value);

    // Pegar o elemento HTML onde a tabuada será exibida.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    //Verificar se a entrada é um número válido.
    if (isNaN(numero) || numero === null || numero === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número...</p>";
        return;
    }

    // Adiciona um título para tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do número: ${numero}</h2>`;

    // laço de repetição para a tabuada de 1 até 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const gerarBotao = document.getElementById("gerarBotao");
gerarBotao.addEventListener("click", gerarTabuada);