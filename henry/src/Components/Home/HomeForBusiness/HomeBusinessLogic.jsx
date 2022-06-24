import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBusinessCard from "./HomeBusinessCard";
import { getStudents } from "../../../reducer/actions/action";
import { usePagination } from 'use-pagination-hook';
import { Link } from "react-router-dom";
import { mokedFilesPublicaciones } from './MokedFilesPublicaciones'

export default function HomeBusinessLogic() {

    const dispatch = useDispatch();
    const allStudents = useSelector((state) => state.fetchDataReducer.allStudents)
    const { current, pages, display, next, previous, row } = usePagination({ items: allStudents, size: 2 });

    useEffect(() => {
        console.log(allStudents)
    }, [])


    return (
        <div>
            <Link to='/students'>Ver Alumnos</Link>
            <p>Hola soy una publicacion de una persona que sigues ordenados por fecha de publicacion unicamente</p>
            <p>Importar carta de Joce</p>
            {console.log(mokedFilesPublicaciones)}
        </div>
    )
}