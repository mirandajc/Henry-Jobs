import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPublicationWorkTest from "./CardPublicationsTest";
import { getPublicationsBusiness, traerFollowingStud } from '../../../reducer/actions/actionStudents'
import { ContenedorStudents } from "./HomeStyled"
import Loading from "../../Loading/Loading";
import NoFollowsHome from "../../Loading/NoFollowsHome";
import PubliSettings from "../PublicationSet/publicationSettings";


//Feed del alumno con pyublicaciones 
export default function HomeStudentsLogic({ id }) {

    const publicaciones = useSelector((state) => state.fetchStudentsReducer.AllPublicationsFollows);
    const foll = useSelector((state) => state.fetchStudentsReducer.userFollows);
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        dispatch(getPublicationsBusiness(id));
    }, [foll]);

    useEffect(() => {
        setTimeout(() => { setLoad(false) }, 2000);
    }, [])

    
    return (
        <ContenedorStudents>
            {

                load ? <Loading /> :

                    publicaciones.length === 0 ? <NoFollowsHome /> :

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