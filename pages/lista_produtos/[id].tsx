
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Subheader from "components/subheader"
import Card from "components/card"
import CheckBox from "../../components/checkbox"

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

export default function Lista_produtos(){
    const { query } = useRouter()
    const [filter_content, setFilterContent] = useState("Relevantes")
    const [filter_open, setFilterOpen] = useState(false)
    const [orange_filter_open, setOrangeFilterOpen] = useState(false)
    
    return(
        <>
            <Subheader/>
        
            <Style>
                <div className="container">
                    <div className="path">
                        <span className="p14-regular">Início</span>
                        <img src="/images/preview.png" alt="" />
                        <span className="p14-bold">{query.id}</span>
                    </div>

                    <div className="body">
                        <div className="left">

                            <div className="options_box">
                                <p className="p14-bold title">Estilos de cerveja</p>
                                
                                <CheckBox title="India Pale Ale - IPA " quantity={12} name="India Pale Ale" value="India Pale Ale" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Pale Ale " quantity={2} name="Pale Ale" value="Pale Ale" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Pilsen " quantity={9} name="Pilsen" value="Pilsen" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Red Ale  " quantity={12} name="Red Ale" value="Red Ale" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Bock " quantity={4} name="Bock" value="Bock" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                            </div>

                            <div className="options_box">
                                <p className="p14-bold title">EMBALAGEM</p>
                                
                                <CheckBox title="Lata " quantity={12} name="Lata" value="Lata" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Latão " quantity={2} name="Latao" value="Latao" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Garrafa " quantity={9} name="Garrafa" value="Garrafa" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Long Neck  " quantity={12} name="Long Neck" value="Long Neck" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                            </div>

                            <div className="options_box">
                                <p className="p14-bold title">Tipo de cerveja</p>
                                
                                <CheckBox title="Clara " quantity={12} name="Clara" value="Clara" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                                <CheckBox title="Escura " quantity={2} name="Escura" value="Escura" margin={16} font_size="14px" font_weight={400}  span_font_weight={400}/>
                            </div>

                            <div className="options_box">
                                <p className="p14-bold title">Faixa de preço</p>
                                
                                <div className="price_filter">
                                    <input type="checkbox" name="OPCAO" value="op1" />  
                                    <label className="p14-regular">Até R$ 14,99</label>
                                </div>

                                <div className="price_filter">
                                    <input type="checkbox" name="OPCAO" value="op1" />  
                                    <label className="p14-regular">De R$ 15,00 até R$ 24,99</label>
                                </div>

                                <div className="price_filter">
                                    <input type="checkbox" name="OPCAO" value="op1" />  
                                    <label className="p14-regular">Acima de R$ 40,00</label>
                                </div>
                            
                            </div>
                        </div>

                        <div className="right">
                            <div className="top">
                                <div className="top_left">
                                    {
                                        query.id == "kits_especiais" ?
                                            <h1 className="title36-bold">Kits Especiais</h1>
                                        :
                                            <>
                                                {query.id == "monte_seu_kit"?
                                                    <h1 className="title36-bold">Monte seu kit</h1>
                                                    :
                                                    <>
                                                    {query.id == "promocoes"?
                                                        <h1 className="title36-bold">Promoções</h1>
                                                        :
                                                        <></>
                                                    }
                                                    </>
                                                }
                                            </>
                                    }
                                    <span className="p14-regular">255 produtos encontrados</span>
                                </div>
                                
                                <div className="filter">
                                    <div className="top_right">
                                        <button onClick={() => setFilterOpen(!filter_open)}>
                                            {filter_content}
                                            <img src="/images/down_arrow.svg"/>
                                        </button>

                                        <ul style={{display: filter_open? 'contents' : 'none' }}>
                                            <li onClick={() => {setFilterContent("Relevantes"), setFilterOpen(!filter_open)}}>Relevantes</li>
                                            <li onClick={() => {setFilterContent("Maior preço"), setFilterOpen(!filter_open)}}>Maior preço</li>
                                            <li onClick={() => {setFilterContent("Menor preço"), setFilterOpen(!filter_open)}}>Menor preço</li>
                                        </ul>
                                    </div>
                                    
                                    <button className="orange_button" onClick={() => setOrangeFilterOpen(!orange_filter_open)}>
                                        <img src="/images/cart.png"/>
                                        <span className="p14-bold">Filtrar</span> 
                                    </button>
                                </div>
                            </div>

                            
                            <div className="products">
                                {
                                    produtos.map((item, index) => {
                                        return <Card key={index} id={item.id} photo={item.mainPhoto} description={item.name} price={item.value} margin={100}/>
                                    })
                                }
                            </div>                      
                        </div>
                    </div>
                </div>
                

                <div className="aba_filtro_mobile" style={{display: orange_filter_open? 'block' : 'none'}}>
                    <div className="head">
                        <button onClick={() => setOrangeFilterOpen(!orange_filter_open)}><img src="/images/closeIcon.png"/></button>
                        <span className="titulo36-bold">Filtrar</span>
                    </div>

                    <div className="body">
                        <div className="options_box">
                            <p className="p18-bold title">Estilos de cerveja</p>
                            
                            <CheckBox title="India Pale Ale - IPA " quantity={12} name="India Pale Ale" value="India Pale Ale"  margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Pale Ale " quantity={2} name="Pale Ale" value="Pale Ale" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Pilsen " quantity={9} name="Pilsen" value="Pilsen" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Red Ale  " quantity={12} name="Red Ale" value="Red Ale" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Bock " quantity={4} name="Bock" value="Bock" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                        </div>
                        
                        <div className="options_box">
                            <p className="p14-bold title">EMBALAGEM</p>
                            
                            <CheckBox title="Lata " quantity={12} name="Lata" value="Lata" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Latão " quantity={2} name="Latao" value="Latao" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Garrafa " quantity={9} name="Garrafa" value="Garrafa" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Long Neck  " quantity={12} name="Long Neck" value="Long Neck" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                        </div>

                        <div className="options_box">
                            <p className="p14-bold title">Tipo de cerveja</p>
                            
                            <CheckBox title="Clara " quantity={12} name="Clara" value="Clara" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                            <CheckBox title="Escura " quantity={2} name="Escura" value="Escura" margin={32} font_size="18x" font_weight={700}  span_font_weight={400}/>
                        </div>

                        <div className="options_box">
                            <p className="p14-bold title">Faixa de preço</p>
                            
                            <div className="price_filter">
                                
                                <label className="p18-bold label">Até R$ 14,99
                                    <input type="checkbox"  name="" value=""  />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <div className="price_filter">
                                
                                <label className="p18-bold label">De R$ 15,00 até R$ 24,99
                                    <input type="checkbox"  name="" value=""  />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <div className="price_filter">
                                
                                <label className="p18-bold label">Acima de R$ 40,00
                                    <input type="checkbox"  name="" value=""  />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </Style>
        </>
    )
}

