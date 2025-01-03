import styled from "styled-components";
import CampoTexto from "../campoTexto";
import Botao from "../botao";
import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { useVideoContext } from "@/hooks/useVideoContext";

const EditarContainer = styled.dialog`
    overflow-x: hidden;
    width: 80vw;
    height: 1140px;
    border-radius: 16px;
    background-color: var(--cor-quaternaria);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #FFF;
    border: 3px solid #cccccc;
    top: 10%;
    z-index: 10;
    h1 {
        font-size: 60px;
        font-weight: 900;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        color: var(--cor-primaria);
        align-self: flex-start;
        margin: 0;
        margin-top: 50px;
    }
    @media (max-width: 1027px){
        h1{
            font-size: 32px;
            text-align: center;
            align-self: center;
        }
    }
`;

const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-quaternaria);
    opacity: 0.6;
`;

const FormEditar = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 573px;
    gap: 35px;

    @media (max-width: 876px){
        h1{
            font-size: 32px;
            text-align: center;
            align-self: center;
        }
        input, textarea, select{
            width: 70vw;
        }
    }
`;

export const BotoesForm = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 980px){
        flex-direction: column;
        gap: 10px;
    }
`;

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 30px;
`

export default function ModalEditar() {
    const { modalOpen, setModalOpen, updateVideo } = useVideoContext();
    const sup = modalOpen;
    
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (sup) {
            setId(sup.id || '');
            setTitulo(sup.titulo || '');
            setCategoria(sup.tag || '');
            setImagem(sup.imagem || '');
            setVideo(sup.link || '');
            setDescricao(sup.descricao || '');
        }
    }, [sup]);

    const validaCampos = () =>{
        if(titulo === '' || categoria === 'selecione' || imagem === '' || video === '' || descricao === ''){
            return false;
        }
        return true;
    }

    const limparCampos = (e) => {
        e.preventDefault();
        setTitulo('');
        setCategoria('');
        setImagem('');
        setVideo('');
        setDescricao('');
    };
    
    return (
        <>
        {modalOpen &&
            <>
                <Overlay />
                <EditarContainer open={!!modalOpen}>
                <FormEditar>
                    <h1>Editar Card:</h1>
                    <CampoTexto
                        input
                        label="Título"
                        onChange={(e) => setTitulo(e.target.value)}
                        value={titulo}
                        type="text"
                        name="titulo"
                        placeholder="Digite o título do vídeo"
                    />
                    <CampoTexto
                        select
                        label="Categoria"
                        onChange={(e) => setCategoria(e.target.value)}
                        value={categoria}
                        name="tag"
                    />
                    <CampoTexto
                        input
                        label="Imagem"
                        onChange={(e) => setImagem(e.target.value)}
                        value={imagem}
                        type="text"
                        name="imagem"
                        placeholder="Imagem do vídeo"
                    />
                    <CampoTexto
                        input
                        label="Video"
                        onChange={(e) => setVideo(e.target.value)}
                        value={video}
                        type="text"
                        name="link"
                        placeholder="Digite a URL do vídeo"
                    />
                    <CampoTexto
                        textarea
                        label="Descrição"
                        onChange={(e) => setDescricao(e.target.value)}
                        value={descricao}
                        type="text"
                        name="descricao"
                        placeholder="Digite a descrição do vídeo"
                    />
                    <BotoesForm>
                        <Botao onClick={() => {
                            if(validaCampos()){
                                updateVideo(id, {id: id, tag: categoria, titulo: titulo, imagem: imagem, link: video, descricao: descricao })
                                setModalOpen(!modalOpen)}
                            }} 
                            border={"var(--cor-primaria)"} alternative
                        >
                            GUARDAR
                        </Botao>
                        <Botao onClick={() => limparCampos} border={"#FFF"}>
                            LIMPAR
                        </Botao>
                    </BotoesForm>
                </FormEditar>
                <Close><CgCloseO size={52} color="#FFF" onClick={() => setModalOpen(!modalOpen)}>OK</CgCloseO></Close>
            </EditarContainer>
            </>
        }
        </>
    );
}
