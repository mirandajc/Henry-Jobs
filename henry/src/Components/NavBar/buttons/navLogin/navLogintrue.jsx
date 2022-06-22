import React from "react";
import ButtonHome from "../buttonHome";
import { ContnavLogin } from "./navLoginStyles/navLogin";
import ButtonPerfil from "../buttonPerfil";
import { useSelector } from "react-redux";


export default function NavLoginTrue(props) {

    const userType = useSelector((state) => state.fetchDataReducer.user)

    return (
        <ContnavLogin>
            <ButtonHome />
            {
                userType === 'staff' ? null :
                    <ButtonPerfil name={props.name} />
            }
        </ContnavLogin>
    )
}