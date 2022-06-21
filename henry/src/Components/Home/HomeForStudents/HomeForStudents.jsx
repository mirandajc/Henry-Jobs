import React from "react";

export default function HomeForStudents(props){

    
    return (
        <div>
            {
                console.log(props)
            }
            hi, i'm information for the students's card
            <div>
                {props.name}
            </div>
            <div>
                {props.lastName}
            </div>
            <div>
                {
                    props.lenguage.map(e => <div>{e}</div>)
                }
            </div>
            <div>
                {
                    props.technologies.map(e => <div>{e}</div>)
                }
            </div>
            <div>
        	    {props.backFront}
            </div>
            <img src={props.image} alt={props.name}/>
            <div>
                {props.otherStudies}
                
            </div>
        </div>
    )
}