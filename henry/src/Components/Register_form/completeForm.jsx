import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        //manejar info
        navigate("/register/alumno/1", { replace:true })
      }
      else if(whoIam === "empresa"){
        //manejar info y hacer ruta de registro de empresa
      }
      else{
        //manejar info y hacer ruta de registro de reclutador
      }
    }
  };

  return(
    <div>
        <h3>¿Qué tipo de usuario eres?</h3>  

      <div>
        <label>Alumno</label>
        <input name="userType" value={"alumno"} type="radio" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

      <div>
        <label>Empresa</label>
        <input name="userType" value={"empresa"} type="radio" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

      <div>
        <label>Reclutador</label>
        <input name="userType" value={"reclutador"} type="radio" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

      {error && <span>{error}</span>}

      <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>Siguiente</button>
    </div>
  );
};
