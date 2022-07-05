import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPublicationsAll from "./CardPublicationsTest";
import { getPublicationStudents } from "../../../reducer/actions/actionBusiness";
import { CardContainer, CardCont2 } from "../bussinesStyles/bussines";
import CardPublicationWorkTest from "../HomeForStudents/CardPublicationsTest";


export default function HomeBusinessLogic() {

  const dispatch = useDispatch();
  const allPublications = useSelector((state) => state.fetchBusinessReducer.allPublications);
    
  useEffect(() => {
    dispatch(getPublicationStudents());
  },[])
  

  return (
    <CardContainer>
      
      {allPublications.map((e) => {
        return(
        <CardCont2>
            
          {console.log(e)}

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

          
          />
        </CardCont2>
        )})}
    </CardContainer>
  );
}
