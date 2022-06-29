import React, { useEffect } from "react";
import ButtonHome from "../buttonHome";
import { ContnavLogin } from "./navLoginStyles/navLogin";
import ButtonPerfil from "../buttonPerfil";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPremium from "../buttonPremium";
import { getInfoUser } from "../../../../reducer/actions/action";


export default function NavLoginTrue(props) {

    const dispatch = useDispatch();
    const userType = useSelector((state) => state.fetchInfoUserReducer.user)
    const isPremium = useSelector((state) => state.fetchInfoUserReducer.isPremium)
    const userRegister = useSelector((state) => state.fetchInfoUserReducer.userRegister);

    useEffect(() => {
       dispatch(getInfoUser(props.email));
    }, [])

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