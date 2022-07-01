import React from "react";
import Logo from "./Logo/logo";
import ButtonAbout from "./buttons/buttonAbout";
import LoginApi from "./buttons/LoginApi";
import { NavbarS, NavButton } from "./NavStyles/navbar";
import { useSelector } from "react-redux";
import BusinessNavBar from "./NavBarCondicional/NavBarBusiness";
import StudentsNavBar from "./NavBarCondicional/NavBarStudents";
import StaffNavBar from "./NavBarCondicional/StaffNavBar";


export default function Navbar() {
  const userType = useSelector((state) => state.fetchInfoUserReducer.userType);

  return (
    <NavbarS>
      <div>
        <Logo />
      </div>

      <NavButton>
        {userType === 1 || userType === 2 ? (
          <StudentsNavBar />
        ) : userType === 5 || userType === 4 ? (
          <BusinessNavBar />
        ) : (
          <StaffNavBar />
        )}
      </NavButton>
    </NavbarS>
  );
}
