import React,{useEffect} from "react";
import {CV, CvCont, Instancia, Acerca, Publicaciones, Tecnologias, OtrosStudy} from '../profileStyles/studentCV';
import MostrarMas from "./showMore";
import Carrousell from "./Carrousell";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";


export default function StudentCV({otherStudies,technologies, id}){
    
    const logout = useSelector((state) => state.fetchPostReducer.response);
    const { decodedToken, isExpided } = useJwt(logout);
    const respuesta = decodedToken

    useEffect(()=>{

    },[otherStudies])

    useEffect(() => {
        console.log(respuesta);
    }, [respuesta])
    
    
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
                {
                    respuesta.type === 1 || respuesta.type === 2 ?
                    <Link to={`/myapplications`}><h3>Ver mis postulaciones</h3></Link>
                    :
                    respuesta.type === 4 || respuesta.type === 5 ?
                    <Link to={`/mypublications/${id}`}><h3>Ver todas las publicaciones</h3></Link>
                    : null
                }
                <Carrousell id={id}/> 
            </Publicaciones>
        </CV>
    )

}
