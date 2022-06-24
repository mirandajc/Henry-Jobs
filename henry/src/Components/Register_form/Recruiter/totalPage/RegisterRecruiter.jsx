import React, { useEffect, useState } from "react";
import RegisterCompleted from "../../RegisterCompleted";
import RecruiterMood from "../recruiterMood";
import RecruiterWork from "../recruiterWork";

export default function RegisterRecruiter(){
    const [fase, setFase] = useState(1);
    
    const sumarFaseReq = () => {
        if(fase === 5){
            setFase(1);
        }
        else{
            setFase(fase => fase + 1)
        }
    };

    // useEffect(() => {
    // como resetear el estado una vez finalizado el registro
    // }, [fase])

    if(fase === 1){
        return(
        <>
        <RecruiterWork sumarFaseReq={sumarFaseReq}/>
        </>
        );
    }
    // else if(fase === 2){
    //     return(
    //     <>
    //     <RecruiterWork sumarFaseReq={sumarFaseReq}/>
    //     </>
    //     );
    // }
    // else if(fase === 3){
    //     return(
    //     <>
    //     <Languages sumarFase={sumarFase}/>
    //     </>
    //     );
    // }
    // else if(fase === 4){
    //     return(
    //     <>
    //     <RegisterCompleted />
    //     </>
    //     );
    // }
};