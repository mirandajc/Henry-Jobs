import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPublicationWorkTest from "./CardPublicationsTest";
import { getPublicationsBusiness } from '../../../reducer/actions/actionStudents'
import { ContenedorStudents } from "./HomeStyled"


//Feed del alumno con pyublicaciones 
export default function HomeStudentsLogic() {

    const publicaciones = useSelector((state) => state.fetchStudentsReducer.AllPublicationsFollows);
    const foll = useSelector((state) => state.fetchStudentsReducer.userFollows);
    const dispatch = useDispatch();


    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);
    const [userId, setUserT] = useState('');

    useEffect(() => {
        if (userType !== null) {
            setUserT(userType.id)
        }
    }, [userType])

    
    useEffect(() => {
        if(userId !== '') {
            dispatch(getPublicationsBusiness(userId));
          }
    }, [foll]);


    return (
        <ContenedorStudents>
            {
                publicaciones.map(e => <CardPublicationWorkTest
                    image={e.posterUser.profileImage}
                    lastName={e.posterUser.lastName}
                    name={e.posterUser.name}
                    date={e.date}
                    title={e.proyectTittle}
                    summary={e.text}
                    video={e.imgVideo}
                    technologies={e.technologies}
                    backFront={e.backFront}
                    ubication={e.country}
                    workModality={e.workModality}
                    english={e.languages}
                    lastname={e.posterUser.lastName}
                    id={e.posterUser._id}
                />)
            }

        </ContenedorStudents>
    );
};