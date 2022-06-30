import {
    API_POKEMON,
    SEND_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_LOADING,
    GET_STUDENTS,
    GET_STUDENTS_SUCESS,
    GET_STUDENTS_FAILURE,
    GET_STUDENTS_AZ,
    GET_STUDENTS_ZA,
    GET_STUDENTS_HIGH_SCORE,
    GET_PUBLIC_FOLLOWS,
    GET_PUBLIC_FOLLOWS_SUCESS,
    GET_INFO_USER,
    SET_REGISTER_TRUE,
    GET_INFO_USER_SUCCES,
    SET_REGISTER_TRUE_SUCCES
} from "../../constants/constants";

// export function getInfoUser(){
//     return {
//         type: GET_INFO_USER,
//     }
// }

// export function getInfoUserSucces(payload){
//     return {
//         type: GET_INFO_USER_SUCCES,
//         register: payload.register,
//         premium: payload.premium
//     }
// }

// export function setRegisterTrue(){
//     return {
//         type : SET_REGISTER_TRUE
//     }
// }

// export function setRegisterTrueSucces(payload){
//     return {
//         type: SET_REGISTER_TRUE_SUCCES,
//         payload
//     }
// }

// export function getStudents(){
//     return {
//         type: GET_STUDENTS
//     }
// }

// export function getStudentsAz(){
//     return {
//         type: GET_STUDENTS_AZ
//     }
// }

// export function getStudentsZa(){
//     return {
//         type: GET_STUDENTS_ZA
//     }
// }

// export function getStudentsHighScore(){
//     return {
//         type: GET_STUDENTS_HIGH_SCORE
//     }
// }

// export function getPublicFollows(){
//     return {
//         type: GET_PUBLIC_FOLLOWS
//     }
// }

// export function getPublicFollowsSucess(payload){
//     return {
//         type: GET_PUBLIC_FOLLOWS_SUCESS,
//         payload
//     }
// }

// export function getStudentsSecess(payload){
//     return {
//         type: GET_STUDENTS_SUCESS,
//         payload
//     }
// }

// export function getStudentsFailure(){
//     return {
//         type: GET_STUDENTS_FAILURE,
//         payload: []
//     }
// }


// // abajo de esto son pruebas

// export function getPoke() {

//     return {
//         type: SEND_REQUEST,

//     }
// }

// export const getPokemonSuccess = (payload) => {
//     console.log(payload)
//     return {
        
//             type: REQUEST_SUCCESS,
//             payload
       
//     }
// }

// export const getPokemonFailure = (error) => {
//     return {
//         type: REQUEST_FAILURE,
//         payload: {},
//         error: error
//     }
// }

// export const getPokemonLoading = (payload) => {
//     return {
//         type: REQUEST_LOADING,
//         payload
//     }
// }