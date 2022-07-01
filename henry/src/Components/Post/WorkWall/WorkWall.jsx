import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { getPublicationEnglish, getPublicationsBusiness, getPublicationsDevType, getPublicationsTechnologies, getPublicationUbication, getWorkModality, ShowFilter } from "../../../reducer/actions/actionStudents";
import NavWall from "./navBarWall";
import {idiomas, allCountries, DevType, technologies, workModal} from "../StudentsWall/select"
import CardPublicationWorkTest2 from "./CardPublicationsTest";
import {Componente, DivFiltros} from "./WorkWallStyles.js"

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
        <Componente>
            <DivFiltros>
            <select onChange={(e) => techSelection(e)}>
                <option>TECNOLOGIAS</option>
            {technologies.map(e => {
                return <option>{e}</option>
            })}
            </select>

            <select onChange={(e) => englishSelection(e)}>
                <option>NIVEL DE INGLES</option>
            {idiomas.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => workModalSelection(e)}>
                <option>MODALIDAD</option>
            {workModal.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => countrySelection(e)}>
                <option>PAIS</option>
            {allCountries.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => devTypeSelection(e)}>
                <option>DESARROLLO</option>
            {DevType.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            {console.log("COMPONENTE", business)}
            </DivFiltros>

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


                    />
                ))
            }
        </Componente>
    )
}