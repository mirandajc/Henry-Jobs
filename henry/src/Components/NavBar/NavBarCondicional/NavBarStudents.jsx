import React from "react";
import ButtonWorkWall from "../buttons/buttonWorkWall";
import ButtonHome from '../buttons/buttonHome'
import ButtonPerfil from '../buttons/buttonPerfil'
import ButtonStudentsWall from '../buttons/buttonStudentsWall'
import { useSelector } from "react-redux";


export default function StudentsNavBar () {
    
    const logout = useSelector((state) => state.fetchPostReducer.response);

    return(
        <div>
           
            {
                logout ?
                    
                    <div>
                        {console.log('nav de students')}
                        <div>
                            <ButtonHome />
                        </div>

                        <div>
                            <ButtonStudentsWall />
                        </div>

                        <div>
                            <ButtonWorkWall />
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