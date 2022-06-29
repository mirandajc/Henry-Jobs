import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, getPublicatDevType, getPublicatEnglish, getPublicatTechnologies, getPublicatUbication } from "../../../reducer/actions/actionBusiness";
import CardWallStudents from "./CardWallStudents";
import { technologies, idiomas, DevType, workModal, allCountries } from "./select";


export default function StudentsWall () {
    const estudiantes = useSelector(state => state.fetchBusinessReducer.studentsFiltered);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudents());
        console.log("Esto es un bucle infinito?")
    },[]);

    //traer el objeto filtros con use selector y usarlo como dependencia en el effect
    // en cada return enviar "" con el dispatch
    const selectTech = (e) => {
        if(e.target.value === "Tecnologías"){
            return;
        }
        else{
            dispatch(getPublicatTechnologies(e.target.value))
        }
    };

    const selectDevType = (e) => {
        if(e.target.value === "Desarrollador"){
            return;
        }
        else{
            dispatch(getPublicatDevType(e.target.value))
        }
    };

    const selectEnglish = (e) => {
        if(e.target.value === "Nivel de Inglés"){
            return;
        }
        else{
            dispatch(getPublicatEnglish(e.target.value))
        }
    };

    // const selectModal = (e) => {
    //     if(e.target.value === "Modalidad"){
    //         return;
    //     }
    //     else{
    //         dispatch() // getPublicatWorkModal
    //     }
    // };

    const selectPais = (e) => {
        if(e.target.value === "País"){
            return;
        }
        else{
            dispatch(getPublicatUbication(e.target.value))
        }
    };

    // const selectStars = (e) => {
    //     if(e.target.value === "Stars"){
    //         return;
    //     }
    //     else{
    //         dispatch() // ordenamiento por stars
    //     }
    // };

    return(
        <div>
            <button onClick={()=> window.location.reload()}>Borrar Filtros</button> {/* Luciano recomienda un reload */}

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

            <select>
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

            <select>
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
                        // profileImage={e.profileImage.secure_url}
                        />
                    </div>
                )
            })}
            
        </div>
    );
};