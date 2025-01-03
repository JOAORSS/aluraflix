import { useParams } from "react-router-dom"
import { useVideoContext } from "../hooks/useVideoContext";
import styled from "styled-components";
import { useEffect } from "react";

const PlayerConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    h1, p{
        color: #FFF;
        width: 60%;
        text-align: center;
    }
`

const IframeStyled = styled.iframe`
    aspect-ratio: 16/9;
    width: 60%;
    border: none;
`

export default function Player() {
    const { videos } = useVideoContext();
    const { id } = useParams();
    const video = videos.find((video) => video.id == id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <PlayerConteiner>
            {video 
            ?(<> 
                <h1>{video.titulo}</h1>
                <IframeStyled 
                    src={video.link}
                    title={video.titulo} 
                    allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                >
                </IframeStyled>
                <p>{video.descricao}</p>
            </>
            ) : (<>
                    <h1>Video não encontrado</h1>
                </>
            )}
        </PlayerConteiner>
    )
}