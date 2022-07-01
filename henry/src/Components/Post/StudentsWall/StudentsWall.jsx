import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, setOrderStars, getPublicatWorkModal, getPublicatDevType, getPublicatEnglish, getPublicatTechnologies, getPublicatUbication, showFilter } from "../../../reducer/actions/actionBusiness";
import CardWallStudents from "./CardWallStudents";
import { technologies, idiomas, DevType, workModal, allCountries } from "./select";
import {BodyStudentsWallCard} from "../../Home/HomeStyles/HomePublicationCard.js"
import {DivFiltros } from "../WorkWall/WorkWall.js";

export default function StudentsWall () {
    const estudiantes = useSelector(state => state.fetchBusinessReducer.studentsFiltered);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudents());
    },[]);

    //traer el objeto filtros con use selector y usarlo como dependencia en el effect
    // en cada return enviar "" con el dispatch
    const selectTech = (e) => {
        if(e.target.value === "Tecnologías"){
            dispatch(getPublicatTechnologies(""));
            dispatch(showFilter())
        }
        else{
            dispatch(getPublicatTechnologies(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectDevType = (e) => {
        if(e.target.value === "Desarrollador"){
            dispatch(getPublicatDevType(""));
            dispatch(showFilter())
        }
        else{
            dispatch(getPublicatDevType(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectEnglish = (e) => {
        if(e.target.value === "Nivel de Inglés"){
            dispatch(getPublicatEnglish(""));
            dispatch(showFilter())
        }
        else{
            dispatch(getPublicatEnglish(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectModal = (e) => {
        if(e.target.value === "Modalidad"){
            dispatch(getPublicatWorkModal(""))
            dispatch(showFilter())
        }
        else{
            dispatch(getPublicatWorkModal(e.target.value)) // getPublicatWorkModal
            dispatch(showFilter())
        }
    };

    const selectPais = (e) => {
        if(e.target.value === "País"){
            dispatch(getPublicatUbication(""));
            dispatch(showFilter())
        }
        else{
            dispatch(getPublicatUbication(e.target.value))
            dispatch(showFilter())
        }
    };

    const selectStars = (e) => {
        if(e.target.value === "Stars"){
            dispatch(setOrderStars(""));
            dispatch(showFilter())
        }
        else{
            dispatch(setOrderStars(e.target.value)); // ordenamiento por stars
            dispatch(showFilter())
        }
    };

    return(
        <BodyStudentsWallCard>
            <DivFiltros>

            <select onChange={(e) => selectTech(e)}>
                <option>TECNOLOGIAS</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {technologies.map(e => {
                return <option>{e}</option>
            })}</select>

            <select onChange={(e) => selectDevType(e)}>
                <option>DESARROLLADOR</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {DevType.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => selectEnglish(e)}>
                <option>NIVEL DE INGLES</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {idiomas.map(e => {
                return <option>{e}</option>
            })}
            </select>

            <select onChange={(e) => selectModal(e)}>
                <option>MODALIDAD</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {workModal.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => selectPais(e)}>
                <option>PAIS</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {allCountries.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => selectStars(e)}>
                <option>STARS</option> {/* si cambias lo que hay dentro de options, cambialo en la funcion tambien, dentro del if */}
                <option>ASCENDENTE</option>
                <option>DESCENDENTE</option>
            </select> 
            <button onClick={()=> window.location.reload()}>BORRAR</button> {/* Luciano recomienda un reload, luciano es un gato */}
            </DivFiltros>

            {estudiantes.render.map(e => {
                return(
                    
                        <CardWallStudents  // REEMPLAZAR POR UNA TARJETA DE ALUMNOS
                        name={e.name}
                        lastname={e.lastName}
                        email={e.email}
                        technologies={e.technologies}
                        otherstudies={e.otherStudies}
                        // banner={e.banner.secure_url}
                        english={e.languages}
                        backFront={e.backFront}
                        workModality={e.workModality}
                        ubication={e.country}
                        city={e.city}
                        curriculumCounter= {e.curriculumCounter}
                        userName={e.userName}
                        // profileImage={e.profileImage.secure_url}
                        />
                    
                )
            })}
            
        </BodyStudentsWallCard>
    );
};