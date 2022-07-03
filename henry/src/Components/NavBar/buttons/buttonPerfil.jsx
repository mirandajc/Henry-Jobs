import React from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import { Link } from "react-router-dom";



export default function ButtonPerfil(props){
    
   /*  const dispatch= useDispatch();
    const userID= useSelector((state)=> state.fetchPostSaga.response);
    console.log(userID) */

    
    return(
        <div>
            <Link to={`/profile/${props.name}`}>
                <button >My Profile</button>
            </Link>
        </div>
    )
}