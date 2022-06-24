import React from "react";
import {ComponentCardProyect, Description, Usuario, Publicacion, Video} from '../Proyects-styles/Proyects'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

export default function ProyectsCard({name, imagen, titulo, resumen, video, link, tecnologias}) {
    
    return(
        <ComponentCardProyect>
            <Usuario>
                <img src={imagen}/>
                <p>{name}</p>
            </Usuario>
            <Publicacion>
                <h3>{titulo}</h3>
                <textarea>
                {resumen}
                </textarea>
                <a href={link}>
                    <p>Ver mas informacion</p>
                </a>
                {tecnologias.map(el => {
                    return <p>{el}</p>
                })}
            </Publicacion>
            <Video>
                <ReactPlayer
                url={video}
                className='video'
                playing
                width='40%'
                height='90%'
                />
            </Video>
            
        </ComponentCardProyect>

    )
};
