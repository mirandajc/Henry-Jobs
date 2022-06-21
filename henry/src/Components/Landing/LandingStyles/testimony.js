import styled from "styled-components";

export const TestimonyDiv = styled.div`
 background-color: none;
color:white;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
width: 100%;
height:100%;




`

export const GridDiv= styled.div`
width:100%;
height:89vh;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
gap:0;


div{
    // border: 1px solid white;
        width:11.5em;
        height:6em;
        margin-left:10em;
        img{
            // border:1px solid yellow;
            width:100%;
            height:100%;
        }
    }
`

export const TittleTestimony= styled.div`
h1{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    font-family: 'Roboto', sans-serif;
}

hr{
    background-color:yellow;
    height:1px;
    width:35%;
    position:absolute;
    margin-top:-1.5em;
   
}




`