import React from "react";
import ubicacion from "../../images/ubicacion.png";
import {Video ,ComponentCard , DatosProyect, ButtonTecnologies, ButtonLight, ComponentDatos , Date} from '../../Home/HomeForStudents/HomeStyled'
import ReactPlayer from "react-player";
import { postIdFollow } from "../../../reducer/actions/actionStudents";
import { useDispatch } from "react-redux";
import{AiOutlinePlus} from 'react-icons/ai'


export default function CardPublicationWorkTest2({id, image, name, date, title, summary, video, technologies, backFront, ubication, workModality, english, userName }) {

    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(postIdFollow(id));
    }

    return (
        <ComponentCard>
           <ComponentDatos>
            <div className="Imagen-And-Name">
                <div className="ImgCont">
            <img src={image} alt={`${name} Image`} />
                </div>
                <div className="Contenedor-Name-Ubicacion">
                    <h3>{name}</h3>
                    <span className="ContenedorUbicacion">
                    <img src={ubicacion} alt='icon-ubicacion' className="imagenUbicacion"/>
                    <p>{ubication}</p>
                    </span>
                </div>
            </div>
            <DatosProyect>
                <h4>{title}</h4>
                <p>{summary}</p>
            </DatosProyect>
            <div>
            <div className="TechnologiesAndOthers">
                {
                    technologies.map(e => <ButtonTecnologies>{e}</ButtonTecnologies>)
                }
                <ButtonLight>
                    <p>{backFront}</p>
                </ButtonLight>
                <ButtonLight>
                    <p>{workModality}</p>
                </ButtonLight> 
                <ButtonLight>
                    <p>{english}</p>
                </ButtonLight>
                
                    <button onClick={() => handleFollow()}><AiOutlinePlus className="plus"/></button>
                
                
            </div>           
            </div>
            </ComponentDatos>

            {
                
                video!== null? 
            <Video>
                <ReactPlayer
                        url={video}
                        className='video'
                        playing={false}
                        width='100%'
                        height='100%'
                        volume={null}
                        />
                        <Date>
                        <p>{title}</p>
                        <p>{date}</p>
                        </Date>
            </Video>
            : null
            }
        </ComponentCard>
    )
}