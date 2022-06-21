import React, { useState } from "react";
import { allCountries } from "./paises";

export default function Languages () {
    const [ country, setCountry ] = useState({
        country:"",
        city:""
    });


    // mas abajo están las funciones que traen todos los paises y ciudades
    // hay que pasar esas funciones escritas en express a funciones para redux-saga
    // el archivo paises.js ya no es necesario cuando se agregue la funcion que trae paises y ciudades

    const countrySelect = (e) => {
        if(e.target.value === 'Seleccionar País'){
            return
        }
        else{
            setCountry({...country, country: e.target.value});
        }
    };

    return (
        <div>
            <div><h3>¿De qué país eres?</h3></div>
            <select onClick={countrySelect}>
                <option>Seleccionar País</option>
                { allCountries.map(e => <option key={e} value={e}>{e}</option>) }
            </select>
        </div>
    );
};



// ESTA FUNCION TRAE LOS PAISES

// app.get('/', async (req, res) => {
//     try {
//         const data = (await axios.get("https://www.universal-tutorial.com/api/countries/", {
//             headers:{
//                 "authorization":" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJsdWNpYW5vZGF2aWQyMjAxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IjVKSlZNSVJwdmV4R2FMVXlkQkFhaU54V3FNLXBKdTNrTVZSaXdtT0xaSTdqd0tyQjc1eEZvOGFPTGlLRW45RzV1ZlEifSwiZXhwIjoxNjU1ODQ4MzcwfQ.2wapjXfAC7vhnXgZ05ayUTB4auafS-Uf4rRCmbrPg-g",
//             }
//         })).data

//         const paises = data.map(e => e.country_name);

//         res.send(paises);
        
//     } catch (error) {
//         console.log(error);
//     }
// });




// ESTA FUNCION TRAE LAS CIUDADES DE UN PAIS SEGUN EL PAIS QUE SE LE PASE, ahora tiene a Argentina
// cuando se mande el dispatch se tiene que llevar el country seleccionado
// entonces la funcion recibiría el pais como argumento y se lo agregaria a la url
// `https://www.universal-tutorial.com/api/states/${country}`

// app.get('/ciudades', async (req, res) => {
//     try {
//         // enviar la funcion a la action con el country.country
//         // (en la url de las actions) /states/${country}
//         const data = (await axios.get("https://www.universal-tutorial.com/api/states/Argentina", {
//             headers:{
//                 "authorization":" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJsdWNpYW5vZGF2aWQyMjAxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IjVKSlZNSVJwdmV4R2FMVXlkQkFhaU54V3FNLXBKdTNrTVZSaXdtT0xaSTdqd0tyQjc1eEZvOGFPTGlLRW45RzV1ZlEifSwiZXhwIjoxNjU1ODQ4MzcwfQ.2wapjXfAC7vhnXgZ05ayUTB4auafS-Uf4rRCmbrPg-g",
//             }
//         })).data

//         const ciudades = data.map(e => e.state_name);

//         res.send(ciudades);
        
//     } catch (error) {
//         console.log(error);
//     }
// });






// const [ langs, setLangs ] = useState({
//     Languages:[
//         {
//             lang:'',
//             level:''
//         }
//     ]
// })


// idiomas: [
//     {
//         idioma:'ingles',   
//         nivel: 'avanzado'
//     },
//     {
//         idioma:'portugues',   
//         nivel: 'principiante'
//     },
// ];




