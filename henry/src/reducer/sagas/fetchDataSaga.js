import { take, call, all, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { mokedFilesPublicaciones } from '../../Components/Home/HomeForBusiness/MokedFilesPublicaciones';
import {
    getPokemonFailure,
    getPokemonLoading, 
    getPokemonSuccess, 
    getStudentsSecess, 
    getStudentsFailure, 
    getStudentsAz, 
    getStudentsZa ,
    getStudentsHighScore,
    getPublicFollowsSucess,
    getInfoUser,
    getInfoUserSucces,
    setRegisterTrueSucces
} from '../actions/action';

import { 
    API_POKEMON, 
    SEND_REQUEST, 
    GET_STUDENTS, 
    RUTAQUEGABIAUNNOMEPASA, 
    GET_STUDENTS_AZ, 
    GET_STUDENTS_ZA , 
    GET_STUDENTS_HIGH_SCORE,
    GET_PUBLIC_FOLLOWS,
    GET_INFO_USER,
    SET_REGISTER_TRUE
} from '../../constants/constants';

//import actions 

function* asyncFetchRequest(){
    try{
        yield put(getPokemonLoading(true))
        const response= yield call(()=>axios.get(API_POKEMON))
        yield put(getPokemonSuccess(response.data))
        console.log(response.data)

    }catch(error){
        yield (getPokemonFailure(error))
    }finally{
        yield put(getPokemonLoading(false))
    }
}

function* asyncGetStudents(){
    try {
        /* const response = yield call(()=>axios.get(RUTAQUEGABIAUNNOMEPASA)) */
        yield put(getStudentsSecess(mokedFilesPublicaciones)) // reemplazar cuando gabi me de la ruta por response.data
    } catch (error) {
        yield put(getStudentsFailure(error))
    }finally{

    }
}

function* asyncGetInfoUser(){
    try {
        /* const response = yield call(()=>axios.get(RUTAQUEGABIAUNNOMEPASA que trae info del user)) */
        // yield put(getInfoUserSucces(response.data)) // reemplazar por la props que lo trae
    } catch (error) {
        console.log(error)
    }
}

function* asyncSetRegisterTrue(){
    try {
        yield put(setRegisterTrueSucces(true))
    } catch (error) {
        console.log(error)
    }
}

function* asyncGetStudentsAz(){
    try {
        const response = yield call(()=>axios.get(RUTAQUEGABIAUNNOMEPASA))
        yield put(getStudentsAz(response))
    } catch (error) {
        console.log(error)
        
    }
}

function* asyncGetStudentsZa(){
    try {
        const response = yield call(()=>axios.get(RUTAQUEGABIAUNNOMEPASA))
        yield put(getStudentsZa(response))
    } catch (error) {
        console.log(error)
    }
}

function* asyncGetStudentsHighScore(){try {
    const response = yield call(()=>axios.get(RUTAQUEGABIAUNNOMEPASA))
        yield put(getStudentsHighScore(response))
} catch (error) {
    console.log(error)
    
}}

function* asyncGetPublicFollows(){
    try {
        /* const response = yield call(()=>axios.get(RUTAQUEGABIAUNNOMEPASA)) */ // ruta que te trae todas las publicaciones
        yield put(getPublicFollowsSucess(mokedFilesPublicaciones)) // aca reemplazar con response
    } catch (error) {
        console.log(error)
    }
}


export function* watchFetchDataSaga(){
    yield takeEvery(SEND_REQUEST, asyncFetchRequest)
    yield takeEvery(GET_STUDENTS, asyncGetStudents)
    yield takeEvery(GET_STUDENTS_AZ, asyncGetStudentsAz)
    yield takeEvery(GET_STUDENTS_ZA, asyncGetStudentsZa)
    yield takeEvery(GET_STUDENTS_HIGH_SCORE, asyncGetStudentsHighScore)
    yield takeEvery(GET_PUBLIC_FOLLOWS, asyncGetPublicFollows)
    yield takeEvery(GET_INFO_USER, asyncGetInfoUser)
    yield takeEvery(SET_REGISTER_TRUE, asyncSetRegisterTrue)
}