import React, { useEffect, useState } from "react";
import {
  PublicationCard,
  PictureCont,
  Cavecera,
  NamePic,
  InnerPost,
  DetailPost,
  ContenedorCard,
  ButonGrey
} from "../../Home/HomeStyles/HomePublicationCard";
import { Link } from "react-router-dom";
import Star from '../../images/Star.png';
import Ubicacion from "../../images/ubicacion.png";
import { useDispatch, useSelector } from "react-redux";
import { postIdFollow } from "../../../reducer/actions/actionStudents";
import { postIdFollowBuss } from "../../../reducer/actions/actionBusiness";
import { profileID } from "../../../reducer/actions/actionPost";




export default function CardWallStudents({name,lastname,email,technologies,otherstudies,banner,english,
    backFront,
    workModality,ubication,
    city,
    curriculumCounter,
    profileImage,userName, stars, id}) {

      const dispatch = useDispatch();

      const tal = localStorage.getItem('TK')
      const userType = JSON.parse(tal);


      
      const handleFollow = () => {
        if(userType.type === 1 || userType.type === 2){
          dispatch(postIdFollow(id));   
        }
        if(userType.type === 4 || userType.type === 5){
          dispatch(postIdFollowBuss(id)); 
        }
      }
    

  return (
      <PublicationCard> 
        <Cavecera>
          <NamePic>
            <div className="imageName">
              <PictureCont>
              <img src={profileImage} alt={`${name} Image`} />
              </PictureCont>
            <div className="datos">
              <div className="nombre">
                <Link to={`/profile/${id}`}>
                    <h3>{name + " " + lastname}</h3>
                </Link>
              </div>
              <div className="ubicacion">
                  <img src={Ubicacion} alt='icon-ubicacion' className="imagenUbicacion"/>
                  <p>{ubication}, {city}</p>
              </div>
            </div>
            </div>
            <div>
               <h5>{email}</h5>
            </div>
          </NamePic>
        </Cavecera>
        <p>
            lectrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
      <InnerPost>
        {technologies && backFront ? (
          <DetailPost>
            <div className="contenedorPost">
              {technologies.map( tec =>
                { return (
                      <span>
                        <p>{tec}</p>
                      </span>
                )}
            )} 
            {otherstudies.map(studie => 
                    { return (
                      <span>
                        <p>{studie}</p>
                      </span>
                )}
              )}
           
            </div> 
            
            <div>  
            <ButonGrey>
              <p>{backFront}</p>
            </ButonGrey>
            <ButonGrey>
              <p>{stars}</p>
              <img src={Star} alt='start'/>
            </ButonGrey> 
            <ButonGrey>
              <p> {workModality}</p>
            </ButonGrey>
            <ButonGrey>
              <p>INGLES {english}</p>
             
            </ButonGrey>
            {
              userType.type !== 3 ?
            <ButonGrey>
             
              <button onClick={() => handleFollow()}>Follow</button>
            </ButonGrey> : null
            }
            </div> 
            
          </DetailPost>
        ) : (
          " "
        )}
        </InnerPost>
    </PublicationCard>
  );
};
