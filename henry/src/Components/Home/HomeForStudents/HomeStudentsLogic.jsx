import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, getPublicatDevType, getPublicationStudents, getPublicatUbication } from "../../../reducer/actions/actionBusiness";
import { getPublicationsBusiness, getPublicationsDevType, getPublicationUbication } from "../../../reducer/actions/actionStudents";
import HomeStudentsCard from "./HomeStudentsCard";


export default function HomeStudentsLogic() {

<<<<<<< HEAD
    const students = useSelector((state) => state.fetchBusinessReducer.studentsFiltered);
    const publicaciones = useSelector((state) => state.fetchBusinessReducer.allPublications);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudents());
        dispatch(getPublicationStudents());
    }, []);

    useEffect(() => {
        console.log("1",students)
        console.log("2", publicaciones)
    }, [students, publicaciones]);

    return (
        <div>
            <button onClick={() => dispatch(getAllStudents())}>Recargar</button>
            <select onChange={(e) => {dispatch(getPublicatUbication(e.target.value))}}>
                <option>Argentina</option>
                <option>Brazil</option>
                <option>Colombia</option>
                <option>Peru</option>
            </select>
=======


    return (
        <div>
            
            

<<<<<<< HEAD
            
=======
            {/* <p>Page {current} of {pages}</p>
            <ul>
                {
                    display.map(e => <HomeStudentsCard />)
                }
            </ul>
            <button disabled={current === 1} onClick={previous}>Previous Page</button>
            <button disabled={current === pages} onClick={next}>Next Page</button>
            <p>{current}</p> */}
>>>>>>> c11152317ac21aa403e739333e25693bf9d35b22
>>>>>>> 66c21132ddd4301bacef1ade11a48f3d4b581788

            <select onChange={(e) => dispatch(getPublicatDevType(e.target.value))}>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Fullstack</option>
            </select>
        </div>
    );
};