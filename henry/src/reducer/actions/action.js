import {
    API_POKEMON,
    SEND_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_LOADING
} from "../../constants/constants";


export function getPoke() {

    return {
        type: SEND_REQUEST,

    }
}

export const getPokemonSuccess = (payload) => {
    console.log(payload)
    return {
        
            type: REQUEST_SUCCESS,
            payload
       
    }
}

export const getPokemonFailure = (error) => {
    return {
        type: REQUEST_FAILURE,
        payload: {},
        error: error
    }
}

export const getPokemonLoading = (payload) => {
    return {
        type: REQUEST_LOADING,
        payload
    }
}