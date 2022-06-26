import React from "react";
import ProyectsCard from "./Proyects Card/Proyects-Card";
import { SearchProyects } from "./Proyects-styles/Proyects";
import {mokedFilesPublicaciones } from "../Home/HomeForBusiness/MokedFilesPublicaciones"
import { useState } from "react";
import './Proyects-styles/Proyects.css'
import imagenSeach from "../images/search.png"

export default function Proyects() {
    const [name, setName] = useState(''); 

// traer los datos

const datos = mokedFilesPublicaciones; 
function handleChange(e) {

}

function handleSumit(e){

}
    return(
        <>
        <div className="nav">
            <SearchProyects>
                 <input type='search' name='search' value={name}  onChange={e=> handleChange(e)} placeholder="Buscar por nombre o autor"/>
                
                <button onClick={e=> handleSumit(e)}>
 <img src={imagenSeach} />
                </button>
            </SearchProyects>
       
            <button className="button">PUBLICAR</button>

        </div>
        <div className="caja">
        {datos.map(el => {
            return <ProyectsCard 
                key={el.id}
                name={el.name} 
                imagen={el.picture} 
                titulo={el.proyectTittle}
                resumen={el.summary} 
                video={el.imgVideo} 
                link={el.linkedin} 
                tecnologias={el.technologies}
                />
            })
        }
        </div>
       
        </>
        
    )
}