import React, { useState } from "react";
import { mokedFilesPublicaciones } from "../../Home/HomeForBusiness/MokedFilesPublicaciones";
import PublicacionesCards from "./PublicacionesCard";
import Arrow from '../../images/Arrow/atras.png'
import { PublicArrowRight, PublicArrowLeft } from "../profileStyles/studentCV";
import ArrowR from '../../images/adelante.png'
import { SlyderCont } from "./cardStyles/PublicacionCard";


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
        <SlyderCont>

        
        <PublicArrowLeft src={Arrow} alt='back' onClick={prev}/>

        <div className="ContCards">
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

            <PublicArrowRight src={ArrowR} alt='next'onClick={next}/>

        </SlyderCont>
    );                      
};
