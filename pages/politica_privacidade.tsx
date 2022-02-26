import Subheader from "components/subheader"

import styled from "styled-components";
import parser from 'html-react-parser'

const politica = "A sua privacidade é importante para nós. É política do Cervejaria Von Borstel respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Cervejaria Von Borstel, e outros sites que possuímos e operamos. <br><br>  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado. <br><br>  Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. <br><br>  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. <br> O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade. <br><br>  Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. <br><br>  O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco."


export default function Politica_Privacidade(){
    return(
        <>
            <Subheader/>
            <Style>
                <div className="container">
                    <h1 className="title36-bold">Política de privacidade</h1>
                    <p className="about_text p18-regular">
                        {parser(politica || "")}
                        
                    </p>
                </div>
            </Style>
        </>
    )
}

const Style = styled.section`
    padding: 88px 20px;

    .container{
        max-width: 943px;
        width: 100%;
        margin: 0 auto;

        h1{
            margin-bottom: 24px;
        }
    }
`