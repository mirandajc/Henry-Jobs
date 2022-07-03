import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import StudentsProfile from "./students_profile";
import StudentCV from "./students-cv";
import { CompleteProfile } from "../profileStyles/StudentComplete";
import { profileID } from "../../../reducer/actions/actionPost";

export default function StudentCompletePage(){

    const{id}= useParams();
    console.log(id)
    const dispatch=useDispatch();
    const userProfile= useSelector((state)=> state.fetchPostReducer.responseProfile)
    const [user,setUser]= useState('');
   
   
    console.log(userProfile)

   

    useEffect(()=>{

        if(userProfile !== null){ 
            setUser(userProfile);
        }
       
    },[userProfile])

 

return(
    <CompleteProfile>

        <StudentsProfile/>
        <StudentCV technologies={userProfile.technologies}
        otherStudies={userProfile.otherStudies}/>

    </CompleteProfile>
)


}