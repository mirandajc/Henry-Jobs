import React, { useState } from "react";

export default function Instance() {
  const [ instance, setInstance ] = useState("");
  const [ error, setError ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!instance){
      setError("Selecciona una instancia");
    }
    else{
      setError("");
      //manejar info()guardarla y avanzar en el form
    }
  };

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

      {error & <span>{error}</span>}

      <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)} />
    </div>
  );
};
