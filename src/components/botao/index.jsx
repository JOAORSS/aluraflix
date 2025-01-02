import { Link } from 'react-router-dom';
import styled from 'styled-components';

const estilosPadrao = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    width: 180px;
    border-radius: 15px;
    font-family: var(--fonte--input);
    font-size: 20px;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 300ms;
`

const adpatativeStyles = ({ $alternative, $border, $color }) => `
    background-color: ${$alternative ? "#000" : "transparent"};
    border: 3px solid ${$border};
    box-shadow: ${$alternative ? 'inset 0px 0px 20px 0px rgba(34, 113, 209, 0.90)' : 'none'};
    color: ${$color ? $color : $border};
    &:hover{
        transition: 300ms;
        ${$alternative 
            ? `
                box-shadow: inset 0px 0px 30px 0px rgba(34, 113, 209, 0.90);
            `
            : `
                box-shadow: inset 0px 0px 20px 0px rgba(255, 255, 255, 0.6);
            `
    }
    }
    ${estilosPadrao}
`;

const BotaoStyled = styled.button`
    ${adpatativeStyles}
`;

const LinkStyled = styled(Link)`
    ${adpatativeStyles}
`;

export default function Botao ({ children, border, onClick, color = false, type='button', alternative = false, link = false }) {
    
    return (
        link 
        ? <LinkStyled $border={border} to={link} $color={color} $alternative={alternative}>
            {children}
        </LinkStyled>
        : <BotaoStyled type={type} $border={border} $color={color} onClick={onClick} $alternative={alternative}>
            {children}
        </BotaoStyled>
    );
}