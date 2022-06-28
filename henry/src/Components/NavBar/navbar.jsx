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
  const userType = useSelector((state) => state.fetchDataReducer.user);

  return (
    <NavbarS>
      <div>
        <Logo />
      </div>

      <NavButton>
        {userType === "Graduate" || userType === "PG" ? (
          <StudentsNavBar />
        ) : userType === "Business" || userType === "Recruiter" ? (
          <BusinessNavBar />
        ) : (
          <StaffNavBar />
        )}
      </NavButton>
    </NavbarS>
  );
}
