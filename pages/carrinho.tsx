import { useState, useEffect } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import ProductDetail from '../components/produto_cart_detail'
import Card from "../components/card"
import BaseLayoutComponent from 'components/layout/base'


const cart:any = [
    {id:1, photo: "/images/product1.png", name:'Amet nunc, tincidunt interdum rhoncus massa', quantity: 1, price: 3.50},
    {id:2, photo: "/images/product1.png", name:'Amet nunc, tincidunt interdum rhoncus massa', quantity: 1, price: 5.00},
    {id:3, photo: "/images/product1.png", name:'Amet nunc, tincidunt interdum rhoncus massa', quantity: 1, price: 6.50},
]

const destaques = [
    {id: 1, mainPhoto: "/images/product1.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 2, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 3, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
    {id: 4, mainPhoto: "/images/product2.png", name:"West Coast IPA com Strata Pack com 12", value:"75,00" },
]

export default function Cart(){
    const [paymentMethod, setPaymentMethod] = useState('')
    const [total, setTotal] = useState(0)
    const [valueChanged, setValueChanged] = useState(0)
 
      useEffect(()=>{
          var total = 0
        {
            cart.map((item:any)=>{
                total = total + (item.quantity*item.price)
            })
        }

        setTotal(total)
      })

      function soma (qtdd:number, price:number, id:any){
        var total = 0

        {
            cart.map((item:any)=>{
                
                item.id != id?
                    (
                        total += (item.quantity*item.price)
                    ):
                    (

                        item.quantity = qtdd,
                        total += (qtdd*price)
                        
                    )
                        
            })
        }
        setValueChanged(total)
      }

      function deletar (id:number){
        console.log(id)
        
        var index = 0
        {
            cart.map((item:any)=>{
                
                item.id == id ?
                    (
                        cart.splice(index, 1),
                        sumAgain()
                    )
               :
                    <></>

               index++

            })
        }

      }

      function sumAgain(){
          var total = 0
        {
            cart.map((item:any)=>{
     
                total += (item.quantity*item.price)

            })
        }
        setValueChanged(total)    
      }
      
    return(
        
        <BaseLayoutComponent>
            {
                cart.length > 0 ?
                    <Style>
                        <div className="green">
                            <span className="p20-bold">Meu pedido</span>
                        </div>

                        <div className="container">
                            <div className="left">
                                <span className="p18-bold">Resumo do pedido</span>
                                <span className="p14-regular" style={{marginBottom:17}}>{cart.length} itens no carrinho</span>
                                
                                <div className="first_line">
                                    <span className="p14-bold" >PRODUTO</span>
                                    <span className="p14-bold" >TOTAL</span>
                                </div>

                                <div>
                                    {
                                        cart.map((item:any, index:number) => {
                                            return(
                                                
                                            <ProductDetail key={index} id={item.id} remove={(id:any) => deletar(id)} callbackParent={(value:any, price:any, id:any)=> soma(value, price, id)} photo={item.photo} name={item.name} quantity={item.quantity} price={item.price}/>
                                               
                                            )
                                        })
                                    }
                                </div>

                                <div className="total">
                                    <div className="content">
                                        <span className="p18-bold">Total</span>
                                        <span className="p18-bold">R$ {valueChanged != 0? valueChanged : total}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="right">
                                <div className="right_card">
                                    <span className="p16-bold">Faturamento</span>

                                    <button onClick={()=> setPaymentMethod("boleto")} style={{borderColor: paymentMethod=='boleto'? "#0DAA7A" : "" }}>
                                        <label className="p14-regular">Boleto bancário
                                            <input type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </button>

                                    <button onClick={()=> setPaymentMethod("pix")} style={{borderColor: paymentMethod=='pix'? "#0DAA7A" : "" }}>
                                        <label className="p14-regular">Pix para CNPJ 23.187.379.0001/96
                                            <input type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </button>
                                </div>

                                <span className="p14-regular">Ao enviar seu pedido, você declara que é maior de 18 anos e concorda com os <Link href="/termo_uso"><a className="p14-bold">Termos de Serviço</a></Link> e <Link href="/politica_privacidade"><a className="p14-bold">Política de Uso de Dados</a></Link> da Cervejaria Von Borstel</span>

                                <Link href="compra_sucesso"><button className="p18-bold request">Fazer pedido</button></Link>
                            </div>
                        </div>
                    </Style>
                : 
                    <Empty> 
                        <div className="container">
                            <div className="top_box">
                                <h2 className="p24-bold">Seu carrinho está vazio.</h2>
                                <p className="p14-regular">Vá para a <Link href="/home"><a className="p14-bold">página inicial</a></Link> ou procure no site os produtos que vão te deixar feliz.
                                Quando encontrá-los, clique no botão adicionar ao carrinho ;)</p>
                            </div>

                            <CervejasRelacionadas>
                                <div className="container_cervejas">
                                    <div className="text_title">
                                        <h3>Destaques</h3>
                                        <p>Cervejas incríveis que selecionamos para você!</p>
                                    </div>

                                    <div className="products">
                                        {
                                            destaques.map((item, index) => {
                                                return <Card key={index} id={item.id} photo={item.mainPhoto} description={item.name} price={item.value} margin={120} />
                                            })
                                        }
                                    </div>
                                </div>
                            </CervejasRelacionadas>
                        </div> 
                    </Empty>
            }
        
            
        </BaseLayoutComponent>
    )
}

