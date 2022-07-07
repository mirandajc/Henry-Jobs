import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StudentsProfile from "./students_profile";
import StudentCV from "./students-cv";
import { CompleteProfile } from "../profileStyles/StudentComplete";
import { profileID } from "../../../reducer/actions/actionPost";

export default function StudentCompletePage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.fetchPostReducer.responseProfile)
    const [renderi, setRenderi] = useState(false);

    // console.log(userProfile)

    useEffect(() => {
        if(userProfile.name !== undefined) {
            setRenderi(true)
        }
        dispatch(profileID(id));
    }, [userProfile])


    return (
        
        <div>
        {
            renderi
            ?
            <CompleteProfile>
                <StudentsProfile 
                backFront={userProfile.backFront}
                banner={userProfile.banner}
                country={userProfile.country}
                curriculumCounter={userProfile.curriculumCounter}
                email={userProfile.email}
                lastName={userProfile.lastName}
                name={userProfile.name}
                profileImage={userProfile.profileImage}
                
                 />
                        <StudentCV
                            technologies={userProfile.technologies}
                            otherStudies={userProfile.otherStudies}
                            id={id}
                        />
                        </CompleteProfile>

        : null
            }
        </div>

    )


}