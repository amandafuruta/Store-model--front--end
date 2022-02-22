import styled from 'styled-components'

interface Props{
    title: string,
    quantity: number,
    name: string,
    value: string,
    margin: number,
    font_size: string,
    font_weight: number,
    span_font_weight: number,
}

export default function CheckBox(props: Props){
    return(

        <Style style={{marginBottom:props.margin}}>
            <label className="label" style={{fontSize: props.font_size, fontWeight: props.font_weight}}>{props.title}<span style={{fontSize: props.font_size, fontWeight: props.span_font_weight}}>({props.quantity})</span>
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>           
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    align-items: center;

       
`