import { toast } from "react-toastify";
import "./style.css";
import { useState } from "react";
import api from "../../services/api";

export default function CadastroPage() {
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[telefone, setTelefone] = useState("");
    const[estaEnviando, setEstaEnviando] = useState(false);
    
    function limparFormulario(){
        setNome("");
        setEmail("");
        setTelefone("");
    }
        async function enviarDoFormulario(e){
            e.preventDefault();
            setEstaEnviando(true);

            const dadosDoFormulario = {
                nome,
                email,
                telefone
            };

            try {
                //Se der certo
                const resposta = await api.post("/alunos", dadosDoFormulario);

                toast.success(resposta.data.mensagem) || 'aluno cadastrado com sucesso!';
                limparFormulario();
            }catch (error) {
                //Se der errado
                const mensagemDeErro = error.response?.data?.message || 'Erro ao cadastrar aluno. Verifique se o email já existe.';
                toast.error(mensagemDeErro);
                console.error("Erro ao cadastrar aluno:", error);
            }finally{
                //Executar de qualquer jeito, dado certo ou errado
                setEstaEnviando(false);
            }
        }

        return (
            <div className="cadastro-page">
                <form onSubmit={enviarDoFormulario}>
                    <div className="form-group">
                        <label htmlFor="campo-nome">Nome:</label>
                        <input 
                            id="campo-nome"
                            type="text" 
                            placeholder="Ex.: Nilton Sacramento"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="campo-email">Email:</label>
                        <input 
                            id="campo-email"
                            type="email" 
                            placeholder="Ex.: nilton.sacramento@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="campo-telefone">Telefone:</label>
                        <input 
                            id="campo-telefone"
                            type="tel" 
                            placeholder="Ex.: (11) 99999-9999"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={estaEnviando}>
                        {estaEnviando ? "Enviando..." : "Cadastrar"}
                    </button>

                </form>
            </div>
        );
    }