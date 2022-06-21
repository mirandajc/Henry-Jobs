import { React, useState } from "react";

export default function StudentForm() {
  const [ whoIam, setwhoIam ] = useState("");
  const [ error, setError ] = useState("");

  const handleSubmit = (e) => {
    // /register  =>  /register/:whoIam
    // hacer rutas de registro dependiendo el tipo de usuario register/alumno, register/empresa, register/reclutador
    e.preventDefault();

    if(whoIam === ""){
      setError("Selecciona que tipo de usuario eres");
      //manejar info(guardar) y avanzar en el formulario
    }
    else{
      setError("");
    }
  };

  return (
    <div>
      <div>
        <h3>¿Qué tipo de usuario eres?</h3>
      </div>

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

      <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)} />
    </div>
  );
};
