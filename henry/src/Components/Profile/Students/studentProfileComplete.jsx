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

    console.log(userProfile)

    useEffect(() => {
        if(userProfile.name !== undefined) {
            setRenderi(true)
        }
    }, [userProfile])


    return (
        <CompleteProfile>

            {
                renderi
                    ?
                    <div>
                        <StudentCV
                            technologies={userProfile.technologies}
                            otherStudies={userProfile.otherStudies}
                        />
                        <StudentsProfile />
                    </div>

                    : null
            }

        </CompleteProfile>
    )


}