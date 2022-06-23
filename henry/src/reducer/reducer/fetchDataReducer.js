import {
    SEND_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_LOADING,
    GET_STUDENTS_SUCESS,
    GET_STUDENTS_FAILURE
} from "../../constants/constants";


const initialState = {
    user: 'business',
    pokemon: [],
    loading: false,
    error: {},
    allStudents: []
};

const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENTS_SUCESS:
            return{
                ...state,
                allStudents: action.payload
            }
        case GET_STUDENTS_FAILURE:
            return{
                ...state,
                allStudents: []
            }
        case REQUEST_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                loading:false,
                pokemon: action.payload,
                error:{}
            }
        case REQUEST_FAILURE:
        return{
            ...state,
            loading:false,
            pokemon:[],
            error: action.error
        }

        default:
        return {
                ...state
            }
    }
};

export default fetchDataReducer;