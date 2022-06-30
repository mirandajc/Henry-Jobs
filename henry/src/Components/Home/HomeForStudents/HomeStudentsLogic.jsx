import React, { useEffect } from "react";
import { SiAlgolia } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardPublicationWorkTest from "./CardPublicationsTest";
import {  getPublicationsBusiness } from '../../../reducer/actions/actionStudents'

//Feed del alumno con pyublicaciones 
export default function HomeStudentsLogic() {

    const publicaciones = useSelector((state) => state.fetchStudentsReducer.AllPublications);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPublicationsBusiness());
    }, []);


    return (
        <div>

            {
                publicaciones.map(e => <CardPublicationWorkTest
                    image={e.posterUser.profileImage} 
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
                    
                />)
            }

        </div>
    );
};