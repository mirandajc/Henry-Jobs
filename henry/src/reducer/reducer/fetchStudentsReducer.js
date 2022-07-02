import {
    GET_PUBLICATIONS_BUSINESS,
    GET_PUBLICATIONS_BUSINESS_SUCCESS,
    GET_PUBLICATIONS_TECHNOLOGIES,
    GET_PUBLICATIONS_DEVTYPE,
    GET_PUBLICATIONS_WORK_MODALITY,
    GET_PUBLICATIONS_ENGLISH,
    GET_PUBLICATIONS_UBICATION,
    SHOW_FILTER,
    POST_ID_FOLLOW
} from "../../constants/constants";

const initialState = {
    AllPublications:[],
    userFollows: ['62bc9dff5c41483e313e899a','62bc9dff5c41483e313e899ab','62bc9dff5c41483e313e899ac','62bc9dff5c41483e313e899ad','62bc9dff5c41483e313e899ae'],
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
        case POST_ID_FOLLOW:
            let respon = state.userFollows
            if(state.userFollows.includes(action.payload)) {
                respon = state.userFollows.filter(e => e !== action.payload)
            }
            if(!state.userFollows.includes(action.payload)) {
                respon.push(action.payload)
            }
            console.log(respon)
            return {
                ...state,
                userFollows: respon
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
            if(state.filtrosos.devType !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.backFront === state.filtrosos.devType)
            }
            if(state.filtrosos.english !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.languages === state.filtrosos.english)
            }
            if(state.filtrosos.workModality !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.workModality === state.filtrosos.workModality)
            }
            if(state.filtrosos.ubication !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.country === state.filtrosos.ubication)
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