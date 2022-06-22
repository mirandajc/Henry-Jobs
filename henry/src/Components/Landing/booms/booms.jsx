import React from "react";

import { BoomCardContainer,ContCard,GridContBoom } from "../LandingStyles/booms";
import Boom from '../booms/data/dataBooms';

export default function Booms(){
    const booms=Boom;
    console.log(booms)
    
    return(
        <BoomCardContainer>
            <div>
            <h1>BOOMS 💥💥💥</h1>
            </div>
            <GridContBoom>
                {
                    booms.map(boom=>{
                        return(
                            <ContCard>
                                <p>{boom}</p>
                            </ContCard>
                        )
                    })
                }
            </GridContBoom>
        </BoomCardContainer>
    )
}