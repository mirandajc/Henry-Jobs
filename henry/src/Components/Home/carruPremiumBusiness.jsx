import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPremiumBusiness } from "../../reducer/actions/actionStudents";


export default function CarruPremiumBusiness() {

    const dispatch = useDispatch();
    const businessPremium = useSelector((state) => state.fetchStudentsReducer.usersPremium)

    useEffect(() => {
        dispatch(getPremiumBusiness());
    },[])

    return (
        <div>

            {
                businessPremium.map(e =>

                    <div>{e.name}</div>    

                )
            }

        </div>
    )
} 