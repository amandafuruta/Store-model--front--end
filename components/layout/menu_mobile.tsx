import styled from "styled-components";
import Link from 'next/link'

export default function (props:any){
    
    return(
        <Style>
            <ul>
                <li><Link href="/"><a className="p18-bold">India Pale Ale (IPA)</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Trigo</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Lager</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Sour</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Low carb e sem álcool</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Importados</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Nacionais</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Casa von borstel</a></Link></li>
                <li><Link href="/"><a className="p18-bold">Blend</a></Link></li>
            </ul>

            <Link href="/"><a className="p14-bold ver_tudo">Ver tudo</a></Link>
        </Style>
    )
}

const Style = styled.div`
    padding: 27px 36px 63px;

    ul{
        li{
            a{
                color: #fff;
            }

            &:not(last-child){
                margin-bottom: 29px;
            }
        }
    }

    .ver_tudo{
        background-color: var(--primary-color);
        color: #fff;
        border-radius: 4px;
        padding: 15px 149px;
    }
`