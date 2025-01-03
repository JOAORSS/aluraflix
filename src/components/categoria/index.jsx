import styled from "styled-components"
import TagTipo from "../tag"
import Card from "../card"
import { useVideoContext } from "@/hooks/useVideoContext"


const SecaoCategoria = styled.section`
    display: flex;
    padding: 0px 50px;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    width: 100%;
    gap: 50px;
    margin-bottom: 50px;

    @media (max-width: 1055px){
        padding: 0px;
        align-items: center;
    }
`

const VideosContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: left;
    align-items: center;

    @media (max-width: 1055px){
        width: 90vw;
        flex-wrap: nowrap;
        align-self: center;
        overflow-x: scroll;
        padding-bottom: 20px;
        &::-webkit-scrollbar {
            height: 14px;
        }
        &::-webkit-scrollbar-track {
            background: var(--cor-quaternaria);
            border-radius: 12px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--cor-primaria);
            border-radius: 12px;
            border: 4px solid var(--cor-quaternaria);
        }
    }

`

export default function Categoria({ tag }) {
    const { videos } = useVideoContext();
    return(
        <SecaoCategoria>
            <TagTipo tag={tag} expanded={true} />
            <VideosContainer>
                {videos.map((video) => (
                    video.tag === tag && <Card key={video.id} tag={video.tag} video={video} />
                ))}
            </VideosContainer>
        </SecaoCategoria>
    )
}