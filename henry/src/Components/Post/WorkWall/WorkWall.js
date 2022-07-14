import styled from "styled-components";

export const Componente = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

export const DivFiltros = styled.div`
width: 100%;
height: 4em;
display: flex;
justify-content: space-evenly;
background-color: yellow;
align-items: center;



select{


    padding:1em;
    border: 1px solid yellow;
    background-color: yellow;
    
    option{
        background: yellow;
    }
}
button{
    background-color: #040404;
    color: white;
}
`