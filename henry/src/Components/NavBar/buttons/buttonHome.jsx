import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ButtonHome() {

    const userType = useSelector((state) => state.fetchDataReducer.user)

    return (
       
        <div>
            
        {
            userType === 'student' ?  <Link to='/home'>Home</Link>
            
            :

            userType === 'business' ? <Link to='/home'>Home</Link> 
            
            :

            userType === 'staff' ? <Link to='/home'>Home</Link> 
            
            : null
        }

        </div>
        
    )

}
