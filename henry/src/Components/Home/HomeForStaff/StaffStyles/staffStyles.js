import styled from 'styled-components';



export const ContStafHome= styled.div`
width:100%;
min-height: 120vh;


`


export const NavStaff= styled.div`


display: flex;
align-items:center;
justify-content: space-around;

button{
    width:auto;
    background-color: transparent;
    border:1px solid transparent;
    color: white;
    &:hover{
        text-decoration: underline;
    }
}


`

export const StaffNavCont= styled.div`

width:80%;
display:flex;
align-items:center;
jusrtify-content: flex-end;

div{
    margin-left:80%;
    a{
        text-decoration: none;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
}



`