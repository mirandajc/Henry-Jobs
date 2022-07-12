import styled from "styled-components";

export const StaffContainer = styled.div`
    width: 50%;
    border-top: 3px solid yellow;
    border-radius: 10px;
    margin-top: 5em;
    margin-bottom: 5em;
    background-color: hsl(228deg 9% 11%);
`

export const NameMail = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p { 
        margin-right: 1em;
        font-size: 0.7em;
    }
    h3 {
        margin-left: 1em;
    }
`