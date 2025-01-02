import styled from "styled-components";
import Botao from "../botao";

const CabecalhoConteiner = styled.header`
    background-color: ${({ $alternative }) => $alternative ? "var(--cor-quaternaria)" : "var(--cor-secundaria)"};
    height: 125px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    border-bottom: 2px solid var(--cor-primaria);
    box-shadow: 0px 0px 20px 0px var(--cor-primaria);
    z-index: 1;
    img{
        width: 168px;
        height: 40px;
    }
`

const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    gap: 25px;
    max-width: 385px;
    margin: 0;
`

export default function Cabecalho({ alternative = false }) {
    return (
        <CabecalhoConteiner $alternative={alternative}>
            <img src="/images/logo.png" alt="logo aluraflix" />
            <Menu>
                <Botao link="/" border="var(--cor-primaria)" alternative={true} >
                    Home
                </Botao>
                <Botao link="/video/novo" border={"#FFF"} >
                    Novo vídeo
                </Botao>
            </Menu>
        </CabecalhoConteiner>
    )

}