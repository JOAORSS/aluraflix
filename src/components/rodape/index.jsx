import styled from "styled-components";

const RodapeStyled = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--cor-quaternaria);
    height: 125px;
    border-top: 2px solid var(--cor-primaria);
    box-shadow: 0px 0px 20px 0px var(--cor-primaria);
    img{
        width: 168px;
        height: 40px;
    }
`

export default function Rodape () {
    return(
        <RodapeStyled>
            <img src="/images/logo.png" alt="" />
        </RodapeStyled>
    )
}