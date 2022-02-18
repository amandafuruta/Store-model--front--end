import Subheader from "components/subheader"
import Banner from "components/banner"
import BannerRodape from "components/banner_rodape"
import Card from "components/card"

import styled from 'styled-components'

const produtos = [
    {id: 1, mainPhoto: "/images/product1.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 2, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 3, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 4, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 5, mainPhoto: "/images/product3.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 6, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 7, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 8, mainPhoto: "/images/product4.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
]

const presentes = [
    {id: 1, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 2, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 3, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 4, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
]


export default function AreaLogada(){
    return(
        <>
            <Subheader/>
            <Banner/>

            <Promocionais>
                <div className="container">

                    <div className="text_title">
                        <h3>Promocionais</h3>
                        <p>Cervejas selecionadas com preços especiais!</p>
                    </div>

                    <div className="products">
                        {
                            produtos.map((item, index) => {
                                return <Card key={index} id={item.id} photo={item.mainPhoto} description={item.name} price={item.value} />
                            })
                        }

                    </div>

                    <div className="banner_anuncio ad_triple">
                        <div className="ad_box first_ad"><img src="/images/ad1.png"/></div>
                        <div className="ad_box"><img src="/images/ad2.png"/></div>
                        <div className="ad_box last_ad"><img src="/images/ad1.png"/></div>
                    </div>

                    <div className="text_title">
                        <h3>Kits para presentes</h3>
                        <p>Cervejas selecionadas com preços especiais!</p>
                    </div>

                    <div className="banner_anuncio ad_doble">
                        <div className="ad_box"><img src="/images/big_ad1.png"/></div>
                        <div className="ad_box last_ad"><img src="/images/big_ad1.png"/></div>
                    </div>
                    
                    <div className="products">
                        {
                            presentes.map((item, index) => {
                                return <Card key={index} id={item.id} photo={item.mainPhoto} description={item.name} price={item.value} />
                            })
                        }
                    </div>
                </div>
            </Promocionais>
            
            <BannerRodape/>
        </>
    )
}

const Promocionais = styled.section`
    padding: 0 20px 25px;

    .container{
        max-width: 1088px;
        width: 100%;
        margin: 0 auto;

        .text_title{
            margin-bottom: 45px;
            &:before{
                content: "";
                width: 50px;
                height: 2px;
                background-color: var(--primary-color);
                position: absolute;
            }
        }

        h3{
            margin: 0; 
        }

        .products{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }

        .ad_triple{
            margin-bottom: 75px;
            flex-wrap: wrap;
            .ad_box{
                max-width: 350px;
                height: 200px;
            }
        }

        .ad_doble{
            margin-bottom: 92px;

            .ad_box{
                max-width: 533px;
                height: 221px;
            }
        }
        
        .banner_anuncio{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 45px;

            .ad_box{
                width: 100%;
                
                img{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }

                &:not(:last-child){
                    margin-right:10px ;
                }
            }
        }
    }

    @media(max-width:1110px){
        .container{
            .banner_anuncio{
                flex-wrap: wrap;
                justify-content:center;
                
                .last_ad{
                    margin-top: 24px;
                }
                
            }
        }
    }

    @media(max-width: 990px){
        .container{
            max-width: 850px;
            .products{
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }

    @media(max-width:770px){
        .container{
            .products{
                grid-template-columns: repeat(2, 1fr);
            }

            .banner_anuncio{
                flex-direction: column;
                
                .first_ad{
                    margin-bottom: 24px;
                }
                
            }
        }
    }
/* 
    @media(max-width:510px){
        .container{
            .products{
                grid-template-columns: repeat(1, 1fr);
            }
        }
    } */

`