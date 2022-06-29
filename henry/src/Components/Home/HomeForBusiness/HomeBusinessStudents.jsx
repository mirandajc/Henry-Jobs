import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBusinessCard from "./HomeBusinessCard";
import { getStudents } from "../../../reducer/actions/action";
import { usePagination } from 'use-pagination-hook';


export default function HomeBusinessStudents(){

    const dispatch = useDispatch();
    // const allStudents = useSelector((state) => state.fetchDataReducer.allStudents)
    // const { current, pages, display, next, previous, row } = usePagination({ items: allStudents, size: 2 });

    const optionFilter = ['Ingles Básico', 'Ingles Intermedio', 'Ingles Avanzado'];
    const optionOrder = ['a-z', 'z-a', 'mejor valoracion'];

    // useEffect(() => {
    //     console.log(allStudents)
    //     dispatch(getStudents());
    // }, [])


    return (
        <div>

            <p>Filtrar por</p>
            <select>
                <option >Elige una opcion</option>
                {

                    optionFilter.map(e => <option>{e}</option>)
                }
            </select>

            <p>Ordenar por</p>
            <select>
                <option>Elige una opcion</option>
                {
                    optionOrder.map(e => <option>{e}</option>)
                }
            </select>


        </div>
    )

}
