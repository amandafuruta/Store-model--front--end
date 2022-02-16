import React, { useRef } from 'react';
import Link from 'next/link'

import {Style} from './styles'
import Input from '../../components/input/input'

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


export default function Login() {
    const formRef = useRef<FormHandles>(null);
  return (
    <Style>
      <div id='box'>
        <div className="login_box">

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
              <Input id="password" type="password" name="password" placeholder="Senha" />
              <div className="buttons">
                  <button className="p14-bold">Entrar</button>
                  <Link href="/login/esquecisenha"><a className="p14-bold">Esqueci minha senha</a></Link>
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



