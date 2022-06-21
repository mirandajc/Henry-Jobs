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
        <input name="instance" value={"proyectoFinal"} type="radio" onClick={(e) => setInstance(e.target.value)} />
      </div>

      <div>
        <label>Alumno Egresado</label>
        <input name="instance" value={"egresado"} type="radio" onClick={(e) => setInstance(e.target.value)} />
      </div>

      <button type="submit" value={"siguiente"} />
    </div>
  );
};
