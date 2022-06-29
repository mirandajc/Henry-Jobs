import React from "react";
import {
  PublicationCard,
  PictureCont,
  Cavecera,
  NamePic,
  InnerPost,
  FooterPost,
  Detalle,
  DetailPost,
} from "../../Home/HomeStyles/HomePublicationCard";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/all";

export default function CardWallStudents({name,lastname,email,technologies,otherstudies,banner,english,
    backFront,
    workModality,ubication,
    city,
    curriculumCounter,
    profileImage}) {
        const isPremium = false; //CAMBIAR
        const userTypes = 3;
        // REEMPLAZAR POR UNA TARJETA DE ALUMNOS
  return (
      <PublicationCard> 
      <Cavecera>
        <NamePic>
          <PictureCont>
            <img src={profileImage} alt={`${name} Image`} />
          </PictureCont>
          <div>
            <h3>{name + " " + lastname}</h3>
            <h5>{email}</h5>
          </div>
        </NamePic>
      </Cavecera>

      <InnerPost>

        {technologies && backFront ? (
          <DetailPost>
            <div>
              <p>{technologies.map((el) => el + " ")}</p>
            </div>
            <div>
              <p>{otherstudies.map((el) => el + " ")}</p>
            </div>
            <div>
              <p>{backFront}</p>
            </div>
            <div>
              <p>{ubication}</p>
              <IoLocationSharp />
            </div>
            { isPremium ? <div>
              <p>{city}</p>
              <IoLocationSharp />
            </div> : null }
            { userTypes === 3 ? <div>
              <p>{curriculumCounter}</p>
              <IoLocationSharp />
            </div> : null }
            <div>
              <p>Modalidad: {workModality}</p>
              <p>ingles: {english}</p>
            </div>
          </DetailPost>
        ) : (
          " "
        )}
      </InnerPost>

      <FooterPost>
        {/* <div>
          <AiFillHeart className="heart" />
          <p>{likes}</p>
        </div>

        <span>
          <FaCommentAlt className="comenta" />
          <p className="comentar">Comentar</p>
        </span>
        <div>
          <AiOutlineShareAlt className="share" />
        </div> */}
      </FooterPost>
    </PublicationCard>
  );
};
