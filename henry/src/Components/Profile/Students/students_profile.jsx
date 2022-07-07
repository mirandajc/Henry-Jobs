import React from "react";
import { StudentProf,ProfCont,Name,DevStar, Banner, ImageProf,P,Follow,Ubicacion, Redes,Edit } from "../profileStyles/studentProfile";
import {Link} from 'react-router-dom';
import {BsGithub, BsLinkedin}from 'react-icons/bs';
import {BsFillStarFill} from 'react-icons/bs'
import {SiGmail} from 'react-icons/all';
import {HiLocationMarker} from 'react-icons/all';
import{AiOutlineEdit} from 'react-icons/ai';


export default function StudentsProfile({id, userType,backFront, banner, country, curriculumCounter,stars, email, lastName, name, profileImage,followers,following}){

    
    const TkId= localStorage.getItem('TK');
    const TkIdF= JSON.parse(TkId);
    console.log(TkIdF.id)


    return(
        <StudentProf>
            
            
            <ProfCont>

                {
                    id == TkIdF.id? ( <Edit>
                        <Link to='/EditProfile'>
                        <AiOutlineEdit className="edit"/>
                        </Link>
                        </Edit>) 
                        : null
                }
               
                <Banner>
                    <img src={banner} alt='banner'/>
                </Banner>
                <ImageProf>
                    <img src={profileImage} alt='profile'/>
                </ImageProf>
                <Name>
                    <h2>{name  + ' '+  lastName}</h2>
                </Name>

                <Ubicacion>
                    <HiLocationMarker className="location"/>
                    <p>{country}</p>
                </Ubicacion>
                <P>
                    <div className="cont">
                    <p>Seguidores</p>
                    <p>{followers.length}</p>
                    </div>
                    <div className="cont">                    <p>Seguidos</p>
                    <p>{following.length}</p>
                    </div>

                </P>


                <Redes>
                    <div>
                    <BsGithub className="gh"/>
                    </div>
                    <div>
                    <BsLinkedin className="ln"/>
                    </div>
                    <div>
                    <SiGmail href={email} className="mail"/>
                    </div>
                </Redes>

                <DevStar>
                    <p className="Si">{backFront}</p>
                    <p className="Si" id="cent"><BsFillStarFill className="star"/>{stars}</p>
                    {userType=1?( <p id="cent">PG</p>) : userType=2? ( <p id="cent">Graduado</p>)
                    :null}
                   
                </DevStar>

                {
                    id == TkIdF.id? 
                    null
                     : (<Follow>
                        <p>Follow</p>
                    </Follow>) 
                    
                }
                

            </ProfCont>
            
            </StudentProf>
    )
}