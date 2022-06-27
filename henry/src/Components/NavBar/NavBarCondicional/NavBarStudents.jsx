import React from "react";
import { Link } from "react-router-dom"
import { Nav } from "./Estilos/NavStudents";

export default function StudentsNavBar () {
    return(
        <Nav>
            <Link to={"/home"}><h1>HOME</h1></Link>
            <Link to={""}><h1>PERFIL</h1></Link>
            <Link to={""}><h1>PUBLICACIONES DE EMPRESAS</h1></Link>
            <Link to={"/proyects"}><h1>Proyectos</h1></Link>
            <Link to={""}><h1>CONTACTOS</h1></Link>
        </Nav>
    );
};