import React, {useState, useEffect} from "react";
import StaffStudentsBusiness from "./StaffStudentsBusiness";
import StaffPublications from "./StaffPublications";
import { getInfoForStaff, ordenarAlumnos, getStudentDetail, staffShowOrder } from "../../../reducer/actions/actionStaff";
import { useDispatch, useSelector } from "react-redux";

export default function HomeForStaff(){
  
    const dispatch = useDispatch();
    
    //////////////////////////// estados de alumnos y empresas, y sus publicaciones respectivamente

    const alumnos = useSelector((state) => state.fetchStaffReducer.staffStudentDetail);
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
        dispatch(staffShowOrder());
    };

    ////////////////////////////// Ordenamientos de alumnos //////////////////////////////////

    const handleSelect = (e) => {
        if(e.target.value === "Orden"){
            dispatch(ordenarAlumnos(""));
            dispatch(staffShowOrder());
        }
        else{
            dispatch(ordenarAlumnos(e.target.value));
            dispatch(staffShowOrder());
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
            
                <select onChange={(e) => handleSelect(e)}>
                    <option>Orden</option>
                    <option>CV enviado ascendente</option>  {/* no cambiar contenido dentro del options */}
                    <option>CV enviado descendente</option>{/* no cambiar contenido dentro del options */}
                    <option>Stars ascendente</option>            {/* no cambiar contenido dentro del options */}
                    <option>Stars descendente</option>          {/* no cambiar contenido dentro del options */}
                </select> 
            
                </div>
            
            : null}

            {
                renderizar === "Alumnos" ? 
                alumnos.renderizar.map(e => <StaffStudentsBusiness name={e.name} profileImage={e.profileImage.secure_url} lastname={e.lastName} userName={e.userName} email={e.email} country={e.country} city={e.city} stars={e.stars} curriculumCounter={e.curriculumCounter}/>) :
                renderizar === "Empresas" ? empresas.map(e => <StaffStudentsBusiness name={e.name} profileImage={e.profileImage.secure_url} userName={e.userName} email={e.email} country={e.country} city={e.city} />) :
                renderizar === "AlumnosPub" ? <StaffPublications /> :
                renderizar === "EmpresasPub" ? <StaffPublications /> :
                null // Agregar algo: Bienvenido al panel de controls de staff, apreta un boton para visualizar el contenido
            }

        </div>
    )
}