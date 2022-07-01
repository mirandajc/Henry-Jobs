import styled from "styled-components";

export const ContenedorStudents = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


export const Video = styled.div`
width: 50%;
height: 75%;
margin: 1rem;
display: flex;
justify-content: center;
flex-direction: column;

.video{
    box-shadow: -1px -1px 5px 1px #303030;
}
`

export const ComponentCard= styled.div`
border-top: 1px solid yellow;
display: flex;
background-color: #1A1B1E;
width: 50%;
height: 15rem;
border-radius: 1rem;
flex-direction: row;
flex-wrap: nowrap;
align-content: space-around;
margin: 2rem;
align-items: center;

p{
    margin-left: 0.5rem;
    font-size: 11px;
    text-align: justify;
    margin-right: 3rem;
}
`

export const DatosProyect = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;

h4{
    font-weight: 200;
    color: white;
    font-size: 14px;
    margin: 0;
}
p{
    color: white !important;
}

`

export const ButtonTecnologies = styled.div`
padding-right: 0.5rem;
padding-left: 0.5rem;
border: 2px solid #5D5F66;
box-shadow: -1px -1px 5px 1px rgba(248, 247, 242, 0.13);
border-radius: 12px;
display: flex;
font-weight: 600;
font-size: 11px;
text-align: justify;
color: #5D5F66;
justify-content: center;
align-items: center;
margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
`

export const ButtonLight = styled.div`
    background: #5D5F66;
    border: 2px solid #5D5F66;
    border-radius: 12px;
    width: auto;
    height: 26px;
    
    font-size: 12px;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;

    p{
        color: #1A1B1E !important;
    }
`

export const ComponentDatos = styled.div`
margin: 1rem;
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: stretch;
justify-content: space-evenly;

.Contenedor-Name-Ubicacion{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.TechnologiesAndOthers{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.Imagen-And-Name{
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
}
img{
    width:15%;
    margin-right: 0.5rem;
}
p{
    display: flex;
    margin: 0;
    font-size: 10px;
    flex-direction: row;
    align-items: center;
    color: #8e929a;
;
}
h3{
    margin: 0;
}

.imagenUbicacion{
    width: 0.5rem !important;
    height: auto !important;
    margin: 0.2rem !important;
}

.ContenedorUbicacion{
display:flex;
justify-content: space-around;
}
`
export const Date = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    color: #53555b;
    border-end-end-radius: 1rem;
    border-end-start-radius: 1rem;
    align-items: center;
    background-color: #121213;
    justify-content: space-between;
    box-shadow: -1px -1px 5px 1px #303030;

`