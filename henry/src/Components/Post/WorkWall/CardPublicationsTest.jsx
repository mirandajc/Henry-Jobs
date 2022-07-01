import React from "react";
import { PublicationCard, PictureCont, Cavecera, NamePic, InnerPost, FooterPost, Detalle, DetailPost} from "../../Home/HomeStyles/HomePublicationCard";
import {AiOutlineShareAlt} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {FaCommentAlt} from 'react-icons/fa'
import ReactPlayer from "react-player";
import { Player } from "../../Home/HomeStyles/PublicationSet";
import {GrTechnology} from 'react-icons/gr';
import {FaLaptopCode} from 'react-icons/fa';
import {IoLocationSharp} from 'react-icons/all';


export default function CardPublicationWorkTest2({image, name, date,title,summary, video, technologies,backFront,ubication,workModality, english,userName}){


    return(
        <PublicationCard>
           
            <Cavecera>
                <NamePic>
                <PictureCont>
                <img src={image} alt={`${name} Image`}/>
                </PictureCont>
                <div>
                    <h3>{name}</h3>
                </div>
                </NamePic>
                <p>{date}</p>
            </Cavecera>
            
            
           
            <InnerPost>
                <p>{title}</p>


              { 
              technologies && backFront?  <DetailPost>
                    <div>
                <p>{technologies.map(el=>el + ' ')}</p>
               
                    </div>
                    <div>
                <p>{backFront}</p>
                </div>
                <div>
                <p>{ubication}</p>
                <IoLocationSharp/>

                </div>
                <div>
                <p>Modalidad: {workModality}</p>
                <p>ingles: {english}</p>
                </div>
                </DetailPost>
                : ' '
}

                <p>{summary}</p>
               {
                video? (  <Player>
                    <ReactPlayer
                      url={video}
                      className='video'
                      playing={false}
                        width='100%'
                        height='100%'
                      volume={null}
                      />
                </Player>)
                : ''
                    }
              
            </InnerPost>


            <FooterPost>
              {/*   <div>
                <AiFillHeart className="heart"/>
                <p>{likes}</p>
                </div> */}

                <span>
                <FaCommentAlt className="comenta"/>
                <p className="comentar">Comentar</p>
                </span>
                {/* <div>
                <AiOutlineShareAlt className="share"/>
               
                </div> */}
            </FooterPost>
        </PublicationCard>
    )
}