import React from "react";
import { usePagination } from 'use-pagination-hook';

export default function HomeForStaff(){

    const { current, pages, display, next, previous } = usePagination({ items: 'hola' , size: 2 }); //hola reemplazar por el array a renderizar

    return (
        <div>

            <p>Page {current} of {pages}</p>
            <ul>
                {
                    display.map(e => <div>hi, i'm information for staff</div>)
                }
            </ul>
            <button disabled={current === 1} onClick={previous}>Previous Page</button>
            <button disabled={current === pages} onClick={next}>Next Page</button>
            <p>{current}</p>

        </div>
    )
}