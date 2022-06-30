import React, { useEffect } from "react";

import { Link } from "react-router-dom";

//Feed del alumno con pyublicaciones 
export default function HomeStudentsLogic() {

    // const students = useSelector((state) => state.fetchBusinessReducer.studentsFiltered);
    // const publicaciones = useSelector((state) => state.fetchBusinessReducer.allPublications);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllStudents());
    //     dispatch(getPublicationStudents());
    // }, []);

    // useEffect(() => {
    //     console.log("1",students)
    //     console.log("2", publicaciones)
    // }, [students, publicaciones]);

    return (
        <div>

            <Link to ='/workwall'><button>workWall</button></Link>
        </div>
    );
};