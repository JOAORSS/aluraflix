import { TbTrashX } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import styled from "styled-components";

const BotaoStyled = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-weight: 800;
    font-family: var(s--fonte-geral);
    font-size: 1rem;
    text-transform: uppercase;
    transition: 500ms;
    &:hover{
        transition: 500ms ease-out;
        scale: 1.05;
    }
`

export default function BotaoAcao({ action, deletar = false, editar = false }) {
    return(
        <>
            {deletar && <BotaoStyled onClick={action} ><TbTrashX size={20} color="#FFF" />DELETAR</BotaoStyled>}
            {editar && <BotaoStyled onClick={action} ><BiEditAlt size={20} color="#FFF" />EDITAR</BotaoStyled>}
        </>
    )

}