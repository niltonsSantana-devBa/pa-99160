import './style.css' 

export default function Footer() {
    return(
        <footer>
            <div>
                <strong>Contabilidade simples</strong> - CNPJ 00.000.000/0001
                <br />
                Rua A,123 - Centro - Salvador / Bahia
                <br />
                © {new Date().getFullYear} Todos os direitos reservados
            </div>
        </footer>
    )
}
        
