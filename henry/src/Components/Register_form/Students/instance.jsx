import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlumnCont } from "../formStyles/faceAlumn";
import { Switch, Error } from "../formStyles/formStyles";


export default function Instance({sumarFase}) {
  let navigate = useNavigate();
  const [ instance, setInstance ] = useState("");
  const [ error, setError ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!instance){
      setError("Selecciona una instancia");
    }
    else{
      setError("");
      //manejar info(guardarla)
      sumarFase();
    }
  };

  return (
    <AlumnCont>
      
        <h1>¿En qué instancia estas actualmente?</h1>
      

      <div>
        <label>Proyecto Final</label>
        <Switch>
        <label class="switch">
        <input type="checkbox" id="Student" value={'Student'}/>
         <span class="slider round"></span>
        </label>
        </Switch>
        
      </div>

      <div>
        <label>Alumno Egresado</label>
        <Switch>
        <label class="switch">
        <input type="checkbox" id="Student" value={'Student'}/>
         <span class="slider round"></span>
        </label>
        </Switch>
      
      </div>

      { error && <Error>{error}😡</Error> }

      <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>Siguiente</button>
    </AlumnCont>
  );
};
