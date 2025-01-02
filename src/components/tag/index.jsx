import styled from "styled-components"
import categoriaSolve from "@/utils/categoriaEnum"

const TagConteiner = styled.div`
    width: ${({ $expanded }) => $expanded ? "432px" : "216px"};
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $background }) => $background};
    border-radius: 15px;
    h2{
        text-transform: uppercase;
        margin: 0px;
        font-family: var(--fonte-geral);
        color: #FFF;
        font-size: ${({ expanded }) => expanded ? "32px" : "24px"};
        font-weight: 800;
    }
    ${({ $destaque}) => ($destaque && `
            width: 296px;
            height: 92px;
            h2{
                font-size: 48px;
            }
        `
    )}
`

export default function TagTipo({ tag, expanded = false, destaque = false }) {
    
    const tagTipo = categoriaSolve(tag);
    
    return(
        <TagConteiner $expanded={expanded} $background={tagTipo.cor} $destaque={destaque}>
            <h2>{tagTipo.titulo}</h2>
        </TagConteiner>
    )
}