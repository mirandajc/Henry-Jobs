import React from "react";
import {ComponentCardProyect, Description, Usuario, Publicacion, Video} from '../Proyects-styles/Proyects'
import ReactPlayer from 'react-player'

export default function ProyectsCard({name, imagen, titulo, resumen, video, link, tecnologias}) {
    
    return(
        <ComponentCardProyect>
            <Description>
            <Usuario>
                <span>
                    <img src={imagen}/>
                    <p>{name}</p>
                </span>
                <div>
                <h3>{titulo}</h3>
                </div>
            </Usuario>
                <Publicacion>
                <div>
                <p>
                {resumen}
                </p>
                </div>
                <span>
                <a href={link}>
                    <p>Ver mas informacion</p>
                </a>
                {tecnologias.map(el => {
                    return <p>{el}</p>
                })}
                </span>
                </Publicacion>
            </Description>
                <Video>
                    <ReactPlayer
                    url={video}
                    className='video'
                    playing
                    width='100%'
                    height='100%'
                    />
            </Video>
            
        </ComponentCardProyect>

    )
};
