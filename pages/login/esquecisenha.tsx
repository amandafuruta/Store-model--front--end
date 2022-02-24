import React, { useRef } from 'react';
import Link from 'next/link'

import styled from "styled-components";
import Input from '../../components/input/input'

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


export default function EsqueciSenha() {
    const formRef = useRef<FormHandles>(null);
    const [envioSucesso, setEnviosucesso] = React.useState(false)

  return (
    <Style>
        {
            envioSucesso ?
                <EnvioSucesso>
                    <img src="/images/bro.png" alt="" />
                    <span className="p18-bold">Instruções enviadas!</span>
                    <p>Verifique sua caixa de e-mails, se as instruções para redefinir sua senha foram recebidas.</p>
                    <button className="p14-bold">Reenviar instruções</button>
                </EnvioSucesso>
            :
            <>
                <div className="main_box">

                    <div className="topEsqueciSenha">
                        <div className="logo_box">
                            <img src="/images/logo_login.png" alt="" />
                        </div>

                        <div className="logo2_box">
                            <img src="/images/logo2.png" alt="" />
                        </div>
                    </div>

                    <div className="middle">
                        <span className="p18-bold p1">Esqueci minha senha</span>
                        <span className="p14-regular p_forgot_password">Informe seu e-mail cadastrado abaixo</span>

                        <Form method="post" ref={formRef} onSubmit={() =>console.log('')} >
                            <Input id="email" type="text" name="email" placeholder="Email" />
                            
                            <div className="buttons">
                                <button className="p14-bold ">Enviar</button>
                            </div>
                        </Form>
                    </div>
                </div>

                <Link href="/login">
                    <a className="go_back">
                        <img src="/images/back.png" alt="" />
                        <span className="p14-bold">Voltar</span>
                    </a>
                </Link>
            </>
        }
        
    </Style>
  )
};


const Style = styled.section`
    background-color: var(--bgd-gray-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 165px 20px;
    min-height: 100vh;

    .main_box{
        background-color: var(--bgd-white-color);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        max-width: 450px;
        width: 100%;
        padding: 20px 65px 49px;

        .topEsqueciSenha{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom:10px;
                   
            .logo_box{
                max-width: 122px;
                width: 100%;
                margin-right: 40px;
                img{
                    width: 100%
                }
            }

            .logo2_box{
                max-width: 100px;
                width: 100%;
                img{
                    width: 100%
                }
            }
        }

        .middle{
            display: flex;
            flex-direction: column;
            text-align: center;

            .p1{
                margin-bottom: 4px;
            }

            .p_forgot_password{
                margin-bottom: 16px;
                color: #999999;
            }

            .buttons{
                display: flex;
                align-items: center;
                justify-content: space-between;

                button{
                    max-width:320px;
                    width: 100%;
                    background-color: var(--primary-color);
                    border-radius: 4px;
                    border: none;
                    height: 50px;
                    color:#fff;
                }
            }
        }

        
    }

    .go_back{
        border: 1px solid var(--primary-color);
        border-radius: 4px;
        color: var(--primary-color);
        padding: 12px;
        max-width: 320px;
        width: 100%;
        text-align: center;
        margin-top: 36px;

            img{
                margin-right: 12px;
            }
    }

    @media(max-width:440px){ 
        .main_box{
            padding: 20px 40px 49px;
        }
        
    }

    @media(max-width:380px){
        .main_box, #update_password{
            padding: 20px 20px 49px;
        }
       
    }
`

const EnvioSucesso = styled.div`
    max-width: 450px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 52px 75px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 23px;
    text-align: center;

    span{
        color: #333333;
    }

    p{
        color: #999;
        margin-bottom: 41px;
    }

    button{
        border: none;
        color: var(--primary-color);
        background-color: var(--bgd-white-bolor)
    }
`




