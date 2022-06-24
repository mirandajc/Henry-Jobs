import { take, call, all, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    getPokemonFailure,
    getPokemonLoading, 
    getPokemonSuccess, 
    getStudentsSecess, 
    getStudentsFailure, 
    getStudentsAz, 
    getStudentsZa ,
    getStudentsHighScore
} from '../actions/action';

import { 
    API_POKEMON, 
    SEND_REQUEST, 
    GET_STUDENTS, 
    RUTAQUEGABIAUNNOMEPASA, 
    GET_STUDENTS_AZ, 
    GET_STUDENTS_ZA , 
    GET_STUDENTS_HIGH_SCORE
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
        const response = yield call(()=>axios.get(RUTAQUEGABIAUNNOMEPASA))
        yield put(getStudentsSecess(response.data))
    } catch (error) {
        yield put(getStudentsFailure(error))
    }finally{

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


export function* watchFetchDataSaga(){
    yield takeEvery(SEND_REQUEST, asyncFetchRequest)
    yield takeEvery(GET_STUDENTS, asyncGetStudents)
    yield takeEvery(GET_STUDENTS_AZ, asyncGetStudentsAz)
    yield takeEvery(GET_STUDENTS_ZA, asyncGetStudentsZa)
    yield takeEvery(GET_STUDENTS_HIGH_SCORE, asyncGetStudentsHighScore)
}