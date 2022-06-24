import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBusinessCard from "./HomeBusinessCard";
import { getStudents } from "../../../reducer/actions/action";
import { usePagination } from 'use-pagination-hook';


export default function HomeBusinessStudents(){

    const dispatch = useDispatch();
    const allStudents = useSelector((state) => state.fetchDataReducer.allStudents)
    const { current, pages, display, next, previous, row } = usePagination({ items: allStudents, size: 2 });

    const optionFilter = ['Ingles Básico', 'Ingles Intermedio', 'Ingles Avanzado'];
    const optionOrder = ['a-z', 'z-a', 'mejor valoracion'];

    useEffect(() => {
        console.log(allStudents)
    }, [])


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

            <p>Pag {current} de {pages}</p>
            <ul>
                {

                    display.map(e => {
                        return (<HomeBusinessCard
                            name={e.name}
                            lastName={e.lastName}
                            lenguage={e.lenguage}
                            technologies={e.technologies}
                            backFront={e.backFront}
                            otherStudies={e.otherStudies}
                            image={e.image}
                            id={e.id}
                        />)
                    })
                }

            </ul>
            <button disabled={current === 1} onClick={previous}>Previous Page</button>
            <button disabled={current === pages} onClick={next}>Next Page</button>
            <p>{current}</p>

        </div>
    )

}
