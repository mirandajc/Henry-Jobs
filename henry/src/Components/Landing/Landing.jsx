import React from "react";
import Carousel from "./booms/cardBoom";
import VertiNav from "./booms/nav2/nav2";
import { LandingCont } from "./LandingStyles/vertiNav";


export default function Landing(){
    return(
        <LandingCont>
                <VertiNav/>
                <Carousel/>
        </LandingCont>

    )
}