import React from "react";
import {CV, CvCont, Instancia, Acerca, Publicaciones} from '../profileStyles/studentCV';

export default function StudentCV(){
    return(
        <CV>

            <CvCont>
                <Instancia>
                    <h2>Instancia: Proyecto final</h2>
                </Instancia>
                <div>
                    <h2>Tecnologias</h2>
                </div>
                <div>
                    <h2>Otros estudios</h2>
                </div>
            </CvCont>

            <Acerca>
                <h2>Acerca De:</h2>
            </Acerca>
            <Publicaciones>
                <h2>Publicaciones</h2>
            </Publicaciones>
        </CV>
    )

}