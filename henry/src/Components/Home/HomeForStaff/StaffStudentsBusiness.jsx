import React, { useEffect, useState} from "react";

export default function StaffStudentsBusiness ({name, profileImage, lastname, userName, email, country, city, stars, curriculumCounter}){

    //////////////////////////////////// AGREGAR ESTILOS ////////////////////////////////////////
    // Estas son tarjetas que se van a renderizar juntas en la pantalla principal del staff
    // a primera vista contienen la info necesaria para el Staff
    // idea de Luciano: tarjeta vertical tipo app del clima con un grid
    
    // ¿ el staff a necesitar entrar al perfil del user para ver las publicaciones de solo ese user ?

    return(
        <div>
            {
                lastname ?
                // Link al perfil con userName?
                <div>
                    <img src={profileImage} width={"25px"} height={"25px"} />
                    <h2>{name} {lastname}</h2>
                    <h3>{city} {country}</h3>
                    <h4>{email}</h4>
                    <h4>Curriculums enviados este mes: {curriculumCounter}</h4>
                    <h4>HenryStars: {stars}</h4>
                </div>
                
                :

                // Link al perfil con userName?
                <div>
                    <img src={profileImage} width={"25px"} height={"25px"}/>
                    <h2>{name}</h2>
                    <h3>{city} {country}</h3>
                    <h4>{email}</h4>
                </div>
            }
        </div>
    );
};