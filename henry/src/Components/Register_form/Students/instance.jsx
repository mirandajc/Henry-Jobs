import React, { useState } from "react";

export default function Instance () {
    const [ instance, setInstance ] = useState({
        ProyectoFinal: false,
        Graduado: false
    });



    return(
        <div>
            <div><h3>¿En qué instancia estas actualmente?</h3></div>
            <label>Proyecto Final</label>
            <label>Graduado</label>
        </div>
    );
};