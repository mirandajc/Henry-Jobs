import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ButtonHome() {

    const userType = useSelector((state) => state.fetchDataReducer.user)

    return (
       
        <div>
            
        {
            userType === 'PG' || userType === "Graduate" ?  <Link to='/home'>Home</Link>
            
            :

            userType === 'Business' || userType === "Recruiter" ? <Link to='/home'>Home</Link> 
            
            :

            userType === 'Staff' ? <Link to='/home'>Home</Link> 
            
            : null
        }

        </div>
        
    )

}
