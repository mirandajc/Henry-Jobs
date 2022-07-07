import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllStudents, setApplicant } from "../../reducer/actions/actionBusiness";
import { sendNudes } from "../../reducer/actions/actionBusiness";

export default function PublicationCard ({idEmpresa, email, text, date, applicants}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudents());
    },[]);
    
    // => Agregar el botón "POSTULARSE" 
    // en las publicaciones de empresas y recruiter
    // si sos estudiante.
    
    const handlePost = (value, id, name) => {
        // dispatch(setApplicant(value));
        // Esta funcion Acepta o rechaza a los postulantes
        // envia un objeto con el id y el step
        let valor = "";

        if(value === "Aceptar postulante") {
            valor = "aceptado";

        }
        else{
            valor = "rechazado";

        }

        let obj = {
            step: valor,
            showBusiness: true,
            showStudent: true,
            userId: id,
            name: name
        };

        dispatch(sendNudes(obj));
    };

    const handleX = (id, name, step) => {
        let obj = {
            step: step,
            showBusiness: false,
            showStudent: true,
            userId: id,
            name: name
        };
    };

    return(
        <div>
            <div>{email}</div>
            <div>{date}</div>
            <div>{text}</div>

            <div>
                <h1>POSTULANTES:</h1>

            {  applicants.map(e => e.showBusiness === true ?

            <div>
                {e.name}
                <Link to={`/profile/${e.id}`}><button>Ver Perfil</button></Link>
                { e.step === "pending" ? 
                <div>
                    <button onClick={(e) => handlePost(e.target.value, e.id, e.name)}>Aceptar postulante</button>
                    <button onClick={(e) => handlePost(e.target.value, e.id, e.name)}>Rechazar postulante</button>
                </div>
                : 
                <div>
                <button onClick={() => handleX(e.id, e.name, e.step)}>X</button>
                </div>
                }
            </div>
            
             : null 
            )}
            </div>
        </div>
    );
};