import React from "react";


export default function CardPublicationsTest(props){


    return(
        <div>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div>
                <p>{props.proyectTittle}</p>
            </div>
            <div>
                <p>{props.date}</p>
            </div>
            <div>
                <img src={props.picture}/>
            </div>
            <div>
                <p>{props.summary}</p>
            </div>
            <div>
                <p>{props.linkedin}</p>
            </div>
            <div>
                {
                    props.technologies.map(e => <div>{e}</div>)
                }
            </div>
        </div>
    )
}