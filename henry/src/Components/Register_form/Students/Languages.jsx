import React, { useState } from "react";
import { countries } from "../gistfile1.json";
import { FormDiv, CountryForm ,EnglishLVL, OtherStudies,ButtonNext,ListStyles} from "../formStyles/lenguajesStyles";
import { Error } from "../formStyles/formStyles";

// hacer funcion de handle
// hacer verificaciones

export default function Languages ({sumarFase}) {
    
    /////////////////////////    COUNTRY & CITY    //////////////////////////////
    
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
    
    const selectIngles = (e) => {
        let lvl = e.target.value;
        if(lvl === "Seleccionar nivel" || lvl === "No sé Ingles"){
            setNivel("")
            return;
        }
        else{
            setNivel(lvl);
        }
    };
    
    //////////////////////////    OTROS ESTUDIOS      ///////////////////////////////
    
    const [ study, setStudy ] = useState([]);
    const [ errorStudy, setErrorStudy ] = useState('');
    
    const borrarEstudio = (value) => {
        setStudy(study.filter(e => e !== value));
    };
    
    
    
    const validateStudy = (value) => {
        if(!/[a-zA-Z ]/gim.test(value)){
            setErrorStudy('El estudio no debe contener números!');
        }
        else{
            setErrorStudy('');
        }
    };
    
    const agregarEstudios = () => {
        let value = document.getElementById('estudios').value;
        if(value === ""){
            setErrorStudy("Debes escribir el estudio para poder agregarlo! 😡");
        }
        else if(!/[a-zA-Z ]/gim.test(value)){
            setErrorStudy('El estudio no debe contener números! 😡');
        }
        else{
            console.log(value)
            setErrorStudy("");
            if(study.includes(value)){
                setErrorStudy("Ya has agregado ese estudio!")
            }
            else{
                if(errorStudy === ""){
                    setStudy([...study, value ]);
                    document.getElementById("estudios").innerText = ""; // NO SE
                }
            }
        }
    };
    
    //////////////////////////     SUBMIT      ///////////////////////////
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!country.country){
            return setErrorCountry("Tienes que agregar un país y una ciudad!");
        }
        else if(country.country && !country.city){
            return setErrorCountry("Tienes que agregar una ciudad!");
        }
        else{
            setErrorCountry("");
            //manejar info(GUARDAR)
            return sumarFase();
        }
    };
    
    return (
        <FormDiv>

            {/* PAIS Y CIUDAD  */}
            <CountryForm>
                <h2>¿De dónde eres?</h2>
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
            {/* PAIS Y CIUDAD  */}

            {/* NIVEL DE INGLES  */}
            <EnglishLVL>
                <h2>¿Cual es tu nivel de inglés?</h2>
                <select onClick={(e) => selectIngles(e)}>
                    <option>Seleccionar nivel</option>
                    <option>No sé Ingles</option>
                    <option>Ingles Básico</option>
                    <option>Ingles Intermedio</option>
                    <option>Ingles Avanzado</option>
                </select>
            </EnglishLVL>
            {/* NIVEL DE INGLES  */}

            {/* OTROS ESTUDIOS  */}
            <OtherStudies>
                <h2>¿Tienes otros estudios?</h2>
                <div>
                <input id="estudios" type={'text'} placeholder={'Agrega tus estudios!'} onChange={(e) => validateStudy(e.target.value)}/>
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

            </OtherStudies>
            {/* OTROS ESTUDIOS  */}


            <ButtonNext>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Siguiente</button>
            </ButtonNext>
        </FormDiv>
    );
};





// V1 NO BORRAR!

// import { idiomas } from "./idiomas"

// const [ languages, setLanguages ] = useState([]); // lenguaje seleccionado, esta info no se manda
// const [ languageLvl, setLanguageLvl ] = useState([]); // nivel de lenguaje, ESTA INFO SE MANDA
//                                                       // ejemplo: "Ingles intermedio"

// const languagesSelect = (e) => {
//     if(e.target.value === 'Seleccionar Idiomas' || languages.includes(e.target.value)){
//         return
//     }
//     else{
//         setLanguages([...languages, e.target.value]); // agrega un idioma para luego seleccionar el nivel
//     }
// };

// const selectLang = (e) => {
//     if(e.target.value.includes('Seleccionar') || languageLvl.includes(e.target.value)){
//         return;
//     }
//     else{
//         setLanguageLvl([...languageLvl, e.target.value]); // agrega un idioma con su nivel
//         setLanguages(languages.filter(el => !e.target.value.includes(el))); // elimina la seleccion de nivel de idioma
//     }                                                                       // ya que el nivel de idioma fue agregado
// };

// const onClose = (e) => {
//     setLanguages(languages.filter(el => el !== e)); // elimina el idioma seleccionado más la seleccion de nivel de idioma
//     setLanguageLvl(languageLvl.filter(el => !el.includes(e)));
// };

// const onCloseLvl = (e) => {
//     setLanguageLvl(languageLvl.filter(el => el !== e)); // elimina un idioma con su nivel
// };


// V1 DENTRO DEL RETURN
{/* <div>
<h1>¿Qué idiomas hablas?</h1>
{languageLvl && languageLvl.map(e => {
    return(
            <div><p>{e}</p><button title="borrar idioma" onClick={() => onCloseLvl(e)}>X</button></div>
        );
    })}
    {languages && languages.map((e) => {
        return(
            <div key={e}>
                <select onClick={selectLang}>
                    <option>Seleccionar Nivel de {e}</option>
                    <option>{e} Principiante</option>
                    <option>{e} Intermedio</option>
                    <option>{e} Avanzado</option>
                </select>
                <button title="borrar idioma" onClick={() => onClose(e)}>X</button>
            </div>
        );
    })}

    <select id="dropdown" defaultValue={'Seleccionar Idiomas'} onClick={(e) => languagesSelect(e)}>
        <option>Seleccionar Idiomas</option>
        { idiomas.map(e => <option key={e} value={e}>{e}</option>) }
    </select>
</div> */}