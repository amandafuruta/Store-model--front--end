import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import StyleInput from './styleInput'


export default function Input({ id,label, name,changeStyle,mascaraDeTelefone,password, ...rest }: any) {

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
        
        <StyleInput>
            <div className={changeStyle ? 'contato-style' : ''}>
                {label ? <label className="link2-regular" htmlFor={id}>{label}</label> : ''}

                <input id={id} className="paragrafo1-regular" defaultValue={defaultValue} ref={inputRef} {...rest} />
                {error && <span className="error-message">{error}</span>}
            </div>
        </StyleInput>
        

    );
}