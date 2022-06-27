import React from "react";
import Logo from "./Logo/logo";
import ButtonAbout from "./buttons/buttonAbout";
import LoginApi from "./buttons/LoginApi";
import { NavbarS, NavButton } from "./NavStyles/navbar";
import { useSelector} from "react-redux";
import BusinessNavBar from "./NavBarCondicional/NavBarBusiness";
import StudentsNavBar from "./NavBarCondicional/NavBarStudents";



export default function Navbar() {

    const userType = useSelector((state) => state.fetchDataReducer.user)

    return (
        <NavbarS>
            <div>
                <Logo />
            </div>

            { userType === "Graduate" || userType === "PG" ? <StudentsNavBar /> : <BusinessNavBar />}

            <NavButton>
                <LoginApi />
            </NavButton>
        </NavbarS>
    )
}