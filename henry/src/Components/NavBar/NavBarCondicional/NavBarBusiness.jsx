import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./Estilos/NavEmpresa"

export default function BusinessNavBar () {
    return(
        <NavBar>
            <Link to={"/home"}><h1>HOME</h1></Link>
            <Link to={""}><h1>PERFIL</h1></Link>
            <Link to={"/proyects"}><h1>PROYECTOS</h1></Link>
            <Link to={""}><h1>CONTACTOS</h1></Link>
        </NavBar>
    );
};