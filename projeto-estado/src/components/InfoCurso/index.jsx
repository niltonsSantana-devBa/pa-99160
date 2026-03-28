import { useState } from 'react'
import './style.css'

export default function InfoCurso(){
    const [nome, setNome] = useState("Programaçao de aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setLocal] = useState ("SENAI")

    return(
        <div className='info-curso'>
            <h2>Dados do curso: </h2>
            <p>Nome:{nome}</p>
            <p>Carga Horaria:{cargaHoraria}</p>
            <p>Local:{local}</p>
        </div>
    )
}