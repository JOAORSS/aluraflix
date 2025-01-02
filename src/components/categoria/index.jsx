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
    gap: 50px;
    margin-bottom: 50px;
`

const VideosContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    justify-content: left;
    align-items: center;
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