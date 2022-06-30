import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, setOrderStars, getPublicatWorkModal, getPublicatDevType, getPublicatEnglish, getPublicatTechnologies, getPublicatUbication, showFilter } from "../../../reducer/actions/actionBusiness";
import CardWallStudents from "./CardWallStudents";
import { technologies, idiomas, DevType, workModal, allCountries } from "./select";


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
        <div>
            <button onClick={()=> window.location.reload()}>Borrar Filtros</button> {/* Luciano recomienda un reload, luciano es un gato */}

            <select onChange={(e) => selectTech(e)}>
                <option>Tecnologías</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {technologies.map(e => {
                return <option>{e}</option>
            })}</select>

            <select onChange={(e) => selectDevType(e)}>
                <option>Desarrollador</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {DevType.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => selectEnglish(e)}>
                <option>Nivel de Inglés</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {idiomas.map(e => {
                return <option>{e}</option>
            })}
            </select>

            <select onChange={(e) => selectModal(e)}>
                <option>Modalidad</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {workModal.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => selectPais(e)}>
                <option>País</option> {/* si cambias lo que hay dentro de options,
                                                 cambialo en la funcion tambien, dentro del if */}
            {allCountries.map(e => {
                return <option>{e}</option>
            })}
            </select> 

            <select onChange={(e) => selectStars(e)}>
                <option>Stars</option> {/* si cambias lo que hay dentro de options, cambialo en la funcion tambien, dentro del if */}
                <option>Ascendente</option>
                <option>Descendente</option>
            </select> 



            {estudiantes.map(e => {
                return(
                    <div>
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
                    </div>
                )
            })}
            
        </div>
    );
};