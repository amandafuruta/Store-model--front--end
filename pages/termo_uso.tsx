import Subheader from "components/subheader"

import styled from "styled-components";
import parser from 'html-react-parser'
import BaseLayoutComponent from "components/layout/base";

const termo = "1. Termos <br> Ao acessar ao site Cervejaria Von Borstel, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis. <br><br>2. Uso de Licença<br>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Cervejaria Von Borstel , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: <br>modificar ou copiar os materiais; <br>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); <br>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Cervejaria Von Borstel; <br>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou <br>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.<br>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Cervejaria Von Borstel a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.<br><br>3. Isenção de responsabilidade<br>Os materiais no site da Cervejaria Von Borstel são fornecidos 'como estão'. Cervejaria Von Borstel não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.<br>Além disso, o Cervejaria Von Borstel não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.<br><br>"

export default function Termo_Uso(){
    return(
        <BaseLayoutComponent>
            <Subheader/>
            <Style>
                <div className="container">
                    <h1 className="title36-bold">Termos de uso</h1>
                    <p className="about_text p18-regular">
                        {parser(termo || "")}
                        
                    </p>
                </div>
            </Style>
        </BaseLayoutComponent>
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