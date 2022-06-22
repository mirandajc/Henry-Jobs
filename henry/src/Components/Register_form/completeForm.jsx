import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormDiv,Switch,Error} from "./formStyles/formStyles";



export default function UserForm() {
  let navigate = useNavigate();
  const [ whoIam, setwhoIam ] = useState("");
  const [ error, setError ] = useState("");

  const handleSubmit = (e) => {
    // hacer rutas de registro dependiendo el tipo de usuario register/empresa, register/reclutador
    e.preventDefault();

    if(whoIam === ""){
      setError("Selecciona que tipo de usuario eres");
    }
    else{
      setError("");
      if(whoIam === "alumno"){
        //manejar info(GUARDAR)
        navigate("/register/alumno", { replace:true })
      }
      else if(whoIam === "empresa"){
        //manejar info y hacer ruta de registro de empresa
        // navigate("/register/empresa", { replace:true })
      }
      else{
        //manejar info y hacer ruta de registro de reclutador
        // navigate("/register/recruiter", { replace:true })
      }
    }
  };

  return(
    <FormDiv>
        <h1>¿Qué tipo de usuario eres?</h1>  

      <div>
        <label>Alumno</label>
        

        <Switch>
        <label class="switch">
        <input type="checkbox"/>
         <span class="slider round"></span>
        </label>
        </Switch>
      </div>

      <div>
        <label>Empresa</label>
        <Switch>
        <label class="switch">
        <input type="checkbox"/>
         <span class="slider round"></span>
        </label>
        </Switch>
      </div>

      <div>
        <label>Reclutador</label>
        <Switch>
        <label class="switch">
        <input type="checkbox"/>
         <span class="slider round"></span>
        </label>
        </Switch>
      </div>

      {error && <Error>{error}😡</Error>}

      <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>SIGUIENTE</button>
    </FormDiv>
  );
};
