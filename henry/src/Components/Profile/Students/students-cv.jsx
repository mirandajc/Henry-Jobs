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
             
                    {
                        technologies !== null? 
                <Tecnologias>
                    <h3>Tecnologias:</h3>
                    <ul>
                        {
                            technologies.map(el=> {
                                return(
                                    <li key={el}>{el}</li>
                                )
                            })
                        }
                        
                    </ul>
                </Tecnologias>
                : null
                    }
                <OtrosStudy>
                    <h3>Otros estudios:</h3>
                    <ul>
                       
                        {
                            otherStudies.map(el=> (
                                <li>{el}</li>
                            ))
                        }
                       
                        
                    </ul>
                </OtrosStudy>
            </CvCont>

            <Acerca>
                <h3>Acerca De: FALTAAAA</h3>
               <MostrarMas/>
            </Acerca>
            <Publicaciones>
                <h3>Publicaciones:  FALTAAA</h3>
                <Carrousell /> 
            </Publicaciones>
        </CV>
    )

}
