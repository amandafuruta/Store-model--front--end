import React, { useRef } from 'react';
import Link from 'next/link'

import styled from "styled-components";
import Input from '../../components/input/input'

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


export default function Login() {
  const formRef = useRef<FormHandles>(null);

  return (
    <Style>
      <div className='box'>
        <div className="main_box">

          <div className="top">
            <div className="logo_box">
              <img src="/images/logo_login.png" alt="" />
            </div>

            <div className="logo2_box">
              <img src="/images/logo2.png" alt="" />
            </div>
          </div>

          <div className="middle">
            <span className="p18-bold p1">Área restrita ao lojista</span>
            <span className="p14-regular p2">Informe seu e-mail e senha para entrar</span>

            <Form method="post" ref={formRef} onSubmit={() =>console.log('')} >
              <Input id="email" type="text" name="email" placeholder="Email" />
              <Input id="password" type="password" name="password" placeholder="Senha"  password={true}/>
              <div className="buttons">
                  <button className="p14-bold">Entrar</button>
                  <Link href="/login/esquecisenha"><a className="p14-bold" >Esqueci minha senha</a></Link>
              </div>
            </Form>
          </div>
        </div>

        <div className="lets_box">
          <span className="Poppins p12-regular">Todos os direitos reservados à Lets Comunicação e Desenvolvimento</span>
          <div className="rodape">
              <span className="Poppins p12-regular">Desenvolvido por </span>
              <img src="/images/lets.png" alt="" />
          </div>
        </div>
      </div>
    </Style>
  )
};


const Style = styled.section`
    background-color: var(--bgd-gray-color);
    display: flex;
    justify-content: center;
    padding: 165px 20px;
    min-height: 100vh;

    .box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .main_box{
        background-color: var(--bgd-white-color);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        max-width: 450px;
        width: 100%;
        padding: 20px 65px 49px;

        .top{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 35px;
                   
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
            }
        }

            .buttons{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 26px;

                button{
                    max-width:120px;
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
    }

    .lets_box{
        margin-top: 80px;
        text-align: center;

        .rodape{
            margin-top: 16px;
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
        .main_box{
            padding: 20px 20px 49px;
        }
    }
`



