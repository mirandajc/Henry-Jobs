import React from "react";
import { NavbarLineas, VerticalDiv } from "../../LandingStyles/vertiNav";

import Anuncio from '../../../images/anuncio.png'
import Proyectos from '../../../images/Protecto.png'
import Booms from '../../../images/booms.png'
import Cohete from '../../../images/cohete.png'
import About from '../../../images/about-icon.png'

export default function VertiNav(){
    return(
        <VerticalDiv>
            <img src={Cohete} className='cohete'/>
            <NavbarLineas/>
           <img src={Proyectos} className='icon'/>
           <NavbarLineas/>
           <img src={Anuncio} className='icon'/>
           <NavbarLineas/>
           <img src={Booms} className='icon'/>
           <NavbarLineas/>
           <img src={About} className='icon'/>
        </VerticalDiv>
    )
}