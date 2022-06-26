import { style } from "@mui/system";
import styled from "styled-components";

export const ContenedorAbout = styled.div`
display: flex;
    justify-content: center;    
`

export const Card= styled.div`
    display: flex;
    width: 50%;
    margin: 3rem;
    flex-direction: column;
    flex-wrap: nowrap;
img{
    margin: 1rem;
    width: 15rem;
    height: auto;
}
span{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin: 1rem;
}
.contenedor{
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    margin:3rem;
}
.linkedin{
    background-color: yello;
}
.icon{
    display:flex;
    width: 4rem;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 78%;
    text-decoration:none;
}
`