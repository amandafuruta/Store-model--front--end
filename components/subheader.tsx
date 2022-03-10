import styled from 'styled-components'
import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from "next/router";

export default function Subheader(){
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return(
        <>
            <Style>
                <div className="container">
                    <ul>
                        <li><a className="p14-bold" onClick={()=> setOpen(!open)}>Cervejas</a></li>
                        <li><Link href="/lista_produtos/kits_especiais"><a className="p14-bold">Kits especiais!</a></Link></li>
                        <li><Link href="/lista_produtos/monte_seu_kit"><a className="p14-bold">Monte seu kit</a></Link></li>
                        <li><Link href="/lista_produtos/promocoes"><a className="p14-bold">Promoções</a></Link></li>
                        <li><Link href=""><a className="p14-bold">A cervejaria</a></Link></li>
                        <li><Link href=""><a className="p14-bold">Guia cervejeiro</a></Link></li>
                    </ul>

                    <Link href="">
                        <img src="/images/search.png" alt="" />
                    </Link>
                </div>
            </Style>

            <Options style={{display: open? 'flex' : 'none'}}>
                <div className='column'>
                    <Link  href="/lista_produtos/IPA"><a className="p18-bold" onClick={() =>setOpen(!open)}>IPA</a></Link>
                    <Link  href="/lista_produtos/Trigo"><a  onClick={() =>setOpen(!open)} className="p18-bold">Trigo</a></Link>
                    <Link  href="/lista_produtos/Lager"><a  onClick={() =>setOpen(!open)} className="p18-bold">Lager</a></Link>
                    <Link  href="/lista_produtos/puro_malte"><a onClick={() =>setOpen(!open)} className="p18-bold">Puro malte</a></Link>
                    <Link  href="/lista_produtos/Sour"><a onClick={() =>setOpen(!open)} className="p18-bold">Sour</a></Link>
                    <Link  href="/lista_produtos/low_carb"><a onClick={() =>setOpen(!open)} className="p18-bold">Low carb e sem álcool</a></Link>
                </div>

                <div className='column'>
                    <Link  href="/lista_produtos/Importados"><a onClick={() =>setOpen(!open)} className="p18-bold">Importados</a></Link>
                    <Link  href="/lista_produtos/Nacionais"><a onClick={() =>setOpen(!open)} className="p18-bold">Nacionais</a></Link>
                    <Link  href="/lista_produtos/von_borstel"><a onClick={() =>setOpen(!open)} className="p18-bold">Casa von borstel</a></Link>
                    <Link  href="/lista_produtos/lata"><a onClick={() =>setOpen(!open)} className="p18-bold">Em lata</a></Link>
                    <Link  href="/lista_produtos/garrafas"><a onClick={() =>setOpen(!open)} className="p18-bold">Garrafas</a></Link>
                    <Link  href="/lista_produtos/long_neck"><a onClick={() =>setOpen(!open)} className="p18-bold">Long necks</a></Link>
                </div>

                <div className='column'>
                    <Link  href="/lista_produtos/Bleds"><a onClick={() =>setOpen(!open)} className="p18-bold">Bleds</a></Link>
                    <Link  href="/lista_produtos/Packs"><a onClick={() =>setOpen(!open)} className="p18-bold">Packs</a></Link>
                    <Link  href="/lista_produtos/edicao_limitada"><a onClick={() =>setOpen(!open)} className="p18-bold">Edição limitada</a></Link>
                    <Link  href=""><a onClick={() =>setOpen(!open)} className="p18-bold button">Ver tudo</a></Link>
                </div>
            </Options>
        </>
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

                    &:hover{
                        color: var(--primary-color);
                    }
                }

                

                &:active{
                   a{color: var(--primary-color); } 
                }
            }
        }
    }

    @media(max-width: 990px){
        .container{
            ul{
                display: none;
            }

            img{
                margin-left: 17px;
            }
        }
    }
`

const Options = styled.div`
    position: absolute;
    background-color: #24242D;
    padding: 36px 216px 46px 32px;
    display: flex;
    justify-content: space-between;
    max-width: 1088px;
    width: 100%;
    z-index: 2;
    border-top: 1px solid var(--primary-color);
    left: calc(50% - 544px);

    .column{
        display: flex;
        flex-direction: column;

        a{ 
            color: white;

            &:hover{
                color: var(--primary-color);
            }
        }

        a:not(:last-child){
            margin-bottom: 17px;
        }

        .button{
            width: 120px;
            height: 50px;
            background-color: var(--primary-color);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover{
                background-color: var(--hover-color);
                color: #fff;
                
            }
        }
    }

    @media(max-width: 1090px){
        max-width: 1000px;
        left: 1%;
    }

    @media(max-width: 1017px){
        max-width: 920px;
        left: 1%;
    }

    @media(max-width: 990px){
        display: none !important;
    }
`