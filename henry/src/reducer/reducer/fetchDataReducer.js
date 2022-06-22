import RootReducer from "./reducer";
import {
    SEND_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_LOADING
} from "../../constants/constants";

const initialState = {
    pokemon: [],
    loading: false,
    error: {}
};

const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        
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