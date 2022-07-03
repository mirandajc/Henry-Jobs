import {
    GET_INFO_USER,
    GET_INFO_USER_SUCCESS,
    POST_USER,
    POST_USER_SUCCESS,
    SET_LOGOUT,
    PROFILE_ID,
    URL_PROFILE,
    PROFILE_SUCCESS,
    POST_REGISTER_MODAL,
    POST_REGISTER_MODAL_SUCCESS,
    SET_USERTYPE,
    SET_DEV_TYPE_AND_TECH,
    SET_LOCATION_ENG_STUDY,
    SET_RECRUITER_INFO,
    SET_BUSINESS_INFO,
    UPDATE_USER
 
} from "../../constants/constants";


export function profileSuccess(response){
    return{
        type: PROFILE_SUCCESS,
        payload: response
    }
}


export function profileID(id){
    
    return{
        type:PROFILE_ID,
        payload: id

    }
}



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

export function postRegisterModal(payload){
    return{
        type: POST_REGISTER_MODAL,
        payload
    };
};

export function postRegisterModalSuccess(payload){
    return{
        type: POST_REGISTER_MODAL_SUCCESS,
        payload
    };
};

export function setUserType(payload){
    return {
        type: SET_USERTYPE,
        payload
    };
};

export function setDevTypeAndTech(payload){
    return {
        type: SET_DEV_TYPE_AND_TECH,
        payload
    };
};

export function setLocationEnglishStudy(payload){
    return {
        type: SET_LOCATION_ENG_STUDY,
        payload
    };
};

export function setRecruiterInfo(payload){
    return {
        type: SET_RECRUITER_INFO,
        payload
    };
};

export function setBusinessInfo(payload){
    return {
        type: SET_BUSINESS_INFO,
        payload
    };
};

export function updateUser(payload, id){
    return {
        type: UPDATE_USER,
        payload: [payload, id]
    };
};