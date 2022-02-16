import React, { useRef } from 'react';
import Link from 'next/link'

import {Style, EnvioSucesso} from './styles'
import Input from '../../components/input/input'

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


export default function EsqueciSenha() {
    const formRef = useRef<FormHandles>(null);
    const [envioSucesso, setEnviosucesso] = React.useState(true)
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
                <div className="login_box">

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
                            
                            <div className="buttons_forgot_password">
                                <button className="p14-bold ">Enviar</button>
                            </div>
                        </Form>
                    </div>
                </div>

                <Link href="/">
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



