import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPublicationWorkTest from "./CardPublicationsTest";
import { getPublicationsBusiness, traerFollowingStud } from '../../../reducer/actions/actionStudents'
import { ContenedorStudents } from "./HomeStyled"


//Feed del alumno con pyublicaciones 
export default function HomeStudentsLogic({ id }) {

    const publicaciones = useSelector((state) => state.fetchStudentsReducer.AllPublicationsFollows);
    const foll = useSelector((state) => state.fetchStudentsReducer.userFollows);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPublicationsBusiness(id));
    }, [foll]);


console.log('PUBLIC',publicaciones)

    return (
        <ContenedorStudents>
            {
                publicaciones.map(e => <CardPublicationWorkTest
                    image={e.posterUser.profileImage.secure_url}
                    lastName={e.posterUser.lastName}
                    name={e.posterUser.name}
                    date={e.date}
                    title={e.proyectTittle}
                    summary={e.text}
                    video={e.imgVideo}
                    technologies={e.technologies}
                    backFront={e.backFront}
                    country={e.posterUser.country}
                    workModality={e.workModality}
                    english={e.languages}
                    lastname={e.posterUser.lastName}
                    id={e.posterUser._id}
                    text={e.text}
                    
                />)
            }

        </ContenedorStudents>
    );
};