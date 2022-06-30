import React from "react";
import { Link } from "react-router-dom";
import ButtonPremium from "../buttons/buttonPremium";
import LoginApi from "../buttons/LoginApi";
import { useSelector } from "react-redux";
import { NavBar } from "./Estilos/NavEmpresa"

export default function BusinessNavBar () {
    const isPremium = useSelector((state) => state.fetchInfoUserReducer.premium)
    return(
        <NavBar>
        <LoginApi />
        {
            !isPremium ? <ButtonPremium /> : null
        }
        </NavBar>
    );
};