import React, { useState } from "react";
import { CardRegister } from "../LoginStyles/registerStyle";
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { postRegisterModal } from "../../../reducer/actions/actionPost";


export default function RegisterCard(){
    // Falta hacer validacion del campo de EMAIl
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    /////////////////////// ESTADOS DE DATOS ////////////////////////////////////////

    const [ datos, setDatos ] = useState({
        nombre:"",
        apellido:"",
        username:"",
        email:"",
        contraseña:"",
    });

    /////////////////////// ESTADOS DE ERRORES /////////////////////////////////////

    const [ error, setError ] = useState({
        errorNombre:"",
        errorApellido:"",
        errorUsername:"",
        errorEmail:"",
        errorContraseña:"",
    });

    /////////////////////// VALIDACION DE NOMBRE Y APELLIDO ////////////////////////

    const validarNombre = (e) => {
        if(!/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/gim.test(e.target.value)){
            setError({...error, errorNombre:"El nombre solo debe contener letras"});
        }
        else{
            setError({...error, errorNombre:""})
        }
        setDatos({...datos, nombre: e.target.value});
    };

    const validarApellido = (e) => {
        if(!/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/gim.test(e.target.value)){
            setError({...error, errorApellido:"El apellido solo debe contener letras"});
        }
        else{
            setError({...error, errorApellido:""});
        }
        setDatos({...datos, apellido: e.target.value});
    };

    ////////////////////////    USERNAME   /////////////////////////////////////////

    const validarUsername = (e) => {
        if(!/(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm.test(e.target.value)){ 
            setError({...error, errorUsername:"Ese nombre de usuario no es válido"});
        }
        else{
            setError({...error, errorUsername:""});
        }
        setDatos({...datos, username: e.target.value});
    };

    //////////////////////// VALIDACION DE MAIL ////////////////////////////////////

    const validarEmail = (e) => {
        if(!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi){
            setError({...error, errorEmail:"Ingresa un email válido"});
        }
        else{
            setError({...error, errorEmail:""});
        }
        setDatos({...datos, email: e.target.value});
    };

    //////////////////////// VALIDACION DE CONTRASEÑAS /////////////////////////////

    const validarContraseña = (e) => {
        if(e.target.value.length < 5){
            setError({...error, errorContraseña:"La contraseña es demasiado corta!"});
        }
        else{
            setError({...error, errorContraseña:""});
        }
        setDatos({...datos, contraseña: e.target.value});
    };

    //////////////////////////////////////// SUBMIT ////////////////////////////////////////////////

    const handleSubmit = () => {
        if(error.errorApellido || error.errorContraseña || error.errorEmail || error.errorNombre || error.errorUsername){
            return;
        }
        else{
            if(!datos.nombre){
                return setError({...error, errorNombre: "Debes ingresar un nombre!"});
            }
            else if(!datos.username){
                return setError({...error, errorUsername: "Debes ingresar un username!"});
            }
            else if(!datos.email){
                return setError({...error, errorEmail: "Debes ingresar un email"});
            }
            else if(!datos.contraseña){
                return setError({...error, errorContraseña: "Debes ingresar una contraseña"});
            }
            else{
                //mandar el objeto
                const correo = /[^@ \t\r\n]+@soyhenry\.com/           
                if(correo.test(datos.email)){
                    let USER = {
                        userName: datos.username,
                        lastName: datos.apellido,
                        name: datos.nombre,
                        email: datos.email,
                        password: "722HJ227",
                        userType: 3
                    };

                    console.log("|||||HENRY_STAFF|||||", USER);
                    // dispatch(postRegisterModal(USER)); TOOMMMEEEEEE
                    navigate("/login");
                }
                else {
                    let USER = {
                        userName: datos.username,
                        lastName: datos.apellido,
                        name: datos.nombre,
                        email: datos.email,
                        password: datos.contraseña,
                    };
                    console.log("enviando usuario", USER)
                    dispatch(postRegisterModal(USER));
                    navigate("/login");
                }
            }
        }
    };

    return(
        <CardRegister>

            <div className="x">
                <Link to= '/login'> 
                <button>x</button>
                </Link>
            </div>
            <h1>Registrate! 🚀</h1>
            <div>
                <input placeholder="Nombre de usuario" value={datos.username} onChange={(e) => validarUsername(e)}/>
                {error.errorUsername && <span>{ error.errorUsername }</span>}
            </div>
            <div>
                <input placeholder="Nombre" value={datos.nombre} onChange={(e) => validarNombre(e)}/>
                {error.errorNombre && <span>{ error.errorNombre }</span>}
            </div>
            <div>
                <input placeholder="Apellido" value={datos.apellido} onChange={(e) => validarApellido(e)}/>
                {error.errorApellido && <span>{ error.errorApellido }</span>}
            </div>
            <div>
                <input placeholder="Mail" value={datos.email} onChange={(e) => validarEmail(e)}/>
                {error.errorEmail && <span>{ error.errorEmail }</span>}
            </div>
            <div>
                <input placeholder="Contraseña" type='password' value={datos.contraseña} onChange={(e) => validarContraseña(e)}/>
                {error.errorContraseña && <span>{ error.errorContraseña }</span>} 
            </div>

            <div>
                <button onClick={handleSubmit}>Enviar!</button>
            </div>
        </CardRegister>
    )
}