// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AlumnCont } from "../formStyles/faceAlumn";
// import { Switch, Error } from "../formStyles/formStyles";



// export default function RecruiterMood({sumarFaseReq}) {
//   let navigate = useNavigate();
//   const [ instance, setInstance ] = useState("");
//   const [ error, setError ] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     if(!instance){
//       setError("Selecciona una instancia");
//     }
//     else{
//       setError("");
//       //manejar info(guardarla)
//       sumarFaseReq();
//     }

//   };

//   const settingValue = (e) => {
//     if(e.target.checked === true){
//       if(e.target.value === "Contratado"){
//         setInstance(e.target.value);
//         document.getElementById('Freelance').checked = false;
//       }
//       else if(e.target.value === "Freelance"){
//         setInstance("Freelance");
//         document.getElementById('Contratado').checked = false;
//     }
//   }
//   };

//   return (
//     <AlumnCont>
      
//         <h1>¿En qué instancia estas actualmente?</h1>
      

//       <div>
//         <label>Contratado</label>
//         <Switch>
//         <label class="switch">
//         <input type="checkbox" id='Contratado' value={'Contratado'} onClick={(e) => settingValue(e)}/>
//          <span class="slider round"></span>
//         </label>
//         </Switch>
        
//       </div>

//       <div>
//         <label>Freelance</label>
//         <Switch>
//         <label class="switch">
//         <input type="checkbox" id="Freelance" value={'Freelance'} onClick={(e) => settingValue(e)}/>
//          <span class="slider round"></span>
//         </label>
//         </Switch>
      
//       </div>

//       { error && <Error>{error}😡</Error> }

//       <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>Siguiente</button>
//     </AlumnCont>
//   );
// };
