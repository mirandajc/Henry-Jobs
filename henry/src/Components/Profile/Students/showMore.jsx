import React from "react";
import { More } from "../profileStyles/studentCV";

export default function MostrarMas(){
    return(
        <More>

        <div>
        <input type="checkbox" className="read-more-state" id="post-1" />
      
        <p className="read-more-wrap">Hola! Soy Rene Durmiente. Soy Full-Stack developer, estudiante del Bootcamp Soy Henry.
       Me gusta mucho la tecnología, aprender cosas nuevas, e incorporar nuevas herramientas para poder aplicarlas a mis proyectos personales.
       Tengo conocimientos en: <span className="read-more-target">-JavaScript
      -Node.js
      -Express
      -Sequelize
      -React
      -Redux
      -Framework 7
      
      Actualmente soy TA en Soy Henry. Consiste en ser ayudante en las practicas de Pair programing, donde acompaño a personas que están empezando a cursar a dar sus primeros pasos. A su vez transitar con ellos toda la etapa de módulos, ayudando a despejar dudas con respecto a la cursada, o metodologías de trabajo. 
       Estas tareas, me han ayudado a trabajar mis habilidades blandas, y aplicar metodologías agiles como SCRUM.
      
      Para contactarme, mi mail es: ReneDurmiente@gmail.com 
      Por ultimo, si quieren ver mis proyectos, o mi código, los invito a pasar por mi GitHub!
      https://github.com/ReneDurmiente
      </span></p>
        
        <label for="post-1" className="read-more-trigger"></label>
      </div>
      
      <div>
        <input type="checkbox" className="read-more-state" id="post-2" />
      </div>

      </More>
    )
}