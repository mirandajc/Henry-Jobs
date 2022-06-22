import React from "react";
import { Link } from 'react-router-dom';

export default function HomeStudents(props){

    return (
        <div>
            
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
            <div>
                <button>Contact Student</button>
            </div> 
            
            <div>
                <Link to={`/details/${props.id}`}>
                <button>Student Details</button>
                </Link>
            </div>
        </div>
    )
}