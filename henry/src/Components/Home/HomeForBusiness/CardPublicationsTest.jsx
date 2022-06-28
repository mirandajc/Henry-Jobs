import React from "react";
import { PublicationCard, PictureCont, Cavecera, NamePic, InnerPost, FooterPost, Detalle} from "../HomeStyles/HomePublicationCard";
import {AiOutlineShareAlt} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {FaCommentAlt} from 'react-icons/fa'
import ReactPlayer from "react-player";
import { Player } from "../HomeStyles/PublicationSet";


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
                
                </div>
                </NamePic>
                <p>{props.date}</p>
            </Cavecera>
            
            
           
            <InnerPost>
                <p>{props.proyectTittle}</p>
                <p>{props.summary}</p>
            
                <Player>
                    <ReactPlayer
                      url='https://www.youtube.com/watch?v=mCdA4bJAGGk'
                      className='video'
                      playing={false}
                        width='100%'
                        height='100%'
                      volume={null}
                      />
                </Player>
            
              
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
                <div>
                <AiOutlineShareAlt className="share"/>
               
                </div>
            </FooterPost>
        </PublicationCard>
    )
}