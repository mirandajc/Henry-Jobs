import React, { useState } from "react";

export default function UserType () {
    const [ type, setType ] = useState("");

    const handleSubmit = () => {
        // /register  =>  /register/:type
    };

    return(
        <form onSubmit={handleSubmit}>
            <div><h3>¿Qué tipo de usuario eres?</h3></div>

            <div>
            <label>Alumno</label><input name="alumno" value={"alumno"} type="checkbox" onClick={(e) => setType(e.target.value)} />
            </div>

            <div>
            <label>Empresa</label><input name="empresa" value={"empresa"} type="checkbox" onClick={(e) => setType(e.target.value)} />
            </div>

            <div>
            <label>Reclutador</label><input name="reclutador" value={"reclutador"} type="checkbox" onClick={(e) => setType(e.target.value)} />
            </div>

            <button type="submit" value={'siguiente'}/>
        </form>
    );
};