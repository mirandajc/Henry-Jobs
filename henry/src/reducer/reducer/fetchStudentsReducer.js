import {
    GET_PUBLICATIONS_BUSINESS,
    GET_PUBLICATIONS_BUSINESS_SUCCESS,
    GET_PUBLICATIONS_TECHNOLOGIES,
    GET_PUBLICATIONS_DEVTYPE,
    GET_PUBLICATIONS_WORK_MODALITY,
    GET_PUBLICATIONS_ENGLISH,
    GET_PUBLICATIONS_UBICATION
} from "../../constants/constants";

const initialState = {
    businessPublicationsStudents:[],
    userFollows: [1,4,2,5,6,7,3,12,11,10,9],
    businessPublication:[],
    businessShow:[],
    filtered:[]
};

const fetchStudentsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_PUBLICATIONS_BUSINESS_SUCCESS:
            let fol1 = action.payload.filter(e => state.userFollows.includes(e.id))
            let response = fol1.reverse();
            let responseBusiness = response.filter(e => e.userTypes === 5);
            return {
                ...state,  // cambiar por action.payload
                businessPublicationsStudents: response,
                businessShow: responseBusiness,
                businessPublications: responseBusiness,
                filtered: fol1
            }
        
        case GET_PUBLICATIONS_TECHNOLOGIES:
            let filtradoPorTech = state.filtered.filter(e => e.technologies.includes(action.payload))
            return {
                ...state,
                filtered: filtradoPorTech
            }

        case GET_PUBLICATIONS_DEVTYPE:
            let filtroDev = state.filtered.filter(e => e.backFront === action.payload)
        return{
            ...state,
            filtered: filtroDev
        }

        case GET_PUBLICATIONS_ENGLISH:
            let filtroEng = state.filtered.filter(e => e.english === action.payload)
        return{
            ...state,
            filtered: filtroEng
        }

        case GET_PUBLICATIONS_WORK_MODALITY:
            let filtroWork = state.filtered.filter(e => e.workModality === action.payload)
        return{
            ...state,
            filtered: filtroWork
        }

        case GET_PUBLICATIONS_UBICATION:
            let filtroUb = state.filtered.filter(e => e.ubication === action.payload)
        return{
            ...state,
            filtered: filtroUb
        }

        default:
        return {
                ...state
            }
    }
};

export default fetchStudentsReducer;