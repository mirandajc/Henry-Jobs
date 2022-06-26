import React, { useState } from "react";
import { countries } from "../gistfile1.json";
import { Error } from "../formStyles/formStyles";
import { FormDiv, CountryForm ,EnglishLVL, OtherStudies,ButtonNext,ListStyles} from "../formStyles/lenguajesStyles";
import { RecruiterCont } from "../formStyles/recruiterForm";
import { QueryReq, CountryCont, EnglishNv, TercerCont, Studies} from "../formStyles/recruiterForm";



export default function RecruiterForm ({sumarFase}) {

    ///////////////////////////// nombre de empresa para la cual trabaja ////////////////////////////////////////////
    
    const [ name, setName ] = useState("");
    const [ errorName, setErrorName ] = useState("");

    const validateName = (e) => {
        setName(e.target.value);
    };

    ///////////////////////////// antigüedad en la empresa /////////////////////////////////////////////

    const [ age, setAge ] = useState("");
    const [ errorAge, setErrorAge ] = useState("");
    
    const handleAge = (e) => {
        if(e.target.value > 75){
            setAge(e.target.value);
            setErrorAge("Ingresa una edad válida");
        }
        else{
            setErrorAge("");
            setAge(e.target.value);
        }
    };

    /////////////////////////// PUESTO ///////////////////////////////////////////

    const [ puesto, setPuesto ] = useState("");
    const [ errorPuesto, setErrorPuesto ] = useState("");
    
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
            setCountry({...country, city: e.target.value});
        }
    };

    ///////////////////////////    LANGUAGES      ///////////////////////////////
    
    //V2
    const [ nivel, setNivel ] = useState("");
    const [ errorNivel, setErrorNivel ] = useState("")
    
    const selectIngles = (e) => {
        let lvl = e.target.value;
        if(lvl === "Seleccionar nivel"){
            setNivel("")
        }
        else if(lvl === "No sé Ingles"){
            setNivel("No sé ingles")
            return;
        }
        else{
            setNivel(lvl);
        }
    };


    //////////////////////////    OTROS ESTUDIOS      ///////////////////////////////


    const [ studyInput, setStudyInput ] = useState("");
    const [ study, setStudy ] = useState([]); // Arreglo de strings, que son los estudios.
    const [ errorStudy, setErrorStudy ] = useState(''); // verificaciones.
        
    const borrarEstudio = (value) => {
        setStudy(study.filter(e => e !== value));
    };
        
    const validateStudy = (value) => {
        if(value === ""){
            setErrorStudy("");
             setStudyInput(value);
        }
        else if(/^\d*\d$/gim.test(value)){
            setErrorStudy('El estudio no debe contener números!');
        }
        else{
            setErrorStudy('');                
            setStudyInput(value);
        }
    };
        
    const agregarEstudios = () => {
        // let value = document.getElementById('estudios').value;
        if(studyInput === ""){
            setErrorStudy("");            
        }
        else{
            setErrorStudy("");
            if(study.includes(studyInput)){
                setErrorStudy("Ya has agregado ese estudio!")
            }
            else{
                if(errorStudy === ""){
                    setStudy([...study, studyInput ]);
                    setStudyInput = "";                       
                }
            }
        }
    };

    /////////////////////////////////////// SUBMIT ////////////////////////////////////////////

    const handleSubmit = (e) => {
        if(!name){
            return setErrorName("ingresa un nombre válido");
        }
        else{
            setErrorName("");
        }
        if(!age){
            return setErrorAge("ingresa una antigüedad válida");
        }
        else{
            setErrorAge("");
        }
        if(!puesto){
            return setErrorPuesto("Ingresa un puesto válido");
        }
        else{
            setErrorPuesto("");
        }
        e.preventDefault();
        if(!country.country){
            return setErrorCountry("Tienes que agregar un país y una ciudad!");
        }
        else if(country.country && !country.city){
            return setErrorCountry("Tienes que agregar una ciudad!");
        }
        else{
            setErrorCountry("");
        }
        if(!nivel){
            return setErrorNivel("Selecciona un nivel de inglés");
        }
        else{
            setErrorNivel("");
        }
        if(errorAge || errorCountry || errorName || errorPuesto || errorStudy || errorNivel){
            return
        }
        else{
            return sumarFase();
        }
    };

    return(
        <RecruiterCont>

            <QueryReq>
                <h2>¿En qué empresa trabajas actualmente?</h2>
                <input type={"text"} value={name} onChange={(e) => validateName(e)} />
                { errorName && <span>{ errorName }</span>}
            
                <h2>¿Hace cuanto trabajas en la empresa?</h2>
                <input type={"number"} value={age} onChange={(e) => handleAge(e)}/>
                { errorAge && <Error>{errorAge}</Error> }
            
                <h2>¿Cual es tu puesto en dicha empresa?</h2>
                <input type={"text"} value={puesto} onChange={(e) => setPuesto(e.target.value)} />
                { errorPuesto && errorPuesto }
            </QueryReq>
            
            <CountryCont>
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

            </CountryCont>

            {/* NIVEL DE INGLES  */}
            <TercerCont>
            <EnglishNv>
                <h2>¿Cual es tu nivel de inglés?</h2>
                { errorNivel && <span>{ errorNivel }</span> }
                <select onClick={(e) => selectIngles(e)}>
                    <option>Seleccionar nivel</option>
                    <option>No sé Ingles</option>
                    <option>Ingles Básico</option>
                    <option>Ingles Intermedio</option>
                    <option>Ingles Avanzado</option>
                </select>
            </EnglishNv>
            {/* NIVEL DE INGLES  */}

            {/* OTROS ESTUDIOS  */}
            <Studies>
                <h2>¿Tienes otros estudios?</h2>
                <div>
                <input id="estudios" type={'text'} value={studyInput} placeholder={'Agrega tus estudios!'} onChange={(e) => validateStudy(e.target.value)}/>
                <button  className='agregar' onClick={agregarEstudios}>AGREGAR</button>
                </div>

                <div>
                </div>
                    {errorStudy && <Error>{errorStudy}</Error>}
                    {study && study.map(e => {
                        return(
                            <ListStyles key={e}>
                                <p>{e}</p><button onClick={() => borrarEstudio(e)} title="borrar estudio">X</button>
                            </ListStyles>
                        );
                    })}

            </Studies>
            <button type="submit" value={"siguiente"} onClick={(e) => handleSubmit(e)}>Siguiente</button>
            </TercerCont>
            {/* OTROS ESTUDIOS  */}
            
        </RecruiterCont>
    );
};