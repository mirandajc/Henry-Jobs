import styled from 'styled-components';



export const CardStudentsStaff= styled.div`

width:100%;
display:flex;
align-items: center;
justify-content: center;
margin-top: 5em;
margin-bottom: 5em;

.cont{
    width:30%;
    height: auto;
    border-top: 2px solid yellow;
    border-radius: 10px;
    background-color:hsl(228deg 9% 11%);


  .name{
    display:flex;
    
    align-items:flex-start;
    cursor:pointer;
    &:hover{
        h3{
            text-decoration: underline;

        }
    }

    .imgCont{
        width:3em;
        height: 3em;
        border:1px solid yellow;
        border-radius: 50%;
        overflow:hidden;
        margin-right:1em;
        margin-left:1em;
        margin-top:1em;
       

        img{
            width: 100%;
            height:100%;
            display:flex;
            align-items:center;
            // justify-content:center;
        }
    }

    .detail{
        
        height:5em;
        p{
            margin-top:-2.50em;
            
                display: flex;
                
                font-size: 10px;
                flex-direction: row;
                align-items: center;
                color: #8e929a;
        }
    }
  }  


}





`

