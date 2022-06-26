import React from "react";
import ButtonHome from "../buttonHome";
import { ContnavLogin } from "./navLoginStyles/navLogin";
import ButtonPerfil from "../buttonPerfil";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function NavLoginTrue(props) {

    const userType = useSelector((state) => state.fetchDataReducer.user)
    const userRegister = useSelector((state) => state.fetchDataReducer.userRegister);

    return (
        <ContnavLogin>
            {
                userRegister

                    ?

                    <ButtonHome />

                    :

                <p>Completa el registro para acceder a las herramientas <Link to='/register'>Registro</Link></p>

            }
            {
                userType === 'staff' ? null :
                    <ButtonPerfil name={props.name} />
            }
        </ContnavLogin>
    )
}