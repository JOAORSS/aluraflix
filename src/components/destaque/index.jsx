import styled from "styled-components";
import TagTipo from "../tag";
import { Link } from "react-router-dom";
import { useVideoContext } from "@/hooks/useVideoContext";
import categoriaSolve from "@/utils/categoriaEnum";


const DesataqueContainer = styled.section`
    display: flex;
    flex-direction: row;
    background-image: url( ${({ $imagem }) => $imagem} );
    background-repeat: no-repeat;
    background-size: cover;
    height: 832px;
    width: 100dvw;
    gap: 50px;
    position: relative;
`
const DestaqueOut = styled.div` 
    position: absolute;
    background-color: rgba(0, 18, 51, 0.60);
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
`

const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 50px;
    width: 100%;
    margin-bottom: 100px;
`

const IframeStyled = styled.iframe`
    aspect-ratio: 16/9;
    width: 646px;
    height: 334px;
    border: 2px solid ${({ $color }) => $color};
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
    div{
        margin-bottom: 40px;
    }
    h1{
        font-size: 46px;
        font-family: var(--fonte-geral);
        color: #FFF;
        font-weight: 400;
        margin-bottom: 0px;
    }
    p{
        font-family: var(--fonte-inputs);
        font-size: 18px;
        font-weight: 300;
        color: #FFF;
        margin-bottom: 0px;
    }
`

const LinkToVideo = styled(Link)`
    position: relative;
    width: 648px;
    height: 336px;
    align-self: flex-end;
    div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0px 0px 29px 0px ${({ $color }) => $color} inset;
    }
`


export default function Destaque(){
    const { videos } = useVideoContext();

    const randomIndex = Math.floor(Math.random() * videos.length);
    const video = videos[randomIndex];
    
    return(
        <>
        {video &&
        <DesataqueContainer $imagem={video.imagem}>
            <DestaqueOut>
                <Banner>
                    <InfoContainer>
                        <TagTipo tag={video.tag} destaque={true} />
                        <h1>{video.titulo}</h1>
                        <p>{video.descricao}</p>
                    </InfoContainer>
                    <LinkToVideo to={`/video/${video.id}`} $color={categoriaSolve(video.tag).cor}>
                        <div></div>
                        <IframeStyled $color={categoriaSolve(video.tag).cor}
                            src={video.link}
                            title={video.titulo} 
                            allow="clipboard-write; encrypted-media; "
                            referrerPolicy="strict-origin-when-cross-origin"
                        >
                        </IframeStyled>
                    </LinkToVideo>
                </Banner>
            </DestaqueOut>
        </DesataqueContainer>
    }
    </>)
}