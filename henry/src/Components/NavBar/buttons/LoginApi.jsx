import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import NavLoginTrue from "./navLogin/navLogintrue";
import {ProfileNav, ContainerProfile, ButtonDiv, LoginCont} from './navLogin/navLoginStyles/navLogin';
import { storage } from "../../../LocalStorage/localStorage";
import { useNavigate } from "react-router-dom";


export default function LoginApi(){
    const navigate= useNavigate()
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    



    const localstorage= storage;
    console.log(localstorage)

    // const Redirect=()=>{
        
    //     loginWithRedirect()
    //     .then(
    //         localstorage.userTypes === '' ? navigate('/register'): navigate('/home')
    //     )
        
    // }

    return(
        <ContainerProfile>
            {
            isAuthenticated ?
                isLoading ? 
                    <div>Loading</div>
                :
                    <ProfileNav>
                        {console.log(user)}
                        <NavLoginTrue name={user.name}/>
                    
                        {/* <div>
                            <img scr={user.picture} alt={user.name}/>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>

                        </div> */}
                        <ButtonDiv>
                        <button onClick={()=> logout({ returnTo : window.location.origin })} >Logout</button>
                        </ButtonDiv>
                    </ProfileNav>
            :
            <LoginCont>
                
                <button onClick={() => loginWithRedirect()}>Login</button>
            </LoginCont>
            }
        </ContainerProfile>
    )
}