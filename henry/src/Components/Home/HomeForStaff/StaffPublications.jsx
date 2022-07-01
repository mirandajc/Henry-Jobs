import React from "react";

export default function StaffPublications ({lastname}){
    const alumnos = ""
    const empresa = ""
    
    ////////////////// REUTILIZAR LAS CARDS Y ESTILOS DEL WORKWALL Y STUDENTSWALL ///////////////////

    return(
        <div>
            {
                lastname ?  alumnos : empresa
            }
        </div>
    );
};