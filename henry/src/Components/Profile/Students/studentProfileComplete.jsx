import React from "react";
import StudentsProfile from "./students_profile";
import StudentCV from "./students-cv";
import { CompleteProfile } from "../profileStyles/StudentComplete";


export default function StudentCompletePage(){

return(
    <CompleteProfile>
        <StudentsProfile/>
        <StudentCV/>

    </CompleteProfile>
)


}