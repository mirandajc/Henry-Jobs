import React from "react";
import { useSelector } from "react-redux";
import BusinessProfile from "./Bussines/business_profile";
import RecruiterProfile from "./Recruiter/recruiter_profile";
import StudentsProfile from "./Students/students_profile";

export default function ProfileLogic(){

    const userType = useSelector((state) => state.fetchDataReducer.user)

    return(
        <div>

            {
                userType === 'student' ?  <StudentsProfile/>
                
                :

                userType === 'business' ? <BusinessProfile/>
                
                :

                userType === 'recruiter' ? <RecruiterProfile/>
                
                : null
            }

        </div>
    )
}