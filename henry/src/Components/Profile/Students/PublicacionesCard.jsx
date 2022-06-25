import React from "react";
import { PubContainer } from "./cardStyles/PublicacionCard";

export default function PublicacionesCards ({id, picture, name, date, proyectTittle, summary, technologies}){
    return(
        <PubContainer>
            <div className="img-name-date">
                <div className="perfil">
                  <img src={picture} />
                  <h1>{name}</h1>
                </div>
                <p>{date}</p>
            </div>
            <div>
                <h2>{proyectTittle}</h2>
                <p>{summary}</p>
            </div>
            <div className="tech">
            <p>{technologies}</p>
            </div>
        </PubContainer>
    );
};