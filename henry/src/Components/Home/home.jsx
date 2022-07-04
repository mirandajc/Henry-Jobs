import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeBusinessLogic from "./HomeForBusiness/HomeBusinessLogic";
import HomeStudentsLogic from "./HomeForStudents/HomeStudentsLogic";
import { getInfoUser } from "../../reducer/actions/actionPost";
import UserForm from "../Register_form/completeForm";


export default function Home() {
    
    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);
    const [userT, setUserT] = useState('');

    useEffect(()=> {
        if(userType !== null){
            setUserT(userType.type)
        }

    },[userType])


    return(

        <div>

            {   
                userT === 4 || userT === 5 ?
                
                <HomeBusinessLogic/>

                : 
                
                userT === 1 || userT === 2? 

                <HomeStudentsLogic/>

                :

                userT === 3 ?

                <HomeForStaff/>

                :
                
                userT === 0 ? 
                
                <UserForm/> 
                
                :null
                
            }

        </div>

    )
}