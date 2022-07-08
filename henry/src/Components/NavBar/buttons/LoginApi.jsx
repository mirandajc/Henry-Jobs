import React, { useEffect } from "react";
import {  ContainerProfile, LoginCont } from './navLogin/navLoginStyles/navLogin';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { setLogout } from "../../../reducer/actions/actionPost";




export default function LoginApi() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout= useSelector((state)=> state.fetchPostReducer.response);
    


    const register =()=>{
        navigate('/login')
    }
    
    const Logout=()=>{
       
        // localStorage.removeItem('TK')
        localStorage.clear('TK')
        dispatch(setLogout())
        navigate('/')

    }


    // const tal= localStorage.getItem('TK') TRAE UN ITEM DEL STORAGE
    // const SetearItem=localStorage.setItem(tal,'tal') SETEA UN ITEM DEL STORAGE
    // localStorage.clear() LIMPIA TODO EL STORAGE
    // localStorage.removeItem('nombre de item') REMUEVE UN ITEM ESPECIFICO DEL STORAGE
    // const token= JSON.parse(tal) PARSEO EL ITEM A FORMA DE OBJETO

    return (
        <ContainerProfile>
                <LoginCont>
                    
    {
        logout?
        <button onClick={()=>Logout()}>Logout</button>
        :
        <button onClick={() => register()}>Login</button>
    }
                        
                        
                    
                </LoginCont>
        </ContainerProfile>
    )
}