const Style = styled.section`
    padding: 25px 20px ;
    position: relative;

    .container{
        max-width: 1193px;
        width: 100%;
        margin: 0 auto;

        .path{
            margin-bottom: 38px;
            span, img{
                margin-right: 14px;
            }
        }

        .body{
            display: flex;
            justify-content: space-between;

            .right{
                max-width: 900px;
                width: 100%;

                .top{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 26px;
                    position: relative;
                    
                    .orange_button{
                        display: none;
                    }

                    .filter{
                        
                        .top_right{
                            position: absolute;
                            top: 0;
                            right: 0;
    
                            button{
                                border: none;
                                width: 150px;
                                height: 50px;
                                background-color: #F8F8F8;
                                outline: none;
    
    
                                img{
                                    width: 10px;
                                    margin-left: 22px;
                                }
                            }
    
                            ul{
                                
                                li{
                                    padding: 10px 10px;
                                    background-color: #F8F8F8;
    
                                    &:hover{
                                        background-color: #d3d2d2;
                                    }
                                }
                            }
                        }
                    }
                }

                .products{
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
            }

            .left{
                max-width:262px;
                width: 100%;
                background-color: #F8F8F8;
                border-radius: 4px;
                margin-top: 20px;
                padding: 48px 16px 28px;
                height:884px;
                margin-right: 34px;

                .options_box:not(:last-child){
                    margin-bottom: 52px;
                }
                
                .options_box{
                    .title{
                        text-transform: uppercase;
                        margin-bottom: 20px;
                    }

                    .price_filter{
                        display: flex;
                        align-items: center;
                        margin-bottom: 16px;

                        input{
                            width: 14px;
                            height: 14px;
                            margin-bottom: 0;
                            margin-right: 8px;
                            border-radius: 4px;
                            border: 1px solid #DDDDDD;
                        }

                        label{
                            margin-bottom: 0;
                        }
                    }
                }

                
            }
        }
    }

    .aba_filtro_mobile{
        position: absolute;
        background-color: #24242D;
        max-width:428px;
        width: 100%;
        padding: 0 39px ;
        top: 0;
        left: 0;

        .head{
            display: flex;
            padding: 30px 0;

            button{
                border: none;
                background-color: transparent;
                margin-right: 64px;
            }

            span{
                color: #fff;
            }
        }

        .body{
            p, label{
                color: #fff;
            }

            p{
                text-transform: uppercase;
                margin-bottom:30px;
            }

            .price_filter{
                display: flex;
                align-items: center;
                margin-bottom: 32px;

                input{
                    width: 24px;
                    height: 24px;
                    margin-bottom: 0;
                    margin-right: 8px;
                    border-radius: 4px;
                    border: 1px solid #DDDDDD;
                }

                label{
                    margin-bottom: 0;
                }
            }
        }
    }

    @media (max-width: 990px){
        padding: 25px 45px ;

        .container{
            max-width: 800px;
            .body{
                .left{
                    display:none;
                }

                .right{
                    .top{
                        flex-direction: column;
                        align-items: start;
                        
                        .top_left{
                            margin-bottom: 32px;
                        }

                        .filter{
                            margin-bottom: 48px;
                            position: relative;
                            width: 100%;
                            .orange_button{
                                display: block;
                                border-radius: 4px;
                                border: none;
                                width: 150px;
                                text-align: center;
                                background-color: var(--primary-color);
                                padding: 13px;

                                img{
                                    margin-right: 11px;
                                }

                                span{
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 770px){
        .container{
            .body{
                .right{
                    .products{
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            }
        }
    }

    @media(max-width: 420px){
        padding: 25px 20px;
    }
`