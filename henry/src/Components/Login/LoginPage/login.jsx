import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { LoginnCont } from "../LoginStyles/logstyle";
import { storage } from "../../../LocalStorage/localStorage";
import { postUser } from "../../../reducer/actions/actionPost";
import { HENRY_LOGO } from "../../../constants/constants";
import { ConteinLogin } from "../LoginStyles/logstyle";
import {FcGoogle} from 'react-icons/fc'
import {VscGithubInverted} from 'react-icons/all';



export default function LoginPage(){
    const dispatch= useDispatch('');
    const res= useSelector((state)=> state.fetchPostReducer.response);
    const [login, setLogin]= useState('');
    const [password, setPassword]= useState('');
    const userStorage= storage;
    console.log(userStorage)

    const user={
        login,
        password
    }
    console.log(user)

    function handlerLogin(){
        dispatch(postUser(user))
    }

    useEffect(()=>{
        storage.push(res)
    },[])


    return(
        <ConteinLogin>
                <div className="x">
                <Link to= '/'>
                <button>x</button>
                </Link>
                </div>
            <div className="contLog">
                <div className="conteinter">
                    <img src={HENRY_LOGO} alt='logo de henry'/>
                 </div>
            <div className="inputs">
                <div>
                     <input placeholder="usuario" value={login} onInput={(e)=>setLogin(e.target.value)}/>
            </div>
                <div>
                      <input placeholder="contraseña" value={password} onInput={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="BTN">
                    <button onClick={handlerLogin}>Ingresar</button>
                    <Link to = '/register'>
                    <button>Registrarse</button>
                    </Link>
                </div>


                <div className="second">
                    <p>Or singin with</p>
                  
                </div>
                <div className="other">
                    <div>
                        <FcGoogle className="another"/>
                    </div>
                    <div>
                        <VscGithubInverted className="another"/>
                    </div>
                </div>
            </div>

            </div>
            
        </ConteinLogin>
    )
}