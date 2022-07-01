import styled from 'styled-components';

export const BodyStudentsWallCard= styled.div`
width: 100%;
height: 100vh;

` 
export const BotonTecnologias = styled.div`
border: 2px solid #5D5F66;
box-shadow: -1px -1px 5px 1px rgba(248, 247, 242, 0.13);
border-radius: 12px;
p{
    position: absolute;
    font-size: 11px;
    line-height: 13px;
    text-align: justify;
    color: #5D5F66;
    font-weight: lighter;

}
`

export const PublicationCard= styled.div`
    display: flex;
    background-color: #1A1B1E;
    width: 50%;
    height: 15rem;
    border-radius: 1rem;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: space-between;
    margin: 2rem;
p{
    margin-left: 3rem;
    font-size: 11px;
    text-align: justify;
    margin-right: 3rem;
}

`


export const Cavecera= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
margin-top: 1em;
border-bottom: 0.5px solid hsl(228deg 11% 9%);



h3{
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}

p{
    font-size: 0.7em;
    margin-right: 0.5em;
    margin-top: -5em;
}



`

export const Detalle= styled.p`
font-size: 0.7em;
// border: 1px solid white;


`
export const NamePic= styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0.5rem;

.imageName{
    display: flex;
    width: 50%;
    align-items: center;
}
.datos{
    margin: 0.5rem;
}
.ubicacion{
    display: flex;
    align-items: center;
}
.nombre{
    
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
a{
    text-decoration: none;
    margin: 0;
}
h5{
    margin-right: 1rem;
    color: #8e929a;
    font-size: 10px;
}
.imagenUbicacion{
    width: 0.5rem;
}
`

export const PictureCont= styled.div`
width: 3em;
height: 3em;
border-radius: 50%;
overflow: hidden;

img{
    width:100%;
}

`


export const InnerPost= styled.div`

// border: 1px solid white;

display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;

p{
    margin-left:-4em;
}



`

export const FooterPost= styled.div`

p{
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}

width: 100%;
height: 3em;
border-top: 1px solid hsl(228deg 11% 9%);
background-color: #141519;
display: flex;
align-items: center;
justify-content: space-around;

div{
    width:10%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    .heart{
        cursor:pointer;
        margin-right: 0.5em;
        color: yellow;

        &:active{
           
                color: black;
                

                box-shadow: box-shadow:
                7px 6px 28px 1px rgba(0, 0, 0, 0.24);
              transform: translateY(2px);
        
        }
    }
}

.share{
    margin-right: 1em;
    margin-left: 1em;
}


span{

    width: 15%;
    margin-left: 1em;
    display: flex;
    align-items: center;

    .comenta{
        margin-right: 0.5em;
        color: yellow;


        &:active{
           
            color: black;
            

            box-shadow: box-shadow:
            7px 6px 28px 1px rgba(0, 0, 0, 0.24);
          transform: translateY(2px);
    
    }
    }
}

.share{
    color: yellow;
    cursor:pointer;
    

    &:active{
       
        color: black;
        

        box-shadow: box-shadow:
        7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(2px);

}
}

.comentar{
    cursor:pointer;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}


`

export const DetailPost= styled.div`
 width:100%;
display: flex; 
align-items: center;
justify-content: space-around;
flex-direction: row;


div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
}
span{
    border: 2px solid #5D5F66;
    box-shadow: -1px -1px 5px 1px rgba(248,247,242,0.13);
    border-radius: 12px;
    width: auto;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;

    }
    
p{  
    margin: 0;
    font-size: 11px;
    color: #5D5F66;
    font-weight: bold;

}


 
`
export const ButonGrey = styled.div `

background: #5D5F66;
border: 2px solid #5D5F66;
box-shadow: -1px -1px 5px 1px rgba(248, 247, 242, 0.13);
border-radius: 12px;
width: auto;
height: 26px;


p{
    color: #1A1B1E;
    font-size: 12px;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    font-weight: bold;
}
img{
   width: 25%;
    padding: none;
}

`
