import React from "react";
import { useDispatch } from "react-redux";

export default function StaffPublications ({name,lastname, email, text, video, country, workModal, technologies}){
    
    
    ////////////////// REUTILIZAR LAS CARDS Y ESTILOS DEL WORKWALL Y STUDENTSWALL ///////////////////

    return(
        <div>
            {
                lastname ? 
                
                <div>
                    <h1>{name + " " + lastname}</h1>
                    <h3>{email}</h3>
                    <p>{text}</p>
                    <img src={video}/>
                </div>
                
                : 
                
                <div>
                    <h1>{name}</h1>
                    <h3>{email}</h3>
                    <p>{text}</p>
                    <p>{workModal}</p>
                    {technologies && technologies.map(e => <p>{e}</p>)}
                </div>
            }
        </div>
    );
};

// alumnosPub
//     name lastname email
//       text video



// empresasPub techonologies name 
//     email country text workModal
