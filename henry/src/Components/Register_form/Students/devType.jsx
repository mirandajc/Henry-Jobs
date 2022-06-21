import React, { useState } from "react";

export default function DevType() {
  const [ devType, setDevType ] = useState("");
  const [ tech, setTech ] = useState({
    languages:[],  
    frontend:[],   
    backend:[]     
  });

  const handleProgLangs = (e) => {  // aplicar esta funcion a todos los inputs que tengan checkbox
    if(e.target.checked === true){
      if(tech.languages.includes(e.target.value)){
        return;
      }else{
        return setTech({...tech, [e.target.name]: [...tech.languages, e.target.value]});
      }
    }
    else{
      return setTech({...tech, languages: tech.languages.filter(el => el !== e.target.value)});
    }
  };

   
  // como saber si los inputs type checkbox estan seleccionados o no ? => con e.target.checked, esto devuelve true o false 

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
          <input name="languages" value={"javascript"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
        </div>

        <div>
          <label>TypeScript</label>
          <input name="languages" value={"typeScript"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
        </div>

        <div>
          <label>Python</label>
          <input name="languages" value={"python"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
        </div>

      </div>
    </div>
  );
};
