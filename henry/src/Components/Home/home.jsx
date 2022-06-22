import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import HomeBusiness from "./HomeForStudents/HomeBusiness";
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeStudents from "./HomeForBusiness/HomeStudents";
import { testStuden } from './HomeForBusiness/MokedFiles'
import { getPoke } from "../../reducer/actions/action";


export default function Home(){
    const dispatch= useDispatch();
    const pokemon= useSelector((state)=> state.fetchDataReducer.pokemon);
    console.log(pokemon)
    const userType = useSelector((state) => state.fetchDataReducer.user)

    useEffect(()=>{
        dispatch(getPoke())
        
    },[])

    return(

        <div>
            Hi, i'm the logic behind the rendering

            {   
                userType === 'business' || userType === 'recruiter' ?

                testStuden.map(e => <HomeStudents 
                    name={e.name} 
                    lastName={e.lastName} 
                    lenguage={e.lenguage} 
                    technologies={e.technologies} 
                    backFront={e.backFront} 
                    otherStudies={e.otherStudies} 
                    image={e.image}
                    id={e.id}
                />)

                : 
                
                userType === 'student' ? 

                <HomeBusiness/>

                :

                userType === 'staff' ?

                <HomeForStaff/>

                :
                
                null
                
            }

        </div>

    )
}