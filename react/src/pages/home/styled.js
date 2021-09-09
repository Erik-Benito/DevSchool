import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: row;
    
    .admin{
            
        display: flex;
        flex-direction: column;

        justify-content: space-between;
        align-items: center;

        width: 94em;

        background-color: #F5F5F5;

    
        .cabecalho{
            
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            width: 98%;
            height: 5em;
            
            padding: 0px 1%;

            border-bottom: 1px solid #D9D9D9; 

            background: white;
            
            .infos-user{

                display: flex;
                flex-direction: row;
                align-items: flex-end;
                

                width: 15em;
                height: 2em;
                font-family: Roboto;
                font-size: 16px;
                

                color: #615858;

                img{
                    margin-right: 1em;
                }
            }
            .acoes{
                
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

            
                height:2em;
            
                .atualizar{

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    height: 37px;
                    width: 37px;

                    margin-right: 1em;

                    background:  #986CDF;

                    border-radius: 50%;

                    cursor: pointer;

                    &:hover{
                        transform: rotate(360deg);
                        transition: 1s;
                    }
                }
                
                .sair{

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background:  #986CDF;
                    
                    height: 37px;
                    width: 37px;

                    cursor: pointer;

                    border-radius: 100%;
                }
            }

        }
        .nv-aluno{
            
            display: flex;
            flex-direction: column;

            background: white;

            height: 12em;
            width: 95%;

            .titulo-form{

                display: flex;
                flex-direction: row;

                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 37px;

                margin: 25px 0px 25px 50px;

                color: #3C3939;
                
                img{
                    margin-right: 1em;
                }
            
            }
            
            .inputs{
                
                display: flex;
                flex-direction: row;

                width:90%;
               

                .sub-titulo{

                    display:flex;
                    flex-direction: column;
                    align-items: flex-end;

                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    
                    text-align: right;

                    color: #615858;

                    margin-left: 50px;
                    p1{margin-top: 20px;}
                }
                .sub-input{

                    display:flex;
                    flex-direction: column;


                    input{
                        padding: 5px 25px;
                        border: 1px solid;
                        margin-top: 15px;
                        margin-left: 15px;
                        background: #FFFFFF;
                        border: 1px solid #A8A8A8;
                        box-sizing: border-box;
                        border-radius: 5px;
                    }
                
                }
                .btm-cad{

                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                    
                    
                    
                    margin-left:25px;

                    button{

                        background: #E911C6;
                        border-radius: 44px;
                        border: 0px;
                        color: white;
                        padding: 10px 25px;
                        cursor: pointer;
                                                
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 16px;
                        text-align: center;
                    }
                }


            }


        }
        .matriculados{
            
            display:flex;
            flex-direction: column;
           
            height: 27em;
            width: 95%;

            background: white;

            .titulo-form{

            display: flex;
            flex-direction: row;

            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 37px;

            margin: 25px 0px 25px 50px;

            color: #3C3939;

                img{
                    margin-right: 1em;
                }

            }
        }
    }

`
const TituloLista = styled.tr`

    td{
        padding: 8px;

        border: 1px solid #986CDF;

        text-align:left ;

         
        background: #986CDF;

        
        font-family: Roboto;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;

        color: #FFFFFF;

        border: 1px solid #986CDF;

        overflow-y: unset; 
    }
    th{
        font-family: Roboto;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #6D6868;
    }


`


    

export { Container, TituloLista }