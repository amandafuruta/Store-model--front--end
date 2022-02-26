import Subheader from "components/subheader"

import styled from "styled-components";

const dados = {
    cpnj:"23.187.379.0001/96",
    address: 'Rua Santos, 766 - Loja 4 - Centro, Londrina - PR',
    whatsapp: "+55 43 9985 - 4005",
}

export default function Sobre(){
    return(
        <>
            <Subheader/>

            <Style>
                <div className="container">
                    <div className="top">
                        <div className="txt">
                            <h1 className="titulo36-bold">Família Von Borstel</h1>

                            <p className="p18-regular p_top">Nascemos com intuito de compartilhar nossas experiências, conhecimentos e paixões. Somos dedicados e comprometidos com nosso propósito de oferecer aos clientes experiências de degustação singulares. Entendemos que esse é o caminho para compartilhar nossa paixão pela produção de cervejas artesanais.

                                <br/><br/>Uma paixão que nos une enquanto família e nos faz querer dividir cada nova experiência. Acreditamos na força do mercado de cervejas artesanais, pois sabemos que ele é feito de pessoas que, assim como nós, são movidas pelo encantamento do processo de produção e pelo prazer em degustar uma boa cerveja!</p>
                        </div>
                    
                        <div className="right">
                            <img src="/images/contato1.png" alt="" />
                            <img src="/images/contato2.png" alt="" />
                        </div>

                    </div>

                    <div className="bottom">
                        <h3 className="p24-light">Von Borstel</h3>

                        <h2 className="titulo36-bold">Proposta da marca</h2>

                        <p className="p18-regular">Proporcionar aos nossos clientes experiências de degustação singulares e, dessa forma, compartilhar nosso conhecimento e paixão pela produção de cervejas artesanais. Uma paixão que nos une enquanto família e nos faz querer dividir cada nova experiência. Dividir o amor por cerveja e contribuir com o enriquecimento do mercado de cervejas artesanais, esse é o nosso propósito!</p>
                    </div>

                </div>
            </Style>
        </>

    )
}

const Style= styled.section`
    padding: 88px 20px 100px;

    .container {
        max-width: 1001px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .top{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 82px;

            .txt{
                max-width: 647px;
                margin-right: 20px;
            }
            
            h1{
                margin-bottom: 24px;
            }

            .right{
                width: min-content;
                img:first-child{
                    margin-bottom: 24px;
                }
            }
        }

        .bottom{
            max-width: 647px;
            width: 100%;
            h3{
                margin-bottom: 0;
            }

            h2{
                margin-bottom: 24px;
            }
        }
        
    }

    @media(max-width:700px){    
        padding: 72px 20px 100px;

        .container{
            .top{
                flex-direction: column;
                align-items: center;
                margin-bottom: 96px;
            }
        }
    }
`