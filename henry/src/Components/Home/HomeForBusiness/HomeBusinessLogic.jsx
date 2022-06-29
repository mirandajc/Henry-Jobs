import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBusinessCard from "./HomeBusinessCard";
import { getStudents, getPublicFollows } from "../../../reducer/actions/action";
import { usePagination } from 'use-pagination-hook';
import { Link } from "react-router-dom";
import { mokedFilesPublicaciones } from './MokedFilesPublicaciones'
import CardPublicationsTest from "./CardPublicationsTest";
import { PublicacionesCont } from "../HomeStyles/HomePublicationCard";
import PubliSettings from "../PublicationSet/publicationSettings";

export default function HomeBusinessLogic() {

    const dispatch = useDispatch();
    // const allPublicationsStud = useSelector((state) => state.fetchDataReducer.allPublicationsStudents)
    // const { current, pages, display, next, previous, row } = usePagination({ items: allPublicationsStud, size: 2 });

    // useEffect(() => {
    //     dispatch(getPublicFollows());
    // }, [])
    
    return (
        <div>
            
            {/* <PubliSettings/>
            
            <button disabled={current === 1} onClick={previous}>Previous Page</button>
            <button disabled={current === pages} onClick={next}>Next Page</button>
            {/* <p>{current}</p> */}
            {/* <p>Pag {current} de {pages}</p>
            <Link to='/students'>Ver Alumnos</Link>
            

            <PublicacionesCont>
            {
                display.map(e => <CardPublicationsTest
                    name={e.name}
                    date={e.date}
                    picture={e.picture}
                    proyectTittle={e.proyectTittle}
                    summary={e.summary}
                    linkedin={e.linkedin}
                    technologies={e.technologies}
                />)
            }
            </PublicacionesCont> */}
        </div>
    )
}