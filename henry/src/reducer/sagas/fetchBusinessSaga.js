import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { mokedFilesPostBusiness, mokedFilesStudens, Alumnos } from '../../Components/Home/HomeForBusiness/MokedFilesPublicaciones';
import {
    getPublicationStudentsSuccess,
    getAllStudentsSuccess, 
    postIdFollowBusssSuccess
} from '../actions/actionBusiness';

import {
    GET_ALL_STUDENTS,
    GET_PUBLICATION_STUDENTS, URL_PEDIDO,
    POST_ID_FOLLOW_BUSS
} from '../../constants/constants';


function* asyncGetPublicationStudents () {
    try {
        const response = yield call(()=> axios.get(URL_PEDIDO+'/post'))
        yield put(getPublicationStudentsSuccess(response.data)) // reemplazar por response.data
    } catch (error) {
        console.log(error);
    }
};

function* asyncGetAllStudents () {
    try { 
        const response = yield call(()=> axios.get(URL_PEDIDO+'/user')) // REEMPLAZAR POR LA RUTA QUE TRAE ESTUDIANTES
        yield put(getAllStudentsSuccess(response.data)) // reemplazar por response.data  
    } catch (error) {
        console.log(error);
    }
};

function* asyncPostIdFollowBuss (obj) {
    try {
        const response = yield call(()=> axios.put(/* URL_PEDIDO */'http://localhost:3002/api'+'/follow/'+obj.payload, obj.obj)) // REEMPLAZAR POR LA RUTA QUE TRAE ESTUDIANTES
        yield put(postIdFollowBusssSuccess(response.data)) // reemplazar por response.data      
    } catch (error) {
        console.log(error)
    }
}



export function* watchFetchBusinessSaga(){
    yield takeEvery(GET_PUBLICATION_STUDENTS, asyncGetPublicationStudents)
    yield takeLatest(GET_ALL_STUDENTS, asyncGetAllStudents)
    yield takeEvery(POST_ID_FOLLOW_BUSS ,asyncPostIdFollowBuss)
}