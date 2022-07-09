import React from "react";
import { Video, ComponentCard, DatosProyect, ButtonTecnologies, ButtonLight, ComponentDatos, Date, MuchoTexto } from './HomeStyled';
import ReactPlayer from "react-player";
import ubicacion from "../../images/ubicacion.png"
import { postIdFollow } from "../../../reducer/actions/actionStudents";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from 'react-icons/ai'
import { postIdFollowBuss } from "../../../reducer/actions/actionBusiness";

export default function CardPublicationWorkTest({ id, image, name, date, title, summary, video, technologies, backFront, ubication, workModality, english, userName, lastname, text }) {
    // viene publicacion de empresas y alumnos mix



    console.log(summary)
    const dispatch = useDispatch();

    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);

    const handleFollow = () => {
        if (userType.type === 1 || userType.type === 2) {
            dispatch(postIdFollow(id, { id: userType.id }));
        }
        if (userType.type === 4 || userType.type === 5) {
            dispatch(postIdFollowBuss(id, { id: userType.id }));
        }
    }


    return (
        <ComponentCard>
            <ComponentDatos>
                <div className="Imagen-And-Name">

                    <div className="ImgCont">
                        <img src={`${image.secure_url}`} alt={`${name} Image`} />
                    </div>
                    <div className="Contenedor-Name-Ubicacion">
                        <h3>{name} {lastname}</h3>
                        <span className="ContenedorUbicacion">
                            <img src={ubicacion} alt='icon-ubicacion' className="imagenUbicacion" />
                            <p>{ubication}</p>
                        </span>
                    </div>
                </div>
                <MuchoTexto>
                    <p>{text}</p>
                </MuchoTexto>
                <DatosProyect>
                    <h4>{title}</h4>
                    <p>{summary}</p>
                </DatosProyect>
                <div>

                    
                    <div className="TechnologiesAndOthers">
                        { technologies.length > 1?
                            technologies.map(e => <ButtonTecnologies>{e}</ButtonTecnologies>)
                            :
                            null
                        }

                        {
                            backFront !== undefined?

                        <div className="bitt">    
                        <ButtonLight>
                            <p>{backFront}</p>
                        </ButtonLight>

                        {
                            workModality !== undefined?
                        <ButtonLight>
                            <p>{workModality}</p>
                        </ButtonLight>
                        : null
                        }
                        {
                            english !== undefined?
                        <ButtonLight>
                            <p>{english}</p>
                        </ButtonLight>
                        :null
                        }
                        </div>
                            :
                            null
                        }
                        {
                            id === userType.id ? null :
                                <div >
                                    <button onClick={() => handleFollow()}>
                                        <AiOutlinePlus className="plus" />
                                    </button>
                                </div>
                        }

                    </div>
                </div>
            </ComponentDatos>
          {
            video.length > 1?    
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
            :
            null
            }
        </ComponentCard>
    )
}