const Style = styled.section`
    
    .green{
        background-color: var(--green-color);
        text-align:center;
        padding: 10px 20px;
        span{
            color: #fff;
        }
    }

    .container{
        max-width: 1032px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 56px 10px;
        margin: 0 auto;

        .left{
            max-width:570px;
            width: 100%;
            padding: 19px 29px 62px 20px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            margin-right: 24px;

            .first_line{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 7px;

                span{
                    color: #524E4E;
                }
            }

            .total{
                display: flex;
                justify-content: end;
                border-top: 2px solid #e1e3e5;
                padding-top: 22px;

                .content{
                    max-width: 260px;
                    width: 100%;
                    justify-content: space-between;
                    display: flex;
                }
            }
        }

        .right{
            display: flex;
            flex-direction: column;
            max-width:428px;
            width: 100%;

            .right_card{
                width: 100%;
                padding: 20px 16px 37px 15px;
                box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
                border-radius: 4px;
                display: flex;
                flex-direction: column;
                margin-bottom: 24px;

                span{
                    margin-bottom: 34px;
                }

                button{
                    background-color: #fff;
                    position: relative;
                    cursor: pointer;
                    border-radius: 4px;
                    border: 1px solid #B2BCCA;
                    padding: 13px 20px 13px 21px;
                    
                    label{
                        display: flex;
                        position: relative;
                        padding-left: 30px;
                        cursor: pointer;
                        margin: 0;
                        
                        input {
                            position: absolute;
                            opacity: 0;
                        }

                        .checkmark {
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 20px;
                            width: 20px;
                            border: 1px solid #eee;
                            border-radius: 50%;
                        }

                        input:checked ~ .checkmark {
                            border: 2px solid var(--green-color);
                        }

                        .checkmark:after {
                            content: "";
                            position: absolute;
                            display: none;
                            top: 3px;
                            left: 3px;
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background: var(--green-color);
                        }

                        input:checked ~ .checkmark:after {
                            display: block;
                        }

                    }
                    
                    &:hover{
                        border: 1px solid #0DAA7A;
                        label{
                            font-weight: bold;
                        }
                        .checkmark {
                            background-color: #ccc;
                        }
                    }

                    &:not(:last-child){
                        margin-bottom: 14px;
                    }
                }
            }

            span{
                max-width: 400px;
                margin-bottom: 24px;
                a{
                    color: #000;
                }
            }

            .request{
                background-color: var(--green-color);
                border-radius: 4px;
                padding: 15px 0;
                max-width:411px;
                width: 100%;
                color: #fff;
                outline: none;


                &:hover{
                    background-color: var(--green-dark-color);
                }
            }
        }
    }

    @media(max-width:800px){
        .container{
            flex-direction: column;
            align-items: center;

            .left{
                margin-right: 0;
                margin-bottom: 40px;
            }
        }
    }
`

const Empty = styled.section`
    padding: 58px 20px;

    .container{
        max-width: 1104px;
        width: 100%;
        margin: 0 auto;
        text-align: center;

        .top_box{
            margin: 0 auto 123px;

            p{
                max-width:479px;
                margin: 0 auto;
                a{
                    color: var(--primary-color);
                }
            }
        }
    }
`

const CervejasRelacionadas = styled.section`
    padding: 0 20px;

    .container_cervejas{
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        text-align: initial;

        .products{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 45px;
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