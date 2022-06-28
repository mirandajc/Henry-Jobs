import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import NavLoginTrue from "./navLogin/navLogintrue";
import { ProfileNav, ContainerProfile, ButtonDiv, LoginCont } from './navLogin/navLoginStyles/navLogin';
import { useDispatch, useSelector } from "react-redux";
import { getInfoUser } from "../../../reducer/actions/action";

export default function LoginApi() {

    const dispatch = useDispatch();
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    const userRegister = useSelector((state) => state.fetchDataReducer.userRegister);

    useEffect(() => {
        dispatch(getInfoUser());
    }, [])

    return (
        <ContainerProfile>
            {
                
                    isAuthenticated ?
                        isLoading ?
                            <div>Loading</div>
                            :
                            <ProfileNav>

                                <NavLoginTrue name={user.name} />

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