import React, { useRef, useState } from 'react';
import Link from 'next/link'

import Input from '../../components/input/input'

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


export default function Redefinir_Senha() {
    const formRef = useRef<FormHandles>(null);
    const [confirm, setConfirm] = useState(true)
    
    return (
        <Style>
            <div className='box' >
                <div className="main_box">

                    <div className="top">
                        <div className="logo_box">
                            <img src="/images/logo_login.png" alt="" />
                        </div>

                        <div className="logo2_box">
                            <img src="/images/logo2.png" alt="" />
                        </div>
                    </div>

                    <div className="middle" style={{display: confirm? 'none' : 'flex'}}>
                        <span className="p18-bold p1">Defina uma nova senha</span>
                        <span className="p14-regular p2">Informe uma nova senha abaixo</span>

                        <Form method="post" ref={formRef} onSubmit={() =>console.log('')} >
                        <Input id="password" type="password" name="password" placeholder="Nova senha" />
                        <Input id="password" type="password" name="password" placeholder="Confirme a senha" />

                        <div className="buttons" >
                            <button className="p14-bold" >Atualizar senha</button>
                        </div>
                        </Form>
                    </div>

                    <div className="sucess_msg" style={{display: confirm? 'flex' : 'none'}}>
                        <img src="/images/confirm.png" alt="" />
                        <span className="p18-bold span1">Senha alterada com sucesso</span>
                        <span className="p14-regular span2">Você será redirecionado para a tela de login...</span>

                        <button className="p14-bold ">Acessar painel do lojista</button>
                            
                    </div>
                </div>

                <Link href="/login">
                    <a className="go_back">
                        <img src="/images/back.png" alt="" />
                        <span className="p14-bold">Voltar</span>
                    </a>
                </Link>
            </div>
        </Style>
    )
};

import styled from "styled-components";

const Style = styled.section`
    background-color: var(--bgd-gray-color);
    padding: 165px 20px;
    min-height: 100vh;

    .box{
        max-height: 605px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
        
    }
    
    .main_box{
        background-color: var(--bgd-white-color);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        max-width: 450px;
        width: 100%;
        padding: 20px 65px 67px 64px;

        .top{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 18px;
                   
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

            .p2{
                margin-bottom: 24px;
                color: #999999;
            }

            .buttons{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 18px;

                button{
                    width: 100%;
                    background-color: var(--primary-color);
                    border-radius: 4px;
                    border: none;
                    height: 50px;
                    color:#fff;
                }
            
                a{
                    color: var(--primary-color);
                }
            }
        }

        .sucess_msg{
            flex-direction: column;
            justify-content:center;
            align-items: center;
            margin-top: 43px;

            img{
                max-width:120px;
                width: 100%;
                margin-bottom: 40px;
            }

            .span1{
                margin-bottom: 2px;
            }

            .span2{
                margin-bottom: 27px;
            }

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
    
`




