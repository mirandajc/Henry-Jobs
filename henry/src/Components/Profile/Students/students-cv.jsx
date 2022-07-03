import React,{useEffect} from "react";
import {CV, CvCont, Instancia, Acerca, Publicaciones, Tecnologias, OtrosStudy} from '../profileStyles/studentCV';
import MostrarMas from "./showMore";
import Carrousell from "./Carrousell";

export default function StudentCV({otherStudies,technologies}){
    
    
    
    useEffect(()=>{

    },[otherStudies])
    
    
    return(



        <CV>

            <CvCont>
                {/* <Instancia>
                    <h3>Nivel de ingles:</h3>
                    <h3>Instancia: Graduado</h3>
                </Instancia> */}
                    {
                        technologies !== null? 
                <Tecnologias>
                    <h3>Tecnologias:</h3>
                    <ul>
                        {
                            technologies.map(el=> (
                                <li>{el}</li>
                            ))
                        }
                        {/* <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>CSS3</li>
                        <li>Styled-components</li>
                        <li>HTML</li> */}
                    </ul>
                </Tecnologias>
                : null
                    }
                <OtrosStudy>
                    <h3>Otros estudios:</h3>
                    <ul>
{/*                        
                        {
                            otherStudies.map(el=> (
                                <li>{el}</li>
                            ))
                        } */}
                       
                        
                    </ul>
                </OtrosStudy>
            </CvCont>

            <Acerca>
                <h3>Acerca De:</h3>
               <MostrarMas/>
            </Acerca>
            <Publicaciones>
                <h3>Publicaciones:</h3>
                <Carrousell /> 
            </Publicaciones>
        </CV>
    )

}
