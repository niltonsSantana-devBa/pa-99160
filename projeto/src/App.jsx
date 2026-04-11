import './App.css'
import AdicionarJogador from './componets/InfoJogador'
import InfoClube from './componets/InfoClube'
import InfoPresidente from './componets/InfoPresidente'
import logo from './assets/logo.png'

function App() {
  return (
    
    <div className="app-leao">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="titulo-principal">O maior do Nordeste</h1>
      
      <div className="conteudo-app">
        <AdicionarJogador/>
        <InfoClube/>
        <InfoPresidente/>
      </div>
    </div>
  )
}

export default App