import React,{useState} from "react";
import { Error } from "../../formStyles/formStyles";


export default function RecruiterFreelance({sumarFaseReq}){
    
    const [ error, setError ] = useState("");
    const [name,setName]= useState('');
    const [year,setYear]= useState('');
    const [work,setWork]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name ||!year ||!work ){
          setError("Rellena los campos");
        }
        else{
          setError("");
          //manejar info(guardarla)
          sumarFaseReq();
        }
      };


    const handlerName= (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        setName(e.target.value)

    };

    const handlerYears= (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        setYear(e.target.value)

    };

    const handlerWork= (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        setWork(e.target.value)

    };


return(
    <div>
        <div>
        <h2>¿Como se llama la empersa en la que trabajas??</h2>
        <input type='text' value={name} onChange={(e)=>handlerName(e)} />
        </div>
        <div>
        <h2>¿Hace cuantos años trabajas en la empresa?</h2>
        <input type='number' value={year} onChange={(e)=>handlerYears(e)} />
        </div>
        <div>
        <h2>¿Cual es tu puesto en dicha empresa?</h2>
        <input type='text' value={work} onChange={(e)=>handlerWork(e)} />
        </div>

        {error && <Error>{error} 😡</Error>}
        <button  type='submit' value='siguiente' onClick={(e)=> handleSubmit(e)}>Siguiente</button>
    </div>
)

}