import styled from "styled-components"

interface Props{
    background: string;
}

export default function Banner1(props: Props){
    return(
        <Style style={{backgroundImage:`url(${props.background})`}}>
            
        </Style>
    )
}

const Style = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    max-width: 1088px;
    width: 100%;
    height: 100%;
 
 
`