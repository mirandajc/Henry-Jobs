import { 
    GET_PUBLICATION_STUDENTS_SUCCESS,GET_PUBLICAT_TECHNOLOGIES, GET_PUBLICAT_ENGLISH, 
    GET_PUBLICAT_UBICATION, GET_PUBLICAT_DEVTYPE,
    GET_ALL_STUDENTS_SUCCESS,SHOW_FILTER,GET_PUBLICAT_WORKMODALITY,SET_STARS_ORDER
} from "../../constants/constants";

import { mokedFilesPostBusiness } from "../../Components/Home/HomeForBusiness/MokedFilesPublicaciones";

const initialState = {
  allPublications: [],
  allPublications2: mokedFilesPostBusiness,
  userFollows: ['62bc9dff5c41483e313e899a','62bc9dff5c41483e313e899ab','62bc9dff5c41483e313e899ac','62bc9dff5c41483e313e899ad','62bc9dff5c41483e313e899ae'],
  studentsFiltered: { render:[], filt: '' },
  publicatShow: [],
  allStudents: [],
  filtros: {
      technologies:"",
      english:"",
      ubication:"",
      devType:"",
      workModal:"",
      stars:""
  }
};

// los select del front solo cambian el estado filtros, cada vez que el filtro se actualice
    // hace un filter con lo que haya en filtros en allStudents y guarda el resultado en studentsFiltered
// pasar como dependencia [filtros] al useEffect para que haga el filtrado
// takeLatest para evitar bucle infinito ?


const fetchBusinessReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PUBLICATION_STUDENTS_SUCCESS:
        let fol1 = action.payload.filter(e => state.userFollows.includes(e.posterUser._id))
        let response = fol1.reverse();
        return { 
            ...state, 
            allPublications: response,
        };

    case GET_ALL_STUDENTS_SUCCESS:
        let responseAlumnos = action.payload.filter(e => e.userTypes === 1 || e.userTypes === 2);        
        return {
            ...state,
            allStudents: responseAlumnos,
            studentsFiltered: {...state, render: responseAlumnos}
        };

    ////////////////////////////////////////////////////////////////////////// CASOS DE FILTRADO //////

    case GET_PUBLICAT_TECHNOLOGIES:
        return {
            ...state,
            filtros: {...state.filtros, technologies: action.payload}
        };

    case GET_PUBLICAT_ENGLISH:
        return {
            ...state,
            filtros: {...state.filtros, english: action.payload}
        };

    case GET_PUBLICAT_UBICATION:
        return {
            ...state,
            filtros: {...state.filtros, ubication: action.payload}
        };

    case GET_PUBLICAT_DEVTYPE:
        return {
            ...state,
            filtros: {...state.filtros, devType: action.payload}
        };

    case GET_PUBLICAT_WORKMODALITY:
        return {
            ...state,
            filtros: {...state.filtros, workModal: action.payload}
        }
    
    case SET_STARS_ORDER:
        return {
            ...state,
            filtros: {...state.filtros, stars: action.payload }
        }
        
    case SHOW_FILTER: //////////////////// falta agregar modalidad de trabajo y ordenamiento por estrellas
        let alumnosFiltrados = state.allStudents;
        let b = ''
        if(state.filtros.technologies !== ""){
            alumnosFiltrados = alumnosFiltrados.filter(e => e.technologies.includes(state.filtros.technologies));
        }
        if(state.filtros.devType !== ""){
            alumnosFiltrados = alumnosFiltrados.filter(e => e.backFront === state.filtros.devType);
        }
        if(state.filtros.english !== ""){
            alumnosFiltrados = alumnosFiltrados.filter(e => e.languages === state.filtros.english);
        }
        if(state.filtros.ubication !== ""){
            alumnosFiltrados = alumnosFiltrados.filter(e => e.country === state.filtros.ubication);
        }
        if(state.filtros.workModal !== ""){
            alumnosFiltrados = alumnosFiltrados.filter(e => e.workModality === state.filtros.workModal);
        }
        if(state.filtros.stars !== ""){
            if(state.filtros.stars === "ASCENDENTE"){
                alumnosFiltrados = alumnosFiltrados.sort((a,b) => {
                    if(a.stars < b.stars) return -1;
                    if(b.stars < a.stars) return 1;
                    return 0;
                })
                b = '1'
            }
            if(state.filtros.stars === "DESCENDENTE"){
                alumnosFiltrados = alumnosFiltrados.sort((a,b) => {
                    if(a.stars < b.stars) return -1;
                    if(b.stars < a.stars) return 1;
                    return 0;
                })
                b = '2'
                alumnosFiltrados = alumnosFiltrados.reverse();
            }
        }
        return{
            ...state,
            studentsFiltered: {...state, render:alumnosFiltrados, filt: b },
        };
            
    default:
        return {
    ...state,
};
}
};

export default fetchBusinessReducer;
