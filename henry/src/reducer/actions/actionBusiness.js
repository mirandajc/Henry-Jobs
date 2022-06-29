import {
    GET_PUBLICATION_STUDENTS,
    GET_PUBLICATION_STUDENTS_SUCCESS,
    GET_PUBLICAT_TECHNOLOGIES,
    GET_PUBLICAT_ENGLISH,
    GET_PUBLICAT_UBICATION,
    GET_PUBLICAT_DEVTYPE,
    GET_ALL_STUDENTS,
    GET_ALL_STUDENTS_SUCCESS
} from "../../constants/constants";

export function getPublicationStudents () {
    return {
        type: GET_PUBLICATION_STUDENTS
    }
};

export function getPublicationStudentsSuccess (payload) {
    return {
        type: GET_PUBLICATION_STUDENTS_SUCCESS,
        payload
    }
};

export function getPublicatTechnologies (value){
    return {
        type: GET_PUBLICAT_TECHNOLOGIES,
        payload: value
    }
};

export function getPublicatEnglish (value){
    return {
        type: GET_PUBLICAT_ENGLISH,
        payload: value
    }
};

export function getPublicatUbication (value) {
    return {
        type: GET_PUBLICAT_UBICATION,
        payload: value
    }
};

export function getPublicatDevType (value) {
    return {
        type: GET_PUBLICAT_DEVTYPE,
        payload: value
    }
};

export function getAllStudents () {
    return {
        type: GET_ALL_STUDENTS,
    }
};

export function getAllStudentsSuccess (payload) {
    return {
        type: GET_ALL_STUDENTS_SUCCESS,
        payload
    }
}


