import React from "react";
import { Link } from "react-router-dom"
import LoginApi from "../buttons/LoginApi";
import { Nav } from "./Estilos/NavStudents";

export default function StudentsNavBar () {




    return(
        <Nav>
            <LoginApi />

            {/*
            <Link to={""}><h1>PERFIL</h1></Link>
            <Link to={""}><h1>PUBLICACIONES DE EMPRESAS</h1></Link>
            <Link to={"/proyects"}><h1>PROYECTOS</h1></Link>
            <Link to={""}><h1>CONTACTOS</h1></Link> */}
        </Nav>
    );
};