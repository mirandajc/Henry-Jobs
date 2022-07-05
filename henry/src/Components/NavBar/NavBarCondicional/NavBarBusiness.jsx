import React from "react";
import ButtonPremium from "../buttons/buttonPremium";
import { useSelector } from "react-redux";
import ButtonStudentsWall from '../buttons/buttonStudentsWall'
import ButtonHome from "../buttons/buttonHome";
import ButtonPerfil from "../buttons/buttonPerfil";
import { DivContSt,  NavSt } from "./Estilos/navStudent";



export default function BusinessNavBar() {

    const logout = useSelector((state) => state.fetchPostReducer.response);

    let isPremium = false;

    return (
        <DivContSt>
            {
                logout ?
                    <NavSt>
                        <div>
                            <ButtonHome />
                        </div>

                        <div>
                            <ButtonStudentsWall />
                        </div>

                        <div>
                            <ButtonPerfil />
                        </div>
                        {
                            !isPremium ? <ButtonPremium /> : null
                        }
                    </NavSt>
                    : null
            }

        </DivContSt>
    );
};