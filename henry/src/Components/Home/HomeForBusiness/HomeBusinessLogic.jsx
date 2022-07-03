import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPublicationsAll from "./CardPublicationsTest";
import { getPublicationStudents } from "../../../reducer/actions/actionBusiness";


export default function HomeBusinessLogic() {

  const dispatch = useDispatch();
  const allPublications = useSelector((state) => state.fetchBusinessReducer.allPublications);
    
  useEffect(() => {
    dispatch(getPublicationStudents());
  },[])


  

  return (
    <div>
      
      {allPublications.map((e) => {
        return(
        <div>
            
          <CardPublicationsAll
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
            ubication={e.ubication}
            workModality={e.workModality}
            english={e.languages}
            text={e.text}
          />
        </div>
        )})}
    </div>
  );
}
