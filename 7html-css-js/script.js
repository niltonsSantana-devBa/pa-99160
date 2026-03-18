document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cyberForm");
    const divError = document.getElementById("error-message");
    const divResultado = document.getElementById("resultado");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        divError.classList.add("hidden");
        divResultado.classList.remove("show");
        divResultado.classList.add("hidden");

        let n1 = parseFloat(document.getElementById("nota1").value);
        let n2 = parseFloat(document.getElementById("nota2").value);
        let n3 = parseFloat(document.getElementById("nota3").value);

        // Limit rule
        if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
            divError.classList.remove("hidden");
            
            document.getElementById("nota1").value = '';
            document.getElementById("nota2").value = '';
            document.getElementById("nota3").value = '';
            document.getElementById("nota1").focus();
            
            return; 
        }

        let media = (n1 + n2 + n3) / 3;

        const resMedia = document.getElementById("resMedia");
        const resStatus = document.getElementById("resStatus");

        resMedia.textContent = media.toFixed(2); 

        resStatus.classList.remove("aprovado", "recuperacao", "reprovado");

        if (media >= 7.0) {
            resStatus.textContent = "APROVADO";
            resStatus.classList.add("aprovado");
        } else if (media >= 5.0 && media < 7.0) {
            resStatus.textContent = "RECUPERAÇÃO";
            resStatus.classList.add("recuperacao");
        } else {
            resStatus.textContent = "REPROVADO";
            resStatus.classList.add("reprovado");
        }

        divResultado.classList.remove("hidden");
        
        // Trigger CSS animation
        setTimeout(() => {
            divResultado.classList.add("show");
        }, 10);
    });
});
