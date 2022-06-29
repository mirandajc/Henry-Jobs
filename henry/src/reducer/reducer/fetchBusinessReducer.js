import { 
    GET_PUBLICATION_STUDENTS_SUCCESS,GET_PUBLICAT_TECHNOLOGIES, GET_PUBLICAT_ENGLISH,
    GET_PUBLICAT_WORKMODALITY, GET_PUBLICAT_UBICATION, GET_PUBLICAT_DEVTYPE,
    GET_ALL_STUDENTS_SUCCESS 
} from "../../constants/constants";

const initialState = {
  allPublications: [],
  userFollows: [1,4,2,5,6,7,3,12,11,10,9],
  studentsFiltered: [],
  publicatShow: [],
  allStudents: []
};

const fetchBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLICATION_STUDENTS_SUCCESS:
        let fol1 = action.payload.filter(e => state.userFollows.includes(e.id))
        let response = fol1.reverse();
       return { 
        ...state, 
        allPublications: response,
    };

    case GET_ALL_STUDENTS_SUCCESS:
        console.log(action.payload)
        return {
            ...state,
            allStudents: action.payload,
            studentsFiltered: action.payload
        };

    case GET_PUBLICAT_TECHNOLOGIES:
        let filtradoPorTech = state.studentsFiltered.filter(e => e.technologies.includes(action.payload));
        return {
            ...state,
            studentsFiltered: filtradoPorTech
        };

    case GET_PUBLICAT_ENGLISH:
        let filtradoPorEng = state.studentsFiltered.filter(e => e.english === action.payload);
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
