import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components"

export default function Input({ id,label, name, type,changeStyle,password, ...rest }: any) {
    const [showPassword, setShowpassword] = useState(true)
    const [passwordType, setPasswordType] = useState("password")

    const inputRef = useRef(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        
        <InputComponent>
            <div className={changeStyle ? 'contato-style' : ''}>
                
                {label ? <label className="link2-regular" htmlFor={id}>{label}</label> : ''}
                
                <div className="input">
                    <input id={id} className="paragrafo1-regular" type={type=="password" && showPassword == true? "password" : "text" } defaultValue={defaultValue} ref={inputRef} {...rest} />
                    {
                        password?
                            showPassword?
                                <AiFillEye size={20} color='#7a7a7a' onClick={() => setShowpassword(!showPassword)}/>
                            :
                                <AiFillEyeInvisible size={20} color='#7a7a7a' onClick={() => setShowpassword(!showPassword)}/>
                        :
                        <></>
                    }
                </div>
                
                {error && <span className="error-message">{error}</span>}
            </div>
        </InputComponent>
        

    );
}



const InputComponent =styled.div`
    div{
        .input{
            position: relative;

            svg{
                position: absolute;
                right: 20px;
                top: 28%;
            }
        }
    }
` 