import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicationStudents } from "../../../reducer/actions/actionBusiness";
import { CardContainer, CardCont2 } from "../bussinesStyles/bussines";
import CardPublicationWorkTest from "../HomeForStudents/CardPublicationsTest";


export default function HomeBusinessLogic() {

  const dispatch = useDispatch();
  const allPublications = useSelector((state) => state.fetchBusinessReducer.allPublications);
  const foll = useSelector((state) => state.fetchBusinessReducer.userFollows);

  const tal = localStorage.getItem('TK')
  const userType = JSON.parse(tal);
  const [userId, setUserT] = useState('');

  useEffect(()=> {
      if(userType !== null){
          setUserT(userType.id)
      }
  },[userType])
    
  useEffect(() => {
    if(userId !== '') {
      dispatch(getPublicationStudents(userId));
    }
  },[foll])

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
