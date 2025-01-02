import Categoria from "../components/categoria";
import { useVideoContext } from "@/hooks/useVideoContext";
import ModalEditar from "../components/modalEditar";
import Destaque from "../components/destaque";
import styled from "styled-components";

const CategriaContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-self: center;
    margin-top: 50px;
    width: 100vw;
    flex-wrap: wrap;
    gap: 20px;
`

export default function Home() {
    const { videos } = useVideoContext();

    function hasVideosWithTag (tag) {return videos.some((video) => video.tag === tag);}

    return(
        <>
            <Destaque />
            <CategriaContainer>
                {hasVideosWithTag("frontend") && <Categoria tag="frontend" />}
                {hasVideosWithTag("backend") && <Categoria tag="backend" />}
                {hasVideosWithTag("mobile") && <Categoria tag="mobile" />}
            </CategriaContainer>

            <ModalEditar />
        </>
    )
}