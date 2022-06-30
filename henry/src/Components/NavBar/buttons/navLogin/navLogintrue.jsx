import React, { useEffect } from "react";
import ButtonHome from "../buttonHome";
import { ContnavLogin } from "./navLoginStyles/navLogin";
import ButtonPerfil from "../buttonPerfil";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPremium from "../buttonPremium";
import { getInfoUser } from "../../../../reducer/actions/actionPost";
import ButtonStudentsWall from "../buttonStudentsWall";
import ButtonWorkWall from "../buttonWorkWall";


export default function NavLoginTrue(props) {

    const dispatch = useDispatch();
    const userType = useSelector((state) => state.fetchInfoUserReducer.userType)
    const isPremium = useSelector((state) => state.fetchInfoUserReducer.premium)
    const userRegister = useSelector((state) => state.fetchInfoUserReducer.isRegistered);

 

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
                userType === 3 ? null :
                    <ButtonPerfil name={props.name} />
            }
            {

                userType === 4 || userType === 5 ?

                    !isPremium ?

                        <ButtonPremium />

                        : null 

                    : null
            }
            {
                userType === 1 || userType === 2 ? <ButtonWorkWall/> : <ButtonStudentsWall/>
            }
        </ContnavLogin>
    )
}