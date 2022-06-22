import React from "react";
import ButtonHome from "../buttonHome";
import ButtonContact from "../buttonContact";
import { ContnavLogin } from "./navLoginStyles/navLogin";


export default function NavLoginTrue(){
    return(
        <ContnavLogin>
            <ButtonHome/>
            <ButtonContact/>
            <ButtonContact/>

        </ContnavLogin>
    )
}