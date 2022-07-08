import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMyPublications } from "../../reducer/actions/actionBusiness";
import PublicationCard from "./CardPublicacionDePerfil";
import { Publicaciones } from "./ApplicantMokedFiles";


export default function ContactWall() {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getMyPublications(id));
  }, []);
 

    // => Agregar el botón "POSTULARSE" 
    // en las publicaciones de empresas y recruiter
    // si sos estudiante.
  
  const publicactions = Publicaciones
  // useSelector(state => state.fetchBusinessReducer.myPublications);

  // ESTE COMPONENTE RENDERIZA TODAS LAS PUBLICACIONES PARA VER POSTULANTES

  return (
    <div>
      {
        publicactions && publicactions.map(e => 
          <PublicationCard 
          
          email={e.email}
          text={e.text}
          date={e.date}
          applicants={e.applicants}
          idPublicacion={e._id} 
          />)
        }
    </div>
  );
};
