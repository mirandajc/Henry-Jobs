import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StudentsProfile from "./students_profile";
import StudentCV from "./students-cv";
import { CompleteProfile } from "../profileStyles/StudentComplete";
import { profileID } from "../../../reducer/actions/actionPost";
import { ContStudentCo } from "../profileStyles/studentProfile";
import Loading from "../../Loading/Loading";





export default function StudentCompletePage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.fetchPostReducer.responseProfile)
    const [renderi, setRenderi] = useState(false);
    const [load, setLoad] = useState(true);
    const act = useSelector((state) => state.fetchPostReducer.actualHome)

    useEffect(() => {
        console.log('me ejecuto')
        if(userProfile.name !== undefined) { 
            setRenderi(true)
        } 
        if(id){
            dispatch(profileID(id));  
        }
        
    }, [id,act])


    useEffect(() => {
        if(userProfile.name !== undefined){
            setRenderi(true)
        }
    },[userProfile])

    useEffect(() => {
        setTimeout(() => { setLoad(false) }, 2700);
    }, [])


    console.log(userProfile)

    return (
        
        <ContStudentCo>
        {
            load ? <Loading/> :

            renderi

            ?
            <CompleteProfile>
                <StudentsProfile 
                backFront={userProfile.backFront}
                banner={userProfile.banner.secure_url}
                country={userProfile.country}
                curriculumCounter={userProfile.curriculumCounter}
                email={userProfile.email}
                lastName={userProfile.lastName}
                name={userProfile.name}
                profileImage={userProfile.profileImage.secure_url}
                stars={userProfile.stars}
                userTypes={userProfile.userType}
                id={userProfile._id}
                followers={userProfile.followers}
                following={userProfile.following}
                
                 />
                 {console.log(userProfile)}
                        <StudentCV
                            technologies={userProfile.technologies}
                            otherStudies={userProfile.otherStudies}
                            id={id}
                            acercaDe={userProfile.acercaDe}
                            userTypes={userProfile.userType}
                        />
                        </CompleteProfile>

        : null
            }
        </ContStudentCo>

    )


}