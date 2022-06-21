import React from "react";
import HomeForBusiness from "./HomeForBusiness/HomeForBusiness";
import HomeForStaff from "./HomeForStaff/HomeForStaff";
import HomeForStudents from "./HomeForStudents/HomeForStudents";



export default function Home(){

    const modelTypeStudent = true;

    const testStuden = [{ name: 'Frodo', lastName: 'Bolson' ,lenguage: ['english', 'elfico'] ,technologies: ['c++','python'] ,backFront: 'Front' ,otherStudies: ['lord of the rings'],image: 'data:image/jpeg;base64,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' }]

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