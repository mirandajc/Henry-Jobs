import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CompleteStudentCont } from "./formStyles/completeStudent";

export default function RegisterCompleted () {

    // CUANDO TERMINA EL REGISTRO, SE HACE UN AUTOLOGIN ? O EL USUARIO TIENE QUE LOGEARSE ?
    // EL CODIGO DE ABAJO ESTA HECHO COMO UN AUTOLOGIN
    
    return <CompleteStudentCont>
        <h1>Te has registrado exitosamente!</h1>
        <h1>Bienvenido!!! 🎉🎊🎉</h1>
        
        <h2>Puedes ir a <Link to={'/home'}>Home</Link>, a ver las publicaciones o ingresar a tu perfil.</h2>
        
    </CompleteStudentCont>
};