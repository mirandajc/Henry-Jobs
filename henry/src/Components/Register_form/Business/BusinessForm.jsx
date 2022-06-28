import React, { useState } from "react";
import { countries } from "../gistfile1.json";
import { Error } from "../formStyles/formStyles";
import { FormDiv, CountryForm ,EnglishLVL, OtherStudies,ButtonNext,ListStyles} from "../formStyles/lenguajesStyles";

export default function BusinessForm ({sumarFase}) {

    ///////////////////////////// NAME ////////////////////////////////////////////
    
    const [ name, setName ] = useState("");
    const [ nameError, setNameError ] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    ///////////////////////////// AGE /////////////////////////////////////////////

    const [ age, setAge ] = useState("");
    const [ errorAge, setErrorAge ] = useState("");

    const handleAge = (e) => {
        if(e.target.value > 1300){
            setAge(e.target.value);
            setErrorAge("Ingresa una antigüedad válida");
        }
        else{
            setErrorAge("");
            setAge(e.target.value);
        }
    };

    ///////////////////////////// CUIT ////////////////////////////////////////////

    const [ cuit, setCuit ] = useState("");
    const [ errorCuit, setErrorCuit ] = useState("");
    
    const handleCuit = (e) => {
        if(/^((2[034567]|3[034])\d{9}|(2[034567]|3[034])-\d{8}-\d)$/gim.test(e.target.value)){
            setErrorCuit("");
            setCuit(e.target.value);
        }
        else if(e.target.value === ""){
            setErrorCuit("")
            setCuit(e.target.value);
        }
        else{
            setErrorCuit("Ingresa un CUIT válido");
            setCuit(e.target.value);
        }
    };

    ///////////////////////////// COUNTRY & CITY ///////////////////////////////////

    const [ country, setCountry ] = useState({
        country: "",
        city: ""
    });

    const [ errorCountry, setErrorCountry ] = useState("");

    const [ allCities, setAllCities ] = useState([]); 
    // aca se guardan las opciones que mostrará la seleccion de ciudades segun el país seleccionado
    
    const countrySelect = (e) => { 
        // cada vez que se seleccione un pais, se selecciona un pais y la ciudad en blanco
        // porque si no se limpia la ciudad el estado podria quedar "Argentina, Manchester"
        let pais = e.target.value
        if(pais === "Selecciona un País"){
            return setCountry({...country, country: "", city:""});
        }
        else if(pais === country.country){
            return;
        }
        else{
            setCountry({...country, country: e.target.value, city:""});
            setAllCities(countries.find(el => el.country === pais).states) // aca se guardan las provincias y estados                                         
        }                                                                  // según el país seleccionado
    };
    
    const citySelect = (e) => {
        if(e.target.value === "Selecciona una provincia/estado"){
            setCountry({...country, city: ""});
            return;
        }
        else{
            setErrorCountry("");
            setCountry({...country, city: e.target.value});
        }
    };

    /////////////////////////////////////// SUBMIT ////////////////////////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            return setNameError("Ingresa un nombre válido");
        }
        else{
            setNameError("");
        }
        if(!age){
            return setErrorAge("Ingresa una antigüedad válida");
        }
        else{
            setErrorAge("");
        }
        if(!cuit){
            return setErrorCuit("Ingrese un CUIT válido");
        }
        else{
            setErrorCuit("");
        }
        if(!country.country){
            return setErrorCountry("Tienes que agregar un país y una ciudad!");
        }
        else if(country.country && !country.city){
            return setErrorCountry("Tienes que agregar una ciudad!");
        }
        else{
            setErrorCountry("");
        }
        if(errorAge || errorCuit || nameError || errorCountry ){
            return;
        }
        else{
            //manejar info(GUARDAR)
            return sumarFase();
        }
    };

    return(
        <div>

            <div>
                <h1>Ingresa el nombre de tu empresa</h1>
                { nameError && <span>{ nameError }</span> }
                <input type={"text"} value={name} placeholder="Ej: Soy Henry" onChange={(e) => handleName(e)}/>
            </div>

            <div>
                <h1>¿Cuántos años de antigüedad tiene tu empresa?</h1>
                { errorAge && <Error>{errorAge}</Error> }
                <input type={"number"} value={age} onChange={(e) => handleAge(e)}/>
            </div>

            <div>
                <h1>Ingresa el CUIT de tu empresa</h1>
                { errorCuit && <Error>{errorCuit}</Error> }
                <input type={"text"} value={cuit} placeholder="00-00000000-0" onChange={(e) => handleCuit(e)}/>
            </div>
            
            <CountryForm>
                <h2>¿En que país se encuentra registrada?</h2>
                <div className="lado">

                <h2>País:</h2> 
                <select onClick={(e) => countrySelect(e)}>
                    <option>Selecciona un País</option>
                    {countries && countries.map(e => {
                        return <option>{e.country}</option>
                    })}
                </select>
                </div>

                {allCities && <div className="lado">
                    <h2>Provincia/Estado:</h2>
                    <select onClick={(e) => citySelect(e)}>
                        <option>Selecciona una provincia/estado</option>
                        {allCities.map(e => {
                            return <option>{e}</option>
                        })}
                    </select>
                    </div>}

                        { errorCountry && <Error>{errorCountry} 😡</Error>}

            </CountryForm>
            
            <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>Siguiente</button>
        </div>
    );
};