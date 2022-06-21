import React from "react";
import Carousel from "./booms/cardBoom";
import VertiNav from "./booms/nav2/nav2";
import DevType from "../Register_form/Students/devType"
import { LandingCont } from "./LandingStyles/vertiNav";


export default function Landing(){
    return(
        <LandingCont>

      <VertiNav/>
      <Carousel/>
      
      <h1>hola</h1>
        <h1>hola2</h1>
        <h1>hola3</h1>
        <h3>soy un h3</h3>
        <h4>Quiero ser un p y no me dejan</h4>

        <DevType />
        </LandingCont>

    )
}