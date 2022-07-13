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
background-color: #ffeb3b;
align-items: center;

.s{
    height: 3rem;
    border: 1px solid #ffeb3b;
    background-color: #ffeb3b;
    
    @import url(db.onlinewebfonts.com/c/901497541657a2f24e42848bcf7fad52?family=Avenir+Heavy);
    font-family: Avenir;
    option{
        background: #ffeb3b;
    }
}
button{
    background-color: #040404;
    color: white;
}
`