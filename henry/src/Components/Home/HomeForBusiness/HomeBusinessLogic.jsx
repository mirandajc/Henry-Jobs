import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicationStudents, traerFollowing } from "../../../reducer/actions/actionBusiness";
import { CardContainer, CardCont2 } from "../bussinesStyles/bussines";
import CardPublicationWorkTest from "../HomeForStudents/CardPublicationsTest";


export default function HomeBusinessLogic({id}) {

  const dispatch = useDispatch();
  const allPublications = useSelector((state) => state.fetchBusinessReducer.allPublications);
  const foll = useSelector((state) => state.fetchBusinessReducer.userFollows);
    
  useEffect(() => {
    dispatch(traerFollowing(id));
  },[])

  useEffect(() => {
      dispatch(getPublicationStudents(id));
  },[foll])

  useEffect(() => {
      dispatch(getPublicationStudents(id));
  },[allPublications])

  return (
    <CardContainer>
      
      {allPublications.map((e) => {
        return(
        <CardCont2>

          <CardPublicationWorkTest
             image={e.posterUser.profileImage} // imagen de usuario
             name={e.posterUser.name}
             lastname={e.posterUser.lastName}
             date={e.date}
             title={e.proyectTittle}
             video={e.imgVideo}
             likes={e.likes}
             // comments={e.comments}
             technologies={e.technologies}
             backFront={e.backFront}
             ubication={e.country}
             workModality={e.workModality}
             english={e.posterUser.languages}
             text={e.text}
             id={e.posterUser._id}

          
          />
        </CardCont2>
        )})}
    </CardContainer>
  );
}
