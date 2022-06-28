import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import { getPoke, getStudents } from "../../reducer/actions/action";
import HomeBusinessLogic from "./HomeForBusiness/HomeBusinessLogic";
import HomeStudentsLogic from "./HomeForStudents/HomeStudentsLogic";

/*  */

export default function Home(){
    const dispatch= useDispatch();
    const pokemon= useSelector((state)=> state.fetchDataReducer.pokemon);
    const userType = useSelector((state) => state.fetchDataReducer.user)

 /*    useEffect(()=>{
        dispatch(getPoke())
        
    },[])

    useEffect(()=> {
        dispatch(getStudents())
    },[]) */


    return(

        <div>
            Hi, i'm the logic behind the rendering

            {   
                userType === 'Business' || userType === 'Recruiter' ?
                
                <HomeBusinessLogic/>

                : 
                
                userType === 'PG' || userType === 'Graduate'? 

                <HomeStudentsLogic/>

                :

                userType === 'Staff' ?

                <HomeForStaff/>

                :
                
                null
                
            }

            

        </div>

    )
}