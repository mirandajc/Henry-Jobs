import React, {useState}from "react";
import { BoomCardContainer,GridContBoom } from "../LandingStyles/booms";
import Loading from "../../Loading/Loading";

export default function Booms(){
    const[loading, setLoading]= useState(true);
 

    return(
        <BoomCardContainer>
            
            <GridContBoom>
            {    loading === true?(<Loading setLoading={setLoading}/>):
             <div class="powr-instagram-feed" id="6e4716dc_1655908803"></div>
            }
            </GridContBoom>
        </BoomCardContainer>
    )
}