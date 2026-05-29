
import './style.css'


export default function Footer(){
    return (
        <footer className='Footer'>
            <p>
                &copy; {new Date().getFullYear()} -
                Todos os direitos reservados.
                <br />
                SENAI - Bahia
            </p>
        </footer>
    )
}
    