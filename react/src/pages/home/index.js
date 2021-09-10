
import { useState, useEffect } from 'react';

import Menu from "../../components/menu";

import { Container } from "./styled";

import Api from '../../service/api';

const api = new Api();

export default function Home(){

    const [nome , setNome ] = useState('');
    const [chamada , setChamada ] = useState('');
    const [turma , setTurma ] = useState('');
    const [curso , setCurso ] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [idalterado, setIdalterado] = useState();
    

    const alterar = async(item) =>{
        setNome(item.nm_aluno);
        setTurma(item.nm_turma);
        setCurso(item.nm_curso);
        setChamada(item.nr_chamada);
        setIdalterado(item.id_matricula);
    }
    const inserirAluno = async () =>{
        
        if(idalterado > 0){
            const r = await api.alterar(idalterado ,nome, chamada, curso, turma);
            alert('alterado')
        } else {
            const r = await api.cadastrarAluno(nome, chamada, turma, curso);
            if(!r.erro){alert('Cadastrado')} else {alert('Já cadastrado')}
        }
        limpar();
        listarAlunos();
    }
    const listarAlunos = async() =>{
        const resp = await api.listar();
        setAlunos(resp);
        listarAlunos();
    }
    const excluir = async(id) =>{
        const resp = await api.deletar(id);
        alert('Excluido');
        listarAlunos();
    }
    const limpar = async() =>{
        setNome('');
        setTurma('');
        setCurso('');
        setChamada('');
        setIdalterado(0);
    }
    useEffect(() => {
        listarAlunos();
    }, [])
    return(
        <Container>
            <Menu/>
            <div className="admin">
                <div className="cabecalho">
                    <div className="infos-user">
                        <img src="/src/img/user.svg" alt="ft-user"/>
                        Olá, <b> Fulano da Silva</b>
                    </div>
                    <div className="acoes">
                        <div className="atualizar" onClick={listarAlunos}><img src="/src/img/att.svg" alt="att"/></div>
                        <div className="sair"><img src="/src/img/sair.svg" alt="sair"/></div>
                    </div>
                </div>
                <div className="nv-aluno">
                        <div className="titulo-form">
                            <img src="/src/img/line.svg" alt="line"/>
                            {idalterado > 0 ? `Esta sendo Alterado o id ${idalterado}`: 'Novo Aluno' }
                        </div>
                        <div className="inputs">
                            <div className="sub-titulo">
                                <p1>Nome:</p1>
                                <p1>Chamada:</p1>
                            </div> 
                            <div className="sub-input">
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                                <input type="number" min="0" value={chamada} onChange={e => setChamada(e.target.value)}/>
                            </div> 
                            <div className="sub-titulo">
                                <p1>Curso:</p1>
                                <p1>Turma:</p1>
                            </div> 
                            <div className="sub-input">
                                <input type="text"value={curso} onChange={e => setCurso(e.target.value)}/>
                                <input type="text"value={turma} onChange={e => setTurma(e.target.value)}/>
                            </div> 
                            <div className="btm-cad"><button onClick={inserirAluno}> {idalterado > 0 ? 'Alterar' : 'Novo Aluno' }</button></div>
                        </div>
                      
                </div>
                <div className="matriculados">
                <div className="titulo-form">
                    <img src="/src/img/line.svg" alt="line"/>
                        Alunos Matriculados
                    </div>
                
                    <table class ="table-user">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Nome </th>
                                    <th> Chamada </th>
                                    <th> Turma </th>
                                    <th> Curso </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                            {alunos.map((x,i) => 
                                 <tbody>
                                     <tr className={i % 2 == 0 ? "linha": ""}>
                                        <td>{x.id_matricula}</td>
                                        <td title={x.nm_aluno}>{x.nm_aluno.length >= 25 ? x.nm_aluno.substr(0, 25) + '...' : x.nm_aluno}</td>
                                        <td>{x.nr_chamada}</td>
                                        <td>{x.nm_curso}</td>
                                        <td>{x.nm_turma}</td>
                                        <td className="coluna"  style={{width: '10px'}}>
                                            <button onClick={() => alterar(x)}><img src="/src/img/edit.svg" alt="edit"/></button>
                                        </td> 
                                        <td className="coluna" >
                                            <button  onClick={() => excluir(x.id_matricula)}><img src="/src/img/lixo.svg" alt="lixo"/></button>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                
            </div>
        </Container>
    )
}