import React from "react";
import { useSelector } from "react-redux";
import ButtonHome from "../buttons/buttonHome";

export default function StaffNavBar () {

    const logout = useSelector((state) => state.fetchPostReducer.response);

    
    return(
        <div>
        
            {
                logout ?
                    <div>
                       <ButtonHome/>
                    </div>
                    : null
            }

        </div>
    );
};