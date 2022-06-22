import React from "react";
import ButtonContact from "./buttons/buttonContact";
import Logo from "./Logo/logo";
import ButtonLogin from "./buttons/buttonLogin";
import ButtonAbout from "./buttons/buttonAbout";
import LoginApi from "./buttons/LoginApi";
import { NavbarS, NavButton } from "./NavStyles/navbar";
import ButtonHome from './buttons/buttonHome'
import ButtonLanding from './buttons/buttonLanding'

export default function Navbar() {
    return (
        <NavbarS>

            <div>
                <Logo />
            </div>

            <NavButton>
    
                <LoginApi />

            </NavButton>

            

        </NavbarS>
    )
}