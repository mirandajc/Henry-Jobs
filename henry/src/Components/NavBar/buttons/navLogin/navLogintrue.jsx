import React, { useEffect } from "react";
import ButtonHome from "../buttonHome";
import { ContnavLogin } from "./navLoginStyles/navLogin";
import ButtonPerfil from "../buttonPerfil";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPremium from "../buttonPremium";
import { getInfoUser } from "../../../../reducer/actions/actionPost";


export default function NavLoginTrue(props) {

    const dispatch = useDispatch();
    const userType = useSelector((state) => state.fetchInfoUserReducer.userType)
    const isPremium = useSelector((state) => state.fetchInfoUserReducer.premium)
    const userRegister = useSelector((state) => state.fetchInfoUserReducer.isRegistered);

    useEffect(() => {
       dispatch(getInfoUser(props.email));
    }, [])
    useEffect(() => {
       console.log("userType", userType);
       console.log("isPremium", isPremium);
       console.log("userRegister", userRegister);
       console.log("props", props);
    }, [userType, isPremium, userRegister])

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
                userType === 'Staff' ? null :
                    <ButtonPerfil name={props.name} />
            }
            {

                userType === 'Recruiter' || userType === 'Business' ?

                    !isPremium ?

                        <ButtonPremium />

                        : null 

                    : null
            }
        </ContnavLogin>
    )
}