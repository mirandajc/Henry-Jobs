import styled from 'styled-components';


export const Slider= styled.div`
border: 1px solid black;
margin-top:0px;
position: relative;
height: 100vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;



// background-color: black;
// color: white;

.Rarrow{
    position: absolute;
    top:50%;
    right:1em;
    font-size: 2rem;
    
    z-index: 10;
    cursor: pointer;
    user-select: none;
    
   
}
    .Larrow{
        position: absolute;
        top:50%;
        left:1em;
        font-size: 2rem;
        
        z-index: 10;
        cursor: pointer;
        user-select: none;
        
        
        
}

`

export const CardDiv=styled.div`


div{
    
}

`