import React from "react";
import { PublicationCard, PictureCont, Cavecera, NamePic, InnerPost, FooterPost } from "../HomeStyles/HomePublicationCard";
import {AiOutlineShareAlt} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {FaCommentAlt} from 'react-icons/fa'
import ReactPlayer from "react-player";

export default function CardPublicationsTest(props){


    return(
        <PublicationCard>
           
            <Cavecera>
                <NamePic>
                <PictureCont>
                <img src={props.picture}/>
                </PictureCont>
                <div>
                <h3>{props.name}</h3>
                {/* <p>Full-Stack Developer</p> */}
                </div>
                </NamePic>
                <p>{props.date}</p>
            </Cavecera>
            
            
           
            <InnerPost>
                <p>{props.proyectTittle}</p>
                <p>{props.summary}</p>
            
                <div>
                    <ReactPlayer
                      url={props.imgVideo}
                      className='video'
                      playing={false}
                      width='100%'
                      height='100%'
                      volume={null}
                      />
                </div>
            
                {
                    props.technologies.map(e => <div>{e}</div>)
                }
            </InnerPost>


            <FooterPost>
                <div>
                <AiFillHeart className="heart"/>
                <p>2000</p>
                </div>

                <span>
                <FaCommentAlt className="comenta"/>
                <p className="comentar">Comentar</p>
                </span>

                <AiOutlineShareAlt className="share"/>
            </FooterPost>
        </PublicationCard>
    )
}