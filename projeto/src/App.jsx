import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import FaleConosco from './pages/FaleConosco'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* Agora cada página tem seu próprio endereço */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}


