import {
    GET_INFO_USER,
    GET_INFO_USER_SUCCESS,
    POST_USER,
    POST_USER_SUCCESS,
    SET_LOGOUT,
 
} from "../../constants/constants";


export function getInfoUser (value) {
    return {
        type: GET_INFO_USER,
        payload: value
    }
};

export function getInfoUserSuccess (payload, value) {
    return {
        type: GET_INFO_USER_SUCCESS,
        payload:[payload, value]
    }
}


export function setLogout(){
    return{
        type: SET_LOGOUT,
        
    }
}



export function postUser(user){
    
    return{
        type: POST_USER,
        payload: user

    }
}

export function postUserSuccess(payload){
    return{
        type: POST_USER_SUCCESS,
        payload
    }
}
