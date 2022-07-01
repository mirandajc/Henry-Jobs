import {
    GET_INFO_USER,
    GET_INFO_USER_SUCCESS,
    POST_USER,
    POST_USER_SUCCESS,
    SET_LOGOUT
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


export function setLogout(value){
    return{
        type: SET_LOGOUT,
        payload: value
    }
}

export function postUser(user){
    console.log(user)
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
