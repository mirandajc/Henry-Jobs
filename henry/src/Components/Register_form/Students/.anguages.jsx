import React, { useState } from "react";
import { allCountries } from "./paises";

export default function Languages () {
    const [ country, setCountry ] = useState({
        country:"",
        city:""
    });

    return (
        <div>
            <div><h3>¿De qué país eres?</h3></div>
            <select>
                { allCountries.map(e => <option key={e}>{e}</option>) }
            </select>
        </div>
    );
};