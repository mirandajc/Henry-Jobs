import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBusinessCard from "./HomeBusinessCard";
import { testStuden } from "./MokedFiles";
import { getStudents } from "../../../reducer/actions/action";
// import { usePagination } from 'use-pagination-hook';
import { usePagination } from "use-pagination-hook";

export default function HomeBusinessLogic() {

    const dispatch = useDispatch();
    const userType = useSelector((state) => state.fetchDataReducer.user)

    const { current, pages, display, next, previous } = usePagination({ items: testStuden, size: 2 });

    useEffect(() => {
        dispatch(getStudents())
    }, [])

    const optionFilter = ['Ingles Básico', 'Ingles Intermedio', 'Ingles Avanzado', ''];

    const optionOrder = [];

    return (
        <div>

            <p>Filter By</p>
            <select>
                {
                    optionFilter.map(e => <option>{e}</option>)
                }
            </select>

            <p>Order By</p>
            <select>
                {
                    optionOrder.map(e => <option>{e}</option>)
                }
            </select>

            <p>Page {current} of {pages}</p>
            <ul>

                {
                    display.map(e => <HomeBusinessCard
                        name={e.name}
                        lastName={e.lastName}
                        lenguage={e.lenguage}
                        technologies={e.technologies}
                        backFront={e.backFront}
                        otherStudies={e.otherStudies}
                        image={e.image}
                        id={e.id}
                    />)
                }

            </ul>
            <button disabled={current === 1} onClick={previous}>Previous Page</button>
            <button disabled={current === pages} onClick={next}>Next Page</button>
            <p>{current}</p>

        </div>
    )
}