import styled from "styled-components";

export const EmpresaContenedor = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 120vh;
border: 1px solid red;
align-items: center;
`


export const CartaBusiness = styled.div`
padding: 1em;
background-color: #1A1B1E ;
border-radius: 0.5em;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
border: none;
margin-bottom: 1.7em;
width: 60%;
margin-top: 1px

.borrar {
    background-color:black;
    &:hover{
        background-color:white;
    }
}
`