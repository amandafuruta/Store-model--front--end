import { useState } from 'react'

import styled from 'styled-components'

import Link from 'next/Link'

export default function Cookies(){
    const [visible, setVisible] = useState(true)

    return(
        <Style style={{display: visible? 'flex' : 'none'}}>
            <span className="p12-bold span1">Controle sua privacidade</span>
            <span className="p12-regular span2">Nosso site usa cookies para melhorar sua experiência</span>

            <div className="anchor">
               <Link href="/politica_privacidade"><a className="p10-bold">Política de privacidade</a></Link>
               <span>-</span> 
               <Link href="termo_uso"><a className="p10-bold">Termos de uso</a></Link>
            </div>

            <div className="button">
                <button className="p14-bold denied" onClick={() => setVisible(false)}>Recusar</button>
                <button className="p14-bold accept" onClick={() => setVisible(false)}>Aceito</button>
            </div>
        </Style>
    )
}

const Style = styled.div`
    max-width: 350px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 17px 20px 25px;
    position: fixed;
    bottom: 18px;
    left: 10%;
    z-index: 2;
    flex-direction: column;

    .span1{
        margin-bottom: 8px;
    }

    .span2{
        color: #0A1420;
        margin-bottom: 16px;
    }

    .anchor{
        display: flex;
        align-items: center;
        margin-bottom: 23px;

        a{
            color: var(--primary-color);
        }

        span{
            margin: 0 4px;
        }
    }

    .button{
        display: flex;
        margin: 0 auto;

        .denied, .accept{
            width: 120px;
            height: 35px;
            border-radius: 4px;
        }

        .denied{
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            background-color: #fff;
            margin-right: 24px;
        }

        .accept{
            background-color: var(--primary-color);
            color: #fff;
            border: none;
        }
    }

    @media(max-width:400px){
        max-width: 325px;
        left: 5%;
    }

    @media(max-width:375px){
        left: 2%;
    }

`