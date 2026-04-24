import { Link, NavLink } from 'react-router-dom'
import './style.css'
import logo from '../../assets/react.svg'


export default function Header() {
    return(
        <header>
            <div>
                <Link to="/">
                <img src={logo} alt="Logo da contabilidade" />
                <span>Contabilidade Simples</span>

                </Link>
                <nav>
                    <NavLink to="/sobre-nos">Sobre nós</NavLink>
                    <NavLink to="/fale-conosco">Fale conosco</NavLink>
                </nav>
            </div>
        </header>
    )
}