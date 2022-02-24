import {useState} from 'react'
import {useRouter} from 'next/router'
import parser from 'html-react-parser'
import Link from 'next/link'

import styled from "styled-components"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import BannerRodape from "components/banner_rodape"
import Card from "components/card"
import Subheader from "components/subheader"

const produtos = [
    {   
        id: "1", 
        mainPhoto: "/images/product1.png", 
        name:"West Coast IPA com Strata Pack com 12", 
        value:"75,00",
        installments: "2",
        galery:["/images/big_ad1.png", "/images/detail2.png", "/images/detail1.png", "/images/detail2.png"],
        category: "Cerveja",
        subCategory: "IPA",
        about: "A Cerveja VON é uma  cerveja do estilo Oat Cream Double IPA.  Ela é feita com 70% de aveia, o que  resulta em uma cerveja de corpo aveludado e cremoso. A lupulagem fica por conta dos lúpulos El Dorado e Lemondrop, que trazem para o sensorial  notas frutadas, com destaque para frutas cítricas e frutas de caroço, como nectarina e pêssego, e um final herbal. <br> A lupulagem fica por conta dos lúpulos El Dorado e Lemondrop, que trazem para o sensorial  notas frutadas, com destaque para frutas cítricas e frutas de caroço, como nectarina e pêssego, e um final herbal.",
        estilo: "Oat Cream Double IPA",
        amargor: "Alto",
        abv:"8,4%",
        ibu:"50",
        temp_ideal: "4 a 8°C",
        harmonizacao: "Costela bovina assada",
        video_url: "https://www.youtube.com/embed/CeATQ0YTjF4",
        video_text: "A Little London harmoniza muito bem com o Risoto Siciliano com Copa da Casa! Essa harmonização traz os sabores caramelizados da nossa cerveja com a força da Copa e a acidez do limão, formando uma experiência única e saborosa, que você pode desfrutar na von Borstel.",
    },

    {id: "2", mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: "3", mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: "4", mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: "5", mainPhoto: "/images/product3.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: "6", mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: "7", mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: "8", mainPhoto: "/images/product4.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
]

const relacionados = [
    {id: 1, mainPhoto: "/images/product1.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 2, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 3, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 4, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
]


export default function ProdutoDetail(){
    const router = useRouter();
    const ID = router.query.id;
    const [position, setPosition] = useState(0)
    const [units, setUnits] = useState(1)
    const [card_cart, setCardCart] = useState(false)

    function click(id:any){
        setPosition(id)
    }

    function addCart(item:any){
        setCardCart(true)
        console.log(item)
    }

    return(
        <>  
            <Subheader/>
            {
                produtos.map((item, index) => {
                    return(
                        item.id == ID?
                        <>
                            <MainSection>
                    
                                <div className="container">
                                    <div className="path">
                                        <span className="p14-regular">Início</span>
                                        <img src="/images/preview.png" alt="" />
                                        {item.category?
                                            <>
                                                <span className="p14-regular">{item.category}</span>
                                                <img src="/images/preview.png" alt="" />
                                            </>
                                            : <></>
                                        }

                                        {item.subCategory?
                                            <>
                                                <span className="p14-regular">{item.subCategory}</span>
                                                <img src="/images/preview.png" alt="" />
                                            </>
                                            : <></>
                                        }
                                        <span className="p14-bold">{item.name}</span>
                                    </div>

                                    <div className="details">
                                        <div className="mini_pics">
                                            {
                                                item.galery != null? 
                                                    item.galery.map((photos, index)=>{
                                                        return(
                                                            <div className="box_mini" onClick={() => click(index)} id={position==index? 'active' : ''}>
                                                                <img src={photos} alt="" />
                                                            </div>
                                                        )
                                                    })
                                                :
                                                <></>
                                            }
                                        </div>

                                        <div className="left_side">
                                            {
                                                item.galery != null?
                                                    <div className="main_pic">
                                                        <img src={item.galery[position]} alt="" />
                                                    </div>
                                                :
                                                <></>   
                                            }

                                            <div className="info_details">
                                                <h2 className="p24-bold">{item.name}</h2>

                                                <div className="price">
                                                    <span className="p21-bold" style={{color:"#524E4E"}}>R$ </span>
                                                    <span className="titulo42-bold" style={{color:"var(--primary-color)"}}>{item.value}</span>
                                                </div>

                                                {
                                                    item.installments != null?
                                                        <span className="p18-regular" style={{marginBottom:"20px"}}>Parcele em {item.installments} sem juros</span>
                                                    :
                                                    <></>
                                                }
                                                <div className="unit">
                                                    <button onClick={() => units>1 ? setUnits(units - 1) : ''}><AiOutlineMinus/></button>
                                                    <span className="titulo41-regular">{units}</span>
                                                    <button onClick={() => setUnits(units + 1)}><AiOutlinePlus/></button>
                                                </div>

                                                <button onClick={()=> addCart(item.id) } className="add_cart"><img src="/images/cart.png"/><span className="p18-bold">Adicionar</span></button>
                                            </div>

                                        </div>

                                    </div>
                                </div>  

                                <CardCart style={{display: card_cart? 'flex' : 'none'}}>
                                    <div className="btn">
                                        <button onClick={()=>setCardCart(false)}><img src="/images/close_black.png"/></button>
                                    </div>

                                    <div className="check">
                                        <img src="/images/check.png"/>
                                        <span className="p14-regular">Item adicionado ao seu carrinho</span>
                                    </div>

                                    <div className="produto">
                                        <div className="img">
                                            <img src={item.mainPhoto}/>
                                        </div>
                                        <span className="p14-regular">{item.name}</span>
                                    </div>

                                    <div className="buttons">
                                        <Link href="/carrinho">
                                            <button className="orange">
                                                <img src="/images/cart.png"/>
                                                <span className="p14-bold">Ver meu carrinho (3)</span>
                                            </button>
                                        </Link>

                                        <button onClick={() => setCardCart(false)} className="p14-bold continue">Continuar comprando</button>
                                    </div>
                                </CardCart>  
                            </MainSection>
                            
                            <About>
                                <div className="container">
                                    <h3 className="p24-regular about_title" >Sobre</h3>

                                    <p className="about_text p16-regular">
                                        {parser(item.about || "")}
                                      
                                    </p>
                                    
                                    <div className="details">
                                        {item.estilo ?<span className="p16-bold">Estilo: <span className="p16-regular">{item.estilo}</span> </span>: ''}
                                        {item.amargor ? <span className="p16-bold">Amargor:<span className="p16-regular">{item.amargor}</span> </span> : ''}
                                        {item.abv? <span className="p16-bold">ABV: <span className="p16-regular">{item.abv}</span> </span> : ''}
                                        {item.ibu? <span className="p16-bold">IBU: <span className="p16-regular">{item.ibu}</span> </span> : ''}
                                        {item.temp_ideal? <span className="p16-bold">Temperatura ideal: <span className="p16-regular">{item.temp_ideal}</span> </span> : ''}
                                        {item.harmonizacao? <span className="p16-bold">Harmonização: <span className="p16-regular">{item.harmonizacao}</span> </span> :'' }
                                        
                                    </div>

                                    
                                    {item.video_url?
                                        <>
                                            <h3 className="p24-regular presentation_title">Video apresentação</h3>
                                            <div className="video_box">
                                                <iframe className="video" src={item.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </>
                                    :
                                        <></>
                                    }

                                    <p className="p16-regular">{item.video_text}</p>
                                </div>
                            </About>
                        </>
                    :
                    <></>
                    )
                })
            }

            <CervejasRelacionadas>
                <div className="container">
                    <div className="text_title">
                        <h3>Cervejas relacionadas</h3>
                        <p>Cervejas selecionadas com preços especiais!</p>
                    </div>

                    <div className="products">
                        {
                            relacionados.map((item, index) => {
                                return <Card key={index} id={item.id} photo={item.mainPhoto} description={item.name} price={item.value} margin={120} />
                            })
                        }
                    </div>
                </div>
            </CervejasRelacionadas>

            <BannerRodape/>
            
            

        </>

    )
}

const MainSection = styled.section`
    padding: 26px 20px;

    .container{
        max-width: 1088px;
        margin: 0 auto;

        .path{
            margin-bottom: 45px;
            span, img{
                margin-right: 14px;
            }
        }

        .details{
            display: flex;
            align-items: center;
            justify-content: center;

            .mini_pics{
                margin-right: 22px;

                .box_mini{
                    width:70px;
                    height: 70px;
                    position: relative;
                    margin-bottom: 20px;
                    cursor: pointer;

                    img{
                        max-height: 100%;
                        max-width: 100%;
                        width: auto;
                        height: auto;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                        
                    }
                }

                #active{
                    border: 1px solid var(--primary-color);
                    border-radius: 4px;
                }
            }

            .left_side{
                display: flex;

                .main_pic{
                    width: 372px;
                    height: 344px;
                    margin-right: 54px;
                    img{
                        object-fit: contain;
                        width: inherit;
                        height: inherit;
                    }
                }

                .info_details{
                    max-width:289px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    text-align: center;

                    h2, .price{
                        margin-bottom: 14px;
                        line-height: 30px;
                    }

                    .unit{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 37px;

                        button{
                            height: 40px;
                            width: 40px;
                            border:  none;
                            border-radius: 100px;
                            background-color: #F1F3F4;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        span{
                            margin: 0 39px;
                        }
                    }

                    .add_cart{
                        width:250px;
                        padding: 16px 0;
                        background-color: var(--primary-color);
                        border-radius: 4px;
                        border: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img{
                            margin-right: 11px;
                        }

                        span{
                            color: #fff;
                        }

                        &:hover{
                            background-color: var(--hover-color);
                        }
                    }

                }
            }
        }
    }

    @media(max-width:800px){
        .container{
            .path{
                margin: 0;
            }
            .details{
                align-items: flex-start;
                margin-top: 15px;

                .left_side{
                    flex-direction: column;
                    align-items: center;
                    margin-top: 30px;

                    .main_pic{
                        margin-right: 0;
                        max-width: 372px;
                        width: 100%;
                        height: 230px;
                    }
                }
            }
        }
    }
`

const About = styled.section`
    margin-bottom: 122px;

    .container{
        max-width:1088px;
        background-color: #F1F3F4;
        padding: 40px 105px 137px 92px;
        margin: 0 auto;
        
        .about_title, .presentation_title{
            line-height: 25px;
            margin-bottom: 52px;
            position: relative;

            &:after{
                content:"";
                width: 82px;
                height: 5px;
                background-color: var(--primary-color);
                position: absolute;
                left: 0;
                top: 37px;
            }
        }


        .about_text{
            margin-bottom: 35px;
        }

        .details{
            display: flex;
            flex-direction: column;
            margin-bottom: 83px;
            span{
                line-height: 35px;
            }
        }
        
        .video_box{
            display: flex;
            justify-content: center;
            margin-bottom: 44px;

            .video{
                max-width: 656px;
                width: 100%;
                aspect-ratio: 1/0.5;
            }
        }
    }

    @media(max-width:400px){
        margin-bottom: 82px;
        .container{
            padding: 40px 30px 80px 30px;
        }
    }
`

const CervejasRelacionadas = styled.section`
    padding: 0 20px 57px;
    .container{
        max-width: 1088px;
        margin: 0 auto;

        .products{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
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
        }
    }
`

const CardCart = styled.div`
    position: absolute;
    padding: 21px 25px 35px 32px;
    border-radius: 8px;
    background-color: #fff;
    top: 109px;
    right: 40%;
    flex-direction: column;
    max-width: 395px;
    width: 100%;
    box-shadow: 3px 3px 10px #666060;

    .btn{
        text-align: end;

        button{
            border: none;
            background-color: #fff;
            outline: none;s
        }
    }

    .check{
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        img{
            margin-right: 12px;
            width: 16px;
            height: 12px;
        }
    }

    .produto{
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        .img{
            height: 70px;
            width: 70px;
            margin-right: 12px;
            img{
                object-fit: contain;
                width: 100%;
            }
        }

        span{
            max-width: 255px;
        }
    }

    .buttons{
        text-align: center;

        .orange{
            width: 331px;
            background-color: var(--primary-color);
            border: none;
            border-radius: 4px;
            padding: 13px 0;
            margin-bottom: 17px;

            img{
                margin-right: 8px;
            }

            span{
                color: #fff;
            }
        }

        .continue{
            color: var(--primary-color);
            background-color: #fff;
        }
    }

    @media(max-width:670px){
        right: 28%;
    }

    @media(max-width:650px){
        right: 20%;
    }

    @media(max-width:500px){
        right: 10%;
    }

    @media(max-width:450px){
        right: 5%;
    }

    @media(max-width:420px){
        max-width: 380px;
        padding: 21px 25px 35px 25px;
    }

    @media(max-width:405px){
        right: 2%;
    }

    @media(max-width:390px){
        right: 1%;
    }

    @media(max-width:385px){
        max-width: 350px;
        right: 4%;

        .buttons{
            .orange{
                width: 275px;
            }
        }
    }

    @media(max-width:370px){
        right: 2%;       
        padding: 21px 20px 35px 20px;
    }

    @media(max-width:360px){
        right: 1%;
    }

    @media(max-width:350px){
        right: 0;
    }
`

