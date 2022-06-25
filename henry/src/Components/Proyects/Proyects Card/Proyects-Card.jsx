import React from "react";
import {ComponentCardProyect, Description, Usuario, Publicacion, Video} from '../Proyects-styles/Proyects'
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

export default function ProyectsCard(props) {

    // name , imagen usuario, titulo del proyecto, breve resumen, img/video, link, tecnologias

    return(
        <ComponentCardProyect>
            <Usuario>
                <img src=""/>
                <p>Nombre</p>
            </Usuario>
            <Publicacion>
                <textarea>
    
                </textarea>
                <a href=''>
                    <p>Ver mas informacion</p>
                </a>
            </Publicacion>
            <Video>
                <ReactPlayer
                url='https://youtu.be/3FAH4ZKn-Kw'
                className='video'
                playing
                width='40%'
                height='90%'
                />
            </Video>
            
        </ComponentCardProyect>

    )
};
