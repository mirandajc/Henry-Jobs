import React, { useEffect } from "react";
import {  ContainerProfile, LoginCont } from './navLogin/navLoginStyles/navLogin';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { setLogout } from "../../../reducer/actions/actionPost";




export default function LoginApi() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout= useSelector((state)=> state.fetchPostReducer.log);
    


    const register =()=>{
        navigate('/login')
    }
    
    const Logout=()=>{
        dispatch(setLogout(false))
        localStorage.removeItem('TK');
        navigate('/')

    }

    useEffect(()=>{
        console.log(logout)
    },[logout])
    

    return (
        <ContainerProfile>
                <LoginCont>
                    {
                        logout === true?
                        <button onClick={()=>Logout()}>Logout</button>
                        :
                        <button onClick={() => register()}>Login</button>
                        
                    }
                </LoginCont>
        </ContainerProfile>
    )
}