import styled from "styled-components"
import BotaoAcao from "./botaoDeAcao"
import categoriaSolve from "@/utils/categoriaEnum"
import { Link } from "react-router-dom"
import { useVideoContext } from "@/hooks/useVideoContext"

const CardStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    @media (max-width: 493px){
        scale: 0.8;
    }
`

const CapaLink = styled(Link)`
    position: relative;
    display: flex;
    border-radius: 6px 6px 0px 0px;
    div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 500ms;
        border-radius: 6px 6px 0px 0px;
        box-shadow: 0px 0px 29px 0px ${({ $color }) => $color} inset;
    }
    img{
        border-radius: 6px 6px 0px 0px;
        width: 432px;
        height: 260px;
        border: 3px solid ${({ $color }) => $color};
        object-fit: fill;
    }
    &:hover {
        div{
            transition: 500ms;
            box-shadow: 0px 0px 35px 0px ${({ $color }) => $color} inset;
        }
    }
`

const MenuAcoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 3px solid ${({ $color }) => $color};
    height: 50px;
    background-color: var(--cor-quaternaria);
    border-radius: 0px 0px 12px 12px;
`


export default function Card({ video, tag }) {
    const { deleteVideo, setModalOpen } = useVideoContext();

    const categoria = categoriaSolve(tag);

    return(
        <CardStyled>
            <CapaLink to={`/video/${video.id}`} $color={categoria.cor}>
                <div></div>
                <img src={video.imagem} />
            </CapaLink>
            <MenuAcoes $color={categoria.cor}>
                <BotaoAcao deletar action={() => deleteVideo(video.id)} />
                <BotaoAcao editar action={() => setModalOpen(video)} />
            </MenuAcoes>
        </CardStyled>
    )
}