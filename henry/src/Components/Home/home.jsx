import React from "react";
import HomeForBusiness from "./HomeForBusiness/HomeForBusiness";
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeForStudents from "./HomeForStudents/HomeForStudents";
import { testStuden } from "./HomeForStudents/MokedFiles";


export default function Home(){

    const modelTypeStudent = true;

    return(

        <div>
            Hi, i'm the logic behind the rendering

            {   
                modelTypeStudent ?

                testStuden.map(e => <HomeForStudents 
                    name={e.name} 
                    lastName={e.lastName} 
                    lenguage={e.lenguage} 
                    technologies={e.technologies} 
                    backFront={e.backFront} 
                    otherStudies={e.otherStudies} 
                    image={e.image}
                />)

                : null
                
            }

        </div>

    )
}