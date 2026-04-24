import './style.css'

export default function FaleConosco(){
    return(
        <div className="contact-container">
            <h1>Envie uma mensagem</h1>
            <form className="contact-form">
                <input type="text" placeholder="Seu Nome" required />
                <input type="email" placeholder="Seu E-mail" required />
                <textarea placeholder="Como podemos ajudar?" rows="5" required></textarea>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </div>
    )
}