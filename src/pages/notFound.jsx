import styled from "styled-components"
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--cor-terciaria);
    gap: 50px;
    color: #FFF;
    div{
        border: 3px solid var(--cor-quaternaria);
        border-radius: 12px;
        background-color: var(--cor-quaternaria);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 25%;
        h1{
            text-wrap: nowrap;
        }
    }
    a{
        border-radius: 12px;
        text-decoration: none;
        background-color: var(--cor-primaria);
        font-size: 1.5rem;
        color: #FFF;
        padding: 10px 20px;
        cursor: pointer;
    }
`

export default function NotFound() {
    return (
        <NotFoundContainer>
                <div>
                    <FaExclamationTriangle size={100} color="var(--erro)" />
                    <h1>404 Pagina não encontrada</h1>
                </div>
            <Link to="/">Voltar para o inicio</Link>
        </NotFoundContainer>
    )
}