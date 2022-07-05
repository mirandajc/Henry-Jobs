import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../reducer/actions/actionBusiness";

export default function PublicationCard ({idEmpresa, email, text, date, applicants}) {
    useEffect(() => {
        dispatch(getAllStudents());
    },[]);
    
    const students = useSelector(state => state.fetchBusinessReducer.allStudents);
    const postulantes = students.filter(e => applicants.includes(e._id));
    
    const handlePost = (value) => {
            // dispatch(setApplicant(value));
    };

    return(
        <div>
            <div>{email}</div>
            <div>{date}</div>
            <div>{text}</div>

            <div>
                <h1>POSTULANTES:</h1>

            { postulantes.map(e => <div>
                <img src={postulantes.profileImage.secure_url} alt={postulantes.name}/>
                <Link to={`/profile/${postulantes._id}`}>
                <h1>{postulantes.name} {postulantes.lastName}</h1>
                </Link>
                <h2>{postulantes.email}</h2>
                <button onClick={(e) => handlePost(e.target.value)}>Aceptar postulante</button>
                <button onClick={(e) => handlePost(e.target.value)}>Rechazar postulante</button>
            </div>) 
            }

            </div>
        </div>
    );
};