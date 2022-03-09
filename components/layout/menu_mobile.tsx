import { useState } from 'react'

import Link from 'next/link'
import Image from "next/image"

import ArrowOpen from '../../public/images/arrowopen.png'
import ArrowClose from '../../public/images/arrowclose.png'

import styled from "styled-components";

export default function MobileMenu(props:any){
    const [blend, setBlend] = useState(false)
    const [pack, setPack] = useState(false)
    const [edlimited, setEdlimited] = useState(false)
    
    return(
        <Style>
            <ul id="mainul">
                <li><Link href="/home"><a className="p18-bold">India Pale Ale (IPA)</a></Link></li>
                <li><Link href="/home"><a className="p18-bold">Trigo</a></Link></li>
                <li><Link href="/home"><a className="p18-bold">Lager</a></Link></li>
                <li><Link href="/home"><a className="p18-bold">Sour</a></Link></li>
                <li><Link href="/home"><a className="p18-bold">Low carb e sem álcool</a></Link></li>
                <li><Link href="/home"><a className="p18-bold">Importados</a></Link></li>
                <li><Link href="/home"><a className="p18-bold">Nacionais</a></Link></li>
                <li><Link href="/home"><a className="p18-bold">Casa von borstel</a></Link></li>
                <li onClick={() => setBlend(!blend)}><a className="p18-bold dropdown">Blend <Image  src={blend?ArrowClose:ArrowOpen}/> </a></li>

                    <ul className="subcat" style={{display: blend? "flex" : "none"}}>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                    </ul>

                <li onClick={() => setPack(!pack)}><a className="p18-bold dropdown">Pack<Image  src={pack?ArrowClose:ArrowOpen}/> </a></li>

                    <ul className="subcat" style={{display: pack? "flex" : "none"}}>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                    </ul>
                
                <li onClick={() => setEdlimited(!edlimited)}><a className="p18-bold dropdown">Edição Limitada<Image  src={edlimited?ArrowClose:ArrowOpen}/> </a></li>

                    <ul className="subcat" style={{display: edlimited? "flex" : "none"}}>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                        <li className="p18-regular"><Link href="">Subcategoria</Link></li>
                    </ul>
            </ul>

            <Link href="/home"><a className="p14-bold ver_tudo">Ver tudo</a></Link>
        </Style>
    )
}

const Style = styled.div`
    padding: 27px 36px 63px;

    #mainul{
        margin-bottom: 40px;
    }

    ul{
        li{
            a{
                color: #fff;
            }

            .dropdown{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                div{
                    img{
                        padding-right: 10px !important;
                    }
                }
            }

            &:not(last-child){
                margin-bottom: 29px;
            }
        }

        .subcat{
            flex-direction: column;
            margin-left: 50px;
        }
    }

    .ver_tudo{
        background-color: var(--primary-color);
        color: #fff;
        border-radius: 4px;
        padding: 15px 149px;       
    }

    @media(max-width: 425px){
        .ver_tudo{
            padding: 15px 137px;      
        }
    }

    @media(max-width: 401px){
        .ver_tudo{
            padding: 15px 125px;      
        }
    }

    @media(max-width: 377px){
        .ver_tudo{
            padding: 15px 113px;      
        }
    }
`