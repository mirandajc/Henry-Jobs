import React, { useState } from "react";

export default function DevType() {
  const [ devType, setDevType ] = useState(""); // tipo de desarrollador front, back o fullstack
  const [ tech, setTech ] = useState({
    languages:[],  // dentro de estos arreglos se guardan strings de las tecnologias seleccionadas
    frontend:[],   // hacer funcion que las agregue cuando sean seleccionadas y las saque cuando se deseleccionen (esa palabra existe?)
    backend:[]     // mas abajo esta mejor explicado, son los inputs checkbox
  });

  const handleProgLangs = (e) => {

  }

  // solo uno de los inputs type radio puede estar seleccionado a la vez, el problema es con los checkbox 
  // como saber si los inputs type checkbox estan seleccionados o no ?
  // => hacer funcion que saque los elementos del arreglo cuando sean deshabilitados los checkbox 

  return (
    <div>
      <div>

        <div>
          <h3>¿Qué tipo de desarrollador Eres?</h3>
        </div>

        <div>
          <label>Frontend</label>
          <input name="devType" value={"frontend"} type="radio" onClick={(e) => setDevType(e.target.value)} />
        </div>

        <div>
          <label>Backend</label>
          <input name="devType" value={"backend"} type="radio" onClick={(e) => setDevType(e.target.value)} />
        </div>

        <div>
          <label>Fullstack</label>
          <input name="devType" value={"fullstack"} type="radio" onClick={(e) => setDevType(e.target.value)} />
        </div>
      </div>

      <div>
        <div>
          <h3>¿Qué tecnologias usas?</h3>
        </div>

        <div>
            <h3>Lenguajes</h3>
          <label>Javascript</label>
          <input value={"javascript"} type="checkbox" onClick={(e) => (e.target.value)} />
        </div>

        <div>
            <h3>Lenguajes</h3>
          <label>TypeScript</label>
          <input value={"typeScript"} type="checkbox" onClick={(e) => (e.target.value)} />
        </div>

        <div>
            <h3>Lenguajes</h3>
          <label>Python</label>
          <input value={"python"} type="checkbox" onClick={(e) => (e.target.value)} />
        </div>

      </div>
    </div>
  );
}
