import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RegisterCompleted () {

    // CUANDO TERMINA EL REGISTRO, SE HACE UN AUTOLOGIN ? O EL USUARIO TIENE QUE LOGEARSE ?
    // EL CODIGO DE ABAJO ESTA HECHO COMO UN AUTOLOGIN
    
    return <div>
        <h1>Te has registrado exitosamente!</h1>
        <h3>ya puedes <br /> ir a <Link to={'/home'}>Home</Link> a ver las publicaciones <br /> ir a tu perfil</h3>
    </div>
};