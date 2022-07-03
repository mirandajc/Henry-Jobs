import React, { useEffect, useState } from "react";
import Logo from "./Logo/logo";
import { NavbarS, NavButton } from "./NavStyles/navbar";
import BusinessNavBar from "./NavBarCondicional/NavBarBusiness";
import StudentsNavBar from "./NavBarCondicional/NavBarStudents";
import StaffNavBar from "./NavBarCondicional/StaffNavBar";
import LoginApi from "./buttons/LoginApi";
import { useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import { Link, useNavigate } from "react-router-dom";
import RegistroGeneral from "../Register_form/RegistroGeneral";


export default function Navbar() {

  const logout = useSelector((state) => state.fetchPostReducer.response);
  const navigate = useNavigate();
  const { decodedToken, isExpided } = useJwt(logout);
  const respuesta = decodedToken

  return (
    <NavbarS>
      <div>
        <Logo />
      </div>

      <LoginApi />

      <NavButton>

        {

          respuesta === null ? null :

            respuesta.type === 1 || respuesta.type === 2 ?

              <StudentsNavBar />

              :
              
              respuesta.type === 5 || respuesta.type === 4 ?

                <BusinessNavBar />

                :

                respuesta.type === 3 ?

                  <StaffNavBar />

                  : respuesta.type === 0 ?

                    null 

                  : null
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