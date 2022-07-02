import React, { useEffect } from "react";
import Logo from "./Logo/logo";
import { NavbarS, NavButton } from "./NavStyles/navbar";
import BusinessNavBar from "./NavBarCondicional/NavBarBusiness";
import StudentsNavBar from "./NavBarCondicional/NavBarStudents";
import StaffNavBar from "./NavBarCondicional/StaffNavBar";
import LoginApi from "./buttons/LoginApi";

export default function Navbar() {

  const tal = localStorage.getItem('TK')
  const userType = JSON.parse(tal);
  

  return (
    <NavbarS>
      <div>
        <Logo />
      </div>

      <LoginApi/>
     
      <NavButton>

        {

        userType.type === 1 || userType.type === 2 ? <StudentsNavBar />

        : 
        userType.type === 5 || userType.type === 4 ? <BusinessNavBar />

        : 
        <StaffNavBar />
        
        }

      </NavButton>
    </NavbarS>
  );
}

// const tal= localStorage.getItem('TK') TRAE UN ITEM DEL STORAGE
    // const SetearItem=localStorage.setItem(tal,'tal') SETEA UN ITEM DEL STORAGE
    // localStorage.clear() LIMPIA TODO EL STORAGE
    // localStorage.removeItem('nombre de item') REMUEVE UN ITEM ESPECIFICO DEL STORAGE
    // const token= JSON.parse(tal) PARSEO EL ITEM A FORMA DE OBJETO