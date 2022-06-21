import React, { useState } from "react";
import javascript from "./img/javascript.png";
import typescript from "./img/typescript.png";
import python from "./img/python.png";
import react from "./img/react.png";
import redux from "./img/redux.png";
import react_native from "./img/react-native-logo.png";
import css  from "./img/css.png";
import angular from "./img/angular.png";
import tailwind from "./img/Tailwind_CSS_Logo.svg.png";
import laravel from "./img/laravel.png";
import vue from "./img/vue.png";
import express from "./img/express.png";
import php from "./img/php.png";
import sql from "./img/sql.png";
import postgres from "./img/Postgresql_elephant.svg.png";


export default function DevType() {
  const [ devType, setDevType ] = useState("");
  const [ tech, setTech ] = useState({
    languages:[],  
    frontend:[],   
    backend:[]     
  });

  // esta funcion setea el estado de tech
  // como saber si los inputs type checkbox estan seleccionados o no ? => con e.target.checked, esto devuelve true o false 
  const handleProgLangs = (e) => {  // aplicar esta funcion a todos los inputs que tengan checkbox
    if(e.target.checked === true){ // si el checkbox esta seleccionado
      if(tech[e.target.name].includes(e.target.value)){
        return; // si el value ya esta agregado al estado, sale de la funcion
      }else{   // sino aca lo agrega
        return setTech({...tech, [e.target.name]: [...tech[e.target.name], e.target.value]});
      }
    }
    else{  // si el checkbox fue desmarcado, quita ese valor del arreglo de tecnologias
      return setTech({...tech, [e.target.name]: tech[e.target.name].filter(el => el !== e.target.value)});
    }                          
  };                           

  return (
    <div>
      <div>

        <div>
          <h3>¿Qué tipo de desarrollador Eres?</h3>
        </div>

        <div>
          <label>Frontend</label>
          <input name="devType" value={"Frontend"} type="radio" onClick={(e) => setDevType(e.target.value)} />
        </div>

        <div>
          <label>Backend</label>
          <input name="devType" value={"Backend"} type="radio" onClick={(e) => setDevType(e.target.value)} />
        </div>

        <div>
          <label>Fullstack</label>
          <input name="devType" value={"Fullstack"} type="radio" onClick={(e) => setDevType(e.target.value)} />
        </div>
      </div>

      <div>
        <div>
          <h3>¿Qué tecnologias usas?</h3>
        </div>

        <div>
            <h3>Lenguajes</h3>
            
          {/* <label>Javascript</label> */}
          <img src={javascript} title="Javascript" alt="Javascript" width={"70px"} />
          <input name="languages" value={"Javascript"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>TypeScript</label> */}
          <img src={typescript} title="Typecript" alt="Typescript" width={"70px"} />
          <input name="languages" value={"Typescript"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>Python</label> */}
          <img src={python} title="Python" alt="Python" width={"70px"} />
          <input name="languages" value={"Python"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
        </div>

        <div>
            <h3>Frontend</h3>

          {/* <label>React</label> */}
          <img src={react} title="React" alt="React" width={"70px"} />
          <input name="frontend" value={"React"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>Redux</label> */}
          <img src={redux} title="Redux" alt="Redux" width={"70px"} />
          <input name="frontend" value={"Redux"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>React Native</label> */}
          <img src={react_native} title="React Native" alt="React Native" width={"70px"} />
          <input name="frontend" value={"React Native"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>CSS</label> */}
          <img src={css} title="CSS" alt="CSS" width={"70px"} />
          <input name="frontend" value={"CSS"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          <br />

          {/* <label>Angular</label> */}
          <img src={angular} title="Angular" alt="Angular" width={"70px"} />
          <input name="frontend" value={"Angular"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>Tailwind</label> */}
          <img src={tailwind} title="Tailwind" alt="Tailwind" width={"70px"} />
          <input name="frontend" value={"Tailwind"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
          
          {/* <label>Laravel</label> */}
          <img src={laravel} title="Laravel" alt="Laravel" width={"70px"} />
          <input name="frontend" value={"Laravel"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
     
          {/* <label>Vue</label> */}
          <img src={vue} title="Vue" alt="Vue" width={"70px"} />
          <input name="frontend" value={"Vue"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
        </div>


        <div>
            <h3>Backend</h3>
            
          {/* <label>Express Js</label> */}
          <img src={express} title="Express JS" alt="Express Js" width={"70px"} />
          <input name="backend" value={"Express Js"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
          
          {/* <label>Php</label> */}
          <img src={php} title="Php" alt="Php" width={"70px"} />
          <input name="backend" value={"Php"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>SQL</label> */}
          <img src={sql} title="SQL" alt="SQL" width={"70px"} />
          <input name="backend" value={"SQL"} type="checkbox" onClick={(e) => handleProgLangs(e)} />

          {/* <label>PostgreSQL</label> */}
          <img src={postgres} title="PostgreSQL" alt="PostgreSQL" width={"70px"} />
          <input name="backend" value={"PostgreSQL"} type="checkbox" onClick={(e) => handleProgLangs(e)} />
        </div>

      </div>

      <button type="submit">Siguiente</button>
    </div>
  );
};
