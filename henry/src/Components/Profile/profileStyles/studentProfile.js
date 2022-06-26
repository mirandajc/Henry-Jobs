import styled from "styled-components";

export const StudentProf= styled.div`



width:19em;
height:auto;
margin-top: -17em;


`

export const ProfCont= styled.div`


// border: 1px solid yellow;
margin-top: -30em;
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

width:49%;
height: 9em;

border-radius: 50%;
margin-top: -3em;
overflow: hidden;

display:flex;
justify-content: center;
border: 1px solid yellow;

img{
    width:100%;
}


`

export const Name= styled.div`
width: 100%;

display:flex;
align-items: center;
justify-content:center;
// border-bottom: 0.1px solid black;

h2{
    color:white;
    
}





`

export const DevStar= styled.div`

// border: 1px solid white;
width:100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;

p{
   
   
    background-color: hsl(228deg 8% 12%);
    color: white;
    padding: 0.5em;

    .star{
        color: yellow;
        margin-rigth: 1em;
    }


   
}
.Si{
    border-right: 0.2px solid black;
}

// #cent{
//     border: 1px solid red;
// }


`


export const P= styled.div`
width: 100%;

// border-bottom: 0.1px solid black;
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
    cursor: pointer;
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
    color: yellow;
    font-size: 1.2em;
   
    
}


`

export const Redes= styled.div`


width: 100%;

display:flex;
align-items: center;
justify-content: space-evenly;

border: 0.1px solid transparent;

font-size: 1.5em;
div{
    
    border-radius: 50%;
    
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items:center;
    justify-content: center;

    box-shadow: 6px 5px 5px 0px rgb(0 0 0 / 75%);
    -webkit-box-shadow: 3px 2px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 6px 5px 5px 0px rgba(0,0,0,0.75);
    background-color: hsl(228deg 11% 9%);

   
    &: active{
        box-shadow: box-shadow:
        7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(4px);
    }
}

.gh{
   
    
    color: white;

}
.ln{
    color: #4d6ad6;
   
}
.mail{
    color: #d64d4d;
   
}
`