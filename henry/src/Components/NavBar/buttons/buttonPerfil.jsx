import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { profileID } from "../../../reducer/actions/actionPost";

export default function ButtonPerfil(props){
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const user= useSelector((state)=> state.fetchPostReducer.response);
    
   /*  const dispatch= useDispatch();
    const userID= useSelector((state)=> state.fetchPostSaga.response);
    console.log(userID) */

    

    const { decodedToken, isExpided } = useJwt(user);
    const respuesta = decodedToken;
    const[id, setId]=useState('')


    // const token= localStorage.getItem('TK');
    // const parseTK= JSON.parse(token)
    // console.log(parseTK)
    
    
    useEffect(()=>{
        
        if(respuesta !== null) setId(respuesta.id);
       
       
    },[respuesta])
    
        function handleID(){
            dispatch(profileID(id))
        }

    return(
        <div>
            <Link to={`/profile/${id}`}>
                <button onClick={handleID} >My Profile</button>
            </Link>
        </div>
    )
}