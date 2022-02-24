import styled from "styled-components"

export default function BannerRodape(){
    return(
        <Style>
            <div className="rectangle"></div>
            <span className="titulo44-regular">Cervejas premiadas internacionalmente</span>
        </Style>
    )
}

const Style = styled.section`
    background-image: url('/images/bg_banner.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #24242D;
    background-blend-mode: multiply;
    margin-bottom: 53px;
    padding: 217px 20px 217px;
    text-align: center;
    position: relative;

    .rectangle{
        max-width: 870px;
        width: 100%;
        height: 128px;
        border: 1px solid var(--primary-color);
        position: absolute;
        top: calc(50% - 64px);
        right: calc(50% - 435px);
    }

    span{
        color: #fff;
        margin-left: 155px;
    }

    @media(max-width:960px){
        .rectangle{
            max-width: 800px;
            right: calc(50% - 401px);
        }

        span{
            font-size: 40px;
        }
    }

    @media(max-width:890px){
        display: none;
    }
`