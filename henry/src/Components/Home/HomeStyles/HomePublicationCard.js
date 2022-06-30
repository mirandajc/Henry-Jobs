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
}
`

export const PublicationCard= styled.div`
background-color: #1A1B1E;
width: 50%;
height: 15rem;
border-radius: 1rem;

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

display: flex;

`

export const PictureCont= styled.div`
width: 3em;
height: 3em;

border-radius: 50%;
margin-right: 0.5em;
margin-left: 0.5em;
overflow:hidden;
border: 1px solid yellow;

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
// border-bottom: 0.5px solid hsl(228deg 11% 9%);
// height: 1.5em;
display: flex; 
align-items: center;
justify-content: space-around;
flex-direction: row;

div{
    border: 2px solid #5D5F66;
    box-shadow: -1px -1px 5px 1px rgba(248, 247, 242, 0.13);
    border-radius: 12px;
    width: 2rem;
    height: 26px;

    //   @media(max-width:20px){
    //     .content {  
    //         width: 960px;
    //     }
    // }
    }
    
  
p{
    font-size: 11px;
    // line-height: 13px;
    // text-align: justify;
    color: #5D5F66;
}

`