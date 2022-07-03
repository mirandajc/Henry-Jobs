import React from "react";


export default function CardPublicationsAll({ image, name, lastname, date, title, video, likes, technologies, backFront, ubication, workModality, english, text }) {
  return (
    <div>
      {!lastname ? /////////////////////////////// Publicaciones de empresas  /////////////////////////
        <div>
          <img src={image} alt={`${name} Image`} />
          <div>
            <h3>{name}</h3>
          </div>
          <p>{date}</p>
          <div>
            {
              technologies.map(e => <div>{e}</div>)
            }
          </div>
          <div>
            <p>{backFront}</p>
          </div>
          <div>
            <p>{ubication}</p>
          </div>
          <div>
            <p>Modalidad: {workModality}</p>
            <p>ingles: {english}</p>
          </div>
          <p>{text}</p>
          <p>{ubication}</p>
          <div>
            <p>{likes}</p>
          </div>
        </div>

        :    ////////////////////////// Publicaciones de alumnos  ///////////////////////////

        <div>
          <img src={image} alt={`${name} Image`} />
          <div>
            <h3>{name + " " + lastname}</h3>
          </div>
          <p>{date}</p>
          <p>{title}</p>
          <div>
            {
              technologies.map(e => <div>{e}</div>)
            }
          </div>
          <div>
            <p>{backFront}</p>
          </div>
          <div>
            <p>{ubication}</p>
          </div>
          <div>
            <p>{workModality}</p>
          </div>
          <div>
            <p>{english}</p>
          </div>
          <p>{text}</p>
          <div>{video}</div>
        </div>
      }
    </div>
  );
}
