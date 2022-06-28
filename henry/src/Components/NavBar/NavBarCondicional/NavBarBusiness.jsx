import React from "react";
import { Link } from "react-router-dom";
import ButtonPremium from "../buttons/buttonPremium";
import LoginApi from "../buttons/LoginApi";
import { useSelector } from "react-redux";
import { NavBar } from "./Estilos/NavEmpresa"

export default function BusinessNavBar () {
    const isPremium = useSelector((state) => state.fetchDataReducer.isPremium)
    return(
        <NavBar>
        <LoginApi />
        {
            !isPremium ? <ButtonPremium /> : null
        }
            {/*
            <Link to={""}><h1>PERFIL</h1></Link>
            <Link to={"/proyects"}><h1>PROYECTOS</h1></Link>
            <Link to={""}><h1>CONTACTOS</h1></Link> */}
        </NavBar>
    );
};