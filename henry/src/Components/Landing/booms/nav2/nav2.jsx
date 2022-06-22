import React from "react";
import { VerticalDiv } from "../../LandingStyles/vertiNav";

import Anuncio from '../../../images/anuncio.png'
import Proyectos from '../../../images/Protecto.png'
import Booms from '../../../images/booms.png'
import Cohete from '../../../images/cohete.png'


export default function VertiNav(){
    return(
        <VerticalDiv>
            <img src={Cohete} className='cohete'/>
           <img src={Proyectos}/>
           <img src={Anuncio}/>
           <img src={Booms}/>
        </VerticalDiv>
    )
}