import styled from "styled-components";

// intento de Luciano Components, sentite libre de cambiarlos xd
export const FormDiv = styled.div`
border: 2px solid white;
display: flex;
flex-direction: column;
align-items: center;

.lado {
    display: flex;
}

select {
    border: 0.2em solid #fffc04;
    border-radius: 10px;
    color: #fffc04;
    background-color: black;
    font-family: Avenir Heavy;
    font-size: 1.4em;
    cursor: pointer
}

button{
    width:7.5em;
    heigth:2em;
    background-color: #fffc04;
    padding:1em;
    border-radius: 10px;
    font-family: Avenir Heavy;
    cursor: pointer;

    &:active{
        background-color:black;
        color:yellow;
        border:1px solid  #fffc04;
    }
`


