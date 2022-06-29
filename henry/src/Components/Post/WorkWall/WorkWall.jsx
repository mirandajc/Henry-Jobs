import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPublicationsTest from "../../Home/HomeForBusiness/CardPublicationsTest"; 
import { mokedFilesPostBusiness } from "../../Home/HomeForBusiness/MokedFilesPublicaciones";
import NavWall from "./navBarWall";


//Este componente va a renderizar las publicaciones de empresas y reclutadores


export default function WorkWall(){

    const publication= mokedFilesPostBusiness;
    console.log(publication)

    const bussinesPub= publication.filter(el=> el.userTypes === 5 || el.userTypes ===4)
    console.log(bussinesPub)

    return(
        <div>

            <NavWall/>
            {
                bussinesPub.map((publication)=> (
                    <CardPublicationsTest
                        image={publication.img}
                        name={publication.posterUser}
                        lastname={''}
                        date={''}
                        title={publication.proyectTittle}
                        summary={publication.text}
                        video={publication.imgVideo}
                        technologies={publication.technologies}
                        backFront={publication.backFront}
                        ubication={publication.ubication}
                        workModality={publication.workModality}
                        english={publication.english}

                    />
                ))
            }

        </div>
    )
}