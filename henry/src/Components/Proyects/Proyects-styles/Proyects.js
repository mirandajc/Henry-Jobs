import styled from "styled-components";

export const ComponentCardProyect = styled.div`
// border: solid yellow;
border-radius: 1rem;
background-color: #212329;
display:flex;
width: 95%;
height: 20rem;
margin: 2rem;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
}
.video{
    display:flex;
    width: 50%;
    margin-right: 1rem;
}

`

export const Usuario = styled.div`
color: yellow;

`
export const Publicacion = styled.div`
color: yellow;

`
export const Video = styled.div`
color: yellow;
`
export const Description= styled.div`
color: none;
background-color: #141519;
border-radius: 1rem;
display: flex;
width: 50%;
height: 90%;
font-size: small;
flex-direction: column;
align-items: stretch;
font-weight: none;
.imagen{
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin: 1rem;
}
`