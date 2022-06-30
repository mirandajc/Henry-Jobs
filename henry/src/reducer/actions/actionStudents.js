import {
    GET_PUBLICATIONS_BUSINESS,
    GET_PUBLICATIONS_BUSINESS_SUCCESS,
    GET_PUBLICATIONS_TECHNOLOGIES,
    GET_PUBLICATIONS_DEVTYPE,
    GET_PUBLICATIONS_WORK_MODALITY,
    GET_PUBLICATIONS_ENGLISH,
    GET_PUBLICATIONS_UBICATION,
    SHOW_FILTER
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

