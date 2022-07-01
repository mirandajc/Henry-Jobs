import {
    GET_PUBLICATIONS_BUSINESS,
    GET_PUBLICATIONS_BUSINESS_SUCCESS,
    GET_PUBLICATIONS_TECHNOLOGIES,
    GET_PUBLICATIONS_DEVTYPE,
    GET_PUBLICATIONS_WORK_MODALITY,
    GET_PUBLICATIONS_ENGLISH,
    GET_PUBLICATIONS_UBICATION,
    SHOW_FILTER
} from "../../constants/constants";

const initialState = {
    AllPublications:[],
    userFollows: [1,4,2,5,6,7,3,12,11,10,9],
    busPublication:[],
    publicationsFiltered:[],
    filtrosos: {
        technologies:"",
        english:"",
        ubication:"",
        devType:"",
        workModality:"",
    }
};

const fetchStudentsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_PUBLICATIONS_BUSINESS_SUCCESS:

            let fol1 = action.payload.filter(e => state.userFollows.includes(e.posterUser._id))
            let response = fol1.reverse();
            let responseBusiness = fol1.filter(e => e.posterUser.userTypes === 4 || e.posterUser.userTypes === 5);

            return {
                ...state,
                AllPublications: response,
                busPublication: responseBusiness,
                publicationsFiltered: responseBusiness
            }
        
        case GET_PUBLICATIONS_TECHNOLOGIES:
            return {
                ...state,
                filtrosos:{...state.filtrosos, technologies: action.payload}
            }

        case GET_PUBLICATIONS_DEVTYPE:
            return{
                ...state,
                filtrosos:{...state.filtrosos, devType: action.payload}
        }

        case GET_PUBLICATIONS_ENGLISH:
            return{
                ...state,
                filtrosos:{...state.filtrosos, english: action.payload}
        }

        case GET_PUBLICATIONS_WORK_MODALITY:
            return{
                ...state,
                filtrosos:{...state.filtrosos, workModality: action.payload}
        }

        case GET_PUBLICATIONS_UBICATION:
            return{
                ...state,
                filtrosos:{...state.filtrosos, ubication: action.payload}
        }
        
        case SHOW_FILTER:
            let publicacionesFiltradas = state.busPublication

            if(state.filtrosos.technologies !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.technologies.includes(state.filtrosos.technologies))
            }
            else if(state.filtrosos.devType !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.backFront === state.filtrosos.devType)
            }
            else if(state.filtrosos.english !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.languages === state.filtrosos.english)
            }
            else if(state.filtrosos.workModality !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.workModality === state.filtrosos.workModality)
            }
            else if(state.filtrosos.ubication !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.country === state.filtrosos.ubication)
            }
            else{

            }
            return{
            ...state,
            publicationsFiltered: publicacionesFiltradas
        }
        
        default:
            return {
                ...state
            }
    }
};

export default fetchStudentsReducer;