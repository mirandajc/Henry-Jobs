import styled from 'styled-components';

export const Contenedor = styled.div`
background: white;
display:flex;
flex-direction: row;
justify-content: flex-end;
align-items: baseline;
font-size: 14px;
a{
    color: black;
    text-decoration: none;
    padding-right: 1rem;
    padding-left: 1rem;
}
p{
    color: #black;
    text-decoration: none;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-block-end: auto;
}
`

export const Redes = styled.div`
display:flex;
align-items: center;
padding-right: 1rem;
a{
    text-decoration: none;
    padding-right: 1rem;
    padding-left: 1rem;
}
`

export const ContentForm = styled.div`
width: 100%;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
input{
    border: solid yellow;
    border-radius: 0.5rem;
    background: black;
    align-content: normal;
    height: 2rem;
    width: 90%;
    margin-block-start: 0.7rem;
    color:yellow;
}
label{
    font-size: 16px;
    color: yellow;
    margin-top: 1.5rem;
}
form{
    width: 40%;
    height: 40vh;
    display: flex;
    flex-direction: row;
}
.datos{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
.mensaje{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
}
button:hover{
        background-color: black;
        color:rgb(255, 255, 255);
        border:2px solid #fffc04;
    }
span{
    display: flex;
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
textarea{
    height: 72%;
    width: 93%;
    border: solid yellow;
    border-radius: 0.5rem;
    background: black;
    align-content: normal;
    color: grey;
    padding: 0.5rem;
    font-family: unset;
    font-size: 16px;
}
`