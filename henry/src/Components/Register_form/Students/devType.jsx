import React, { useState } from "react";

export default function DevType() {
  const [ devType, setDevType ] = useState("");
  const [ tech, setTech ] = useState({
    languages:[],
    frontend:[],
    backend:[]
  });

  return (
    <div>
      <div>

        <div>
          <h3>¿Qué tipo de desarrollador Eres?</h3>
        </div>

        <div>
          <label>Frontend</label>
          <input value={"frontend"} type="checkbox" onClick={(e) => setDevType(e.target.value)} />
        </div>

        <div>
          <label>Backend</label>
          <input value={"backend"} type="checkbox" onClick={(e) => setDevType(e.target.value)} />
        </div>

        <div>
          <label>Fullstack</label>
          <input value={"fullstack"} type="checkbox" onClick={(e) => setDevType(e.target.value)} />
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

      </div>
    </div>
  );
}
