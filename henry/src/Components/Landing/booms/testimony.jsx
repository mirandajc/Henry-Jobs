import React from "react";
import Bussines from "./data/dataImage";
import { TestimonyDiv, GridDiv,TittleTestimony } from "../LandingStyles/testimony";

export default function Testimony(){
    const bussinesArray= Bussines;
    return(
        <TestimonyDiv>
            
            <TittleTestimony>
            <h1>EMPRESAS QUE NOS ELIGEN</h1>
            <hr/>
            </TittleTestimony>
            
            <GridDiv>
            {
                bussinesArray.map(bussines=>{
                    return(
                        <div>
                            <img src={bussines}/>
                        </div>
                    )
                })
            }
            </GridDiv>
            
        </TestimonyDiv>
    )
}


