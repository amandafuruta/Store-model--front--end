import React, { useState } from 'react';
import Link from 'next/link'

import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


export default function Login(props:any) {
    const [showPassword, setShowpassword] = useState(true)

    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)

  async function handleSignIn(data:any) {
    try {
      await signIn(data)
    } catch (error) {
      console.log(error)
    }
  }

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

            <form  onSubmit={handleSubmit(handleSignIn)} >
                <input {...register('username')} id="username" type="text" name="username" placeholder="Email" />

                <div className="input">
                    <input  {...register('password')} id="password" type={showPassword? "password" : "text"} name="password" placeholder="Senha"/>

                    {

                        showPassword?
                            <AiFillEye size={20} color='#7a7a7a' onClick={() => setShowpassword(!showPassword)}/>
                        :
                            <AiFillEyeInvisible size={20} color='#7a7a7a' onClick={() => setShowpassword(!showPassword)}/>
                    }
                </div>

              <div className="buttons">
                  <button className="p14-bold" type="submit">Entrar</button>
                  <Link href="/login/esquecisenha"><a className="p14-bold" >Esqueci minha senha</a></Link>
              </div>
            </form>
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

            form{
                .input{
                    position: relative;

                    svg{
                        position: absolute;
                        right: 20px;
                        top: 28%;
                    }
                }
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

                    &:hover{
                        background-color: var(--hover-color);
                    }
                }

                a{
                    color: var(--primary-color);
                    &:hover{
                        color: var(--hover-color);
                    }
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



