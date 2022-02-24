import styled from "styled-components"
import Link from "next/link"
import {useState} from 'react'

import MobileMenu from './menu_mobile'

export default function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Header>
            <div className="container">

                <div className="division_1">
                    <img src="/images/logo1.png" alt="" className="logo"/>
                    <div className="itapeva">
                        <span className="p16-bold mc">MC</span>
                        <span className="p16-bold itap">Itapeva</span>
                    </div>
                </div>

                <div className="division_1_mobile">
                    <button onClick={() => setMenuOpen(!menuOpen)}><img src="/images/menuIcon.png"/></button>
                </div>

                <Link href="/">
                    <img className="mainLogo" src="/images/logomain.png" alt="" />
                </Link>

                <Link href="carrinho">
                    <a href="">
                        <img src="/images/cartIcon.png" alt="" />
                        <span className="p14-bold cart_text">Carrinho</span>
                        <div>
                            <span className="p12-bold">3</span>
                        </div>
                    </a>
                </Link>
            </div>

            <div className="menu_mobile" style={{display: menuOpen? 'flex': 'none'}}>
                <div className="header_mobile">
                    <button onClick={() => setMenuOpen(!menuOpen)}><img src="/images/closeIcon.png"/></button>
                    <img src="/images/logomain.png" alt="" />
                </div>
                <MobileMenu/>
            </div>
        </Header>
    )
}

const Header = styled.header`
    background-color:#24242D;
    padding: 0 20px;

    .menu_mobile{
        display: none;
    }

    .container{
        max-width: 1090px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;

        .division_1_mobile{
            display: none;
        }

        .division_1{
            display: flex;
            align-items: center;
        }
        .logo{
            margin-right: 16px;

        }

        .itapeva{
            span{
                color: #fff;
            }

            .mc{
                padding-right: 5px;
                border-right: 2px solid var(--primary-color);
            }

            .itap{
                padding-left: 5px;
            }
        }

        a{
            width: 120px;
            background-color: var(--primary-color);
            border-radius: 4px;
            text-align: center;    
            padding: 13px 0;
            position: relative;

            img{
                margin-right:11px;
            }

            span{
                color:#fff;
            }

            div{
                position: absolute;
                width: 24px;
                height: 24px;
                background: #333333;
                border-radius: 32px;
                right: -10px;
                top: -10px;
            }

            &:hover{
                background-color: var(--hover-color);
            }
        }

        .mainLogo{
            cursor: pointer;
        }
    }

    @media(max-width: 990px){
        padding: 22px 20px;
        .container{
            .division_1{
                display: none;
            }

            .division_1_mobile{
                display: flex;
                button{
                    border: none;
                    background-color:#24242D;
                }
            }
        }
        
        .menu_mobile{
            position: absolute;
            background-color: #24242D;
            max-width:428px;
            width: 100%;
            left: 0;
            top: 106px;
            flex-direction: column;
            z-index: 2;

            .header_mobile{
                padding: 21px 42px;
                max-width: 330px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                button{
                    border: none;
                    background-color: #24242D;
                }
            }
        }
    }

    @media(max-width:450px){
        .container{
            .cart_text{
                display:none;
            }

            a{
                width: 50px;
                
                img{
                    margin: 0;
                }
            }
        }
    }
`
