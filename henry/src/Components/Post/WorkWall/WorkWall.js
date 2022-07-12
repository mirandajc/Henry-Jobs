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
display: flex;
justify-content: space-evenly;
background: #ffeb3b;
align-items: center;

select{
    height: 3rem;
    border: 1px solid transparent;
    background: none;
    select-styles: none;
}
button{
    background-color: #040404;
    color: white;
}
`