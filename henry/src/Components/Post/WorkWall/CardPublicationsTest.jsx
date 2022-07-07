import React, { useEffect } from "react";
import ubicacion from "../../images/ubicacion.png";
import { Video, ComponentCard, DatosProyect, ButtonTecnologies, ButtonLight, ComponentDatos, Date } from '../../Home/HomeForStudents/HomeStyled'
import ReactPlayer from "react-player";
import { getPublicationsBusiness, postIdFollow, postularse } from "../../../reducer/actions/actionStudents";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai'


export default function CardPublicationWorkTest2({ id, publicacionID, image, name, date, title, summary, video, technologies, backFront, ubication, workModality, english, userName }) {

    const dispatch = useDispatch();
    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);
    const foll = useSelector((state) => state.fetchStudentsReducer.userFollows);

    useEffect(() => {
        dispatch(getPublicationsBusiness());
    }, [foll]);

    const handleFollow = () => {
        dispatch(postIdFollow(id, { id: userType.id }));
    }

    const handlePostulation = () => {
        let pubId = publicacionID;
        let obj = {
            userId: userType.id,
            name: userType.name + " " + userType.lastname,
            step: "pendiente",
            showBusiness: true,
            showStudent: true
        };

        dispatch(postularse(obj, pubId))
    };

    return (
        <ComponentCard>
            <ComponentDatos>
                <div className="Imagen-And-Name">
                    <div className="ImgCont">
                        <img src={image} alt={`${name} Image`} />
                    </div>
                    <div className="Contenedor-Name-Ubicacion">
                        <Link to={`/profile/${id}`}><h3>{name}</h3></Link>
                        <span className="ContenedorUbicacion">
                            <img src={ubicacion} alt='icon-ubicacion' className="imagenUbicacion" />
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
                        {
                            userType.id === id ? null :
                                <button onClick={() => handleFollow()}>{/* <AiOutlinePlus className="plus" /> */}{foll.includes(id) ? <p>-</p> : <p>+</p>}</button>
                        }


                    </div>
                </div>
            </ComponentDatos>

            {

                video !== null ?
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
            <button onClick={handlePostulation}>Postularse</button>
        </ComponentCard>
    )
}