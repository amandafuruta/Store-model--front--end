import Subheader from "components/subheader"

import styled from "styled-components";

const dados = {
    cpnj:"23.187.379.0001/96",
    address: 'Rua Santos, 766 - Loja 4 - Centro, Londrina - PR',
    whatsapp: "+55 43 9985 - 4005",
}

export default function Contato(){
    return(
        <>
            <Subheader/>

            <Style>
                <div className="container">
                    <div className="top">
                        <h1 className="titulo41-bold">SAC / Contato</h1>

                        {dados.cpnj? <span className="p18-bold">Von Cervejaria CNPJ: <span className="p18-regular">{dados.cpnj}</span> </span> : ''}
                        {dados.address? <span className="p18-bold">Endereço: <span className="p18-regular">{dados.address}</span> </span> : ''}
                        {dados.whatsapp? <span className="p18-bold">WhatsApp: <span className="p18-regular">{dados.whatsapp}</span> </span> : ''}
                        <span className="p18-bold">Facebook - Instagram</span>
                    </div>

                    <div className="bottom">
                        <img src="/images/contato1.png" alt="" />
                        <img src="/images/contato2.png" alt="" />
                    </div>
                </div>
            </Style>
        </>

    )
}

const Style= styled.section`
    padding: 88px 20px;

    .container {
        max-width: 733px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .top{
            display: flex;
            flex-direction: column;
            max-width: 345px;
            width: 100%;
            
            
            h1, span{
                margin-bottom: 24px;
            }
        }

        .bottom{
            width: min-content;
            img:first-child{
                margin-bottom: 24px;
            }
        }
    }

    @media(max-width:700px){
        .container{
            flex-direction: column;
        }
    }
`