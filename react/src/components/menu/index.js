
import { useState } from "react"
import { Container, ItemMenu } from "./style"

export default function Menu(){

    const [ coralt, setCoralt ] = useState('true');
    const [ txtalt, setTxtalt ] = useState('true');
    const [ opcoes, setOpcoes ] = useState([]);
    const [ ops, setOps ] = useState(true);
    
    const ListarOpcoes = () => {
        
        if(ops === true){
            
            setOpcoes(['Aluno']);
            setOps(false);

        } else {

            setOpcoes([]);
            setOps(true);
        }
    
    }
    return(

        <Container>
            <div className="Logo-Tipo" >
                <img src="/src/img/logo.svg" alt="Logo DevSchool"/>
            </div>
           
            <div className="itemsMenu">
                <ItemMenu
                 color='true' 
                 texto='true'
                 onClick={ListarOpcoes}>
                    Gerenciamento 
                    <img src="/src/img/Vector.svg" alt="svg-seta"/>
                </ItemMenu>

                { opcoes.map( x => 
                    <ItemMenu 
                        color={coralt} 
                        texto={txtalt} 
                        style={{borderLeft: 'solid 5px #DB21BD'}}
                        onClick={e => {setCoralt(coralt => !coralt); setTxtalt(txtalt => !txtalt)}}
                    > 
                    {x}
                    </ItemMenu>
                )}
            </div>
        </Container>
    )
};
