import styled from 'styled-components';


export const PublicationCard= styled.div`

border-top: 1px solid yellow;
width: 50%;
height: auto;
background-color: hsl(228deg 8% 12%);
// border-radius: 10px;
border-end-end-radius: 1rem;
border-end-start-radius: 1rem;

overflow:hidden;
margin-top: 2em;
margin-bottom: 3em;

box-shadow: 4px 6px 5px 0px rgb(193 196 25 / 75%);
    -webkit-box-shadow: 2px 1px 5px 0px rgb(193 196 25 / 24%);
    -moz-box-shadow: 4px 6px 5px 0px rgba(193,196,25,0.75);


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


export const PublicacionesCont= styled.div`

// border: 1px solid yellow;
display: flex;
align-items: center;
jusrify-content: center;
flex-direction: column;


// border-radius: 10px;
// box-shadow: 6px 7px 5px 0px rgb(255 255 255 / 75%);
// -webkit-box-shadow: 0px 4px 10px 0px rgb(158 158 158 / 45%);
// -moz-box-shadow: 6px 7px 5px 0px rgba(255,255,255,0.75);
overflow-hidden: ;
// background-color: hsl(228deg 11% 9%);
overflow-hidden;

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
    
    

    &:active{
       
        color: black;
        

        box-shadow: box-shadow:
        7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(2px);

}
}

.comentar{
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}


`