import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyPublications } from "../../reducer/actions/actionBusiness";
import PublicationCard from "./CardPublicacionDePerfil";


export default function ContactWall() {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getMyPublications(id));
  }, []);
  
  const publicactions = useSelector(state => state.fetchBusinessReducer.myPublications);
  // ESTE COMPONENTE RENDERIZA TODAS LAS PUBLICACIONES DE LA EMPRESA CON LA OPCION DE VER POSTULANTES

  return (
    <div>
      {
        publicactions && publicactions.map(e => 
        <PublicationCard 
          idEmpresa={e.posterUser._id} 
          email={e.email}
          text={e.text}
          date={e.date}
          applicants={e.applicants}
          />)
      }
    </div>
  );
};
