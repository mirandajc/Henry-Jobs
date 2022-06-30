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
} from "../HomeStyles/HomePublicationCard";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Player } from "../HomeStyles/PublicationSet";
import { IoLocationSharp } from "react-icons/all";

export default function CardPublicationsAll({ image, name, lastname, date, title, video, likes, technologies, backFront, ubication, workModality, english, text }) {
  return (
    <div>
        { !lastname ? /////////////////////////////// Publicaciones de empresas  /////////////////////////
              <PublicationCard>
              <Cavecera>
                <NamePic>
                  <PictureCont>
                    <img src={image} alt={`${name} Image`} />
                  </PictureCont>
                  <div>
                    <h3>{ name }</h3>
                  </div>
                </NamePic>
                <p>{date}</p>
              </Cavecera>
      
              <InnerPost>
      
                {technologies && backFront ? (
                  <DetailPost>
                    <div>
                      <p>{technologies.map((el) => el + " ")}</p>
                    </div>
                    <div>
                      <p>{backFront}</p>
                    </div>
                    <div>
                      <p>{ubication}</p>
                      <IoLocationSharp />
                    </div>
                    <div>
                      <p>Modalidad: {workModality}</p>
                      <p>ingles: {english}</p>
                    </div>
                  </DetailPost>
                ) : (
                  " "
                )}
      
                <p>{text}</p>
                <p>{ubication}</p>
              </InnerPost>
      
              <FooterPost>
                <div>
                  <AiFillHeart className="heart" />
                  <p>{likes}</p>
                </div>
      
                <span>
                  <FaCommentAlt className="comenta" />
                  <p className="comentar">Comentar</p>
                </span>

                {/* <div>
                  <AiOutlineShareAlt className="share" />
                </div> */}
              </FooterPost>
            </PublicationCard>



        :    ////////////////////////// Publicaciones de alumnos  ///////////////////////////



      <PublicationCard>
        <Cavecera>
          <NamePic>
            <PictureCont>
              <img src={image} alt={`${name} Image`} />
            </PictureCont>
            <div>
              <h3>{name + " " + lastname}</h3>
            </div>
          </NamePic>
          <p>{date}</p>
        </Cavecera>

        <InnerPost>
          <p>{title}</p>

          {technologies && backFront ? (
            <DetailPost>
              <div>
                <p>{technologies.map((el) => el + " ")}</p>
              </div>
              <div>
                <p>{backFront}</p>
              </div>
              <div>
                <p>{ubication}</p>
                <IoLocationSharp />
              </div>
              <div>
                <p>Modalidad: {workModality}</p>
                <p>ingles: {english}</p>
              </div>
            </DetailPost>
          ) : (
            " "
          )}

          <p>{text}</p>
          {video ? (
            <Player>
              <ReactPlayer
                url={video}
                className="video"
                playing={false}
                width="100%"
                height="100%"
                volume={null}
                />
            </Player>
          ) : (
            ""
            )}
        </InnerPost>

        <FooterPost>
          <div>
            <AiFillHeart className="heart" />
            <p>{likes}</p>
          </div>

          <span>
            <FaCommentAlt className="comenta" />
            <p className="comentar">Comentar</p>
          </span>
          {/* <div>
            <AiOutlineShareAlt className="share" />
          </div> */}
        </FooterPost>
      </PublicationCard>
}
    </div>
  );
}
