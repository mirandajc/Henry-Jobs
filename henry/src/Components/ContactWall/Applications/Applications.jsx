import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyApplicat} from '../../../reducer/actions/actionStudents'



export default function Applications() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const posteos = useSelector((state) => state.fetchStudentsReducer.myApp);
    // El componente debe mostrar publicaciones donde me postulé
    // Array de id de publicaciones de empresa, este array esta dentro de los datos del alumno
    // este muro muestra las publicaciones
    
    useEffect(() => {
        dispatch(getMyApplicat(id));
    },[]);

    return (

        <div>
            {
                posteos.map(e =>
                    <div>
                        <div>{e.posterUser.name}</div>
                        <div>{e.workModality}</div>
                        <div>{e.posterUser.email}</div>

                        {
                            e.applicants.map(a => a.userId === id &&

                                <h1>{a.step}</h1>

                            )
                        }

                    </div>
                )
            }


        </div>
    );
};