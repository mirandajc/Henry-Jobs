import React, { useState } from "react";

export default function Instance() {
  const [instance, setInstance] = useState("");

  return (
    <div>
      <div>
        <h3>¿En qué instancia estas actualmente?</h3>
      </div>

      <div>
        <label>Proyecto Final</label>
        <input value={"proyectoFinal"} type="checkbox" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

      <div>
        <label>Alumno Egresado</label>
        <input value={"egresado"} type="checkbox" onClick={(e) => setwhoIam(e.target.value)} />
      </div>

    </div>
  );
};
