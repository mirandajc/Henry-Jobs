import React from "react";
import loading from "../images/gifCohete.png";
import './Loading.css'

export default function Loading({setLoading}){
    return(
        <div>
             <div className="loading">
                <img className="imagenLoading" src={loading} alt='Loading'/>
            </div>
            <div>
                {setTimeout(() => {
                setLoading(false);
                }, 4000)}
            </div>
        </div>
    )
}