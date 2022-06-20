import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


export default function Register(){

    const { loginWithRedirect } = useAuth0();

    return(
        <div>
            <button onClick={() => loginWithRedirect()}>Test login</button>
        </div>
    )
}