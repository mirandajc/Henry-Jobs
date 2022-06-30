import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import StaffStudentsBusiness from "./StaffStudentsBusiness";
import StaffPublications from "./StaffPublications";
import { getInfoForStaff, ordenarAlumnos, getStudentDetail } from "../../../reducer/actions/actionStaff";


export default function HomeForStaff(){

    const dispatch = useDispatch();
    
    //////////////////////////// estados de alumnos y empresas, y sus publicaciones respectivamente

    const alumnos = useSelector(state => state.fetchStaffReducer.staffStudentDetail);
    const empresas = useSelector(state => state.fetchStaffReducer.staffAllBusiness);
    const alumnosPub = useSelector(state => state.fetchStaffReducer.staffAllStudentsPublications);
    const empresasPub = useSelector(state => state.fetchStaffReducer.staffAllBusinessPublications);

    //////////////////////////// Llena los estados ///////////////////////////////////////

    useEffect(() => {
        dispatch(getInfoForStaff());
    }, []);

    //////////////////////////// Seleccion de botones /////////////////////////////////////
    
    const [ renderizar, setRenderizar ] = useState("");
    
    const handleClick = (value) => {
        setRenderizar(value);
    };

    ///////////////////////////// Buscador de Alumnos /////////////////////////////////////

    const [ buscador, setBuscador ] = useState("");

    const handleChange = (value) => {
        setBuscador(value);
        dispatch(getStudentDetail(value));
    };

    ////////////////////////////// Ordenamientos de alumnos //////////////////////////////////

    const handleSelect = (value) => {
        if(value === "Orden"){
            dispatch(ordenarAlumnos(""));
            dispatch(getStudentDetail(buscador))
            console.log("quitando orden", alumnos)
        }
        else{
            dispatch(ordenarAlumnos(value));
            dispatch(getStudentDetail(buscador))
            console.log("ordenando", alumnos)
        }
    };


    return (
        <div>
            <button value={"Alumnos"} onClick={(e) => handleClick(e.target.value)}>Alumnos</button>
            <button value={"AlumnosPub"} onClick={(e) => handleClick(e.target.value)}>Publicaciones de Alumnos</button>
            <button value={"Empresas"} onClick={(e) => handleClick(e.target.value)}>Empresas</button>
            <button value={"EmpresasPub"} onClick={(e) => handleClick(e.target.value)}>Publicaciones de Empresas</button>
            
            { renderizar === "Alumnos" ?
                <div>
                <input value ={buscador} onChange={(e) => handleChange(e.target.value)}/>
            
                <select onChange={(e) => handleSelect(e.target.value)}>
                    <option>Orden</option>
                    <option value={"CV enviado ascendente"}>CV enviado ascendente</option> {/* no cambiar contenido dentro del options */}
                    <option value={"CV enviado descendente"}>CV enviado descendente</option>{/* no cambiar contenido dentro del options */}
                    <option value={"Stars ascendente"}>Stars ascendente</option>      {/* no cambiar contenido dentro del options */}
                    <option value={"Stars descendente"}>Stars descendente</option>     {/* no cambiar contenido dentro del options */}
                </select> 
            
                {console.log(alumnos)}
            
                </div>
            
            : null}

            {
                renderizar === "Alumnos" ? <StaffStudentsBusiness /> :
                renderizar === "Empresas" ? <StaffStudentsBusiness /> :
                renderizar === "AlumnosPub" ? <StaffPublications /> :
                renderizar === "EmpresasPub" ? <StaffPublications /> :
                null // Agregar algo Bienvenido al panel de controls de staff, apreta un boton
            }

        </div>
    )
}