import React from "react";
import {ComponentCardProyect, Description, Usuario, Publicacion, Video} from '../Proyects-styles/Proyects'
import ReactPlayer from 'react-player'

export default function ProyectsCard(props) {

    // name , imagen usuario, titulo del proyecto, breve resumen, img/video, link, tecnologias

    return(
        <ComponentCardProyect>
            <Usuario>
            </Usuario>
            <Publicacion>
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
