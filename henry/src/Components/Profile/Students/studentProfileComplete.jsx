import React, { useEffect, useState } from "react";
import StudentsProfile from "./students_profile";
import StudentCV from "./students-cv";
import { CompleteProfile } from "../profileStyles/StudentComplete";


export default function StudentCompletePage(){
    const [user,setUser]= useState('');
    

     //{(!!savedData)&& <completeProfile/>} renderizado condicional si existe en lS
    // const getData=()=>{
    //     return localStorage.getItem('user');
    // }

    // useEffect(()=>{
    //     setUser(getData());
    // },[])


return(
    <CompleteProfile>

        <StudentsProfile/>
        <StudentCV/>

    </CompleteProfile>
)


}