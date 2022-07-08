import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { buggNav, postUser } from "../../../reducer/actions/actionPost";
import { HENRY_LOGO } from "../../../constants/constants";
import { ConteinLogin } from "../LoginStyles/logstyle";
import {FcGoogle} from 'react-icons/fc'
import {VscGithubInverted} from 'react-icons/all';
import { useJwt } from "react-jwt";
import { setLogout } from "../../../reducer/actions/actionPost";
import GoogleLog from "./googleLogin"; 
import GithubLog from "./githubLogin";
import { ButtonGoogle } from "../LoginStyles/logstyle";
import { getStudentsByEmail } from "../../../reducer/actions/actionStudents";
import { getBusinessByEmail } from "../../../reducer/actions/actionBusiness";


export default function LoginPage(){
    const navigate= useNavigate();
    const dispatch= useDispatch('');
    const res= useSelector((state)=> state.fetchPostReducer.response);

    const [user, setUser]=useState({
        email: '',
        password: ''
    })



    //49386310605-dghc6jkl2evtt3s7df6vus6ac2ekt0d4.apps.googleusercontent.com GOOGLE ID
    //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 SECRET

    const {decodedToken, isExpided}= useJwt(res);
    

  
    const TK= decodedToken;
    localStorage.setItem('TK', JSON.stringify(TK));
    //localStorage.setItem('nombre del item que quiero guardar' item que guardo)
    const token= localStorage.getItem('TK');
    //localStorage.getItem('nombre del item que me traigo')
    const usedTk= JSON.parse(token);
    
    

 
    useEffect(()=>{
        if(TK !== null){
            dispatch(getStudentsByEmail(user.email));
            dispatch(getBusinessByEmail(user.email));
            navigate('/home')
        }
        

        return()=>{} 
    },[TK])
    
     function handlerLogin (){
       if(user.email && user.password){
        //  dispatch(setLogout(true))
            dispatch(buggNav());
            dispatch(postUser(user));
       }
    }
    const handleCallbackResponse = (response) => {
  
        console.log("Encoded JWT ID token" + response.credential);
      }
      
    //   useEffect(() => {
    //     /* global google */
    //     // google.accounts.id.initialize({
          
    //     //   client_id:"49386310605-t1sf3e31jfe1li9cprtcr3dslrddop1h.apps.googleusercontent.com",
    //     //   callback: handleCallbackResponse
    //     });
      
    //     // google.accounts.id.renderButton(
    //     //   document.getElementById("signInDiv"),
    //     //   {theme: "outline", size: "small"}
    //     // );
    //   },[]);
    

   


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
                    <input placeholder="Usuario" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
            </div>
                <div>
                    <input type='password' placeholder="Contraseña" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
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
                    <div id="signInDiv" >
                        <FcGoogle className="another"/>
                        {/* <GoogleLog/> */}
                    </div>
                    <div>
                        {/* <GithubLog/> */}
                        <VscGithubInverted className="another"
                        />
                  
                    </div>
                </div>
                <div>
                </div>
            </div>

            </div>
            
        </ConteinLogin>
    )
}