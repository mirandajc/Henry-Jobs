import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { getPublicationEnglish, getPublicationsBusiness, getPublicationsDevType, getPublicationsTechnologies, getPublicationUbication, getWorkModality, ShowFilter } from "../../../reducer/actions/actionStudents";
import NavWall from "./navBarWall";
import {idiomas, allCountries, DevType, technologies, workModal} from "../StudentsWall/select"
import CardPublicationWorkTest2 from "./CardPublicationsTest";


//Este componente va a renderizar las publicaciones de empresas y reclutadores


export default function WorkWall(){
    //REDUCER TRAER LAS DE EMPRESA Y RECLUTADOR
    const dispatch = useDispatch();
    const business = useSelector((state) => state.fetchStudentsReducer.publicationsFiltered);

    useEffect(() => {
        dispatch(getPublicationsBusiness())
    }, [])

    const techSelection = (e) => {
        if(e.target.value === "Tecnologías"){
            dispatch(getPublicationsTechnologies(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationsTechnologies(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const englishSelection = (e) => {
        if(e.target.value === "Nivel de Inglés"){
            dispatch(getPublicationEnglish(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationEnglish(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const workModalSelection = (e) => {
        if(e.target.value === "Modalidad"){
            dispatch(getWorkModality(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getWorkModality(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const countrySelection = (e) => {
        if(e.target.value === "País"){
            dispatch(getPublicationUbication(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationUbication(e.target.value))
            dispatch(ShowFilter())
        }
    }

    const devTypeSelection = (e) => {
        if(e.target.value === "Desarrollador"){
            dispatch(getPublicationsDevType(""))
            dispatch(ShowFilter())
        }
        else{
            dispatch(getPublicationsDevType(e.target.value))
            dispatch(ShowFilter())
        }
    }


    return(
        <div>
<<<<<<< HEAD
                <h1>NO CONOCES LA DE CONSEGUIR LABURO?</h1>
            <NavWall/>
            {
                bussinesPub.map((publication)=> (
                    <CardPublicationsTest
                        image={publication.img}
                        name={publication.posterUser}
                        lastname={''}
                        date={''}
                        title={publication.proyectTittle}
                        summary={publication.text}
                        video={publication.imgVideo}
                        technologies={publication.technologies}
                        backFront={publication.backFront}
                        ubication={publication.ubication}
                        workModality={publication.workModality}
                        english={publication.english}
=======
            <select onChange={(e) => techSelection(e)}>
                <option>Tecnologías</option>
            {technologies.map(e => {
                return <option>{e}</option>
            })}
            </select>

            <select onChange={(e) => englishSelection(e)}>
                <option>Nivel de Inglés</option>
            {idiomas.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => workModalSelection(e)}>
                <option>Modalidad</option>
            {workModal.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => countrySelection(e)}>
                <option>País</option>
            {allCountries.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => devTypeSelection(e)}>
                <option>Desarrollador</option>
            {DevType.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            {console.log("COMPONENTE", business)}

            {/* <NavWall/> */} 
            {                  /*  ACTUALIZAR/MODIFICAR LA TARJETA QUE MUESTRA LAS PUBLICACIONES DE EMPRESAS
                                    USAR COMO REFERENCIA MOCKEDFILES => mokedFilesPostBusiness */
                business.map((e)=> (
                    <CardPublicationWorkTest2
                        image={e.posterUser.frofileImage}
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
                        username={e.userName}

>>>>>>> LuchoRene

                    />
                ))
            }

        </div>
    )
}