import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeBusinessLogic from "./HomeForBusiness/HomeBusinessLogic";
import HomeStudentsLogic from "./HomeForStudents/HomeStudentsLogic";
import { getInfoUser } from "../../reducer/actions/actionPost";


export default function Home() {
    const dispatch= useDispatch();
    const userType = useSelector((state) => state.fetchInfoUserReducer.userType)
    const emailUser = useSelector((state) => state.fetchInfoUserReducer.email)

     useEffect(()=>{
        dispatch(getInfoUser())
    },[])


    return(

        <div>

            {   
                userType === 4 || userType === 5 ?
                
                <HomeBusinessLogic/>

                : 
                
                userType === 1 || userType === 2? 

                <HomeStudentsLogic/>

                :

                userType === 3 ?

                <HomeForStaff/>

                :
                
                null
                
            }

        </div>

    )
}