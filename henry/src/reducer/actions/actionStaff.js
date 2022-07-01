import {
    GET_INFO_FOR_STAFF,
    GET_INFO_FOR_STAFF_SUCCESS,
    GET_STUDENT_DETAIL,
    STAFF_ORDER_STUDENTS
} from "../../constants/constants";

export function getInfoForStaff () {
    return {
        type: GET_INFO_FOR_STAFF
    };
};

export function getInfoForStaffSuccess (payload) {
    return {
        type: GET_INFO_FOR_STAFF_SUCCESS,
        payload
    };
};

export function getStudentDetail (payload) { 
    return {
        type: GET_STUDENT_DETAIL,
        payload
    };
};

export function ordenarAlumnos (payload) {
    return {
        type: STAFF_ORDER_STUDENTS,
        payload
    };
};