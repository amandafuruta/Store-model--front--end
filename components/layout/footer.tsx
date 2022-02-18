import styled from "styled-components"
import Link from 'next/Link'

export default function FooterComponent() {
    const phone = ''
    , text = 'Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C5%8Des%20.'

    return (
        <Style>
            <div className="faixa_laranja"></div>

            <div className="main_content">
                <div className="container">

                    <div className="column_first">
                        <img src="/images/logomain.png" alt="" />
                    </div>

                    <div className="box">
                        <div className="column_second">
                            <ul>
                                <li><Link href=""><a className="p16-regular">Sobre</a></Link></li>
                                <li><Link href=""><a className="p16-regular">Termo de uso</a></Link></li>
                                <li><Link href=""><a className="p16-regular">Política de Privacidade</a></Link></li>
                                <li><Link href=""><a className="p16-regular">SAC <span className="p16-regular">/</span> Contato</a></Link></li>
                            </ul>
                        </div>

                        <div className="column_third">
                            <ul>
                                <li><Link href=""><a className="p16-regular">Cervejas</a></Link></li>
                                <li><Link href=""><a className="p16-regular">Kits especiais!</a></Link></li>
                                <li><Link href=""><a className="p16-regular">Monte seu kit</a></Link></li>
                                <li><Link href=""><a className="p16-regular">Promoções</a></Link></li>
                                <li><Link href=""><a className="p16-regular">Receitas</a></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="column_forth">
                        <div className="social_medias">
                            <a href=""  target='_blank' rel="noreferrer"><img src="/images/facebook.png"/></a>
                            <a href=""  target='_blank' rel="noreferrer"><img src="/images/instagram.png"/></a>
                            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${text}`}  target='_blank' rel="noreferrer"><img src="/images/whatsapp.png"/></a>
                        </div>

                        <div className="pagarme">
                            <img src="/images/pagarme.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="rodape">
                <div className="container">
                    <span className="p12-400 sp1">Von Cervejaria CNPJ: 23.187.379.0001/96</span>
                    <span className="p12-400 sp2">Rua Santos, 1321. Londrina-PR</span>
                    <span className="p12-400 sp3">2022 / Marca registrada</span>
                    <span className="p12-400">Desenvolvimento <b>Lets</b></span>
                </div>
            </div>
        </Style>
    )
}

const Style = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;

    .faixa_laranja{
        background-color: var(--primary-color);
        height: 54px;
    }

    .container{
        max-width: 984px;
        width: 100%;
        margin: 0 auto;
        justify-content: space-between;
        display: flex;
    }

    .main_content{
        background-color: #161818 ;
        padding: 135px 20px 84px;

        .container{
            .box{
                display: flex;
                max-width: 338px;
                width: 100%;
                justify-content: space-between;
            }

            .column_second, .column_third{
                ul{
                    li{
                        margin-bottom: 11px;

                        a{
                            color: #fff;

                            span{
                                color: var(--primary-color);
                            }
                        }
                    }
                }
            }

            .column_forth{
                .social_medias{
                    width: 245px;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 40px;
                    text-align: end;

                    img{
                        width: 49px;
                        height: 49px;
                    }
                }
            }
        }
    }

    .rodape{
        padding: 30px 15px;
        background-color: #161818 ;
        border-top: 1px solid var(--primary-color);
        
        span{
            color: #fff;
        }
    }

    @media(max-width:890px){
        .main_content{
            padding: 49px 20px 84px;
            .container{
                flex-direction: column;
                align-items: center;

                .column_first{
                    margin-bottom: 60px;
                }

                .box{
                    margin-bottom: 98px;
                }

                .column_forth{
                    .social_medias{
                        margin-bottom: 86px;
                    }
                    .pagarme{                
                        text-align: center;
                        margin-left: 25px;
                    }
                }
            }
        }

        .rodape{
            border-top: none;
            padding: 0 15px 65px;
            .container{
                flex-direction: column;
                align-items: center;

                .sp1, .sp3{
                    margin-bottom: 9px;
                }

                .sp2{
                    margin-bottom: 72px;
                }
            }
        }
    }

`
