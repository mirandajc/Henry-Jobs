import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { borrarBusinessPub, getAllStudents, setApplicant } from "../../reducer/actions/actionBusiness";
import { sendNudes } from "../../reducer/actions/actionBusiness";
import { CartaBusiness } from "./Applications/applicantsStyles/empresastyles";

export default function PublicationCard(props) {

    const dispatch = useDispatch();
    const [shown, setShown] = useState(true);
    const [showStep, setShownStep] = useState(true);
    const [stepActualizado, setStepActualizado] = useState(false);

    useEffect(() => {
        dispatch(getAllStudents());
    }, []);

    // => Agregar el botón "POSTULARSE" 
    // en las publicaciones de empresas y recruiter
    // si sos estudiante.

    const handlePost = (value) => {
        // dispatch(setApplicant(value));
        // Esta funcion Acepta o rechaza a los postulantes
        // envia un objeto con el id y el step
        let idp = value.target.value.split(' ')[3]
        let name = value.target.value.split(' ')[1] + ' ' + value.target.value.split(' ')[2]
        let id = value.target.value.split(' ')[0]
        let valor = "";

        if (value.target.textContent === "Aceptar postulante") {
            valor = "aceptado";

        }
        if (value.target.textContent === "Rechazar postulante") {
            valor = "rechazado";

        }
        let obj = {
            step: valor,
            showBusiness: true,
            userId: id,
            name: name
        };
        setStepActualizado(valor);
        setShownStep(false);
        dispatch(sendNudes(obj, idp));
    };

    const handleX = (value) => {
        console.log(props.idPublicacion)
        let idp = value.target.value.split(' ')[4]
        let step = value.target.value.split(' ')[3]
        let name = value.target.value.split(' ')[1] + ' ' + value.target.value.split(' ')[2]
        let id = value.target.value.split(' ')[0]
        let obj = {
            step: step,
            showBusiness: false,
            userId: id,
            name: name
        };
        setShown(false);
        dispatch(sendNudes(obj, idp));
    };

    const borrarPublicacion = () => {
        dispatch(borrarBusinessPub(props.idPublicacion));
    };

    let fecha = props.date.slice(0, 10);
    return (
        <CartaBusiness >
            {
            props.botonDelete ?
            <button className="borrar" onClick={borrarPublicacion}>BORRAR PUBLICACIÓN</button>
            : 
            null
            }
            <div>{props.email}</div>
            <div>{fecha}</div>
            <div>{props.text}</div>

            <div>
                <h1>POSTULANTES:</h1>
            </div>

            <div className="contenedorAlumnos">

                {props.applicants.map(e => e.showBusiness === true ?
                    shown ?
                        <div className="Alumno">
                           <p className="nombre">{e.name}</p>
                            <br></br>
                            {stepActualizado ? stepActualizado : <span className={e.step === "pendiente" ? "pend" : e.step === "rechazado" ?
                                "rech" : e.step === "aceptado" ? "acep" : null    
                            }>{e.step}</span>}
                            <Link to={`/profile/${e.userId}`}><button className="botoncito">Ver Perfil</button></Link>
                            {e.step === "pendiente" ?
                                showStep ?
                                    <div>
                                        <button value={e.userId + ' ' + e.name + ' ' + props.idPublicacion} onClick={(event) => handlePost(event)}>Aceptar postulante</button>
                                        <button value={e.userId + ' ' + e.name + ' ' + props.idPublicacion} onClick={(event) => handlePost(event)}>Rechazar postulante</button>
                                    </div>

                                    : <div>
                                        <button value={e.userId + ' ' + e.name + ' ' + e.step + ' ' + props.idPublicacion} onClick={(event) => handleX(event)}>X</button>
                                    </div>
                                :
                                <div>
                                    <button value={e.userId + ' ' + e.name + ' ' + e.step + ' ' + props.idPublicacion} onClick={(event) => handleX(event)}>X</button>
                                </div>
                            }

                        </div>
                        : null
                    : null
                )}
            </div>
        </CartaBusiness>
    );
};