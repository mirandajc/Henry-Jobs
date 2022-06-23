import styled from 'styled-components'

export const NavbarS= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: none;
color: white;
width:100%;


`

export const NavButton= styled.div`
display: flex;
justify-content: space-between;


button{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    background-color:transparent;
    color:white;
    border:1px solid transparent;
}

`
export const NavLogo= styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
font-family: 'Roboto', sans-serif;
display: flex;
align-items:baseline;
width: 100%;
img{
    width:30%;
    margin: 1rem;
}
`