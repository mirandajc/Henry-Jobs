import React from "react";
import HomeBusiness from "./HomeForStudents/HomeBusiness";
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeStudents from "./HomeForBusiness/HomeStudents";
import { testStuden } from './HomeForBusiness/MokedFiles'


export default function Home(){

    const modelTypeStudent = true;

    return(

        <div>
            Hi, i'm the logic behind the rendering

            {   
                modelTypeStudent ?

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

                : null
                
            }

        </div>

    )
}