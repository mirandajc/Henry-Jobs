import { React, useState } from "react";

export default function StudentForm() {
  const [whoIam, setwhoIam] = useState("");

  const handleSubmit = () => {
    // /register  =>  /register/:whoIam
  };

  return (
    <div>
      <div>
        <h3>¿Qué tipo de usuario eres?</h3>
      </div>

      <div>
        <label>Alumno</label>
        <input value={"alumno"} type="checkbox" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

      <div>
        <label>Empresa</label>
        <input value={"empresa"} type="checkbox" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

      <div>
        <label>Reclutador</label>
        <input value={"reclutador"} type="checkbox" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

      <button type="submit" value={"siguiente"} onClick={handleSubmit} />
    </div>
  );
};
