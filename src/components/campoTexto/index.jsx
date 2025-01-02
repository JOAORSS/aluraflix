import { useState } from "react";
import styled from "styled-components"

const CampoStyled = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFF;
    font-size: 20px;
    font-weight: 600;
    font-family: "Source Sans Pro", sans-serif;
    width: 573px;

    input, textarea, select{
        white-space: break-spaces;
        width: auto;
        padding: 15px;
        height:  ${({$expanded}) => $expanded ? "112px" : "auto"};
        border: 3px solid ${({$color, $valid}) => $valid ? $color : "var(--erro)"};
        background-color: transparent;
        border-radius: 10px;
        margin-bottom: 20px;
        color: #FFF;
        resize: none;
        &::placeholder {
            color: ${({$valid}) => $valid ? "" : "var(--erro)"};
        }
        &::-webkit-scrollbar {
            width: 9px;
        }
        &::-webkit-scrollbar-track {
            background: var(--cor-primaria);
            border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--cor-primaria);
            border-radius: 5px;
        }
    }
    label{
        color: ${({$valid}) => $valid ? "#FFF" : "var(--erro)"};
        font-weight: bold;
        margin-bottom: 15px;
    }
    select:focus {
        background-color: ${({ $bgColorSelect }) => $bgColorSelect ? "var(--cor-terciaria)" : "var(--cor-quaternaria)"};
    }
    option[value="selecione"] {
        color: var(--cor-secundaria);
    }
`

export default function CampoTexto({
    label, 
    type, 
    name, 
    placeholder, 
    value, 
    color = "var(--cor-primaria)", 
    bgColorSelect = false, 
    textarea = false, 
    input = false, 
    select = false, 
    required = false, 
    onChange
}) {
    
    const [valido, setValido] = useState(true);
    
    function inputValidation(value) {
        if(value === "" || value === "selecione") {
            setValido(false);
        } else {
            setValido(true);
        }
    }

    return (
        <CampoStyled $color={color} $valid={valido} $expanded={textarea} $bgColorSelect={bgColorSelect}>
            <label>{label}</label>
            {input && <input onBlur={() => inputValidation(value)} required={required} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />}
            {textarea && <textarea onBlur={() => inputValidation(value)} required={required} name={name} value={value} placeholder={placeholder} onChange={onChange} />}
            {select && 
                <select required={required} type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}> 
                    <option value="selecione">Selecione uma categoria</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="mobile">Mobile</option>
                </select>}
        </CampoStyled>
    )
}