import { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom"
import styled from "styled-components"

const BotaoContainer = styled(Link)`
    svg{
        color: #FFF;
    }
    ${({$ativo}) => 
    $ativo &&
    `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0px;
    text-wrap: nowrap;
    color: var(--cor-primaria);
    font-family: var(--font-inputs);
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 900;
    text-decoration: none;
    padding: 10px 10px;
    border: 2px solid var(--cor-primaria);
    width: 154px;
    background-color: rgba(34, 113, 209, 0.24);
    border-radius: 50px;
    text-decoration: none;
    svg{
        color: var(--cor-primaria);
    }
    p{
        margin: 0px;
        margin-top: 5px;
        text-align: center;
    }
    `
}

`

export function BotaoMenu({link, children, texto}) {
    const [ativo, setAtivo] = useState(false);
    const path = useResolvedPath().pathname;

    useEffect(() => {
        if (path === link) {
            setAtivo(true);
        } else {
            setAtivo(false);
        }
      }, [path, link]);
    

    return(
        <BotaoContainer to={link} $ativo={ativo} >
            {children} {ativo && <p>{texto}</p>}
        </BotaoContainer>
    )
}