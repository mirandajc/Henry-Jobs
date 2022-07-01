import React from "react";


export default function CardPublicationWorkTest2({ image, name, date, title, summary, video, technologies, backFront, ubication, workModality, english, userName }) {


    return (
        <div>
            <img src={image} alt={`${name} Image`} />

            <div>
                <h3>{name}</h3>
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

            <p>{summary}</p>
            <p>{video}</p>
        </div>
    )
}