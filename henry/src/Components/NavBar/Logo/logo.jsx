import React from "react";
import logo from '../../images/Logo.png'
import { NavLogo } from "../NavStyles/navbar";

export default function Logo(){
    return(
        <NavLogo>
            <img src={logo}/>
            
        </NavLogo>
    )
}