
import Subheader from "components/subheader"
import Link from 'next/link'

import styled from "styled-components"

export default function CompraSucesso(){
    return(
        <>
            <Subheader/>

            <Style>
                <div className="container">
                    <h1 className="title36-bold">O seu pedido foi encaminhado com sucesso!</h1>
                    <Link href="/"><button className="p18-bold">Voltar à página inicial</button></Link>
                </div>
            </Style>
        </>
    )
}

const Style = styled.section`
    padding: 78px 20px 163px;

    .container{
        max-width: 537px;
        width: 100%;
        text-align: center;
        margin: 0 auto;

        h1{
            margin-bottom: 40px;
        }

        button{
            max-width: 397px;
            width: 100%;
            color: #fff;
            background-color: var(--green-color);
            border-radius: 4px;
            height: 60px;
            outline: none;

            &:hover{
                background-color: var(--green-dark-color);
            }
        }
    }
`