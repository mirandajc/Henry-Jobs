import React from "react";
import {  ComponentCard, Profile, InnerText, Tags, Video, Footer } from './HomeStyled';
import ReactPlayer from "react-player";
import { postIdFollow } from "../../../reducer/actions/actionStudents";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from 'react-icons/ai';
import { postIdFollowBuss } from "../../../reducer/actions/actionBusiness";
import {IoLocationSharp} from 'react-icons/all';

export default function CardPublicationWorkTest({ id, image, name, date, title, summary, video, technologies, backFront, country, workModality, english, userName, lastname, text }) {
    // viene publicacion de empresas y alumnos mix



    // console.log(summary)
    const dispatch = useDispatch();

    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);

    const handleFollow = () => {
        if (userType.type === 1 || userType.type === 2) {
            dispatch(postIdFollow(id, { id: userType.id }));
        }
        if (userType.type === 4 || userType.type === 5) {
            dispatch(postIdFollowBuss(id, { id: userType.id }));
        }
    }



//id, image, name, date, title, summary, video, technologies, backgront, ubicacion, workModality, english, username, lastname,text

    return (
        <ComponentCard>

            <Profile>
                <div className="compPer">
                <div className="Image">
                    <img src={image}/>
                </div>
                    <div className="namub">
                    <h3>{name + ' ' + lastname}</h3>
                    <div className="ub">
                    <IoLocationSharp className="ubic"/>
                    <p>{country}</p>
                    </div>
                    </div>
                </div>
                <div>
                    <p className="Date">10/7/2022</p>
                </div>
            </Profile>

            <InnerText>
                <div>
                    <p>{text}</p>
                </div>
            </InnerText>


          { technologies.length >2 ? 
          <Tags>
                {
                    technologies.map( el=>( <div className="tech"><p>{el}</p></div>))
                }
            </Tags>
            :null
                }

           {    english || workModality || backFront?
            <Tags>
               {
                   english?
                   <div className="tech"><p>{english}</p></div>
                   :null
               }
               {
                workModality?
                <div className="tech"><p>{workModality}</p></div>
                : null
               }
               {
                backFront?
                <div className="tech"><p>{backFront}</p></div>
                : null
               }
            </Tags>
            :null
}
            {
                video ?
                <Video>
                    <ReactPlayer
                    url={video}
                    className='video'
                    playing={false}
                    width='100%'
                    height={'100%'}
                    volume={null}
                    />
                </Video>
            :null
            }

            <Footer>

            </Footer>
        </ComponentCard>
    )
}