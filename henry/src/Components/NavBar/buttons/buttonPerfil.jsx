import React from "react";
import { Link } from "react-router-dom";

export default function ButtonPerfil(props){


    return(
        <div>
            <Link to={`/profile/${props.name}`}>
                <button >My Profile</button>
            </Link>
        </div>
    )
}