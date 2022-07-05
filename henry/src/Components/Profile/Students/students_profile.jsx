import React from "react";
import { StudentProf,ProfCont,Name,DevStar, Banner, ImageProf,P,Follow,Ubicacion, Redes } from "../profileStyles/studentProfile";
import Rene from '../../images/rene.jpeg';
import {GrLocation} from 'react-icons/gr';
import {BsGithub, BsLinkedin}from 'react-icons/bs';
import {BsFillStarFill} from 'react-icons/bs'
import {SiGmail} from 'react-icons/all';
import {HiLocationMarker} from 'react-icons/all';
import { useParams } from "react-router-dom";

export default function StudentsProfile({backFront, banner, country, curriculumCounter, email, lastName, name, profileImage}){

    // const { name , lastName } = useParams;

   

    return(
        <StudentProf>
            
            
            <ProfCont>
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
                    <p>falta</p>
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
                    <p className="Si" id="cent"><BsFillStarFill className="star"/>F</p>
                    <p id="cent">F instancia</p>
                </DevStar>


                <Follow>
                    <p>Follow</p>
                </Follow>

            </ProfCont>
            
            </StudentProf>
    )
}