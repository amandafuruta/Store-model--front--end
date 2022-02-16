import styled from 'styled-components'

import Link from 'next/Link'
import { useRouter } from "next/router";

export default function Subheader(){
    const router = useRouter();

    return(
        <Style>
            <div className="container">
                <ul>
                    <li className={router.pathname == "/" ? "active" : ""}><Link href="/"><a className="p14-bold">Cervejas</a></Link></li>
                    <li><Link href=""><a className="p14-bold">Kits especiais!</a></Link></li>
                    <li><Link href=""><a className="p14-bold">Monte seu kit</a></Link></li>
                    <li><Link href=""><a className="p14-bold">Promoções</a></Link></li>
                    <li><Link href=""><a className="p14-bold">A cervejaria</a></Link></li>
                    <li><Link href=""><a className="p14-bold">Guia cervejeiro</a></Link></li>
                </ul>

                <Link href="">
                    <img src="/images/search.png" alt="" />
                </Link>
            </div>
        </Style>
    )
}

const Style= styled.div`
    background-color:#17171F;
    padding: 15px;

    .container{
        max-width: 1060px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 874px;
            width: 100%;

            li{
                a{
                    color: white;
                }

                &:active{
                   a{color:red; } 
                }
            }
        }
    }
`