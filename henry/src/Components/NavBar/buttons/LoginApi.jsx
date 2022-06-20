import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


export default function LoginApi(){

    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    return(
        <div>
            {
            isAuthenticated ?
                isLoading ? 
                    <div>Loading</div>
                :
                    <div>
                        <div>
                            <img scr={user.picture} alt={user.name}/>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>

                        </div>

                        <button onClick={()=> logout({ returnTo : window.location.origin })} >Test logout</button>
                    </div>
            :
                <button onClick={() => loginWithRedirect()}>Test login</button>
            }
        </div>
    )
}