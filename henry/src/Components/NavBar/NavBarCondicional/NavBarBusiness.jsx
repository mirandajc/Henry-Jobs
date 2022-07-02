import React from "react";
import ButtonPremium from "../buttons/buttonPremium";
import { useSelector } from "react-redux";
import ButtonStudentsWall from '../buttons/buttonStudentsWall'
import ButtonHome from "../buttons/buttonHome";
import ButtonPerfil from "../buttons/buttonPerfil";

export default function BusinessNavBar() {
    const isPremium = useSelector((state) => state.fetchInfoUserReducer.premium)

    const logout = useSelector((state) => state.fetchPostReducer.response);

    return (
        <div>
            {
                !isPremium ? <ButtonPremium /> : null
            }
            {
                logout ?
                    <div>
                        <div>
                            <ButtonHome />
                        </div>

                        <div>
                            <ButtonStudentsWall />
                        </div>

                        <div>
                            <ButtonPerfil />
                        </div>
                    </div>
                    : null
            }

        </div>
    );
};