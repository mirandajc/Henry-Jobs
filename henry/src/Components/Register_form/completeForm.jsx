import { React, useState } from "react";

export default function StudentForm() {
  const [whoIam, setwhoIam] = useState("");

  const handleSubmit = () => {
    // /register  =>  /register/:whoIam
    // hacer rutas de registro dependiendo el tipo de usuario register/alumno, register/empresa, register/reclutador
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

      <button type="submit" value={"siguiente"} onClick={handleSubmit} />
    </div>
  );
};
