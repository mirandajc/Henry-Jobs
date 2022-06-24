import React from "react";
import ProyectsCard from "./Proyects Card/Proyects-Card";
import { ComponentCardProyect } from "./Proyects-styles/Proyects";
import {mokedFilesPublicaciones } from "../Home/HomeForBusiness/MokedFilesPublicaciones"
export default function Proyects() {

// traer los datos

const datos = mokedFilesPublicaciones; 

    return(
        <>
        {datos.map(el => {
            return <ComponentCardProyect>
                <ProyectsCard 
                key={el.id}
                name={el.name} 
                imagen={el.picture} 
                titulo={el.proyectTittle}
                resumen={el.summary} 
                video={el.imgVideo} 
                link={el.linkedin} 
                tecnologias={el.technologies}
                />
                </ComponentCardProyect>
            })
        }
        </>
        
    )
}