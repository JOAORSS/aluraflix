import styled from "styled-components"
import CampoTexto from "../components/campoTexto"
import Botao from "../components/botao";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useVideoContext } from "../hooks/useVideoContext";
import { useNavigate } from "react-router-dom";

const AdicionarForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    width: 1172px;
    gap: 20px;
    h2{
        display: flex;
        flex-direction: row;
        justify-content: left;
        border: 3px solid transparent;
        border-radius: 4px;
        border-top-color: var(--cor-secundaria);
        border-bottom-color: var(--cor-secundaria);
        width: 100%;
        padding: 20px 0px;

    }
`

const AdicionarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    color: #FFF;
    h1 {
        font-size: 60px;
        font-weight: 900;
        font-family: var(--fonte-geral);
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 0px;
    }
    h3 {
        margin-top: 0px;
        font-size: 20px;
        font-weight: 400;
        font-family: var(--fonte-geral);
        color: #FFF;
        text-align: center;
        text-transform: uppercase;
    }

`

export const BotoesForm = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: left;
    align-items: center;
    gap: 30px;
`;

export default function AdicionarVideo() {
    const { addVideo } = useVideoContext();
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('selecione');
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    const limparCampos = (e) => {
        e.preventDefault();
        setTitulo('');
        setCategoria('');
        setImagem('');
        setVideo('');
        setDescricao('');
    };

    const validaCampos = () =>{
        if(titulo === '' || categoria === 'selecione' || imagem === '' || video === '' || descricao === ''){
            return false;
        }
        return true;
    }
    
    return (
        <AdicionarContainer>
            <h1>NOVO VIDEO</h1>
            <h3>Complete o formulário para criar um novo card de vídeo.</h3>
            <AdicionarForm>
                <h2>Criar Card</h2>
                <CampoTexto
                    input
                    normal
                    label="Título"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                    type="text"
                    name="titulo"
                    color="var(--cor-secundaria)"
                    placeholder="Digite o título do vídeo"
                />
                <CampoTexto
                    select
                    bgColorSelect
                    label="Categoria"
                    onChange={(e) => setCategoria(e.target.value)}
                    value={categoria}
                    name="tag"
                    color="var(--cor-secundaria)"
                />
                <CampoTexto
                    input
                    normal
                    label="Imagem"
                    onChange={(e) => setImagem(e.target.value)}
                    value={imagem}
                    type="text"
                    name="imagem"
                    color="var(--cor-secundaria)"
                    placeholder="Imagem do vídeo"
                />
                <CampoTexto
                    input
                    normal
                    label="Video"
                    onChange={(e) => setVideo(e.target.value)}
                    value={video}
                    type="text"
                    name="link"
                    color="var(--cor-secundaria)"
                    placeholder="Digite o link do video"
                />
                <CampoTexto
                    textarea
                    normal
                    label="Descrição"
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                    type="text"
                    name="descricao"
                    color="var(--cor-secundaria)"
                    placeholder="Sobre o que é este vídeo?"
                />
                <BotoesForm>
                    <Botao onClick={() => {
                        if(validaCampos()){
                            addVideo({id: uuidv4(), tag: categoria, titulo: titulo, imagem: imagem, link: video, descricao: descricao })
                            navigate('/');
                        }
                        }} 
                        border={"var(--cor-primaria)"} alternative
                    >
                        GUARDAR
                    </Botao>
                    <Botao onClick={() => limparCampos} border={"#FFF"}>
                        LIMPAR
                    </Botao>
                </BotoesForm>
            </AdicionarForm>
        </AdicionarContainer>
    )
}