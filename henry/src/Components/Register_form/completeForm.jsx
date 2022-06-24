import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormDiv,Switch,Error} from "./formStyles/formStyles";



export default function UserForm() {
  let navigate = useNavigate();
  const [ whoIam, setwhoIam ] = useState("");
  const [ error, setError ] = useState("");

  const settingValue = (e) => {
    if(e.target.checked === true){
      if(e.target.value === "Student"){
        setwhoIam(e.target.value);
        document.getElementById('Recruiter').checked = false;
        document.getElementById('Business').checked = false;
      }
      if(e.target.value === "Business"){
        setwhoIam(e.target.value);
        document.getElementById('Recruiter').checked = false;
        document.getElementById('Student').checked = false;
      }
      if(e.target.value === "Recruiter"){
        setwhoIam(e.target.value);
        document.getElementById('Student').checked = false;
        document.getElementById('Business').checked = false;
      }
    }
    else{
      setwhoIam("");
    }
  };

  const handleSubmit = (e) => {
    // hacer rutas de registro dependiendo el tipo de usuario register/empresa, register/reclutador
    e.preventDefault();

    if(whoIam === ""){
      setError("Selecciona que tipo de usuario eres");
    }
    else{
      setError("");
      if(whoIam === "Student"){
        //manejar info(GUARDAR)
        navigate("/register/alumno", { replace:true })
      }
      else if(whoIam === "Business"){
        //manejar info y hacer ruta de registro de empresa
        // navigate("/register/empresa", { replace:true })
      }
      else{
        // manejar info y hacer ruta de registro de reclutador
        navigate("/register/recruiter", { replace:true })
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
        <input type="checkbox" id="Student" value={'Student'} onClick={(e) => settingValue(e)}/>
         <span class="slider round"></span>
        </label>
        </Switch>
      </div>

      <div>
        <label>Henry Staff</label>
        

        <Switch>
        <label class="switch">
        <input type="checkbox" id="Staff" value={'Staff'} onClick={(e) => settingValue(e)}/>
         <span class="slider round"></span>
        </label>
        </Switch>
      </div>


      <div>
        <label>Empresa</label>
        <Switch>
        <label class="switch">
        <input type="checkbox" id="Business" value={'Business'} onClick={(e) => settingValue(e)}/>
         <span class="slider round"></span>
        </label>
        </Switch>
      </div>

      <div>
        <label>Reclutador</label>
        <Switch>
        <label class="switch">
        <input type="checkbox" id="Recruiter" value={'Recruiter'} onClick={(e) => settingValue(e)}/>
         <span class="slider round"></span>
        </label>
        </Switch>
      </div>

      {error && <Error>{error}😡</Error>}

      <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>SIGUIENTE</button>
    </FormDiv>
  );
};
