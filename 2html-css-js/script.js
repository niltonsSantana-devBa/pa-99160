function media(){ 
    // Captura os valores dos inputs
    const nomeInput = document.getElementById("nomeImput").value;
    const nota1Input = document.getElementById("Nota1").value;
    const nota2Input = document.getElementById("Nota2").value;
    const media = (Number(nota1Input) + Number(nota2Input)) / 2;

    //Validaçao
    if(!nomeInput || !nota1Input || !nota2Input){
        alert("Preencha todos os campos")
        return;
    }

    //Exibe os resultados no HTML
    document.getElementById("resNome").textContent = nomeInput;
    document.getElementById("resMedia").textContent = media.toFixed(2);
    document.getElementById("resultadoMedia").classList.remove("hidden");

   //Situaçao do aluno
        if(media >= 7){
    document.getElementById("resStatus").textContent = "Aprovado";
    document.getElementById("resStatus").style.color = "green";
    }
    else{
    document.getElementById("resStatus").textContent = "Reprovado";
    document.getElementById("resStatus").style.color = "red";
    }
}