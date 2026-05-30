import { toast } from "react-toastify";
import "./style.css";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";


export default function ListaPage() {
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        async function fetchAlunos() {
            try {
                //Se der certo
                const response = await api.get("/alunos");
                setAlunos(response.data);
            } catch (error) {
                //Se der errado
                toast.error("Erro ao carregar alunos. Tente novamente mais tarde.");
                console.error("Erro ao carregar alunos:", error);
            }
        }

        fetchAlunos();
    }, [])

    return (
        <div className="lista-page">
        <h1>Lista</h1>
        <p>Página de lista</p>
        <table className="tabela-aluno">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>{aluno.telefone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}