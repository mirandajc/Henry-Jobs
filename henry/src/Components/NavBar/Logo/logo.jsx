import React from "react";
import logo from '../../images/logo.png'
import { NavLogo } from "../NavStyles/navbar";

export default function Logo(){
    return(
        <NavLogo>
            <img src={logo}/>
            
        </NavLogo>
    )
}