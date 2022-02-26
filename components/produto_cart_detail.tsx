import { useState, useEffect } from 'react'

import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// interface Props{
//     photo: string,
//     name: string,
//     quantity: number,
//     price: number,
// }



export default function ProductDetail(props:any){
    const [units, setUnits] = useState(props.quantity)
    

    function addOrRemove(comand:any, unit:number){
        
        if(comand == 'add'){
            unit = unit + 1;
        } else{
            unit = unit - 1;
        }
    
        setUnits(unit)
        
    } 
    
    return(
        <Style>
            <div className="left_product_unit">
                <div className="img">
                    <img src={props.photo}/>
                </div>

                <div className="details">
                    <span className="p14-regular">{props.name}</span>

                    <div className="qtdd">
                        <button onClick={() => {units > 1 ? addOrRemove("minus", units) : '',  props.callbackParent(units-1, props.price, props.id)}} ><AiOutlineMinus size={10}/></button>
                        <span className="p24-regular">{units}</span>
                        <button onClick={() => {setUnits(units + 1), props.callbackParent(units+1, props.price, props.id)}}><AiOutlinePlus size={10}/></button>                         
                    </div>
                </div>
            </div>

            <div className="right_product_unit">
                <button className="p14-bold" onClick={() => props.remove(props.id)}>Remover</button>
                <span className="p14-bold">R$ {units*props.price}</span>
            </div>
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #e1e3e5;
    padding: 16px 0 40px;

    .left_product_unit{
        display: flex;
        align-items: center;

        .img{
            width: 70px;
            height: 70px;
            margin-right: 14px;

            img{
                object-fit: contain;
                width: 100%;
            }
        }

        .details{
            display: flex;
            flex-direction: column;
            

            span{
                max-width: 250px;
                margin-bottom: 18px;
            }

            .qtdd{
                display: flex;
                align-items: center;

                button{
                    height: 28px;
                    width: 28px;
                    border:  none;
                    border-radius: 100px;
                    background-color: #F1F3F4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    outline: none;

                    &:hover{
                        background-color: #ccc;
                    }
                }

                span{
                    margin: 0 16px;
                }
            }
        }
    }

    .right_product_unit{
        display: flex;
        flex-direction: column;
        align-items: end;

        button{
            background-color: transparent;
            color: var(--primary-color);
            padding: 0;
            margin-bottom: 52px ;
            outline: none;

            &:hover{
                color: var(--hover-color);
            }
        }
    }
`