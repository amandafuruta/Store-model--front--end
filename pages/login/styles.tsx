import styled from "styled-components";

const Style = styled.section`
    background-color: var(--bgd-gray-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 165px 20px;
    min-height: 100vh;

    #box{
        max-height: 605px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .login_box{
        background-color: var(--bgd-white-color);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        max-width: 450px;
        width: 100%;
        padding: 20px 65px 49px;

        .top{
            margin-bottom: 35px;
        }

        .topEsqueciSenha{
            margin-bottom:10px;
        }

        .top, .topEsqueciSenha{
            display: flex;
            justify-content: center;
            align-items: center;
                   
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

            .p_forgot_password{
                margin-bottom: 16px;
            }

            .buttons{
                margin-top: 26px;
                button{
                    max-width:120px;
                }
            }

            .buttons_forgot_password{
                button{
                    width: 100%;
                }
            }

            .buttons, .buttons_forgot_password{
                display: flex;
                align-items: center;
                justify-content: space-between;

                button{
                    
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
        
            .login_box{
                padding: 20px 40px 49px;
            }
        
    }

    @media(max-width:380px){
    
            .login_box{
                padding: 20px 20px 49px;
            }
       
    }
`

const EnvioSucesso = styled.div`
    max-width: 450px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 52px 75px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 23px;
    text-align: center;

    span{
        color: #333333;
    }

    p{
        color: #999;
        margin-bottom: 41px;
    }

    button{
        border: none;
        color: var(--primary-color);
        background-color: var(--bgd-white-bolor)
    }
`

export {Style, EnvioSucesso}