import styled from "styled-components";

export const StudentProf= styled.div`



width:19em;
height:auto;
margin-top: -17em;


`

export const ProfCont= styled.div`


// border: 1px solid yellow;
border-radius: 10px;
box-shadow: 6px 7px 5px 0px rgb(255 255 255 / 75%);
-webkit-box-shadow: 0px 4px 10px 0px rgb(158 158 158 / 45%);
-moz-box-shadow: 6px 7px 5px 0px rgba(255,255,255,0.75);
overflow-hidden: ;
background-color: hsl(228deg 8% 12%);
overflow-hidden;

overflow:hidden;
width:100%;

display:flex;
justyfy-content:center;
align-items:center;
flex-direction: column;



`

export const Banner= styled.div`

margin-left: 2px:
width:100%;
height:50%;
display:flex; 
align-items: center;



// border-radius: 10px 10px 0 0;
overflow:hidden;
img{
    
    width:100%;
    height:100%;

}

`

export const ImageProf= styled.div`

width:50%;


img{
    
    margin-top: -3em;
    width:100%;
    border-radius: 50%;
    //  border: 2px solid white;
    box-shadow: 6px 7px 5px 0px rgb(255 255 255 / 75%);
    -webkit-box-shadow: 1px 3px 9px 0px rgb(255 255 255 / 31%);
    -moz-box-shadow: 6px 7px 5px 0px rgba(255,255,255,0.75);
}


`

export const Name= styled.div`





width: 100%;

display:flex;
align-items: center;
justify-content:center;

h2{
    color:white;
    
}





`

export const DevStar= styled.div`


display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;

p{
   
    
    background-color: hsl(228deg 8% 12%);
    color: white;
    
    padding: 1em;
    border-radius: 10px;
}



`


export const P= styled.div`

p{
    // font-family:AVENIR LIGHT;
    font-size: 1em;
    margin-left: 1em;
}

`

export const Follow= styled.div`


width:100%;
background-color: yellow;

&:active{
    p{

        color: yellow;
    }
    boder:1px solid black;
    background-color: black;

}

p{
    margin-left: 40%;
    width: 100%;
    color: black;
}



`


export const Ubicacion= styled.div`


color: yellow;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
p{
   
    color: white;
    
}
.location{
    font-size:1em;
    color: yellow;
}


`

export const Redes= styled.div`
// border: 1px solid white;

width: 100%;

display:flex;
align-items: center;
justify-content: space-evenly;

font-size: 1.5em;
div{
    border:1px solid white;
    
    background-color: yellow;
    padding: 0.2em;
}

.gh{
   
    
    color: black

}
.ln{
    color: #4d6ad6;
   
}
.mail{
    color: #d64d4d;
   
}
`