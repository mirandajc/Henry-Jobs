import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import { profileID } from "../../../reducer/actions/actionPost";

export default function ButtonPerfil(props){
    
    const dispatch= useDispatch();
    const user = useSelector((state)=> state.fetchPostReducer.response);
    const { decodedToken, isExpided } = useJwt(user);
    const respuesta = decodedToken;
    const[id, setId]=useState('')

    useEffect(()=>{
        if(respuesta !== null) setId(respuesta.id);
    },[respuesta])
    
    const handleID = function(){
        dispatch(profileID(id))
    }

    return(
        <div>
            <Link to={`/profile/${id}`}>
                <button onClick={handleID} >Perfil</button>
            </Link>
        </div>
    )
}