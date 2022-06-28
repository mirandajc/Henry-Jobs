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
    const userType = useSelector((state) => state.fetchDataReducer.user)
    const isPremium = useSelector((state) => state.fetchDataReducer.isPremium)
    const userRegister = useSelector((state) => state.fetchDataReducer.userRegister);

    useEffect(() => {
       dispatch(getInfoUser());
       
    }, [isPremium])

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
            {

                userType === 'recruiter' || userType === 'business' ?

                    !isPremium ?

                        <ButtonPremium />

                        : null 

                    : null
            }
        </ContnavLogin>
    )
}