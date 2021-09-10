import styled from 'styled-components'


const Container = styled.div`

    background-color: #262626;

    width: 20em;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100vh;
    padding-bottom: 0em;
    position: sticky;
    top: 0px;

    .Logo-Tipo{
        
        width: 100%;
        height: 14%;


        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        background: #2B3031;
    }

    .itemsMenu{

        width: 100%;
        height: 78%;

        display: flex;
        flex-direction: column;
        
        
        background: #2B3031;

    }
`

const ItemMenu = styled.div`

    display:flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    height: 3em;
    padding: 0px 1.5em 0px 4em;
    
    font-family: Roboto;
    font-size: 1.2em; 

    cursor: pointer;
    
    color: ${({texto}) => texto ? 'white':'black'};
    background: ${({color}) => color ? '#2B3031': 'white'};
    

    &:hover{
        img{transform: rotate(180deg)}
        }
`


export { Container, ItemMenu }