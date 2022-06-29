import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import NavLoginTrue from "./navLogin/navLogintrue";
import { ProfileNav, ContainerProfile, ButtonDiv, LoginCont } from './navLogin/navLoginStyles/navLogin';
import { useDispatch, useSelector } from "react-redux";

export default function LoginApi() {

    const dispatch = useDispatch();
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    const userRegister = useSelector((state) => state.fetchInfoUserReducer.isRegistered);

    // useEffect(() => {
    // }, [])

    return (
        <ContainerProfile>
            {
                
                    isAuthenticated ?
                        isLoading ?
                            <div>Loading</div>
                            :
                            <ProfileNav>
                                {console.log(user)}
                                <NavLoginTrue name={user.name} email={user.email} />

                                {/* <div>
                            <img scr={user.picture} alt={user.name}/>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>

                        </div> */}
                                <ButtonDiv>
                                    <button onClick={() => logout({ returnTo: window.location.origin })} >Logout</button>
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