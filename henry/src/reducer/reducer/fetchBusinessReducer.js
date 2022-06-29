import { 
    GET_PUBLICATION_STUDENTS_SUCCESS,GET_PUBLICAT_TECHNOLOGIES, GET_PUBLICAT_ENGLISH, 
    GET_PUBLICAT_UBICATION, GET_PUBLICAT_DEVTYPE,
    GET_ALL_STUDENTS_SUCCESS 
} from "../../constants/constants";

import { mokedFilesPostBusiness } from "../../Components/Home/HomeForBusiness/MokedFilesPublicaciones";

const initialState = {
  allPublications: [],
  allPublications2: mokedFilesPostBusiness,
  userFollows: [1,4,2,5,6,7,3,12,11,10,9],
  studentsFiltered: [],
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
            studentsFiltered: responseAlumnos
        };

    case GET_PUBLICAT_TECHNOLOGIES:
        let filtradoPorTech = state.studentsFiltered.filter(e => e.technologies.includes(action.payload));
        return {
            ...state,
            studentsFiltered: filtradoPorTech
        };

    case GET_PUBLICAT_ENGLISH:
        let filtradoPorEng = state.studentsFiltered.filter(e => e.languages === action.payload);
        return {
            ...state,
            studentsFiltered: filtradoPorEng
        };

    case GET_PUBLICAT_UBICATION:
        let filtradoPorUbication = state.studentsFiltered.filter(e => e.country === action.payload);
        return {
            ...state,
            studentsFiltered: filtradoPorUbication
        };

    case GET_PUBLICAT_DEVTYPE:
        let filtradoPorDevType = state.studentsFiltered.filter(e => e.backFront === action.payload);
        return {
            ...state,
            studentsFiltered: filtradoPorDevType
        };
    
    default:
      return {
        ...state,
      };
  }
};

export default fetchBusinessReducer;
