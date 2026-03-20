document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("votoForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrao 

        const input1 = document.getElementById("idadeInput").value;
        const statusTexto = document.getElementById("resStatus");
        const areaResultado = document.getElementById("resultado");

        if (!input1) {
            alert("Preencha sua idade, amigo da vizinhança!");
            return;
        }

        let idade = parseInt(input1);
        
        if (idade < 16) {
            statusTexto.textContent = "NÃO PODE VOTAR";
            statusTexto.style.color = "var(--spidey-red)";
        } 
        else if ((idade >= 16 && idade <= 17) || idade > 65) {
            statusTexto.textContent = "VOTO OPCIONAL";
            statusTexto.style.color = "var(--spidey-yellow)"; 
        } 
        else {
            statusTexto.textContent = "VOTO OBRIGATÓRIO";
            statusTexto.style.color = "var(--spidey-green)"; 
        }

        areaResultado.classList.remove("hidden");
        // Força o reflow para reiniciar a animação se for acionado múltiplas vezes
        void areaResultado.offsetWidth;
        areaResultado.classList.add("show");
    });
});