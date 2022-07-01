import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { postUser } from "../../../reducer/actions/actionPost";
import { HENRY_LOGO } from "../../../constants/constants";
import { ConteinLogin } from "../LoginStyles/logstyle";
import {FcGoogle} from 'react-icons/fc'
import {VscGithubInverted} from 'react-icons/all';
import { useJwt } from "react-jwt";

export default function LoginPage(){
    const navigate= useNavigate();
    const dispatch= useDispatch('');
    const res= useSelector((state)=> state.fetchPostReducer.response);
    
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [savedData,setSavedData]= useState(false);
    const [logged,setLogged]= useState(false);
    
    
    const {decodedToken, isExpided}= useJwt(res);
    
    const TK= decodedToken;
    localStorage.setItem('TK', JSON.stringify(TK));
    const token= localStorage.getItem('TK');
    const usedTk= JSON.parse(token);
    console.log(usedTk);
    

    const user={
        email,
        password
    }
    


    useEffect(()=>{
       
       
    },[])
    
    function handlerLogin(){
        user.email= email;
        user.password= password;
        
        dispatch(postUser(user));


         if(usedTk){
            navigate('/home')
        }else{
            console.log('es un string maestro')
        }
    }
    

   


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
                     <input placeholder="Usuario" value={email} onInput={(e)=>setEmail(e.target.value)}/>
            </div>
                <div>
                      <input type='password' placeholder="Contraseña" value={password} onInput={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="BTN">
                    <button onClick={handlerLogin}>Ingresar</button>
                    <Link to = '/register'>
                    <button>Registrarse</button>
                    </Link>
                </div>


                <div className="second">
                    <p>Or signIn with</p>
                  
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