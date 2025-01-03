import styled from "styled-components"
import { CgAdd } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { BotaoMenu } from "./botoesMenu"

const MenuConteiner = styled.menu`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--cor-quaternaria);
    height: 125px;
    border-top: 2px solid var(--cor-primaria);
    box-shadow: 0px 0px 20px 0px var(--cor-primaria);
    gap: 62px;
`

export default function MenuMobile() {
    return(
        <MenuConteiner>
            <BotaoMenu link="/" texto="HOME">
                <GoHome size={42} />
            </BotaoMenu>
            <BotaoMenu link="/video/novo" texto="NOVO VIDEO">
                <CgAdd size={45} />
            </BotaoMenu>
        </MenuConteiner>
    )
}