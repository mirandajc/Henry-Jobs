import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ButtonHome() {

    const userType = useSelector((state) => state.fetchInfoUserReducer.userType)

    return (
       
        <div>
            
        {
            userType === 1 || userType === 2 ?  <Link to='/home'>Home</Link>
            
            :

            userType === 5 ||  userType === 4  ? <Link to='/home'>Home</Link> 
            
            :

            userType === 3 ? <Link to='/home'>Home</Link> 
            
            : null
        }

        </div>
        
    )

}
