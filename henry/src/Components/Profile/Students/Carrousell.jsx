import React, { useState } from "react";
import { mokedFilesPublicaciones } from "../../Home/HomeForBusiness/MokedFilesPublicaciones";
import PublicacionesCards from "./PublicacionesCard";

export default function Carrousell () {

    const [ current, setCurrent ] = useState(0);
    const publicaciones = mokedFilesPublicaciones; // publicaciones es un arreglo que se obtiene de la db ?
    const length = publicaciones.length; // 7

    const next = () => {
        setCurrent(current===length -1 ? 0: current+1);
    };

    const prev = () => {
        setCurrent(current === 0 ? length -1 : current -1);
    };

    if(!Array.isArray(publicaciones) || publicaciones.length <=0){
		return null
	}

    return(
        <div>

        <button onClick={prev}> prev </button>

        <div>
            { publicaciones && publicaciones.map( (e, index) => {
                if(current === index ){
                    return(
                        <div key={e.id}>
                        <PublicacionesCards
                        id={e.id} 
                        picture={e.picture} 
                        name={e.name} 
                        date={e.date} 
                        proyectTittle={e.proyectTittle} 
                        summary={e.summary} 
                        technologies={e.technologies}
                        />
                        </div>
                    );
                }   
            })}
        </div>

        <button onClick={next}> next </button>

        </div>
    );                            
};
