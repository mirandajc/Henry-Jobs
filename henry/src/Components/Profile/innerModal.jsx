import React from "react";
import { InnerModal } from "./profileStyles/EditModal";



export default function InnModal(){
//nombre, banner, fotoperfil, ubicacion, github, linkedin, mail,instancia, tecnologias, otros estudios, acercaDE, favoritos



    return(
        <InnerModal>
            <div>
                <button>X</button>
            </div>
            <div>
                <div>
                <img src="foto"/>
                <textarea placeholder="url perfil"/>
                </div>
                <div>
                <img src="banner"/>
                <textarea placeholder="url banner"/>
                </div>
            </div>
            <div>
            <input placeholder="nombre"/>
            <input placeholder="apellido"/>
            </div>

            <div>
               <select>
                <option>Pais</option>
               </select>

               <select>
                <option>Provincia</option>
               </select>
            </div>
            <div>
            <input placeholder="gh"/>
            <input placeholder="mail"/>
            <input placeholder="ln"/>
            </div>

            <div>
            <input placeholder="Tecnologias"/>
            </div>

            <div>
            <input placeholder="Otros estudios"/>
            </div>

            <div>
            <textarea placeholder="Acerca de"/>
            </div>



        </InnerModal>

    )


}