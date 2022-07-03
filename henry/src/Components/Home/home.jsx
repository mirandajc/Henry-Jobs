import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeBusinessLogic from "./HomeForBusiness/HomeBusinessLogic";
import HomeStudentsLogic from "./HomeForStudents/HomeStudentsLogic";
import { getInfoUser } from "../../reducer/actions/actionPost";
import UserForm from "../Register_form/completeForm";


export default function Home() {


    const dispatch= useDispatch();
    
    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);


     useEffect(()=>{
        dispatch(getInfoUser())
    },[])

    return(

        <div>

            {   
                userType.type === 4 || userType.type === 5 ?
                
                <HomeBusinessLogic/>

                : 
                
                userType.type === 1 || userType.type === 2? 

                <HomeStudentsLogic/>

                :

                userType.type === 3 ?

                <HomeForStaff/>

                :
                
                userType.type === 0 ? 
                
                <UserForm/> 
                
                :null
                
            }

        </div>

    )
}