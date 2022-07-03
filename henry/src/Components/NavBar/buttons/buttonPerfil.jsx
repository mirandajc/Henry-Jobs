import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";


export default function ButtonPerfil(props){
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const user= useSelector((state)=> state.fetchPostReducer.response);
    
   /*  const dispatch= useDispatch();
    const userID= useSelector((state)=> state.fetchPostSaga.response);
    console.log(userID) */

    

    const { decodedToken, isExpided } = useJwt(user);
    const respuesta = decodedToken;
    const[puto, setPuto]=useState('')


    // const token= localStorage.getItem('TK');
    // const parseTK= JSON.parse(token)
    // console.log(parseTK)
    
    
    useEffect(()=>{
        
        if(respuesta !== null) setPuto(respuesta.id);
       
    },[respuesta])
    
    

    return(
        <div>
            <Link to={`/profile/${puto}`}>
                <button >My Profile</button>
            </Link>
        </div>
    )
}