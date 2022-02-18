import styled from "styled-components"

interface Props{
    background: string;
    main_text: string;
    secondary_text: string;
    image: string;
}

export default function Banner1(props: Props){
    return(
        <Style style={{backgroundImage:`url(${props.background})`}}>
            <div className="container">
                <div className="text">
                    <h3 className="titulo34-bold">{props.main_text}</h3>
                    <p className="p16-regular">{props.secondary_text}</p>
                </div>

                {
                    props.image == 'none'?
                    <></>
                    :
                    <img src={props.image} id="img"/>
                }
            </div>
        </Style>
    )
}

const Style = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    max-width: 1088px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px;

    .container{
        max-width: 907px;
        width: 100%;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;

        .text{
            display: flex;
            flex-direction: column;
            color: #fff;
            max-width: 330px;

            h3{
                line-height: 41px;
                margin-bottom: 13px ;
                text-align: start;
            }

            p{
                margin: 0;
            }
        }

        img{
            max-width: 235px;
            width: 100%;
            height:190px;
        }
    }

    @media(max-width:770px){
        .container{
            #img{
                display: none;
            }
        }
    }

 
`