import React from "react";
import Logo from "./Logo/logo";
import ButtonAbout from "./buttons/buttonAbout";
import LoginApi from "./buttons/LoginApi";
import { NavbarS, NavButton } from "./NavStyles/navbar";

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