import {
    GET_PUBLICATIONS_BUSINESS,
    GET_PUBLICATIONS_BUSINESS_SUCCESS,
    GET_PUBLICATIONS_TECHNOLOGIES,
    GET_PUBLICATIONS_DEVTYPE,
    GET_PUBLICATIONS_WORK_MODALITY,
    GET_PUBLICATIONS_ENGLISH,
    GET_PUBLICATIONS_UBICATION,
    SHOW_FILTER,
    POST_ID_FOLLOW,
    POST_ID_FOLLOW_SUCCESS,
    GET_STUDENTS_BY_EMAIL,
    GET_STUDENTS_BY_EMAIL_SUCCESS,
    POSTULARSE
} from "../../constants/constants";

export function getPublicationsBusiness(){
    return {
        type: GET_PUBLICATIONS_BUSINESS
    }
};

export function getPublicationsBusinessSuccess(payload){
    return {
        type: GET_PUBLICATIONS_BUSINESS_SUCCESS,
        payload
    }
};

export function getPublicationsTechnologies(value){
    return {
        type: GET_PUBLICATIONS_TECHNOLOGIES,
        payload: value
    }
};

export function getPublicationsDevType(value){
    return {
        type: GET_PUBLICATIONS_DEVTYPE,
        payload: value
    }
};

export function getWorkModality(value){
    return {
        type: GET_PUBLICATIONS_WORK_MODALITY,
        payload: value
    }
};

export function getPublicationEnglish(value){
    return {
        type: GET_PUBLICATIONS_ENGLISH,
        payload: value
    }
};

export function getPublicationUbication(value){
    return {
        type: GET_PUBLICATIONS_UBICATION,
        payload: value
    }
};

export function ShowFilter(){
    return {
        type: SHOW_FILTER
    }
};

export function postIdFollow(payload, obj){
    return {
        type: POST_ID_FOLLOW,
        payload,
        obj
    }
}

export function postIdFollowSuccess(payload){
    return {
        type: POST_ID_FOLLOW_SUCCESS,
        payload,
    }
}

export function getStudentsByEmail(email){
    return {
        type: GET_STUDENTS_BY_EMAIL,
        email
    };
};

export function getStudentsByEmailSuccess(payload){
    return {
        type: GET_STUDENTS_BY_EMAIL_SUCCESS,
        payload,
    };
};

export function postularse (obj, id){
    return {
        type: POSTULARSE,
        payload: [obj, id]
    };
};


