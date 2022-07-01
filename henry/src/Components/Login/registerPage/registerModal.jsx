import React from "react";
import { CardRegister } from "../LoginStyles/registerStyle";
import {Link} from 'react-router-dom';

export default function RegisterCard(){
    return(
        <CardRegister>

            <div className="x">
                <Link to= '/login'> 
                <button>x</button>
                </Link>
            </div>
            <h1>Registrate! 🚀</h1>
            <div>
                <input placeholder="Nombre de usuario"/>
            </div>
            <div>
                <input placeholder="Nombre"/>
            </div>
            <div>
                <input placeholder="Apellido"/>
            </div>
            <div>
                <input placeholder="Mail"/>
            </div>
            <div>
                <input placeholder="Contraseña" type='password'/>
            </div>

            <div>
                <button>Enviar!</button>
            </div>
        </CardRegister>
    )
}