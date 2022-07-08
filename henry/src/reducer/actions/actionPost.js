import {

    POST_USER,
    POST_USER_SUCCESS,
    SET_LOGOUT,
    PROFILE_ID,
    PROFILE_SUCCESS,
    POST_REGISTER_MODAL,
    POST_REGISTER_MODAL_SUCCESS,
    SET_USERTYPE,
    SET_DEV_TYPE_AND_TECH,
    SET_LOCATION_ENG_STUDY,
    SET_RECRUITER_INFO,
    SET_BUSINESS_INFO,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    BUGG_NAV,
    GOOGLE_LOGIN,
    SET_PREMIUM
 
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


export function updateUser(objeto){
    return{
        type: UPDATE_USER,
        payload: objeto
    }
}

export function updateUserSuccess(payload) {
    return{
        type: UPDATE_USER_SUCCESS,
        payload: payload
    }
}

export function buggNav(){
    return {
        type: BUGG_NAV
    };
};

export function loginWithGoogle(obj) {
    return {
        type: GOOGLE_LOGIN,
        payload: obj
    };
};


export function setPremium(payload){
    return {
        type: SET_PREMIUM,
        payload
    }
}
