import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import NavLoginTrue from "./navLogin/navLogintrue";
import { ProfileNav, ContainerProfile, ButtonDiv, LoginCont } from './navLogin/navLoginStyles/navLogin';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

export default function LoginApi() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    const userRegister = useSelector((state) => state.fetchInfoUserReducer.isRegistered);

    const register =()=>{
        navigate('/login')
    }

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

                                <ButtonDiv>
                                    <button onClick={() => logout({ returnTo: window.location.origin })} >Logout</button>
                                </ButtonDiv>

                            </ProfileNav>
                        :
                        <LoginCont>

                            <button onClick={() => register()}>Login</button>
                        </LoginCont>

                        
            }
        </ContainerProfile>
    )
}