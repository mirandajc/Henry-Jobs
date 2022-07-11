import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cardpremium.css";


export default function PremiumCard () {


  const [userT, setUserT] = useState();

  const tal = localStorage.getItem('TK')
  const userType = JSON.parse(tal);
    
  useEffect(() => {
    if(userType !== undefined && userType !== null){
      setUserT(userType.id)
    } 
  },[userType])



  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <h2 class="java">HenryPlan 1</h2>
            <p class="java">
            - Con el primer plan podrás: <br/><br/>
             . Acceder a mayor visibilidad que usuarios comunes <br/>
             . Acceder a la ubicación compartida por los usuarios<br/>
            </p>
            <Link to={`/checkout1/${userType.id}`}><button>Premium</button></Link>
          </div>
        </div>
        <div class="face face2">
          <h2>01</h2>
        </div>
      </div>
{/* 
      <div class="card">
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <h2 class="python">HenryPlan 2</h2>
            <p class="python">
            - Con el plan número dos podrás: <br/><br/>
             . Acceder a mayor exposición que usuarios comunes y nivel 1 <br/>
             . Acceder al perfil de los estudiantes <br/>
            </p>
            <Link to="/checkout2"><button>Premium</button></Link>
          </div>
        </div>
        <div class="face face2">
          <h2>02</h2>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <h2 class="cSharp">HenryPlan 3</h2>
            <p class="cSharp">
            - Con el último plan podrás: <br/><br/>
             . Acceder a la mayor exposición de la plataforma <br/>
             <br/>
            </p>
            <Link to="/checkout3"><button>Premium</button></Link>
          </div>
        </div>
        <div class="face face2">
          <h2>03</h2>
        </div>
      </div> */}
    </div>
  );
}





