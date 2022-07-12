import styled from 'styled-components';



export const CardStudentsStaff= styled.div`

width:100%;
display:flex;
align-items: center;
justify-content: center;
margin-top: 5em;
margin-bottom: 5em;

.cont{
    width:80%;
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

.buttonContainer {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    justify-content: space-around;

    button{
        &:active{
            background-color: black;
            color: yellow;
            border: 1px solid yellow;
        }
    }
}

.emailCvContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: 1em;
}

.star{
    border: 1px solid yellow;
    border-radius: 20px;
    width: 20%;
    margin-left: 1em;
    background-color: black;
    padding: .5em;
    display: flex;
    align-items: center;

    .starColor{
        color: yellow;
    }
    }


    .mail{
        margin-left: 2em;
        width: 70%;
        p{
            font-size: .7em;
        }
       
        display: flex;
         align-items:center;


         
        .colorMail{
            margin-right: 1em;
            color: red;
        }
    }


`

export const PersentCont= styled.div`

/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.progress {
  width: 150px;
  height: 150px;
  background: none;
  position: relative;
}

.progress::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid #eee;
  position: absolute;
  top: 0;
  left: 0;
}

.progress>span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}

.progress .progress-left {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 6px;
  border-style: solid;
  position: absolute;
  top: 0;
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.progress .progress-right {
  right: 0;
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
}

.progress .progress-value {
  position: absolute;
  top: 0;
  left: 0;
}

/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*
*/

body {
  background: #ff7e5f;
  background: -webkit-linear-gradient(to right, #ff7e5f, #feb47b);
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  min-height: 100vh;
}

.rounded-lg {
  border-radius: 1rem;
}

.text-gray {
  color: #aaa;
}

div.h4 {
  line-height: 1rem;
}

`

