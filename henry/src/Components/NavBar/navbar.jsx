import React from "react";
import ButtonContact from "./buttons/buttonContact";
import Logo from "./Logo/logo";
import ButtonLogin from "./buttons/buttonLogin";
import ButtonAbout from "./buttons/buttonAbout";
import { NavbarS,NavButton} from "./NavStyles/navbar";

export default function Navbar(){
    return(
        <NavbarS>
            <div>
            <Logo/>
            </div>
            <NavButton>
            {/* <ButtonContact/>
            <ButtonAbout/> */}
            <ButtonLogin/>
            </NavButton>
        </NavbarS>
    )
}